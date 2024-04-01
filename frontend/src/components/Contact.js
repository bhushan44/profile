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
        "cpjdXw3jhe4brNk3n"
      )
      .then(
        (response) => {
          window.alert("SUCCESS!");
        },
        (error) => {
          window.alert("FAILED...");
        }
      );
    setDetails({ name: "", email: "", message: "" });
  };

  return (
    <div className="lg:h-screen lg:flex lg:relative lg:flex-col lg:justify-center lg:items-center">
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:absolute lg:p-5 lg:top-10">
        <h1 className="lg:text-slate-800">Get in Touch</h1>
        <h1 className="lg:text-5xl">Contact me</h1>
      </div>
      <div className="lg:border-2 lg:relative lg:pt-20 lg:border-black lg:flex lg:gap-10 lg:flex-col lg:border-solid lg:rounded-lg lg:w-[400px] lg:h-[400px]">
        <div className="">
          <label className="lg:absolute lg:left-10">your name</label>
          <input
            className="lg:border-2 lg:absolute lg:left-40 lg:border-black lg:border-solid lg:rounded-md"
            type="lg:text"
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
            className="lg:border-2 lg:absolute lg:left-40 lg: border-black lg:border-solid lg:rounded-md"
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
            className="lg:border-2 lg:absolute lg:left-40 lg:right-12 lg: border-black lg:border-solid lg:rounded-md"
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
          className="lg:absolute lg:bg-blue-400 lg:bottom-20 lg:h-auto lg:w-auto lg:p-3 lg:rounded-lg lg:text-white lg:left-40"
        >
          submit
        </button>
      </div>
    </div>
  );
}
