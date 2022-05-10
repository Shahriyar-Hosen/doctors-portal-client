import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import Service from "./Service/Service";

const OurServices = () => {
  const service1 = {
    serviceTitle: "Fluoride Treatment",
    serviceDetails:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  };
  const service2 = {
    serviceTitle: "Cavity Filling",
    serviceDetails:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  };
  const service3 = {
    serviceTitle: "Teeth Whitening",
    serviceDetails:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  };
  return (
    <div className="mt-52 my-10 px-12">
      <h1 className="text-center text-secondary">OUR SERVICES</h1>
      <h2 className="text-center text-3xl">Services We Provide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Service img={fluoride} serviceInfo={service1}></Service>
        <Service img={cavity} serviceInfo={service2}></Service>
        <Service img={whitening} serviceInfo={service3}></Service>
      </div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} alt="" class="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:pl-16">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
