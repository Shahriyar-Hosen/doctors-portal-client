import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" p-10 bg-neutral text-neutral-content">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Jobs</Link>
          <Link to="/" className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Privacy policy</Link>
          <Link to="/" className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>Copyright 	&copy; {new Date().getFullYear()} - All right reserved by Doctors Portal</p>
      </div>
    </footer>
  );
};

export default Footer;
