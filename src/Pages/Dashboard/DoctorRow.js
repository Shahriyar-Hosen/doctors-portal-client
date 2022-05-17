import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ index, doctor, refetch }) => {
  const { name, img, specialty, email } = doctor;

  // Delete Doctor - delete by email
  const deleteUser = (email) => {
    const proceed = window.confirm("Delete This Doctor");
    if (proceed) {
      const url = `http://localhost:5000/doctor/${email}`;
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
            refetch();
          }
        });
    }
  };
  // ----------------------------------------
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-10 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name} </td>
      <td>{specialty}</td>
      <td>
        <button class="btn btn-xs btn-error" onClick={() => deleteUser(email)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
