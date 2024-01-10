import React from 'react'

const resume = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" id="cajaperfil">
        <h1 id="titulo">Informacion del desarrollador</h1>
        <img src="perfil.jpg" alt="" width="150px" id="img" />
        <div id="cajaP">
          <p>Hola!
            soy desarrollador web de la provincia de Entre Rios Argentina.<br />
            Apasionado por la programación orientado a la creación de soluciones web y aplicaciones con conocimiento en el area Backend & Frontend.

            Mi enfoque se centra en brindar soluciones eficientes y de alta calidad que satisfagan las necesidad del cliente.<br />
          </p>
          <br />
          <p>
            Los Framework son estudiado de manera  autodidacta : Angular17 - React.📚
          </p>
          <br />
          <p>
            Los cursos realizado fueron en la plataforma EDteam : Html - Css - Javascript |  Nodejs - MySql PostgreSQL 🏆.
          </p>
          <br />
          <p>
            Otras herramientas : Tailwind - Bootstrap - Postman - Sass - Git&GitHub 📚.
          </p>
        </div>
     </div>
  )
};

export default resume;