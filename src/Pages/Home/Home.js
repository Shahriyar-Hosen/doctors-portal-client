import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <section className=" px-12">
        <Banner />
        <Info />
        <Services />
      </section>
      <MakeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
