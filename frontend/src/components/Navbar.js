import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ id }) {
  return (
    <div className="lg: text-slate-700 lg:pt-20 lg:flex lg:justify-around ">
      <h1 className="  lg:text-5xl  lg:flex-1 lg:ml-40 lg:justify-around">
        bhushan
      </h1>
      <div className="lg:flex  lg:text-3xl lg:gap-2 lg:mr-40 lg:flex-1 lg:justify-around">
        <a href={`#${id.name1}`}>about</a>
        <a href={`#${id.name2}`} smooth={true} offset={-70} duration={500}>
          skills
        </a>
        <a href={`#${id.name3}`} smooth={true} offset={-70} duration={500}>
          projects
        </a>
        <a href={`#${id.name4}`} smooth={true} offset={-70} duration={500}>
          contact
        </a>
      </div>
    </div>
  );
}
