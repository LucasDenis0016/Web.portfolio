import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaLinkedinIn,  } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";


const main = () => {
  return (

    <div id="main">
       <img src="img.jpg" alt="" className="h-screen "  id="img1"/>
       <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-900">Web Developer 🧑🏻‍💼</h1>
                <h2 className="flex sm:text-2xl text-1xl pt-2 text-gray-800">
                <TypeAnimation
                sequence={[
                  
                  'Frontend & Backend developer',
                  1000, 
                  '',
                  1000
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <FaTwitter size={20} className="cursor-pointer" />
                    <FaLinkedinIn size={20} className="cursor-pointer" />
                    <FaGithub size={20}  className="cursor-pointer" />
                </div>
            </div>
       </div>
    </div>
  )
};

export default main
