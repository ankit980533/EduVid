import { MongoClient } from 'mongodb';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import BranchCard from '@/components/branchCard';
import SubjectCard from '@/components/subjectCard';
export async function getServerSideProps() {
  const popular = true; 
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('test');
  const collection = db.collection('subjects');
  const subjects = await collection.find({ popular }).toArray(); // filter the posts by category

  return {
    props: {
      subjects:JSON.parse(JSON.stringify(subjects)),
      
    },
  };
}
function createSubjectCard(subject) {
    return (
      <li className="bg-blue-500  rounded-lg shadow divide-y divide-gray-200 p-4 flex items-center hover:bg-blue-700 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out h-60 w-70 justify-center items-center">
    <SubjectCard id={subject._id} name={subject.subjectname}  path={subject.path}/>
    </li>
    );
  }
function Popular({ subjects}) {
  return (
    <>
     <div className="flex flex-col min-h-screen">
        <Navbar/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
      <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 mb-6 p-4">Popular Courses</h1>
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
 
  {subjects.map(createSubjectCard)}
  </ul>
  </div>
        <Footer/>
        </div>
        </>
  );
}

export default Popular;
