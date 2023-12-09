import React from "react";
import Lottie from "react-lottie";
import success from "../lotties/success.json";
import fail from "../lotties/fail.json";
import wait from "../lotties/wait.json";
import { Link } from "react-router-dom";

function Popup(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const secondOptions = {
    loop: true,
    autoplay: true,
    animationData: fail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const waitOptions = {
    loop: true,
    autoplay: true,
    animationData: wait,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-40">
      <div className="mx-auto relative px-12 py-6 w-8/12 md:w-4/12 bg-white rounded-2xl text-viodeep">
        {props.animation === 0 && (
          <Lottie options={waitOptions} />
        )}
        {props.animation === 1 && (
          <Lottie options={defaultOptions} />
        )}
        {props.animation === 2 && (
          <Lottie options={secondOptions} />
        )}
        <button
          onClick={() => {props.setTrigger(false); window.location.reload(false)}}
          className="absolute top-4 right-10 font-extrabold"
        >
          X
        </button>
        {props.children}
        <div className="flex justify-center mt-6">
          <button className=" text-xs md:text-base px-6 py-1 bg-viodeep rounded-2xl text-white font-bold">
            <Link to="/">Go to Home</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
