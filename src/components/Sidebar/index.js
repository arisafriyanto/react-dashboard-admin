import React from "react";
import Airplane from "../../images/airplane.png";
import { BiDisc, BiGridAlt, BiHomeAlt, BiUser } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoAirplaneOutline } from "react-icons/io5";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt size={22} /> },
    { name: "Airplane", icon: <IoAirplaneOutline size={22} /> },
    { name: "Contact", icon: <BiUser size={22} /> },
    { name: "Account", icon: <BiGridAlt size={22} /> },
    { name: "Promo", icon: <BiDisc size={22} /> },
    { name: "Settings", icon: <IoIosSettings size={22} /> },
  ];
  return (
    <div className="w-64 h-screen border-r border-gray-200 px-9 space-y-14">
      <div className="flex flex-row items-center pt-8">
        <img src={Airplane} alt="Logo" className="mr-2 w-11 h-11" />
        <h5 className="text-xl font-semibold text-blue-700">Wings On</h5>
      </div>
      <div>
        <div className="mb-4 font-semibold text-blue-700">Menu</div>
        <ul className="space-y-7">
          {menu.map((val, index) => {
            return (
              <li key={index} className="flex flex-row items-center text-gray-500">
                <div className="mr-4">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
