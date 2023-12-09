import React from "react";

function Sponser() {
  return (
    <section className="text-gray-600 body-font relative z-20">
      <div className="px-5 mx-auto pt-12">
        <h1 className="text-3xl sm:text-5xl mb-10 text-center font-extrabold title-font text-gray-200 tracking-widest">
        CO -SPONSOR
        </h1>
        <div className="flex justify-center flex-col sm:flex-row -m-4">
          <a href="https://www.homeflicwegrow.com/" target="_blank" rel="noreferrer" className="p-4">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-36 h-36 object-cover object-center mb-4"
                src="./assets/We_grow.png"
              />
              <div className="flex-grow">
                <h2 className="title-font font-bold text-2xl text-white">
                  HOMEFLIC WE GROW
                </h2>               
              </div>
            </div>
          </a>
          {/* <div className="p-4 sm:w-1/2">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-36 h-36 object-cover border border-black object-center mb-4"
                src="/assets/fed.jpg"
              />
              <div className="flex-grow">
                <h2 className="title-font font-bold text-2xl text-white">
                  FED KIIT
                </h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Sponser;
