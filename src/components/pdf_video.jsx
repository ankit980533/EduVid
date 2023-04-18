
import Link from "next/link";
function Pdf_video(props){
  //console.log("test run",props);
    return (
        <>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
 
        <li className="bg-blue-500  rounded-lg shadow divide-y divide-gray-200 p-4 flex items-center hover:bg-blue-700 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out h-60 w-70 flex items-center justify-center">
    
   

        <Link href={`/topicss/${props.name}`} >


                <div className="px-6 py-7 sm:px-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900 p-4 flex items-center justify-center">PDF Notes</h2>
                  
                </div>
                
              
</Link>
 </li>
 <li className="bg-blue-500  rounded-lg shadow divide-y divide-gray-200 p-4 flex items-center hover:bg-blue-700 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out h-60 w-70">
    
   
  <Link href={`/topicss/${props.name}`} >


<div className="px-6 py-7 sm:px-6">
  <h2 className="text-lg font-medium leading-6 text-gray-900 p-4 flex items-center justify-center">Videos</h2>
  
</div>


</Link>
</li>
</ul>
</>
    )
}
export default Pdf_video;