import React from "react";

const InfoCards = ({ infoCard, img }) => {
  const { heading, paragraph, gradient } = infoCard;
  console.log(gradient);
  return (
    <div
      className={`card lg:card-side ${
        gradient ? "bg-gradient-to-r from-secondary to-primary" : "bg-accent"
      } shadow-xl text-white p-5`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default InfoCards;
