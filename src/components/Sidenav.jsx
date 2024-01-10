import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { useState } from 'react';
import { GrProjects } from 'react-icons/gr';


const Sidenav = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    
  };

  return (

    <div className=''>
      <AiOutlineMenu className="absolute top-4 right-4 z-[99] md:hidden bg-white" onClick={handleNav} />
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-slate-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" onClick={handleNav}>
              <AiOutlineHome size={20} />
              <span className="pl-4 text-gray-100">Home</span>
            </a>

            <a href="#work" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-slate-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" onClick={handleNav}>
              <GrProjects size={20} />
              <span className="pl-4 text-gray-100">Work</span>
            </a>

            <a href="#project" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-slate-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" onClick={handleNav}>
              <AiOutlineProject size={20} />
              <span className="pl-4 text-gray-100">Projects</span>
            </a>

            <a href="#resume" alt="/" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-slate-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" onClick={handleNav}>
              <BsPerson size={20} />
              <span className="pl-4 text-gray-100">Resume</span>
            </a>

            <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-slate-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" onClick={handleNav}>
              <AiOutlineMail size={20} />
              <span className="pl-4 text-gray-100">Contact</span>
            </a>

          </div>
        )
        : (
          ''
        )}
          <div className="md:block hidden fixed top-[25%] z-10">
              <div className="flex  flex-col">
                <a href="#main" className="rounded-full shadow-lg bg-gray-100 m-2 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineHome />
                </a>

                <a href="#work" className="rounded-full shadow-lg bg-gray-100 m-2 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <GrProjects />
                </a>

                <a href="#project" className="rounded-full shadow-lg bg-gray-100 m-2 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineProject />
                </a>

                <a href="#resume" className="rounded-full shadow-lg bg-gray-100 m-2 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsPerson />
                </a>

                <a href="#contact" className="rounded-full shadow-lg bg-gray-100 m-2 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </a>

              </div>
          </div>


    </div>
  );
};

export default Sidenav;