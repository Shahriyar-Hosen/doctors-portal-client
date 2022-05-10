import React from "react";

const InfoCards = ({ infoCard, img }) => {
  const { heading, paragraph, bgClass } = infoCard;
  return (
    <div className={`card lg:card-side shadow-xl text-white p-5 ${bgClass}`}>
      <figure>
        <img className="p-0 lg:pl-5" src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default InfoCards;
