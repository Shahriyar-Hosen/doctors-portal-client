import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        {user ? (
          <NavLink to="/login" onClick={logout}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="hidden lg:flex gap-x-5 navbar-end">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div
        className={`${
          pathname === "/dashboard" ||
          "/dashboard/review" ||
          "/dashboard/history" ||
          "/dashboard/users"
            ? " navbar-end md:hidden"
            : "hidden"
        }`}
      >
        <label
          tabIndex="0"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
