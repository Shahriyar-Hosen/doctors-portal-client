import React from "react";
import InfoCards from "./InfoCard/InfoCards";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  const info1 = {
    heading: "Opening Hours",
    paragraph: "Lorem Ipsum is simply dummy text of the pri",
    gradient: true,
  };
  const info2 = {
    heading: "Visit our location",
    paragraph: "Brooklyn, NY 10036, United States",
    gradient: false,
  };
  const info3 = {
    heading: "Contact us now",
    paragraph: "+000 123 456789",
    gradient: true,
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
      <InfoCards infoCard={info1} img={clock}></InfoCards>
      <InfoCards infoCard={info2} img={marker}></InfoCards>
      <InfoCards infoCard={info3} img={phone}></InfoCards>
    </div>
  );
};

export default Info;
