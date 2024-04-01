import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function About() {
  return (
    <div className="lg:h-screen lg:bg-slate-50 lg:gap-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <h1 className="lg:text-lg">Get to know more</h1>
      <h1 className="lg:text-3xl lg:mb-16"> About Me</h1>
      <div className="lg:flex-col lg:flex   lg:gap-10 lg:justify-center lg:items-center ">
        <div className="lg:flex lg:gap-11 lg:justify-center lg:items-center ">
          <div className="  lg:text-lg  lg:flex lg:flex-col lg:justify-center lg:items-center lg:rounded-3xl lg:border-black  lg:border-2 lg:border-solid lg:w-[300px] lg:h-auto lg:p-5">
            <WorkspacePremiumIcon
              style={{ fontSize: "75px" }}
            ></WorkspacePremiumIcon>
            <h1>experience</h1>
            <h1> 0+ years </h1>
            <h1>Frontend Development</h1>
          </div>
          <div className="  lg:text-lg  lg:flex lg:flex-col lg:justify-center lg:items-center lg:rounded-3xl lg:border-black  lg:border-2 lg:border-solid lg:w-[300px] lg:h-auto lg:p-5">
            <SchoolIcon style={{ fontSize: "75px" }}></SchoolIcon>
            <h1>Education</h1>
            <h1>Bechelor of Technology</h1>
            <h1>Information Technology</h1>
          </div>
        </div>

        <div className="  lg:text-lg lg:rounded-3xl lg: border-black  lg:border-2 lg:border-solid lg:w-[800px] lg:h-auto lg:p-10">
          I am Nagabhushanrao Mandala. I am studying 3/4 BTech in the stream of
          information Technology in SagiRamaKrishnam Engineering college. "I
          aspire to begin my career as a web developer, eager to bring my fresh
          perspective and passion for coding to the field."
        </div>
      </div>
    </div>
  );
}
