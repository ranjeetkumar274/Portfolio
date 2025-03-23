import img from '../assets/OIP.jpg';
import { Link } from 'react-scroll';

const Header = () => {

  
  return (
    <div>
      <div className="position-relative">
      <header className='flex shadow-md py-4 px-4 sm:px-10 bg-gray-700 font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 left-0 right-0 z-50 border-b border-gray-800'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
      <div className='h-12 w-12 rounded-full border-2 border-indigo-500/30'><img className='rounded-full' src={img} alt="" /></div>

        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-gray-800 w-9 h-9 flex items-center justify-center border border-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-white" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-gray-900 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src={img} alt="logo" className='w-36' />
              </a>
            </li>
            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      About Me
                      </Link>
            </li>


            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      Education
                      </Link>
            </li>


            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      Skills
                      </Link>
            </li>

            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      Experience
                      </Link>
            </li>


            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                    Projects
                      </Link>
            </li>


            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      Contact Me
                      </Link>
            </li>


            <li className='max-lg:border-b border-gray-700 max-lg:py-3 px-3'>
            <Link
                      to="links"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className='hover:text-indigo-400 text-gray-300 block font-semibold text-[15px] cursor-pointer transition-colors duration-300'
                      activeClass="text-indigo-400"
                    >
                      Links
                      </Link>
            </li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-4'>
          <button id="toggleOpen" className='lg:hidden'>
            <svg className="w-7 h-7" fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    </div>

    </div>
    
  );
};

export default Header;