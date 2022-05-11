import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ date }) => {

  return (
    <div className="my-28">
      <h4 className="text-secondary text-xl text-center">
        Available Appointments on {format(date, "PP")}
      </h4>
      
    </div>
  );
};

export default AvailableAppointments;
