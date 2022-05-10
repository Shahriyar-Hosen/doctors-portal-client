import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import treatment from "../../../assets/images/treatment.png";
import whitening from "../../../assets/images/whitening.png";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import Service from "./Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      name: "Fluoride Treatment",
      details: "",
    },
    {
      _id: 2,
      img: cavity,
      name: "Cavity Filling",
      details: "",
    },
    {
      _id: 3,
      img: whitening,
      name: "Teeth Whitening",
      details: "",
    },
  ];
  return (
    <div className=" my-28">
      <div className="text-center font-bold text-xl">
        <h1 className="text-secondary">OUR SERVICES</h1>
        <h2 className="text-4xl text-black">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:pl-16">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
