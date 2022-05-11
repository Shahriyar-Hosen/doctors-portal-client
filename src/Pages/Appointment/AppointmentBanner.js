import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      style={{ background: `url(${bgChair})`, backgroundSize: "cover" }}
      class="hero min-h-screen"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm  rounded-lg shadow-2xl" alt="" />
        <div className="py-10 lg:px-10 ">
          <div className="rounded-lg shadow-2xl bg-white">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
          <p className="text-center">You Have Selected: {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
