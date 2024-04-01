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

      <div className="h-[600px] flex justify-center items-center gap-6">
        <img
          className="w-80 h-80 rounded-3xl"
          src={bhushan}
          alt="bhushan"
        ></img>
        <div className="flex  gap-3 flex-col justify-center items-center">
          <p className="text-3xl">Hello,I am</p>
          <h1 className="text-4xl">NagaBhushan Mandala</h1>
          <p className="text-3xl">MERN developer</p>
          <div className="flex text-white gap-3">
            <a
              href={resume}
              download="resume "
              className="w-auto h-auto bg-blue-500 p-2 rounded-lg"
            >
              Download Resume
            </a>
            <a
              href={`#${id.name4}`}
              className=" w-auto h-auto bg-blue-500 p-2 rounded-lg"
            >
              Contact Info
            </a>
          </div>
          <div className="flex gap-2">
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
        <Outlet></Outlet>
        <About></About>
      </div>

      <div id={id.name2} className="h-screen">
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
