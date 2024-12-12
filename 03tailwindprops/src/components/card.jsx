import React from "react";

function Card({Username, btnText="Default Value"}) {
    // console.log(props)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mt-5">
      <img
        src="https://images.pexels.com/photos/29648208/pexels-photo-29648208/free-photo-of-dramatic-black-and-white-seaside-photography.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-50 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-5 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{Username}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card
