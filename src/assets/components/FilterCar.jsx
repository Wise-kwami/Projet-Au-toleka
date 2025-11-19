import React from "react";

const FilterCar = () => {
  return (
    <div>
      <ul className="flex items-center justify-center g-30 mt-10 mb-10  w-full ">
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          All vehicules
        </li>
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          Sedan
        </li>
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          Cabriole
        </li>
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          Pickup
        </li>
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          SUV
        </li>
        <li className="p-3 bg-primary text-center text-white rounded-3xl">
          Minivan
        </li>
      </ul>
    </div>
  );
};

export default FilterCar;
