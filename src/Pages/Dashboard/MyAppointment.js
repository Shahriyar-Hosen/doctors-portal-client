import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://floating-fortress-02159.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          return setAppointments(data);
        });
    }
  }, [user, navigate]);

  /* 
  // how to use array revers using map
  const arr = ['a', 'b', 'c'];

const mapReverse1 = arr
  .slice(0)
  .reverse()
  .map(element => {
    return element;
  });

console.log(mapReverse1); // 👉️ ['c', 'b', 'a']
  */

  return (
    <div className="md:mx-24">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Patient</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments
              ?.slice(0)
              .reverse()
              .map((a, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{a.patientName}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                  <td>
                    {a.price && !a.paid && (
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success mx-auto">
                          Pay
                        </button>
                      </Link>
                    )}
                    {a.price && a.paid && (
                      <div className="text-green-500">
                        <p className="text-xl">Paid ✅</p>{" "}
                        <small className="">
                          Transaction Id: 🔖
                           {a.transactionId}
                        </small>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
