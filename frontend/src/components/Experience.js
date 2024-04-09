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
      <div
        className="  relative z-0 m-2 flex h-auto w-auto  flex-col items-center 
         justify-center overscroll-contain   border-2  border-solid border-black
          lg:flex lg:h-screen lg:flex-col  lg:items-center lg:justify-center lg:gap-5
          "
      >
        <h1 className="lg:text-lg">Explore my</h1>
        <h1 className="lg:mb-20 lg:text-6xl">Skills</h1>
        <div className=" flex flex-col gap-10 lg:flex lg:flex-row lg:items-center  lg:justify-center lg:gap-10">
          <div className=" flex flex-col items-center justify-center border-2 border-solid border-black p-10 lg:flex lg:w-[500px] lg:flex-col lg:items-center lg:justify-center lg:rounded-3xl lg:border-2 lg:border-solid lg:border-black lg:p-5">
            <h1 className="lg:p-5 lg:text-3xl">Frontendontend Development</h1>
            <ul className=" grid grid-cols-2  gap-x-10 rounded-2xl lg:grid  lg:grid-cols-2 lg:items-center lg:justify-center  lg:gap-10 lg:gap-x-32 lg:text-lg">
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
          <div className="  flex flex-col items-center justify-center border-2 border-solid border-black p-10 lg:flex lg:w-[500px] lg:flex-col lg:items-center lg:justify-center lg:rounded-3xl lg:border-2 lg:border-solid lg:border-black lg:p-5">
            <h1 className="lg:p-5 lg:text-3xl"> Backend Development</h1>
            <ul className="grid grid-cols-2 gap-x-10  rounded-2xl lg:grid  lg:grid-cols-2 lg:items-center lg:justify-center  lg:gap-10 lg:gap-x-32 lg:text-lg">
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
