import React from "react";

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex p-6 h-1/8 w-full items-center justify-between  ">
        <div className="flex justify-center items-center gap-6 flex-row">
          <img src="src\assets\images\car.svg" alt="logo du site web" />
          <h1 className="font-bold text-4xl">Car Rental</h1>
        </div>

        <div className="nav">
          <ul className="flex gap-6 font-light">
            <li className="hover:font-bold transition-all duration-100 ">
              Home
            </li>
            <li className="hover:font-bold transition-all duration-100 ">
              Vehicules
            </li>
            <li className="hover:font-bold transition-all duration-100 ">
              Details
            </li>
            <li
              className="hover:font-bold
              transition-all duration-100 "
            >
              About Us
            </li>
            <li
              className="hover:font-bold
              transition-all duration-100 "
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-2">
          <img
            className=""
            src="src\assets\images\phone.svg"
            alt="icone pour appel"
          />
          <div className="flex flex-col items-center">
            <p>Need help ?</p>
            <p className="font-bold">+996 247-1680</p>
          </div>
        </div>
      </div>
      <div className="hero flex border-box items-center h-150 p-10 bg-primary ml-5 mr-5 rounded-3xl">
        <div className="flex relative h-full w-full flex-row justify-between">
          <div className="left z-6 border-box flex-col gap-5 flex justify-center w-1/2">
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
          <div className="right z-6 flex justify-center items-center w-1/2  border-box ">
            <div
              className="flex flex-col h-[90%] justify-center items-center
             w-[70%] bg-white rounded-xl border-box p-10 gap-5"
            >
              <h1 className=" text-center text-2xl font-bold w-full ">
                Book your car
              </h1>
              <div className="boxSelect flex flex-col gap-10 w-full">
                <select
                  className="bg-gray-200 p-1.5 rounded-xl"
                  name="typeCar"
                  id=""
                >
                  <option value="car-type">Car type</option>
                </select>
                <select
                  className="bg-gray-200 p-1.5 rounded-xl"
                  name="place-rental"
                  id=""
                >
                  <option value="place-rental">Place of rental</option>
                </select>
                <select
                  className="bg-gray-200 p-1.5 rounded-xl"
                  name="place-return"
                  id=""
                >
                  <option value="place-return">Place of return</option>
                </select>
                <input
                  className="bg-gray-200 p-1.5 rounded-xl"
                  label="rental of date"
                  type="date"
                  name="rental-date"
                  id=""
                />
                <input
                  className="bg-gray-200 p-1.5 rounded-xl"
                  placeholder="Return of date"
                  type="date"
                  name="return-date"
                  id=""
                />
              </div>
              <button
                className=" bg-secondary w-full text-1xl p-2.5 text-white
              hover:bg-white hover:text-secondary border-2
               transition-all duration-100 rounded-xl font-bold "
              >
                Book now
              </button>
            </div>
          </div>

          <img
            className="absolute w-[800px] z-3 cover top-[135px] left-[135px]"
            src="src\assets\images\car-blur.png"
            alt="voiture flouter"
          />
          <img
            className="absolute w-[900px] z-2"
            src="src\assets\images\pneu-marque.svg"
            alt="trace de pneu"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
