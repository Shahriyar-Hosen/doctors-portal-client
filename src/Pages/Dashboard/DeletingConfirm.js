import React from "react";
import { toast } from "react-toastify";

const DeletingConfirm = ({ refetch, deletingDoctor, setDeletingDoctor }) => {
  const { name, email, specialty } = deletingDoctor;

  // Delete Doctor - delete by email
  const deleteUser = () => {
    const url = `https://floating-fortress-02159.herokuapp.com/doctor/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
  // ----------------------------------------
  return (
    <div>
      <input type="checkbox" id="deleting-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are You Sure!! You wont to Delete {name}!
          </h3>
          <p class="py-4 text-orange-700">
            {name} provides {specialty} services. <br />
            Make sure you wont to delete {name}!
          </p>
          <div class="modal-action">
            <button class="btn btn-xs btn-error" onClick={() => deleteUser()}>
              Delete
            </button>
            <label for="deleting-modal" class="btn btn-xs btn-error">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingConfirm;
