import React from "react";

const Service = ({ service }) => {
  return (
    <div class="card bg-base-100 shadow-xl d-block mx-auto mt-10">
      <figure class="px-10 pt-10">
        <img src={service.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </div>
  );
};

export default Service;
