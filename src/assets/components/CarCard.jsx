import React from "react";
// import { useEffect } from "react";

// useEffect(() => {
//   fetch ('data\cars.json').then(res=> res.json()).
//   then()
// }, []);

// API AXIOS AVEC DB JSON

const CarCard = () => {
  return (
    <li className=" flex justify-between flex-col w-1/3 h-[300px] border rounded-2xl bg-blue">
      <div className=" flex h-[40%]">
        <img
          className="w-full"
          src="images/mercedes_van.svg"
          alt="image du vehicule"
        />
      </div>
      <div className=" flex  justify-between items-center">
        <div className="box-leftflex flex-col ml-8 mr-8">
          <h2>Marque</h2>
          <p>Modele</p>
        </div>
        <div className="box-right flex flex-col ml-8 mr-8">
          <p>25$</p>
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
      <div></div>
    </li>
  );
};

export default CarCard;
