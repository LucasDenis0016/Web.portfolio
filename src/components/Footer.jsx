import React from 'react'

const Footer = () => {
  return (
    <div id="footerCaja">
      <footer className="bg-[#001b5e] text-white p-4 text-center">
        <p>2024 Mi portfolio Web</p>
        <div className="flex flex-row-reverse">
          <div id="html">
            <img src="html.png" alt=""  width={150} id="htmlImg"/>
          </div>
          <div>
            <img src="css.png" alt="" width={150}  id="htmlImg" />
          </div>
          <div>
              <img src="javascript.png" alt="" width={150} id="htmlImg" />
          </div>

          <div>
            <img src="react.png" alt=""  width={150} />
          </div>

          <div>
            <img src="node.png" alt="" width={150} />
          </div>

          <div className="">
            <img src="github1.png" alt=""  width={150}/>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;