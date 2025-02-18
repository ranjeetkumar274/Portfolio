import uniimg from '../assets/OIP.jpg';
import uniiimg from '../assets/uni-img.png';

const Education = () => {
    return (
        <div className='pt-2'>
            <h1 className="text-4xl text-center font-bold pb-10">Educations</h1>
            <div className="flex justify-center pb-10">
            <div
  className="card w-[900px] h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300"
>
  <div className="card-content p-4 relative z-10">
    <div className="flex items-center mb-4 gap-3">
      <div
      >
        <img className='w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight' src={uniimg} alt="" />
      </div>
      <div>
        <h2 title="University Name" className="text-lg font-bold text-white/90 truncate text-wrap">
          Madan Mohan Malaviya University of Technology ,Gorakhpur
        </h2>
        <h4 title="Degree Name" className="text-l text-white/90 truncate text-wrap">
          MCA - Masters of Computer Application
        </h4>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90"
        >
          2023 - Present
        </span>
      </div>
    </div>

    <div className="mb-4">
      <h3 className="text-xs font-semibold text-white/80 mb-2">Academic Subjects</h3>
      <div className="flex flex-wrap -mx-1">
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        >
          Java Programming - OOPs
        </div>
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        >
          DBMS
        </div>
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        >
          Operating System
        </div>
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
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
  className="card w-[900px] h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300"
>
  <div className="card-content p-4 relative z-10">
    <div className="flex items-center mb-4 gap-3">
    <div
      >
        <img className='w-12 h-12 rounded-xl shadow-lg flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight' src={uniiimg} alt="" />
      </div>
      <div>
        <h2 title="University Name" className="text-lg font-bold text-white/90 truncate text-wrap">
          Mahatma Jyotiba Phule Rohilkhand University ,Bareilly
        </h2>
        <h4 title="Degree Name" className="text-l text-white/90 truncate text-wrap">
          B.sc - Bachelor of Science
        </h4>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90"
        >
          2020 - 2023
        </span>
      </div>
    </div>

    <div className="mb-4">
      <h3 className="text-xs font-semibold text-white/80 mb-2">Academic Subjects</h3>
      <div className="flex flex-wrap -mx-1">
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        >
          Mathematics
        </div>
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
        >
          Physics
        </div>
        <div
          className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20"
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