import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useState } from "react";
export default function Experience() {
  const [data, setdata] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "Tailwind CSS",
    "Material UI",
  ]);
  const [data1, setdata1] = useState([
    "Node",
    "express",
    "Mongodb",
    "SQL",
    "Github",
  ]);
  return (
    <div>
      <div className="lg:h-screen lg:flex lg:flex-col  lg:gap-5 lg:justify-center lg:items-center lg:bg-slate-50">
        <h1 className="lg:text-lg">Explore my</h1>
        <h1 className="lg:text-6xl lg:mb-20">Skills</h1>
        <div className=" lg:flex lg:justify-center  lg:gap-10 lg:items-center">
          <div className="lg:border-2 lg:flex lg:p-5 lg:w-[500px] lg:flex-col lg:justify-center lg:items-center lg:rounded-3xl lg:border-black lg:border-solid">
            <h1 className="lg:text-3xl lg:p-5">Frontendontend Development</h1>
            <ul className="lg:grid  lg:text-lg lg:justify-center lg:items-center  lg:gap-x-32 lg:gap-10 lg:grid-cols-2">
              {data.map((o) => {
                return (
                  <li>
                    <VerifiedIcon></VerifiedIcon>
                    <span className="lg:ml-5">{o}</span>
                    <p className="lg:ml-11">intermediate</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="   lg:p-5 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[500px] lg:rounded-3xl lg:border-2 lg:border-black lg:border-solid">
            <h1 className="lg:text-3xl lg:p-5"> Backend Development</h1>
            <ul className="lg:grid  lg:justify-center lg:text-lg lg:items-center  lg:gap-x-32 lg:gap-10 lg:grid-cols-2">
              {data1.map((o) => {
                return (
                  <>
                    <li>
                      <VerifiedIcon></VerifiedIcon>
                      <span className="lg:ml-5">{o}</span>
                      <p className="lg:ml-11">basic</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
