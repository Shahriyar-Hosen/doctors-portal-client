import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <section>
        <AppointmentBanner date={date} setDate={setDate} />
        <AvailableAppointments date={date}></AvailableAppointments>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
