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
    <div className="h-screen flex flex-col  gap-y-5 justify-center items-center">
      <h1 className="text-lg">Browse my</h1>
      <h1 className="text-6xl mb-10"> projects</h1>

      <div className="flex   gap-x-10 justify-center items-center">
        {images.map((o, i) => {
          return (
            <div className="  border-2 w-[300px] h-[400px] border-solid rounded-lg gap-y-4 border-black flex flex-col justify-center items-center">
              <img
                className="w-[250px] h-[250px]  mt-4 rounded-lg"
                src={o}
                alt="bhu"
              ></img>
              <h1 className="text-3xl">project {i + 1}</h1>
              <div className="flex gap-x-10 mb-5">
                <a
                  href={github[i]}
                  className="bg-blue-500 rounded-full text-white w-auto p-2"
                >
                  Github
                </a>
                <Link
                  to={url[i]}
                  className="bg-blue-500 rounded-full text-white w-auto p-2"
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
