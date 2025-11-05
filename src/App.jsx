import React from "react";

const App = () => {
  return (
    <div className="flex">
      <div className="flex border-b-2 p-6  h-1/8 w-full items-center justify-between bg-secondary ">
        <div className="flex flex-row">
          <img src="" alt="logo du site web" />
          <h1 className="font-medium">Car Rental</h1>
        </div>

        <div className="nav ">
          <ul className="flex gap-6 font-light">
            <li className="hover:font-bold ">Home</li>
            <li className="hover:font-bold ">Vehicules</li>
            <li className="hover:font-bold ">Details</li>
            <li className="hover:font-bold ">About Us</li>
            <li className="hover:font-bold ">Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <img src="" alt="icone pour appel" />
          <div className="flex flex-col">
            <p>Need help ?</p>
            <p className="font-bold">+996 247-1680</p>
          </div>
        </div>
      </div>
      <div className="hero"></div>
    </div>
  );
};

export default App;
