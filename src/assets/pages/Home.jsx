import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className=" container mx-auto flex flex-col">
      <Header />

      <div className="hero flex border-box items-center h-150  bg-primary ml-20 mr-20 rounded-3xl">
        <div className="box-hero flex relative h-full w-full flex-col sm:flex-row justify-between">
          <div className="left pl-20  z-6 border-box flex-row md:flex-col gap-5 flex justify-center w-1/2">
            <h1 className="text-white font-bold tracking-wide text-xl sm:text-4xl">
              Experience the road <br /> like never before
            </h1>
            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
              quibusdam cumque, ad voluptatem corrupti velit vitae. Tempora
              suscipit, ad laboriosam error eveniet ea atque et rerum itaque
              sequi necessitatibus?
            </p>
            <button
              className="text-white w-1/3 cursor-pointer font-bold p-2 rounded-md bg-secondary
             hover:bg-white hover:text-secondary"
            >
              View all cars
            </button>
          </div>
          <div
            className="right pr-15 pt-15 pb-15
           z-6 flex justify-center items-center w-1/2  border-box "
          >
            <div
              className="box-form flex flex-col h-full justify-center items-center
             w-[85%] bg-white rounded-xl border-box p-10 gap-5"
            >
              <h1 className=" text-center text-2xl font-bold w-full ">
                Book your car
              </h1>
              <div className="boxSelect flex flex-col gap-5 w-full">
                <select
                  className="bg-gray-200 p-1.5 rounded-xl "
                  name="typeCar"
                  id=""
                >
                  <option className="w-full" value="car-type">
                    Car type
                  </option>
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
                <div className="flex flex-col">
                  <label htmlFor="rental of date">Rental of date</label>
                  <input
                    className="bg-gray-200 p-1.5 rounded-xl"
                    label="rental of date"
                    type="date"
                    name="rental-date"
                    id=""
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Return of date">Return of date</label>
                  <input
                    className="bg-gray-200 p-1.5 rounded-xl"
                    placeholder="Return of date"
                    type="date"
                    name="return-date"
                    id=""
                  />
                </div>
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
            className="absolute flex justify-center 
            
            items-center w-1/2 h-1/2 top-[50%] left-[25%] z-3"
            src="./images/car-blur.png"
            alt="voiture flouter"
          />
          <img
            className="absolute flex w-full h-full  z-2"
            src="./images/pneu-marque.svg"
            alt="trace de pneu"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
