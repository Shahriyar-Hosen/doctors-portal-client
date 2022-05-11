import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <section className=" px-12">
        <AppointmentBanner date={date} setDate={setDate} />
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
