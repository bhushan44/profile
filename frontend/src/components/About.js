import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function About() {
  return (
    <div
      className="relative z-0 m-2 flex h-auto w-auto flex-col items-center justify-center overscroll-auto overscroll-x-auto  
      border-2 border-solid   border-black  p-3 pt-[100px]
        lg:flex lg:h-screen lg:flex-col lg:items-center lg:justify-center lg:gap-5"
    >
      <h1 className="lg:text-lg">Get to know more</h1>
      <h1 className="lg:mb-16 lg:text-3xl"> About Me</h1>
      <div className=" mt-10 flex flex-col items-center  justify-center gap-10 lg:flex lg:flex-col   lg:items-center lg:justify-center lg:gap-10 ">
        <div className="  flex flex-col gap-5 lg:flex  lg:flex-row lg:items-center lg:justify-center lg:gap-11 ">
          <div className="   flex w-[250px] flex-col items-center justify-center rounded-lg border-2  border-solid border-black lg:flex  lg:h-auto lg:w-[300px] lg:flex-col lg:items-center lg:justify-center lg:rounded-3xl  lg:border-2 lg:border-solid lg:border-black lg:p-5 lg:text-lg">
            <WorkspacePremiumIcon
              style={{ fontSize: "75px" }}
            ></WorkspacePremiumIcon>
            <h1>experience</h1>
            <h1> 0+ years </h1>
            <h1>Frontend Development</h1>
          </div>
          <div className=" flex w-[250px] flex-col items-center justify-center rounded-lg border-2  border-solid border-black lg:flex  lg:h-auto lg:w-[300px] lg:flex-col lg:items-center lg:justify-center lg:rounded-3xl  lg:border-2 lg:border-solid lg:border-black lg:p-5 lg:text-lg">
            <SchoolIcon style={{ fontSize: "75px" }}></SchoolIcon>
            <h1>Education</h1>
            <h1>Bechelor of Technology</h1>
            <h1>Information Technology</h1>
          </div>
        </div>

        <div className="lg: flex w-[350px] flex-col items-center justify-center rounded-lg border-2  border-solid border-black border-black p-3 lg:h-auto lg:w-[800px]  lg:rounded-3xl lg:border-2 lg:border-solid lg:p-10 lg:text-lg">
          I am Nagabhushanrao Mandala. I am studying 3/4 BTech in the stream of
          information Technology in SagiRamaKrishnam Engineering college. "I
          aspire to begin my career as a web developer, eager to bring my fresh
          perspective and passion for coding to the field."
        </div>
      </div>
    </div>
  );
}
