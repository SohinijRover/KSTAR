import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import moment from "moment";

function EventHero(props) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const { data } = props;
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
          <h1 className="title-font text-3xl md:text-5xl mb-4 md:mb-8 font-bold text-viodeep">
            {data.title}
          </h1>
          <p className="mb-8 text-sm md:text-base leading-relaxed text-white font-semibold">
            {data.content}
          </p>

          {moment().format("YYYY-MM-DD HH:mm:ss") <=
            moment("2021-12-24 23:58:59").format("YYYY-MM-DD HH:mm:ss") && (
            <Link to="/register" className="flex justify-center z-10">
              <p
                onClick={toggleHome}
                className="inline-flex font-bold text-white bg-viodeep border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-xs md:text-lg shadow-lg"
              >
                Register here
              </p>
            </Link>
          )}

          {moment().format("YYYY-MM-DD HH:mm:ss") >=
            moment("2021-12-24 23:59:00").format("YYYY-MM-DD HH:mm:ss") && (
            <div className="flex justify-center z-10">
              <Link to="/submit">
                <p
                  onClick={toggleHome}
                  className="inline-flex font-bold text-white bg-viodeep border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-xs md:text-lg shadow-lg"
                >
                  Submit here
                </p>
              </Link>
              <a
                href={data.guidelines}
                download
                target="_blank"
                rel="noreferrer"
              >
                <p className="ml-8 inline-flex font-bold text-viodeep bg-gray-100 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-xs md:text-lg shadow-lg">
                  Theme {"&"} Guidelines
                </p>
              </a>
            </div>
          )}

          {/* <div className="absolute left-0 -bottom-20 z-0">
          <img src="./assets/Event/cloudeone.svg" alt="cloud"/>
          </div> */}
        </div>
        <div className=" lg:w-1/2 w-full">
          <img
            className="object-cover object-center rounded"
            alt={data.title}
            src={data.img}
          />
        </div>
      </div>
    </section>
  );
}

export default EventHero;
