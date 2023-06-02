import React from "react";
import Button from "./Button";
// import OrderForm from "./OrderForm";

const Card = ({ title, price, description }) => {
  return (
    <div className="py-4 max-w-xs m-6">
      <div className="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div className="px-8 flex justify-center items-center">
          <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        </div>
        <h1 className="text-4xl text-center font-bold">{price}</h1>
        <ul className="text-center">
          {description.map((el) => (
            <li key={el}>
              <a href="#" className="">
                {el}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center bg-gray-200 ">
          <button className="inline-block my-6 font-bold text-gray-800">
            Get started today
          </button>
          {/* <OrderForm/> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
