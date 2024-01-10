import Projectitem from "./Projectitem";
import  Img1  from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';

const Projects = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="project">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Proyectos</h1>
      <p className="text-center py-8">Proyecto en lo que estuve trabajando en estos ultimos tiempos</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Projectitem img={Img1} title={'Portfolio'} />
        <Projectitem img={Img2} title={'TO DO'} />
        <Projectitem img={Img3} title={'Portfolio React'} />
      </div>
    </div>
  )
}

export default Projects

