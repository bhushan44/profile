import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ id }) {
  return (
    <div className=" text-slate-700 pt-20 flex justify-around ">
      <h1 className="  text-5xl  flex-1 ml-40 justify-around">bhushan</h1>
      <div className="flex  text-3xl gap-2 mr-40 flex-1 justify-around">
        <a href={`#${id.name1}`}>about</a>
        <a href={`#${id.name2}`} smooth={true} offset={-70} duration={500}>
          experience
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
