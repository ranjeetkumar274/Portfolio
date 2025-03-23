import imgg from '../assets/ashuu6.jpg';
import Profiles from './Profiles';

const Home = () => {

  const handleHireMe = () => {
    const email = 'ranjeet639760@gmail.com'; 
    const subject = 'Job Opportunity Discussion';
    const body = `Hi, I'm interested in discussing a potential job opportunity with you.`;
  
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    
    window.open(gmailURL, '_blank');
  };



  return (
    <div className='pt-24'>
        <Profiles />
        <div className='p-5'>
            <h1 className="text-4xl text-center font-bold pb-3">Hello, I'm Ranjeet Kumar</h1>
            <p className="text-center text-lg">Welcome to my portfolio</p>
        </div>
        <div className='flex justify-between items-center pl-[190px] pr-[190px]'>
        <div className='w-[600px]'>
            <h2 className="text-2xl font-bold pb-5">About Me</h2>
            <p className="text-lg pb-5">I am a passionate Web Developer with expertise in building modern web applications using React and Tailwind CSS. Currently pursuing my MCA from Madan Mohan Malaviya University of Technology, I combine my academic knowledge with practical development skills.</p>
            <div className='flex gap-5'>
 
<button
  className="cursor-pointer group/download relative flex gap-1 px-8 py-4 bg-[#5c5fe9] text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300"
  onClick={() => window.open('https://drive.usercontent.google.com/download?id=1_tp72sy7PahLSPRkZtD4cIbVivxGzLK0&export=download&authuser=0&confirm=t&uuid=3a8ce286-3ba2-46e6-9297-8e885bf8ee32&at=AIrpjvOvS8SM-okIKxeQ-ZaD-1ON:1739691636926')}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
  >
    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      id="SVGRepo_tracerCarrier"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Download">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="#f1f1f1"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          id="Vector"
        ></path>
      </g>
    </g>
  </svg>
  Resume
  <div
    className="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5fe9] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4"
  >
    180KB
  </div>
</button>


<button
  className="flex items-center bg-blue-500 gap-1 px-4 py-2 cursor-pointer text-white font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
  onClick={handleHireMe}
>
  Hire Me
  <svg
    className="w-5 h-5"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
</button>


            </div>
        </div>
        <div className=''>
            <img className='w-[400px] h-[400px] rounded-full' src={imgg} alt="" />
        </div>
        </div>   
    </div>
  );
};

export default Home;