const ProjectDetails = ({ projectData }) => {
  const project = projectData;

  if (!project) {
    return <div className="text-white">No project data available</div>;
  }

  return (
    <div className="">
      <div className='overflow-hidden pt-4 px-4 md:px-10 lg:pr-[200px] lg:pl-[200px]'>
        <div className="rounded-t-[30px] overflow-hidden border border-gray-700 shadow-lg">
          <img className='w-full' src={project.innerimage} alt={project.title} />
        </div>
        <div className='flex flex-col md:flex-row md:justify-between pt-8 pb-5 gap-4'>
          <h2 className='font-bold text-white text-2xl md:text-3xl'>{project.title}</h2>
          <div className='flex gap-3'>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 hover:text-cyan-400 h-10 rounded-md px-4 text-gray-300 border border-gray-700"
                onClick={() => window.open(project.previewLink, '_blank')}
              >
                <svg
                  className="lucide lucide-rocket text-cyan-500"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
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
                className="cursor-pointer bg-gray-800 relative inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-700 hover:text-indigo-400 h-10 rounded-md px-4 text-gray-300 border border-gray-700"
                onClick={() => window.open(project.sourceCodeLink, '_blank')}
              >
                <svg
                  className="lucide lucide-github text-indigo-400"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Source Code
              </button>
            </div>
          </div>
        </div>

        <div className='flex pb-6'>
          <div className='flex gap-3 items-center'>
            <h3 className='font-semibold text-lg text-white'>TECHNOLOGIES:</h3>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <div key={index} className='rounded-full px-3 py-1 bg-gray-700 text-gray-300 border border-gray-600'>
                  <span className='text-sm'>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col mb-10'>
          <h3 className='font-bold text-xl text-white mb-4'>Project Description</h3>
          <div className='space-y-3 text-gray-300'>
            {project.description.map((desc, index) => (
              <p key={index} className='leading-relaxed'>{desc}</p>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center pt-16 pb-20'>
          <h1 className='font-semibold text-2xl text-white'>Feedback Form</h1>
          <form className="bg-gray-800 w-full md:w-[80vw] lg:w-[50vw] p-6 md:p-8 rounded-lg shadow-lg border border-gray-700">
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                placeholder="Enter Full Name"
                type="text"
                id="name"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                placeholder="Enter Subject"
                type="text"
                id="subject"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-300 text-sm font-medium mb-2">
                Suggestions/Feedback
              </label>
              <textarea
                rows="5"
                placeholder="Enter your feedback"
                id="content"
                className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;