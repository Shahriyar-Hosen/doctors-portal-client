import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <section className=" px-12">
        <Banner />
        <Info />
        <Services />
      </section>
      <MakeAppointment />
    </div>
  );
};

export default Home;
