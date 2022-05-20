import React from "react";

const DoctorRow = ({ index, doctor, setDeletingDoctor }) => {
  const { name, img, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name} </td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="deleting-modal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
