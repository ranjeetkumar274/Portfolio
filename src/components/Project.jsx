
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
            title: "Vidora- Video Call Platform",
            shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
            description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
            frontimage: vidoraimg, // Corrected
            innerimage: project1iiimg, // Corrected
            githubLink: "your-github-link",
            liveDemo: "your-demo-link",
            technologies: ["React", "Tailwind CSS", "JavaScript"]
        },
        {
          title: "Convo- Chat Application",
          shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
          description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
          frontimage: chatappimg, // Corrected
          innerimage: project1iiimg, // Corrected
          githubLink: "your-github-link",
          liveDemo: "your-demo-link",
          technologies: ["React", "Tailwind CSS", "JavaScript"]
      },
      {
        title: "FoodSood- Food Menu Application",
        shortdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
        description: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."],
        frontimage: foodsoodimg,
        innerimage: foodimg, // Add your image URL
         // Add your image URL
        githubLink: "your-github-link",
        liveDemo: "your-demo-link",
        technologies: ["React", "Tailwind CSS", "JavaScript"]
    },
      

        // Add more project objects here
    ];

    const handleReadMore = (project) => {
        navigate('/project-details', { state: { project } });
    };

    return (
        <div className="pt-20">
            <h1 className="text-4xl text-center font-bold pb-3">Projects</h1>
            <div className="flex justify-between flex-wrap pr-[250px] pl-[250px] pt-10">
                {projects.map((project, index) => (
                    <div key={index} className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-20">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-[#07182E]">
                            <img src={project.frontimage} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {project.title}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {project.shortdescription}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button 
                                onClick={() => handleReadMore(project)}
                                className="select-none rounded-lg bg-[#07182E] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;