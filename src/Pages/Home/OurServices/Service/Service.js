import React from "react";

const Service = ({ img, serviceInfo }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl d-block mx-auto mt-10">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
