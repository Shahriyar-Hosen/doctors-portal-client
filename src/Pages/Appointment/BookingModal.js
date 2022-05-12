import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;

  if (loading) {
    return <Loading></Loading>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-xl text-accent pb-3">{name}</h3>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot,index) => (
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
              class="input input-bordered w-full max-w-xs"
            />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email}
                class="input input-bordered w-full max-w-xs"
              />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="SUBMIT"
              class="input w-full max-w-xs bg-accent text-white text-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
