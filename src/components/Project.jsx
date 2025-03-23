import { useNavigate } from 'react-router-dom';
import project1iiimg from "../assets/project1img.png";
import chatappimg from "../assets/chatapp.png";
import vidoraimg from "../assets/vidoraimg.png";
import foodimg from "../assets/foodsood.png";
import chatimg from "../assets/chatimg.png";
import foodsoodimg from "../assets/foodsoodfron.png";

const Project = () => {
    const navigate = useNavigate();

    // Project data array
    const projects = [
        {
            id: 1,
            title: "Vidora- Video Call Platform",
            shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
            frontimage: vidoraimg, // Corrected
            innerimage: project1iiimg, // Corrected
            sourceCodeLink: "https://github.com/yourusername/vidora",
            previewLink: "https://vidora-demo.vercel.app",
            technologies: ["React", "Tailwind CSS", "JavaScript"]
        },
        {
          id: 2,
          title: "Convo- Chat Application",
          shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
          description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
          frontimage: chatappimg, // Corrected
          innerimage: project1iiimg, // Corrected
          sourceCodeLink: "https://github.com/yourusername/convo",
          previewLink: "https://convo-demo.vercel.app",
          technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
      },
      {
        id: 3,
        title: "FoodSood- Food Menu Application",
        shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
        frontimage: foodsoodimg,
        innerimage: foodimg,
        sourceCodeLink: "https://github.com/yourusername/foodsood",
        previewLink: "https://foodsood-demo.vercel.app",
        technologies: ["React", "Firebase", "Tailwind CSS"]
    },
      
        // Add more project objects here
    ];

    const handleReadMore = (project) => {
        // Navigate to project details page with project data
        navigate(`/project/${project.id}`, { state: { project } });
        
        // Scroll to top
        window.scrollTo(0, 0);
    };

    return (
        <div className="pt-28">
            <h1 className="text-4xl text-center font-bold pb-3 text-white">Projects</h1>
            <div className="flex justify-center flex-wrap gap-10 px-4 md:px-10 lg:px-20 pt-10">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative flex w-full md:w-80 flex-col rounded-xl bg-gray-800 text-gray-300 shadow-md mb-12 border border-gray-700 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl shadow-lg shadow-gray-900/40 bg-gradient-to-r from-gray-900 to-gray-800">
                            <img src={project.frontimage} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                                {project.title}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-gray-400 antialiased min-h-[60px]">
                                {project.shortdescription}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full border border-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 pt-0 flex justify-between">
                            <button 
                                onClick={() => handleReadMore(project)}
                                className="select-none rounded-lg bg-indigo-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 hover:bg-indigo-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Read More
                            </button>
                            <div className="flex gap-2">
                                <a 
                                    href={project.previewLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="select-none rounded-lg bg-cyan-600 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-cyan-700 hover:shadow-lg"
                                >
                                    Preview
                                </a>
                                <a 
                                    href={project.sourceCodeLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="select-none rounded-lg bg-gray-700 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-gray-600 hover:shadow-lg"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;