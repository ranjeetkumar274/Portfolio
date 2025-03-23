import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const project = location.state?.project;

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="mb-6 pt-28 px-4 md:px-10 lg:pl-[200px]">
        <Link
          to="/"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-800 py-2 px-4 rounded-lg border border-gray-700 inline-block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>
      
      {project ? (
        <ProjectDetails projectData={project} />
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist or the data wasn't properly transferred.</p>
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage; 