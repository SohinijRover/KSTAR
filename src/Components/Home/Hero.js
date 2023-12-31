import React, {useState} from "react";
import CardInfo from "../ProjectCard/CardInfo";
import BgBench from "./BgBench";
import BgBenchTwo from "./BgBenchTwo";
import Partners from "./Partners";
import Faqinit from "./ParticularCom/faqinit";

import { Link } from "react-scroll";

function Hero() {
  const [registerHover, setRegisterHover] = useState(false);
  const hoverRegisterOn = () => {
    setRegisterHover(true);
  };
  const hoverRegisterOff = () => {
    setRegisterHover(false);
  };
  return (
    <div
      className="bg-gradient-to-b from-vioblend via-blue to-vioblend2 pb-10 z-0 absolute home-hero"
    >
      <div
        className="hidden md:block md:mt-0 md:absolute md:-top-28 lg:-top-40 2xl:-top-72 left-8 w-full md:w-2/12 z-30"
      >
        <img
          src="./assets/Home/Prizetag.png"
          alt="Prize_Money"
          className="w-3/12 md:w-9/12 h-full"
        />
      </div>
      <div className="flex justify-center items-center mt-4 md:hidden w-11/12 z-30 absolute -top-40 -left-48">
        <img
          src="./assets/Home/PRIZE-STAMP.png"
          alt="Prize_Money"
          className="w-3/12 md:w-9/12 h-full"
        />
      </div>
      <div className="w-full justify-center hidden lg:flex absolute -top-20 z-50">
        <Link
          to="challenge"
          smooth={true}
          duration={700}
          spy={true}
          className=" cursor-pointer bottom-10 mt-4 absolute z-10 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.98"
            height="38.872"
            viewBox="0 0 54.98 62.872"
          >
            <g
              id="Group_225"
              data-name="Group 225"
              transform="translate(-1440 -480.497)"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M33.688,33.206,54.477,12.4a3.912,3.912,0,0,1,5.549,0,3.962,3.962,0,0,1,0,5.566L36.471,41.538a3.922,3.922,0,0,1-5.418.115L7.333,17.982a3.93,3.93,0,0,1,5.549-5.566Z"
                transform="translate(1433.813 500.686)"
                fill="#2a0645"
              />
              <path
                id="Icon_ionic-ios-arrow-down-2"
                data-name="Icon ionic-ios-arrow-down"
                d="M33.688,33.206,54.477,12.4a3.912,3.912,0,0,1,5.549,0,3.962,3.962,0,0,1,0,5.566L36.471,41.538a3.922,3.922,0,0,1-5.418.115L7.333,17.982a3.93,3.93,0,0,1,5.549-5.566Z"
                transform="translate(1433.813 469.25)"
                fill="#2a0645"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="w-full text-center text-white lg:hidden flex justify-center absolute z-50 -top-24">
        <Link
          to="challenge"
          smooth={true}
          duration={900}
          spy={true}
          className=" cursor-pointer mt-4 animate-bounce absolute z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.287"
            height="15.62"
            viewBox="0 0 9.287 10.62"
          >
            <g
              id="Group_225"
              data-name="Group 225"
              transform="translate(-1440 -480.497)"
            >
              <path
                id="Icon_ionic-ios-arrow-down"
                data-name="Icon ionic-ios-arrow-down"
                d="M10.833,14.956l3.511-3.514a.661.661,0,0,1,.937,0,.669.669,0,0,1,0,.94L11.3,16.363a.662.662,0,0,1-.915.019l-4.006-4a.664.664,0,1,1,.937-.94Z"
                transform="translate(1433.813 474.56)"
                fill="#fff"
              />
              <path
                id="Icon_ionic-ios-arrow-down-2"
                data-name="Icon ionic-ios-arrow-down"
                d="M10.833,14.956l3.511-3.514a.661.661,0,0,1,.937,0,.669.669,0,0,1,0,.94L11.3,16.363a.662.662,0,0,1-.915.019l-4.006-4a.664.664,0,1,1,.937-.94Z"
                transform="translate(1433.813 469.25)"
                fill="#fff"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div
        className="absolute -z-1 h-full -top-48 md:-top-60 lg:-top-96 2xl:top-60vh"
      >
        <img src="./assets/Home/cloud.svg" alt="cloud_main" />
      </div>
      <div className="container mx-auto">
        <div className="w-full flex justify-center pt-20 lg:pt-52 lg:-mb-20 md:pt-10 xl:pt-80">
          <img
            src="./assets/Home/challenge.png"
            alt="72_hr_challenge"
            className="w-8/12 lg:w-7/12 h-full pt-8 lg:pt-8"
            id="challenge"
          />
        </div>
        <div className="relative" style={{ bottom: "-26rem" }}>
          <BgBench />
        </div>
        <CardInfo />
        <div className="relative -top-5">
          <BgBenchTwo />
        </div>
      </div>
      <div className="lg:mt-24 relative">
        <img src="./assets/Home/dual_cloude.svg" alt="dual_cloude" />
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="flex items-center hover:text-viodeep bg-gradient-to-r hover:from-white hover:to-white from-viodeep to-violight text-white font-bold text-2xl py-5 px-10 rounded-full bg-white absolute left-1/2 bottom-2 z-50"
          style={{ transform: "translateX(-50%)" }}
          onMouseEnter={hoverRegisterOn}
          onMouseLeave={hoverRegisterOff}
        >
          <span className="flex gap-5 items-center">
            Register Now
            <img
              src={
                !registerHover
                  ? "./assets/Home/click_white.png"
                  : "./assets/Home/click.png"
              }
              alt="register"
              className="w-7 h-7 md:w-7 md:h-7"
            />
          </span>
        </a>
      </div>
      <div className="container mx-auto z-10">
        <div className="px-8 md:px-20 pt-10">
          <p className="text-white text-3xl sm:text-5xl font-extrabold pb-6">
            FAQ
          </p>
          <Faqinit />
        </div>
        <Partners />
      </div>
    </div>
  );
}

export default Hero;
