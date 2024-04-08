import React from "react";
import { Outlet } from "react-router-dom";
import About from "./About";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Experience from "./Experience";
import bhushan from "../bhushan.jpg";
import Navbar from "./Navbar";
import resume from "../resume.pdf";
import Contact from "./Contact";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AbcIcon from "@mui/icons-material/Abc";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
export default function Homepge() {
  const [id, setname] = useState({
    name1: "id1",
    name2: "id2",
    name3: "id3",
    name4: "id4",
  });
  return (
    <div className="">
      <div className="">
        <Navbar id={id}></Navbar>
      </div>

      <div
        className=" h-600 z-0 m-5 mt-[100px] flex flex-col  p-4 lg:flex lg:h-[600px]
       lg:flex-row lg:items-center lg:justify-center lg:gap-6"
      >
        <img
          className="  flex  h-[300px] w-[400px] items-center justify-center rounded-full lg:h-80 lg:w-80 lg:rounded-3xl"
          src={bhushan}
          alt="bhushan"
        ></img>
        <div className=" m-4 flex flex-col items-center justify-center  gap-2 lg:flex  lg:flex-col lg:items-center lg:justify-center lg:gap-3">
          <p className="lg:text-3xl">Hello,I am</p>
          <h1 className="lg:text-4xl">NagaBhushan Mandala</h1>
          <p className="lg:text-3xl">MERN developer</p>
          <div className="  lg:flex lg:gap-3 lg:text-white">
            <a
              href={resume}
              download="resume "
              className="h-auto  w-auto rounded-sm bg-blue-500 p-2 lg:h-auto lg:w-auto  lg:rounded-lg lg:bg-blue-500 lg:p-2"
            >
              Download Resume
            </a>
            <a
              href={`#${id.name4}`}
              className=" h-auto w-auto rounded-sm bg-blue-500 p-2 lg:h-auto lg:w-auto lg:rounded-lg lg:bg-blue-500 lg:p-2"
            >
              Contact Info
            </a>
          </div>
          <div className="lg:flex lg:gap-2">
            {" "}
            <Link to="https://www.linkedin.com/in/nagabhushanrao-mandala-9a7839283/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BX5bIz1bUTJ6EXJ6CQzBkzw%3D%3D">
              <LinkedInIcon style={{ fontSize: "75px" }}></LinkedInIcon>
            </Link>
            <Link to="https://www.instagram.com/i_am_not_naive/">
              {" "}
              <InstagramIcon style={{ fontSize: "75px" }}></InstagramIcon>
            </Link>
          </div>
        </div>
      </div>

      <div></div>
      <div id={id.name1}>
        <About></About>
      </div>

      <div id={id.name2} className="lg:h-screen">
        <Experience></Experience>
      </div>

      <div id={id.name3}>
        <Projects></Projects>
      </div>
      <div id={id.name4}>
        <Contact></Contact>
      </div>
    </div>
  );
}
