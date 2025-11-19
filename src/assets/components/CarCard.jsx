import React from "react";
import { useEffect, useState } from "react";
import Car from "./Car";

// API AXIOS AVEC DB JSON
const CarCard = () => {
  const [listCar, setListCar] = useState([]);
  useEffect(() => {
    fetch("data/cars.json")
      .then((res) => res.json())
      .then((data) => setListCar(data));
  }, []);

  return (
    <ul className="flex justify-center items-center gap-5 w-full border-box flex-wrap">
      {listCar.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarCard;
