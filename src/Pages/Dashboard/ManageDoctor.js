import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeletingConfirm from "./DeletingConfirm";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery(["doctors"], () =>
    fetch(`https://floating-fortress-02159.herokuapp.com/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">Manage Doctors: {doctors.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>avatar</th>
              <th>name</th>
              <th>specialty</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DeletingConfirm
          deletingDoctor={deletingDoctor}
          setDeletingDoctor={setDeletingDoctor}
          refetch={refetch}
        ></DeletingConfirm>
      )}
    </div>
  );
};

export default ManageDoctor;
