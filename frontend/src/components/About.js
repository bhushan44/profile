import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function About() {
  return (
    <div className="h-screen bg-slate-50 gap-5 flex flex-col justify-center items-center">
      <h1 className="text-lg">Get to know more</h1>
      <h1 className="text-3xl mb-16"> About Me</h1>
      <div className="flex-col flex   gap-10 justify-center items-center ">
        <div className="flex gap-11  justify-center items-center ">
          <div className="  text-lg flex flex-col justify-center items-center rounded-3xl border-black  border-2 border-solid w-[300px] h-auto p-5">
            <WorkspacePremiumIcon
              style={{ fontSize: "75px" }}
            ></WorkspacePremiumIcon>
            <h1>experience</h1>
            <h1> 1+ years </h1>
            <h1>Frontend Development</h1>
          </div>
          <div className="flex text-lg flex-col justify-center items-center rounded-3xl border-black  border-2 border-solid w-[300px] h-auto p-5">
            <SchoolIcon style={{ fontSize: "75px" }}></SchoolIcon>
            <h1>Education</h1>
            <h1>Bechelor of Technology</h1>
            <h1>Information Technology</h1>
          </div>
        </div>

        <div className="  text-lg rounded-3xl border-black  border-2 border-solid w-[800px] h-auto p-10">
          I am Nagabhushanrao Mandala. I am studying 3/4 BTech in the stream of
          information Technology in SagiRamaKrishnam Engineering college. "I
          aspire to begin my career as a web developer, eager to bring my fresh
          perspective and passion for coding to the field."
        </div>
      </div>
    </div>
  );
}
