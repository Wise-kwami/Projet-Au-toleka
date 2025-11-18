import React from "react";

const Car = () => {
  return (
    // <li className="w-[150px] h-[150px] bg-black"></li>
    <li className="flex justify-between flex-col w-[300px] border rounded-2xl p-5 bg-neutral">
      <div className=" flex h-[40%]">
        <img
          className="w-full cover"
          src="images/mercedes_sport.svg"
          alt="image du vehicule"
        />
      </div>
      <div className=" flex  justify-between items-center">
        <div className="box-leftflex flex-col ml-8 mr-8">
          <h2>NAme</h2>
          <p>Modele</p>
        </div>
        <div className="box-right flex flex-col ml-8 mr-8">
          <p>Name</p>
          <p>per day</p>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="flex">
          <img src="images/transm.svg" alt="icone" />
          <p>transmission</p>
        </span>
        <span className="flex">
          <img src="images/fuel.svg" alt="icone" />
          <p>Essence</p>
        </span>
        <span className="flex">
          <img src="images/air_cond.svg" alt="icone" />
          <p>Air cond</p>
        </span>
      </div>
    </li>
  );
};

export default Car;
