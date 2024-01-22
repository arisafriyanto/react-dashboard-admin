import React from "react";
import {
  BiSearch,
  BiMoney,
  BiOutline,
  BiUser,
  BiHomeAlt,
  BiEdit,
  //   BiTrash,
} from "react-icons/bi";

import { FiEye } from "react-icons/fi";

import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function ContentLeft() {
  const trailingActions = () => (
    <TrailingActions>
      {/* <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <BiTrash size={20} color="white" />
        </div>
      </SwipeAction> */}

      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <BiEdit size={20} color="white" />
        </div>
      </SwipeAction>

      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <FiEye size={20} color="white" />
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <section className="content-left px-14 pt-14 flex-1 h-screen overflow-y-scroll">
      <div className="border border-gray-300 rounded-lg w-full flex py-3 px-3 items-center">
        <BiSearch className="mr-2" />
        <input type="text" className="flex-1" placeholder="Search" />
      </div>
      <h3 className="text-xl text-blue-700 my-8 font-semibold">
        Welcome Back Wings On Admin!
      </h3>

      <div className="flex flex-row space-x-6">
        <Card
          bgColor={"bg-green-500"}
          txtColor={"text-green-600"}
          icon={<BiMoney size={25} />}
          label={
            <span className="text-sm">
              Income <br />
              +Rp.1000.000
            </span>
          }
        />
        <Card
          bgColor={"bg-red-500"}
          txtColor={"text-red-600"}
          icon={<BiOutline size={25} />}
          label={
            <span className="text-sm">
              Outcome <br />
              -Rp.500.000
            </span>
          }
        />
        <Card
          bgColor={"bg-yellow-500"}
          txtColor={"text-yellow-600"}
          icon={<BiUser size={25} />}
          label={
            <span className="text-sm">
              Account <br />
              1129 person
            </span>
          }
        />

        <Card
          bgColor={"bg-teal-500"}
          txtColor={"text-teal-600"}
          icon={<BiHomeAlt size={25} />}
          label={
            <span className="text-sm">
              Dashboard <br />
              Information
            </span>
          }
        />
      </div>
      <div className="mt-10">
        {Array.from(Array(8)).map((_, index) => (
          <div key={index} className="rounded-2xl bg-blue-700 mb-4">
            <SwipeableList threshold={0.9} type={Type.IOS}>
              <SwipeableListItem trailingActions={trailingActions()}>
                <div className="bg-white p-4 rounded-xl border border-gray-200 w-full flex">
                  <img
                    src="https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div className="text-sm">
                    <div className="text-gray-900">John Smith</div>
                    <div className="text-xs text-gray-400">
                      johnsmith@gmail.com
                    </div>
                  </div>
                </div>
              </SwipeableListItem>
            </SwipeableList>
          </div>
        ))}
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div
      className={`rounded-xl ${props.bgColor} bg-opacity-10 py-7 px-5 w-36 ${props.txtColor} space-y-4`}
    >
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  );
}
