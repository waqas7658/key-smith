import React from "react";

const ServiceCard = (items) => {
  return (
    <>
      <div className=" p-5 text-center rounded-lg shadow-lg h-[21rem]">
        <h1 className=" font-bold text-xl">{items.title}</h1>
        <p className="">{items.description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
