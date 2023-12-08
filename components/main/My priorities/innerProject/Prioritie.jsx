import React, { useState } from "react";
import Prioritie_Data from "./Priority_Data";
import OverDue from "../OverDue/OverDue";
import Completed from "../Completed/Completed";

export default function Prioritie() {
  const [state, setState] = useState(2);

  const Priorities = [
    {
      Date: "5-july-2022",
      Name: "John Wick",
      Feedback: "error",
    },
    {
      Date: "15-Jan-2022",
      Name: "Johnny Deb ",
      Feedback: "correction",
    },
  ];
  return (
    <div
      id="shadow"
      className="border h-[400px] md:text-[15px] sm:w-[97%] md:w-[100%] lg:w-[49%] my-3 rounded-[20px] text-[9px] py-3  "
    >
      <div className="flex sm:px-4 px-7 ">
        <div className="py-2 w-[10%]">
          <img
            src="/bigicon.png"
            className="lg:h-9 md:h-9 sm:h-9 sm:w-9 md:w-9 lg:w-9"
          />
        </div>
        <div className="w-[95%] flex items-center">
          <div className="w-[100%] px-4  h-[380px] overflow-y-scroll">
            <h1 className=" text-secondary lg:pb-0 md:pb-0 sm:pb-0 pb-1 sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[22px] xs:text-[1%] font-bold ">
              My Tasks
            </h1>
            {/* <div className="flex  w-[80%] justify-between">
              <button
                onClick={() => setState(2)}
                className={`"text-gray-500 sm:text-[12px] lg:text-[15px] xl:text-[15px] sm:mx-2 m-1 px-2 active:text-gray-600 active:font-bold" ${
                  state == 2 &&
                  "sm:text-[12px] lg:text-[15px] xl:text-[15px] font-semibold sm:mx-3 text-gray-600 bg-gray-200 px-2 rounded-xl"
                }`}
              >
                Overdue
              </button>
              <button
                onClick={() => setState(3)}
                className={`"text-gray-500 sm:text-[12px] lg:text-[15px]  xl:text-[15px] sm:mx-2 m-1 px-2 active:text-gray-600 active:font-bold"${
                  state == 3 &&
                  "sm:text-[12px] lg:text-[15px] xl:text-[15px] font-semibold sm:mx-3 text-gray-600 bg-gray-200 px-2 rounded-xl"
                }`}
              >
                Completed
              </button>
            </div> */}
            <div className="w-[100%] mt-4">
              <div className="w-[100%] flex justify-between border-b font-semibold text-[18px]">
                <h1 className="px-2">Tasks</h1>
                <h1 className="w-[100px] px-2">Due Date</h1>
              </div>
              <div className="flex justify-between my-1">
                <p className="px-2">Tasks will be here</p>
                <p className="w-[100px]  px-2">Date</p>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="py-3 w-[10%] ">
          <img
            src="/Group22.jpg"
            className="lg:h-7 md:h-5 lg:mb-6 md:mb-5 mb-4 h-4"
          />
        </button> */}
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[290px] w-[95%] overflow-scroll">
          {state == 1 &&
            Priorities.map((x, i) => {
              return <Prioritie_Data key={i} data={x} />;
            })}
          {/* {state == 2 && <OverDue />}
      {state == 3 && <Completed />} */}
        </div>
      </div>
    </div>
  );
}
