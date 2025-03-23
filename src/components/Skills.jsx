import reactimg from '../assets/reactimgg.png';
import javaimg from '../assets/java.png';
import htmlimg from '../assets/html.png';
import cssimg from '../assets/css.png';
import jsimg from '../assets/js.png';
import windimmg from '../assets/wind.png';
import vscodeimg from '../assets/vscode.png';
import gitimg from '../assets/github.png';

const Skills = () => { 
  return (
    <div className="p-10"> 
        <h1 className="text-4xl text-center font-bold pb-3">Skills</h1>
      <div className="flex flex-wrap items p-10 justify-center gap-10 pl-[190px] pr-[190px]">
<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={reactimg} alt="" />
      React</span
  >
</button>


<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={javaimg} alt="" />
      Java</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={htmlimg} alt="" />
      HTML</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={cssimg} alt="" />
      CSS</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={jsimg} alt="" />
      Javascript</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={windimmg} alt="" />
      Tailwind CSS</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={vscodeimg} alt="" />
      VS Code</span
  >
</button>

<button
  className="relative flex items-center px-7 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group  "
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >

  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="flex relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      <img className='h-8 w-8 mr-2' src={gitimg} alt="" />
      GitHub</span
  >
</button>

</div>
    </div>
  );
};  


export default Skills;