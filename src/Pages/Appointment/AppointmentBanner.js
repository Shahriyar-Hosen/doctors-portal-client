import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bgChair from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bgChair})`, backgroundSize: "cover" }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
