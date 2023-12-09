import React, { useState } from "react";
import { Link } from "react-router-dom";
import KstarComp from "../Components/KstarComp";
import Popup from "../Components/Popup/Popup";
import moment from "moment";

function Register() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    rollno: "",
    event: "",
    contact: "",
    school: "",
    branch: "",
  });
  const [error, setError] = useState("");
  const [animation, setanimation] = useState(0);

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    setbuttonPopup(true);
    const { name, email, rollno, event, contact, school, branch } = user;
    const response = await fetch(
      "https://kstar-api.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          rollno,
          event,
          contact,
          school,
          branch,
        }),
      }
    );
    const body = await response.json();
    setUser({ ...user, name: "", email: "", rollno: "", event: "", contact: "", school: "", branch: "" });
    if (body === "User registered successfully!") {
      setError("Registered Successfully");
      setanimation(1);
    } else if (body === "User already exists!") {
      setError("You are already registered for this event");
      setanimation(2);
    } else {
      setError("Registration Failed");
      setanimation(2);
    }
  };

  return (
    <div className="bg-gradient-to-bl from-purple via-blue to-blue w-full px-4 md:px-10 py-6">
      {/* Header navbar */}
      <div className="flex w-full justify-end">
        <Link to="/">
          <div className="flex font-bold items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50.044"
              height="38.915"
              viewBox="0 0 68.044 56.915"
              className="w-7 h-7 md:w-10 md:h-10"
            >
              <defs>
                <filter
                  id="Icon_awesome-home"
                  x="0"
                  y="0"
                  width="68.044"
                  height="56.915"
                  filterUnits="userSpaceOnUse"
                >
                  <feOffset dy="3" input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodOpacity="0.588" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g
                transform="matrix(1, 0, 0, 1, 0, 0)"
                filter="url(#Icon_awesome-home)"
              >
                <path
                  id="Icon_awesome-home-2"
                  data-name="Icon awesome-home"
                  d="M24.357,12.349,8.34,25.541V39.779a1.39,1.39,0,0,0,1.39,1.39l9.735-.025a1.39,1.39,0,0,0,1.383-1.39V31.439a1.39,1.39,0,0,1,1.39-1.39H27.8a1.39,1.39,0,0,1,1.39,1.39v8.309a1.39,1.39,0,0,0,1.39,1.394l9.732.027a1.39,1.39,0,0,0,1.39-1.39V25.532L25.687,12.349A1.059,1.059,0,0,0,24.357,12.349Zm25.3,8.966L42.4,15.329V3.3a1.042,1.042,0,0,0-1.042-1.042H36.488A1.042,1.042,0,0,0,35.445,3.3V9.6L27.667,3.2a4.17,4.17,0,0,0-5.3,0L.377,21.316a1.042,1.042,0,0,0-.139,1.468l2.215,2.693a1.043,1.043,0,0,0,1.469.142L24.357,8.787a1.059,1.059,0,0,1,1.329,0L46.122,25.618a1.043,1.043,0,0,0,1.468-.139l2.215-2.693a1.042,1.042,0,0,0-.148-1.471Z"
                  transform="translate(9 3.75)"
                  fill="#fff"
                />
              </g>
            </svg>
            <span className="text-white text-xl hidden md:block">Home</span>
          </div>
        </Link>
        <a href="mailto:studentsupport@kiit.ac.in?subject=Enquiry - KSTAR" target="_blank" rel="noreferrer" className="flex font-bold items-center ml-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.464"
            height="43.463"
            viewBox="0 0 63.464 63.463"
            className="w-7 h-7 md:w-10 md:h-10"
          >
            <defs>
              <filter
                id="Path_3084"
                x="7.464"
                y="0"
                width="55.999"
                height="55.332"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodOpacity="0.659" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Path_3085"
                x="0"
                y="14.808"
                width="48.885"
                height="48.655"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur-2" />
                <feFlood floodOpacity="0.549" />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g
              id="Icon_ionic-ios-chatbubbles"
              data-name="Icon ionic-ios-chatbubbles"
              transform="translate(9 6)"
            >
              <g
                transform="matrix(1, 0, 0, 1, -9, -6)"
                filter="url(#Path_3084)"
              >
                <path
                  id="Path_3084-2"
                  data-name="Path 3084"
                  d="M42.57,33.167a2.648,2.648,0,0,1,.361-1.333,3.68,3.68,0,0,1,.229-.339,17.708,17.708,0,0,0,3.016-9.869c.033-10.076-8.47-18.251-18.983-18.251A18.852,18.852,0,0,0,8.582,17.9a17.562,17.562,0,0,0-.4,3.738,18.539,18.539,0,0,0,18.688,18.48,22.507,22.507,0,0,0,5.158-.842c1.235-.339,2.459-.787,2.776-.907a2.889,2.889,0,0,1,1.016-.186,2.841,2.841,0,0,1,1.1.219l6.2,2.2a1.478,1.478,0,0,0,.426.109.87.87,0,0,0,.874-.874,1.4,1.4,0,0,0-.055-.3Z"
                  transform="translate(8.29 2.62)"
                  fill="#fff"
                />
              </g>
              <g
                transform="matrix(1, 0, 0, 1, -9, -6)"
                filter="url(#Path_3085)"
              >
                <path
                  id="Path_3085-2"
                  data-name="Path 3085"
                  d="M32.937,35.743c-.393.109-.9.23-1.443.35a20.171,20.171,0,0,1-3.716.492A18.539,18.539,0,0,1,9.091,18.1a20.662,20.662,0,0,1,.164-2.339c.066-.47.142-.94.251-1.4.109-.492.24-.984.383-1.464l-.874.776A16.264,16.264,0,0,0,3.375,25.907a16.083,16.083,0,0,0,2.71,8.962c.251.382.393.678.35.874s-1.3,6.776-1.3,6.776a.877.877,0,0,0,.3.842.89.89,0,0,0,.557.2.784.784,0,0,0,.317-.066l6.131-2.415a1.708,1.708,0,0,1,.623-.12,1.725,1.725,0,0,1,.689.142A18.394,18.394,0,0,0,20.38,42.41a17.164,17.164,0,0,0,13.125-6.022s.35-.481.754-1.049C33.855,35.481,33.4,35.623,32.937,35.743Z"
                  transform="translate(5.62 7.91)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
          <span className="text-white text-xl hidden md:block">Contact us</span>
        </a>
      </div>

      {/* Registration Form */}
      <div className="mx-auto flex lg:flex-nowrap flex-wrap items-center">
        {moment().format("YYYY-MM-DD HH:mm:ss") >= moment("2021-12-15 10:00:00").format("YYYY-MM-DD HH:mm:ss") &&
          moment().format("YYYY-MM-DD HH:mm:ss") <= moment("2021-12-24 10:00:00").format("YYYY-MM-DD HH:mm:ss") && (
            <div className="lg:w-1/2 flex flex-col w-full lg:px-12 md:mt-0 sm:mr-10">
              <img
                src="./assets/Registration/registration.png"
                alt="Registration"
                className="mb-9 mt-6 lg:mt-0"
              />
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter your name *"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-2">
                <input
                  type="text"
                  name="rollno"
                  autoComplete="off"
                  placeholder="Enter your roll number *"
                  value={user.rollno}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {user.rollno.substring(0, 2) !== "21" && (
                  <p className="text-xs font-semibold text-white pl-1">
                    Only for 1st year students...or kindly check the roll number
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your mail id (KIIT RollNumber is preferable)"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <select
                  name="school"
                  value={user.school}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="" disabled hidden>
                    Select your school *
                  </option>
                  <option value="School of Architecture & Planning">
                    School of Architecture {"&"} Planning
                  </option>
                  <option value="School of Biotechnology">
                    School of Biotechnology
                  </option>
                  <option value="School of Civil Engineering">
                    School of Civil Engineering
                  </option>
                  <option value="School of Computer Engineering">
                    School of Computer Engineering
                  </option>
                  <option value="School of Computer Application">
                    School of Computer Application
                  </option>
                  <option value="School of Electrical Engineering">
                    School of Electrical Engineering
                  </option>
                  <option value="School of Electronics Engineering">
                    School of Electronics Engineering
                  </option>
                  <option value="School of Fashion Technology">
                    School of Fashion Technology
                  </option>
                  <option value="School of Film & Media Sciences">
                    School of Film {"&"} Media Sciences
                  </option>
                  <option value="School of Law">School of Law</option>
                  <option value="School of Management">
                    School of Management
                  </option>
                  <option value="School of Mass Communication">
                    School of Mass Communication
                  </option>
                  <option value="School of Mechanical Engineering">
                    School of Mechanical Engineering
                  </option>
                  <option value="School of Public Health">
                    School of Public Health
                  </option>
                  <option value="School of Rural Management">
                    School of Rural Management
                  </option>
                  <option value="Kalinga institute of Dental Sciences">
                    Kalinga institute of Dental Sciences
                  </option>
                  <option value="Kalinga Institute of Medical Sciences">
                    Kalinga Institute of Medical Sciences
                  </option>
                  <option value="Kalinga Institute of Nursing Sciences">
                    Kalinga Institute of Nursing Sciences
                  </option>
                  <option value="School of Commerce & Economics">
                    School of Commerce {"&"} Economics
                  </option>
                  <option value="School of Languages">
                    School of Languages
                  </option>
                </select>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="branch"
                  autoComplete="off"
                  placeholder="Enter your branch *"
                  value={user.branch}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <select
                  name="event"
                  value={user.event}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="" disabled hidden>
                    Select your event *
                  </option>
                  <option value="Music (Instrumental)">
                    Music (Instrumental)
                  </option>
                  <option value="Music (Singing)">Music (Singing)</option>
                  <option value="Dance">Dance</option>
                  <option value="Painting">Painting</option>
                  <option value="Acting">Acting</option>
                  <option value="Design">Design</option>
                  <option value="Snapshot">Snapshot</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Short Flim">Short Flim</option>
                  <option value="Writing (Poetry)">Writing (Poetry)</option>
                  <option value="Writing (Short Story)">
                    Writing (Short Story)
                  </option>
                </select>
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  name="contact"
                  autoComplete="off"
                  placeholder="Enter your 10 digit contact number *"
                  value={user.contact}
                  onChange={handleChange}
                  className="w-full font-semibold bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* Button Section */}
              <div className="w-full flex flex-wrap justify-center mt-6">
                <button
                  onClick={PostData}
                  className="w-6/12 text-white bg-viodeep border-0 py-2 px-6 focus:outline-none hover:bg-violight rounded-lg text-lg font-bold"
                  disabled={
                    user.name === "" ||
                    user.email === "" ||
                    user.email.includes("@") !== true ||
                    user.rollno === "" ||
                    user.rollno.substring(0, 2) !== "21" ||
                    user.contact.length !== 10 ||
                    user.event === "" ||
                    user.contact === "" ||
                    user.branch === "" ||
                    user.school === ""
                      ? true
                      : false
                  }
                >
                  Submit
                </button>

                {user.name === "" ||
                user.email === "" ||
                user.email.includes("@") !== true ||
                user.rollno === "" ||
                user.event === "" ||
                user.school === "" ||
                user.contact.length !== 10 ||
                user.branch === "" ||
                user.contact === "" ? (
                  <p className="text-xs text-white font-bold mt-3 w-full text-center">
                    <span className="text-red-600 font-bold">* </span> Some
                    Enter all fields correctly
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          )}
        {moment().format("YYYY-MM-DD HH:mm:ss") > moment("2021-12-24 10:00:00").format("YYYY-MM-DD HH:mm:ss") && (
          <div className="lg:w-1/2 flex flex-col w-full lg:px-2 py-10 lg:mt-0 mt-12 sm:mr-10 text-white text-center lg:border-r-2">
            <p className="font-extrabold text-2xl md:text-5xl pb-8">
              REGISTRATION CLOSED...
            </p>
            <p className="font-bold text-lg md:text-3xl">
              PLEASE WAIT TILL <br />
              THE EVENT STARTS
            </p>
          </div>
        )}
        {moment().format("YYYY-MM-DD HH:mm:ss") < moment("2021-12-15 10:00:00").format("YYYY-MM-DD HH:mm:ss") && (
          <div className="lg:w-1/2 flex flex-col w-full lg:px-2 py-10 lg:mt-0 mt-12 sm:mr-10 text-white text-center lg:border-r-2">
            <p className="font-extrabold text-2xl md:text-5xl pb-8">
              REGISTRATION WILL START
            </p>
            <p className="font-bold text-lg md:text-3xl">
              FROM 15TH DECEMBER <br />
              ON 10:00 AM
            </p>
          </div>
        )}

        <div className="lg:w-1/2 p-6 flex items-center justify-center">
          <KstarComp />
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setbuttonPopup}
        animation={animation}
      >
        <p className="text-viodeep text-xs md:text-xl text-center font-extrabold">
          {error}
        </p>
      </Popup>
    </div>
  );
}

export default Register;
