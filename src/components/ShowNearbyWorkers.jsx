import React from "react";

const ShowNearbyWorkers = ({ worker }) => {
  return (
    <div className=" flex flex-col justify-center items-center border-2">
      <img
        className=" h-16 w-16 rounded-full object-cover"
        src={worker.profilePicUrl}
        alt=""
      />
      <p>{worker.skill}</p>
    </div>
  );
};

export default ShowNearbyWorkers;
