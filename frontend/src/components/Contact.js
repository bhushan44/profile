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
    <div className="h-screen flex relative flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center absolute p-5 top-10">
        <h1 className="text-slate-800">Get in Touch</h1>
        <h1 className="text-5xl">Contact me</h1>
      </div>
      <div className="border-2 relative pt-20 border-black flex gap-10 flex-col border-solid rounded-lg w-[400px] h-[400px]">
        <div className="">
          <label className="absolute left-10">your name</label>
          <input
            className="border-2 absolute left-40 border-black border-solid rounded-md"
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
          <label className="absolute left-10">your email</label>
          <input
            className="border-2 absolute left-40 border-black border-solid rounded-md"
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
          <label className="absolute left-10">your message</label>
          <textarea
            rows="4"
            cols=""
            className="border-2 absolute left-40 right-12 border-black border-solid rounded-md"
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
          className="absolute bg-blue-400 bottom-20 h-auto w-auto p-3 rounded-lg text-white left-40"
        >
          submit
        </button>
      </div>
    </div>
  );
}
