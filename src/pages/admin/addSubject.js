import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [subjectname, setsubjectName] = useState('');
  const [branchname, setbranchName] = useState('');
  const [path, setPath] = useState('');
 const [isChecked, setisChecked] = useState(false);
 
 const handleOnChange = () => {
  setisChecked(!isChecked);
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("test",isChecked);
      const response = await axios.post('../api/insertSubject', { subjectname,branchname, path,isChecked });
      console.log("test2",isChecked);
      console.log(response.data);
      setsubjectName('');
      setbranchName('');
      setPath('');
      setisChecked(false);
      
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectname">Subject:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="subjectname" value={subjectname} onChange={(event) => setsubjectName(event.target.value)} />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branchname">Branch:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="branchname" value={branchname} onChange={(event) => setbranchName(event.target.value)} />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="path">Path:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="path" value={path} onChange={(event) => setPath(event.target.value)} />
      </div>
      <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="Subject_popular"
              >
                Is subject Popular?
              </label>
            </div>
            <input
              type="checkbox"
              id="isPopular"
              name="isPopular"
              checked={isChecked}
              onChange={handleOnChange}
            />
          </div>
      <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}
