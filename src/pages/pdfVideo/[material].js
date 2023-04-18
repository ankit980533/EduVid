import React from "react";
// import { MongoClient } from 'mongodb';
// import VideoPlayer from "@/components/videoplayer";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Pdf_video from "@/components/pdf_video";


export async function getServerSideProps(context) {
  const {material} = context.params; 
  return {
    props : {
        material,
    },
  };
}
// export async function getServerSideProps(context) {
// //  console.log("tets tets " ,context);
//    const {topicname} = context.query; 
//   console.log("test again 50",topicname);
//     const client = await MongoClient.connect(process.env.MONGODB_URI);
  
//     //const videos = await collection.find({topicname}).toArray(); // filter the posts by category
  

//     return {
//       props: {
//           Topicname:JSON.parse(JSON.stringify(topicname)),
        
//       },
//     };
//   }

//   function createVideoCard(video) {
//     return (
     
//     <VideoPlayer key={video._id}  title={video.topicname} url={video.videoLink} />
   
//     );
//   }
const Cpp = ({material}) => {
 
 //  console.log(topicname);
    return (
        <>
        <div className="flex flex-col min-h-screen ">
        <Navbar/>
       
      
         <div className="flex-1 m:grid sm:grid-cols-2 min-[875px]:grid-cols-3 lg:grid-cols-4 sm:px-2 sm:ml-16 ml-4 flex flex-wrap justify-center items-center ">

                 <Pdf_video name={material}/>
    
      </div>
      
    <Footer/>
    </div>
      </>
    );
  }

  export default Cpp;
