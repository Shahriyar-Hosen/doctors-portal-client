import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;

  if (loading) {
    return <Loading></Loading>;
  }

  const formattedDate = format(date, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    // create / POST Method - Add to database
    fetch("https://floating-fortress-02159.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // ------------------------------------
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-accent pb-3">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="input w-full max-w-xs bg-accent text-white text-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
