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
      <div className="h-screen flex flex-col  gap-5 justify-center items-center bg-slate-50">
        <h1 className="text-lg">Explore my</h1>
        <h1 className="text-6xl mb-20">Skills</h1>
        <div className=" flex justify-center  gap-10 items-center">
          <div className="border-2 flex p-5 w-[500px] flex-col justify-center items-center rounded-3xl border-black border-solid">
            <h1 className="text-3xl p-5">Frontend Development</h1>
            <ul className="grid  text-lg justify-center items-center  gap-x-32 gap-10 grid-cols-2">
              {data.map((o) => {
                return (
                  <li>
                    <VerifiedIcon></VerifiedIcon>
                    <span className="ml-5">{o}</span>
                    <p className="ml-11">intermediate</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="   p-5 flex flex-col justify-center items-center w-[500px] rounded-3xl border-2 border-black border-solid">
            <h1 className="text-3xl p-5"> Backend Development</h1>
            <ul className="grid  justify-center text-lg items-center  gap-x-32 gap-10 grid-cols-2">
              {data1.map((o) => {
                return (
                  <>
                    <li>
                      <VerifiedIcon></VerifiedIcon>
                      <span className="ml-5">{o}</span>
                      <p className="ml-11">basic</p>
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
