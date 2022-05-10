import React from "react";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className=" px-12">
      <Banner />
      <Info />
      <Services />
    </div>
  );
};

export default Home;
