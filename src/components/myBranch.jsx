
import Link from 'next/link';

function MyBranch({ branches }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-6">Branches</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {branches.map((branch) => (
          <li className="bg-white rounded-lg shadow divide-y divide-gray-200">
            <Link href={`branch.path`}>
              <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
             
              <div className="px-4 py-4 sm:px-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">{branch.name}</h2>
                  
                </div>
             
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyBranch;
