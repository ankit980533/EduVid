import { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [topicname, settopicName] = useState('');
  const [subjectname, setsubjectName] = useState('');
  const [branchname, setbranchName] = useState('');
  const [path, setPath] = useState('');


  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();

    try {
      const response = await axios.post('../api/insertTopic', { topicname,subjectname,branchname, path });
      console.log("abcd");
      console.log(response.data);
      settopicName('');
      setsubjectName('');
      setbranchName('');
      setPath('');
    } catch (error) {
      console.error("abcdef",error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form onSubmit={handleSubmit}>
     <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicname">Topic:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="topicname" value={topicname} onChange={(event) => settopicName(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectname">Subject:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="subjectname" value={subjectname} onChange={(event) => setsubjectName(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="branchname">Branch:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" id="branchname" value={branchname} onChange={(event) => setbranchName(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="path">Path:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="path" value={path} onChange={(event) => setPath(event.target.value)} />
      </div>
      <div className="flex items-center justify-between">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}
