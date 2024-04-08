import React from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";

export default function Navbar({ id }) {
  const [state, updatestate] = useState(false);
  return (
    <div
      className=" border-box h-50 fixed top-[0px] z-50 box-border   flex w-full flex-row 
       justify-between gap-40 bg-blue-900
        p-4 text-white 
      lg:flex lg:h-[100px] lg:flex-row lg:justify-around lg:pb-[50px] lg:pt-10 "
    >
      <h1
        className="   lg:ml-40  lg:flex-1 lg:flex-row 
      lg:justify-around lg:text-5xl"
      >
        bhushan
      </h1>
      <div className=" fixed right-[40px] pr-[50px] lg:hidden">
        <DehazeIcon
          className=" fixed mr-[50px] lg:hidden "
          onClick={() => {
            updatestate(!state);
          }}
        ></DehazeIcon>
      </div>
      <div
        className={`flex ${state ? "" : "hidden"}  ${state ? "bg-blue-900" : ""}
       sticky 
        right-4 mr-[20px] 
          mt-[50px]  w-auto max-w-xs  flex-col  items-center justify-center p-2  text-white 
        lg:top-0 lg:mr-40     lg:mt-0
         lg:flex   lg:flex-row lg:justify-center lg:gap-5 lg:bg-none
           lg:pb-5 lg:text-3xl lg:text-white `}
      >
        <a href={`#${id.name1}`} className="hover:text-red-400">
          about
        </a>
        <a
          href={`#${id.name2}`}
          className="hover:text-red-400"
          smooth={true}
          offset={-70}
          duration={500}
        >
          skills
        </a>
        <a
          href={`#${id.name3}`}
          className="hover:text-red-400"
          smooth={true}
          offset={-70}
          duration={500}
        >
          projects
        </a>
        <a
          href={`#${id.name4}`}
          className="hover:text-red-400"
          smooth={true}
          offset={-70}
          duration={500}
        >
          contact
        </a>
      </div>
    </div>
  );
}
