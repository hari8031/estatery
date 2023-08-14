import React from "react";
import { RiHotelBedFill } from "react-icons/ri";
import { MdOutlineBathroom } from "react-icons/md";
import { LuScale3D } from "react-icons/lu";

function Card({ item }) {
  return (
    <div className="w-[400px]  rounded shadow-2xl">
      <img src={item.img_src} alt="" />
      <div className="p-[16px]">
        <span className=" text-btnBlue text-3xl font-bold">{item.price}</span>
        <span className="text-lg text-gray-400 font-bold">/month</span>
        <h4 className="text-3xl font-bold my-[16px]">{item.name}</h4>
        <span className=" text-gray-400 font-semibold">{item.address}</span>
        <div className=" border-t-[1px] border-gray-300 pt-2 mt-3 flex justify-between text-gray-400 font-semibold">
          <span className="flex items-center gap-2">
            <RiHotelBedFill size={25} />
            {item.Bedroom} Beds
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineBathroom size={25} />
            {item.Bathrooms} bathrooms
          </span>
          <span className="flex items-center gap-2">
            <LuScale3D size={25} />
            {item.size}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
