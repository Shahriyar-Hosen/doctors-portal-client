import React from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
  return (
    <div>
      <section className=" px-12">
        <AppointmentBanner />
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
