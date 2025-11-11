import React from "react";

const Header = () => {
  return (
    <div className="flex p-6 h-1/8 w-full items-center justify-between  ">
      <div className="flex justify-center items-center gap-6 flex-row">
        <img src="./images/car.svg" alt="logo du site web" />
        <h1 className="font-bold text-4xl">Car Rental</h1>
      </div>

      <div className="nav">
        <ul className="flex gap-6 font-light">
          <li className="hover:font-extrabold transition-all duration-100 ">
            Home
          </li>
          <li className="hover:font-extrabold transition-all duration-100 ">
            Vehicules
          </li>
          <li className="hover:font-extrabold transition-all duration-100 ">
            Details
          </li>
          <li
            className="hover:font-extrabold
                  transition-all duration-100 "
          >
            About Us
          </li>
          <li
            className="hover:font-extrabold
                  transition-all duration-100 "
          >
            Contact Us
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2">
        <img className="" src="./images/phone.svg" alt="icone pour appel" />
        <div className="flex flex-col items-center">
          <p>Need help ?</p>
          <p className="font-bold">+996 247-1680</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
