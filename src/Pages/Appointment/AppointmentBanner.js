import React  from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bgChair})`, backgroundSize: "cover" }}
      class="hero min-h-screen"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
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
