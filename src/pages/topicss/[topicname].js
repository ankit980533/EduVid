import React from "react";
import { MongoClient } from 'mongodb';
import VideoPlayer from "@/components/videoplayer";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
export async function getServerSideProps(context) {
 
   const {topicname} = context.params; 
  console.log("test again 2.0",topicname);
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('test');
    const collection = db.collection('vids');
    const videos = await collection.find({topicname}).toArray(); // filter the posts by category
  

    return {
      props: {
          videos:JSON.parse(JSON.stringify(videos)),
        
      },
    };
  }
  function createVideoCard(video) {
    return (
     
    <VideoPlayer key={video._id}  title={video.topicname} url={video.videoLink} />
   
    );
  }
export default function Cpp({videos}) {
 
    return (
        <>
        <Navbar/>
       
      
        <div className="m:grid sm:grid-cols-2 min-[875px]:grid-cols-3 lg:grid-cols-4 sm:px-2 sm:ml-16 ml-4 flex flex-wrap justify-center">
      {videos.map(createVideoCard)}

      <p>done done done</p>
      </div>
      <Footer/>
      </>
    );
  }
