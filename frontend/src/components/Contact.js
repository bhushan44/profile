import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const TempParams = {
    from_name: details.name,
    from_email: details.email,
    to_name: "bhushan",
    message: details.message,
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_o7b0blb",
        "template_iq2rtal",
        TempParams,
        "cpjdXw3jhe4brNk3n",
      )
      .then(
        (response) => {
          window.alert("SUCCESS!");
        },
        (error) => {
          window.alert("FAILED...");
        },
      );
    setDetails({ name: "", email: "", message: "" });
  };

  return (
    <div className=" relative z-0 flex h-auto flex-col items-center justify-center gap-5  lg:relative lg:flex lg:h-screen lg:flex-col lg:items-center lg:justify-center">
      <div className="   top-10 lg:absolute lg:top-10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-5">
        <h1 className="lg:text-slate-800">Get in Touch</h1>
        <h1 className="lg:text-5xl">Contact me</h1>
      </div>
      <div className="  border-rounded flex h-[400px]  w-[350px] flex-col  gap-10 border-2 border-black p-10 lg:relative lg:flex lg:h-[400px] lg:w-[400px] lg:flex-col lg:gap-10 lg:rounded-lg lg:border-2 lg:border-solid lg:border-black lg:pt-20">
        <div className=" ">
          <label className="lg:absolute lg:left-10">your name</label>
          <input
            className=" absolute left-[165px] rounded-sm border-2 border-solid border-black lg:absolute lg:left-40 lg:rounded-md lg:border-2 lg:border-solid lg:border-black"
            type="text"
            value={details.name}
            onChange={(e) => {
              setDetails({
                ...details,
                name: e.target.value,
              });
            }}
          ></input>
        </div>
        <div>
          <label className="lg:absolute lg:left-10">your email</label>
          <input
            className=" absolute left-[165px] rounded-sm border-2 border-solid  border-black lg:absolute lg:left-40 lg:rounded-md lg:border-2 lg:border-solid"
            type="email"
            value={details.email}
            onChange={(e) => {
              setDetails({
                ...details,
                email: e.target.value,
              });
            }}
          ></input>
        </div>
        <div className="">
          <label className="lg:absolute lg:left-10">your message</label>
          <textarea
            rows="4"
            cols=""
            className="absolute left-[165px] rounded-sm border-2 border-solid border-black lg:absolute lg:left-40 lg:right-12 lg:rounded-md lg:border-2 lg:border-solid lg:border-black"
            type="text"
            value={details.message}
            onChange={(e) => {
              setDetails({
                ...details,
                message: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <button
          onClick={sendEmail}
          className="absolute bottom-[70px] left-[200px] mt-20 flex items-center justify-center rounded-lg bg-blue-500 p-2 lg:absolute lg:bottom-20 lg:left-40 lg:h-auto lg:w-auto lg:rounded-lg lg:bg-blue-400 lg:p-3 lg:text-white"
        >
          submit
        </button>
      </div>
    </div>
  );
}
