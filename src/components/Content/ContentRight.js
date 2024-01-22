import React from "react";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import OrderList from "./OrderList";

export default function ContentRIght() {
  return (
    <section className="w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img
          src="https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User"
          className="w-9 h-9 object-cover rounded-full"
        />
      </div>
      <div>
        <OrderList />
      </div>
    </section>
  );
}
