import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-28"
    >
      <div className="lg:flex-1">
        <img className="mt-[-165px] hidden lg:block" src={doctor} alt="" />
      </div>
      <div className="p-10 lg:flex-1">
        <h1 className="text-primary font-bold text-xl">Appointment</h1>
        <h3 className="text-white font-bold text-xl my-8">
          Make an appointment Today
        </h3>
        <p className="text-white my-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
