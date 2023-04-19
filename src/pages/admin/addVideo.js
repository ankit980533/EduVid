import { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [title, settitle] = useState('');
  const [topicname, settopicName] = useState('');
  const [branchname, setbranchName] = useState('');
  const [path, setPath] = useState('');
  const[videoLink,setvideoLink]=useState('');
  const[thumbnailLink,setthumbnailLink]=useState('');

  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();

    try {
    console.log("abcd",videoLink);
      const response = await axios.post('../api/insertVideo', { videoLink, thumbnailLink , title,topicname  });

     // console.log(response.data);
      setvideoLink('');
      settopicName('');
      settitle('');
    
    } catch (error) {
      console.error("abcdef",error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form onSubmit={handleSubmit}>
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="videoLink">Video Link: </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="videoLink" value={videoLink} onChange={(event) => setvideoLink(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnailLink">Thumbnail Link:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="thumbnailLink" value={thumbnailLink} onChange={(event) => setthumbnailLink(event.target.value)} />
      </div>
     <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="title" value={title} onChange={(event) => settitle(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicname">Topic:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="topicname" value={topicname} onChange={(event) => settopicName(event.target.value)} />
      </div>
     
      
      <div className="flex items-center justify-between">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}
