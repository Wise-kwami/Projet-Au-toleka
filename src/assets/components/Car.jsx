import React from "react";

const Car = ({ car }) => {
  return (
    // <li className="w-[150px] h-[150px] bg-black"></li>
    <li className="flex justify-between flex-col w-1/3 h-1/3 border rounded-2xl p-5 bg-neutral">
      <div className=" flex h-[40%]">
        <img
          className="w-full cover"
          src={car.image}
          //"images/mercedes_sport.svg"
          alt="image du vehicule"
        />
      </div>
      <div className=" flex  justify-between items-center">
        <div className="box-leftflex flex-col ml-8 mr-8">
          <h2 className="font-bold text-xl"> {car.brand} </h2>
          <p className=""> {car.model} </p>
        </div>
        <div className="box-right flex flex-col ml-8 mr-8">
          <p className="text-xl font-bold text-primary">$ {car.pricePerDay} </p>
          <p className="">per day</p>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <span className="flex gap-5">
          <img src="images/transm.svg" alt="icone" />
          <p>{car.transmission}</p>
        </span>
        <span className="flex gap-5">
          <img src="images/fuel.svg" alt="icone" />
          <p>Essence</p>
        </span>
        <span className="flex gap-5">
          <img src="images/air_cond.svg" alt="icone" />
          <p>Air cond</p>
        </span>
      </div>
      <div>
        <button className="bg-primary font-bold mt-5 text-white p-2 rounded-xl cursor-pointer w-full">
          View Details
        </button>
      </div>
    </li>
  );
};

export default Car;
