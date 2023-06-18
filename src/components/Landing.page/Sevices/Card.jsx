import React from "react";
import { IoColorPaletteOutline } from 'react-icons/io5'
import { useState } from "react";

function Card({ title, icon, discription }) {
  return (
    <div className="w-56 h-64 shadow-2xl shadow-gray-300 flex flex-col justify-start items-center rounded-3xl ">
      <div className="w-20 h-20 mt-4 flex justify-center items-center">
        <div className="w-10 h-10 absolute mt-4 mr-4 -z-10 bg-[#C5EBFE] rounded-2xl"></div>
        {icon}
      </div>
      <span className=" text-lg text-gray-800 font-bold">
        {title}
      </span>
      <p className=" w-52 mt-3 px-3 text-center align-middle font-medium text-sm text-gray-700">
        {discription}
      </p>
    </div>
  );
}

export default Card;