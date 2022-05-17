import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card sm:max-w-sm md:max-w-md lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Date!</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
