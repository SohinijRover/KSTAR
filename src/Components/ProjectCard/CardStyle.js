import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function CardStyle(props) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex w-11/12 flex-col justify-center mt-10 lg:mt-40 items-center">
      <Link
        to={props.link}
        onClick={toggleHome}
        className="w-full md:w-10/12 bg-viodeep hover:bg-white border-2 text-white hover:text-viodeep border-white hover:border-viodeep shadow-lg rounded-2xl overflow-hidden p-3 delay-100"
      >
        <div className="h-40 md:h-48 flex justify-center bg-gradient-to-t from-boxvio to-blue p-6 rounded-xl">
          <img
            src={props.imageUrl}
            alt={props.title}
            className="h-28 md:h-40"
          />
        </div>
        <div className="overflow-hidden">
          <p className="text-2xl md:text-3xl mt-1 text-center font-bold">
            {props.title}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CardStyle;
