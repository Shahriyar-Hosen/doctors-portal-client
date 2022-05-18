import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { date, patientName, treatment, slot, price } = appointment;
  console.log(appointment);

  return (
    <div class="card w-full lg:w-1/2 my-12 lg:mx-auto bg-base-100 shadow-xl">
      <div class="card w-full bg-base-100 shadow-lg mb-20">
        <div class="card-body">
          <p className="text-success">Hello, {patientName}</p>
          <h2 class="card-title text-2xl font-bold">
            Please Pay for {treatment}
          </h2>
          <p>
            Your Appointment: <span className="text-orange-700">{date}</span> at{" "}
            {slot}{" "}
          </p>
          <p>Please Pay: ${price}</p>
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
