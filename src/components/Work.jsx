import Workitem from "./Workitem";

const data = [
  {
    title: 'Frontend Basico 🏆',
    description:'Cursos en Edteam',
    detail: 'Html - Css - Javascript',
  },
  {
    title: 'Framework ',
    description:'Los framework son estudiado de manera autodidacta 👨🏻‍🎓',
    detail: 'React - Angular17'
  },
  {
    title: 'Backend Basico',
    description:'Cursos en Edteam 🏆',
    detail: 'Nodejs - MySQL(postgresql) - Postman',
  },
  {
    title:'Otras herramientas 👨🏻‍🎓',
    detail: 'Git&GitHub - Tailwind - Sass - Bootstrap',
  },
  {
    title: 'Idioma 👨🏻‍🎓',
    detail: 'Ingles(Cursando) - Español(Nativo)'
  }
]

const Work = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="work">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills ⚙️</h1>
        {data.map((item, idx)=> (
          <Workitem key={idx} title={item.title} description={item.description} detail={item.detail}  />
        ))}
    </div>
  )
};

export default Work;