import uniimg from '../assets/OIP.jpg';
import uniiimg from '../assets/uni-img.png';

const Education = () => {
    return (
        <div className='pt-2'>
            <h1 className="text-4xl text-center font-bold pb-10 text-white">Education</h1>
            <div className="flex justify-center pb-10">
            <div
              className="card w-[900px] h-auto bg-gray-800 rounded-2xl overflow-hidden relative transition-all duration-300 border border-gray-700 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="card-content p-6 relative z-10">
                <div className="flex items-center mb-4 gap-3">
                  <div>
                    <img className='w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight border border-indigo-500/30' src={uniimg} alt="" />
                  </div>
                  <div>
                    <h2 title="University Name" className="text-lg font-bold text-white/90 truncate text-wrap">
                      Madan Mohan Malaviya University of Technology, Gorakhpur
                    </h2>
                    <h4 title="Degree Name" className="text-l text-white/90 truncate text-wrap">
                      MCA - Masters of Computer Application
                    </h4>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-indigo-900/40 text-indigo-300"
                    >
                      2023 - Present
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-indigo-300 mb-2">Academic Subjects</h3>
                  <div className="flex flex-wrap -mx-1">
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Java Programming - OOPs
                    </div>
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      DBMS
                    </div>
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Operating System
                    </div>
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Computer Network
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="flex justify-center">
            <div
              className="card w-[900px] h-auto bg-gray-800 rounded-2xl overflow-hidden relative transition-all duration-300 border border-gray-700 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="card-content p-6 relative z-10">
                <div className="flex items-center mb-4 gap-3">
                <div>
                    <img className='w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight border border-indigo-500/30' src={uniiimg} alt="" />
                  </div>
                  <div>
                    <h2 title="University Name" className="text-lg font-bold text-white/90 truncate text-wrap">
                      Mahatma Jyotiba Phule Rohilkhand University, Bareilly
                    </h2>
                    <h4 title="Degree Name" className="text-l text-white/90 truncate text-wrap">
                      B.Sc - Bachelor of Science
                    </h4>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-indigo-900/40 text-indigo-300"
                    >
                      2020 - 2023
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-indigo-300 mb-2">Academic Subjects</h3>
                  <div className="flex flex-wrap -mx-1">
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Mathematics
                    </div>
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Physics
                    </div>
                    <div
                      className="px-2 py-1 m-0.5 bg-gray-700 rounded-full text-xs font-medium text-gray-300 shadow-sm border border-gray-600 transition-all duration-300 hover:bg-gray-600"
                    >
                      Chemistry
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Education;