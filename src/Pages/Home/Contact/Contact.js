import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/Button/PrimaryButton";

const Contact = () => {
  return (
    <div style={{ background: `url(${appointment})` }} className="shadow-xl mt-10">
      <div className="card-body items-center text-center">
        <div className="text-center font-bold text-xl">
          <h1 className="text-primary">Contact Us</h1>
          <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
        <div className="card-actions w-96 block mx-auto">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full  my-3 block"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full  block my-3"
          />
          <textarea className="textarea  w-full" placeholder="Your message"></textarea>
        </div>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
