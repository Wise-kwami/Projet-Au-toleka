import React from "react";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex p-6 h-1/8 w-full items-center justify-between  ">
        <div className="flex justify-center items-center gap-6 flex-row">
          <img src="src\assets\images\car.png" alt="logo du site web" />
          <h1 className="font-bold text-2xl">Car Rental</h1>
        </div>

        <div className="nav">
          <ul className="flex gap-6 font-light">
            <li
              className="hover:font-bold hover:border-b-2
             hover:text-primary transition-all duration-100 "
            >
              Home
            </li>
            <li
              className="hover:font-bold hover:border-b-2
             hover:text-primary transition-all duration-100 "
            >
              Vehicules
            </li>
            <li
              className="hover:font-bold hover:border-b-2
             hover:text-primary transition-all duration-100 "
            >
              Details
            </li>
            <li
              className="hover:font-bold hover:border-b-2
             hover:text-primary transition-all duration-100 "
            >
              About Us
            </li>
            <li
              className="hover:font-bold hover:border-b-2
             hover:text-primary transition-all duration-100 "
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-2">
          <img
            className="w-1/4"
            src="src\assets\images\phone.png"
            alt="icone pour appel"
          />
          <div className="flex flex-col items-center">
            <p>Need help ?</p>
            <p className="font-bold">+996 247-1680</p>
          </div>
        </div>
      </div>
      <div className="hero flex border-box items-center h-150 p-10 bg-primary m-5 rounded-3xl">
        <div className="flex h-full w-full flex-row justify-between">
          <div className="left border-box flex-col gap-5 flex justify-center w-1/2">
            <h1 className="text-white font-bold text-5xl">
              Experience the road <br /> like never before
            </h1>
            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
              quibusdam cumque, ad voluptatem corrupti velit vitae. Tempora
              suscipit, ad laboriosam error eveniet ea atque et rerum itaque
              sequi necessitatibus?
            </p>
            <button
              className="text-white w-1/4 cursor-pointer font-bold p-2 rounded-md bg-secondary
             hover:bg-white hover:text-secondary"
            >
              View all cars
            </button>
          </div>
          <div className="right flex justify-center items-center w-1/2  border-box ">
            <div
              className="flex flex-col h-[90%] justify-center items-center
             w-[70%] bg-white rounded-xl border-box p-10 gap-5"
            >
              <h1 className=" text-center text-2xl font-bold w-full ">
                Book your car
              </h1>
              <div className="boxSelect flex flex-col gap-10 w-full">
                <select className="border-2" name="typeCar" id="">
                  <option value="car-type">Car type</option>
                </select>
                <select className="border-2" name="place-rental" id="">
                  <option value="place-rental">Place of rental</option>
                </select>
                <select className="border-2" name="place-return" id="">
                  <option value="place-return">Place of return</option>
                </select>
                <select className="border-2" name="rental-date" id="">
                  <option value="rental-date">Rental of date</option>
                </select>
                <select className="border-2" name="return-date" id="">
                  <option value="return-date">Return of date</option>
                </select>
              </div>
              <button
                className=" bg-secondary w-[90%] text-1xl p-2.5 text-white
              hover:bg-white hover:text-secondary border-2
               transition-all duration-100 rounded-xl font-bold "
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
