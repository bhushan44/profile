import React from "react";
import auth from "./images/auth.jpeg";
import quiz from "./images/Quiz-Logo.png";
import social from "./images/social_media.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  const [images, setimages] = useState([quiz, auth, social]);
  const [url, seturl] = useState([
    "https://quizzpro.onrender.com/",
    "https://frontend-f6gd.onrender.com/",
  ]);
  const [github, setgit] = useState([
    "https://github.com/bhushan44/reactquizz",
    "https://github.com/bhushan44/auth",
    "https://github.com/bhushan44/socialmedia",
  ]);
  return (
    <div
      style={{ height: "100vh" }}
      className=" relative z-0 m-2 flex h-auto w-auto flex-col  items-center justify-center   border-2  border-solid border-black
     lg:flex lg:h-screen lg:flex-col  lg:items-center lg:justify-center lg:gap-y-5"
    >
      <h1 className="lg:text-lg">Browse my</h1>
      <h1 className="mb-5 lg:mb-10 lg:text-6xl"> projects</h1>

      <div className=" flex flex-col  items-center  justify-center gap-3 lg:flex lg:flex-row  lg:items-center lg:justify-center lg:gap-x-10">
        {images.map((o, i) => {
          return (
            <div
              className=" flex flex-col items-center justify-center  gap-2 border-2
               border-black p-2 lg:flex  lg:h-[400px] lg:w-[300px] lg:flex-col
             lg:items-center lg:justify-center lg:gap-y-4 lg:rounded-lg lg:border-2 
             lg:border-solid lg:border-black"
            >
              <img
                className=" h-[100px] w-[100px] lg:mt-4 lg:h-[250px]  lg:w-[250px] lg:rounded-lg"
                src={o}
                alt="bhu"
              ></img>
              <h1 className="text-3xl">project {i + 1}</h1>
              <div className=" flex gap-2 lg:mb-5 lg:flex lg:gap-x-10">
                <a
                  href={github[i]}
                  className=" h-auto w-auto rounded-full bg-blue-500 p-1 lg:w-auto lg:rounded-full lg:bg-blue-500 lg:p-2 lg:text-white"
                >
                  Github
                </a>
                <Link
                  to={url[i]}
                  className="  h-auto w-auto rounded-full bg-blue-500 p-1 lg:w-auto lg:rounded-full lg:bg-blue-500 lg:p-2 lg:text-white"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
