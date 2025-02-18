
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) {
    return <div>No project data available</div>;
  }

  return (
    <div className="">
      <Header />
      <div className='overflow-hidden pt-10 pr-[200px] pl-[200px]'>
        <img className='rounded-t-[70px]' src={project.innerimage} alt={project.title} />
        <div className='flex justify-between pt-5 pb-5'>
          <h2 className='font-bold text-slate-700 text-2xl'>{project.title}</h2>
          <div className='flex gap-5'>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer bg-gray-300 relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 rounded-md px-3"
                onClick={() => window.open(project.previewLink, '_blank')}
              >
                <svg
                  className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#06B6D4"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                  ></path>
                  <path
                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                  ></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
                Preview
              </button>
              <button
                className="cursor-pointer bg-gray-300 relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 px-3"
                onClick={() => window.open(project.sourceCodeLink, '_blank')}
              >
                <svg
                  className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#60A5FA"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                  ></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                Source Code
              </button>
            </div>
          </div>
        </div>

        <div className='flex pb-4'>
          <ul className='flex gap-3'>
            <h3 className='font-semibold text-l'>TECHNOLOGIES : </h3>
            {project.technologies.map((desc, index) => (
              <div key={index} className='border-black-500 border-2 rounded-lg pr-2 pl-2 bg-gray-200'>
                <h5 className='text-slate-600'>{desc}</h5>
              </div>
            ))}
          </ul>
        </div>

        <div className='flex flex-col'>
          <ul className='flex flex-col gap-3'>
            <h3 className='font-bold text-lg'>Project Description</h3>
            {project.description.map((desc, index) => (
              <li key={index} className='text-slate-600'>{desc}</li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-3 items-center pt-20'>
          <h1 className='font-semibold text-lg text-slate-700'>Feedback Form</h1>
          <form className="bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                placeholder="Enter Full Name"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                placeholder="Enter Subject"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                Suggestions/Feedback
              </label>
              <textarea
                rows="5"
                placeholder="Enter your content"
                id="content"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;