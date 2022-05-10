import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.description}</p>
        <div class="card-actions  flex items-center mt-5">
          <div class="avatar mr-5">
            <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review?.img} alt="" />
            </div>
          </div>
          <div className="text-xl ">
            <h4>{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
