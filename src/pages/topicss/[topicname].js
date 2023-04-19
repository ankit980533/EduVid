import React from "react";
import { MongoClient } from 'mongodb';
import VideoPlayer from "@/components/videoplayer";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Other from "@/components/other";

export async function getServerSideProps(context) {
 
   const {topicname} = context.params; 
  //console.log("test again 2.0",topicname);
  const subjectname = topicname;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('test');
    const collection = db.collection('vids');
    const videos = await collection.find({subjectname}).toArray(); // filter the posts by category
  

    return {
      props: {
          videos:JSON.parse(JSON.stringify(videos)),
          topicname,
        
      },
    };
  }
  
  function createVideoCard(video,index) {
    if (Object.keys(video).length === 0) {
      return(
<>
<div className="flex flex-col min-h-screen">
<Navbar/>
  <Other/>
    <Footer/>
</div>
</>
      );
    }
   
    
    return (
     
    <VideoPlayer key={video._id} sequence={index} title={video.topicname} url={video.videoLink} />
   
    );
  }
export default function Cpp({videos,topicname}) {
   
    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
       
      
        <div className="m:grid sm:grid-cols-2 min-[875px]:grid-cols-3 lg:grid-cols-4 sm:px-2 sm:ml-16 ml-4 flex flex-wrap items-center justify-center m-2 flex-1">
      {videos.map(createVideoCard)}

      <p>done done done{topicname}</p>
      </div>
      <Footer/>
      </div>
      </>
    );
  }
