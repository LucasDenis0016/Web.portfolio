

const Contact = () => {
  return (

    <div id="concat" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contacto 👤</h1>
        <p className="text-[#001b5e]">Para contactarme complete el formulario 🤞!</p>
        <form action="https://getform.io/f/b4585938-6c73-412b-b11e-47e0dfb4d98e" method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">

                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nombre</label>
                    <input type="text" name="name" className="border-2 rounded-lg p-3 flex border-gray-300" />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone 📲</label>
                  <input type="text" name="phone" className="border-2 rounded-lg p-3 flex border-gray-300" />
                </div>

            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email 📧</label>
              <input type="email" name="email" className="border-2 rounded-lg p-3 flex border-gray-300" />
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Titulo 📌</label>
              <input type="text" name="subject" className="border-2 rounded-lg p-3 flex border-gray-300" />
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Mensaje 📝</label>
              <textarea rows={10} name="message" className="border-2 rounded-lg p-3 border-gray-300"></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">Enviar</button>
        </form>
    </div>
    
  )
};

export default Contact;