import React from "react";

function FooterTwo() {
  return (
    <div className="w-full text-white bg-white flex flex-col md:flex-row md:justify-around justify-center items-center py-4 px-8 absolute">
      <div className="text-sm md:w-4/12 flex">
        <a  
          href="https://www.instagram.com/ksacofficial"
          target="_blank"
          rel="noreferrer"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="./assets/Home/ksac.png" alt="ksac" className="w-10 h-9" />
          <span className="ml-3 text-xs text-deepBlue font-bold">
            Initiated & Organised by KIIT Student Activity Centre - KSAC
          </span>
        </a>
      </div>
      <div className="py-2 md:py-0 md:w-3/12 flex justify-center md:border-l md:border-r border-viodeep">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <a
            href="https://www.instagram.com/kreativeeyekiit/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/Home/KE.png"
              alt="Kreative_Eye"
              className="w-10 h-10"
            />
          </a>
          <a
            href="https://www.instagram.com/creative_sambit/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ml-3 text-xs text-deepBlue font-bold">
              Designed by <b>Sambit Saha</b>
            </span>
          </a>
        </div>
      </div>
      <div className="flex text-gray-200 md:w-4/12 justify-center">
      <a
          href="https://www.instagram.com/kiituniversity/"
          target="_blank"
          rel="noreferrer"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src="./assets/Home/kiit.png" alt="kiiT" className="w-10 h-8" />
          <span className="ml-3 text-xs text-deepBlue font-bold">
            Powered by <b>KIIT Digital</b>
          </span>
        </a>
      </div>
    </div>
  );
}

export default FooterTwo;
