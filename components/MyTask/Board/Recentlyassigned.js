import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbDots } from "react-icons/tb";

export default function Recentlyassigned() {
  return (
    <div className="ml-3 md:min-w-[23%] min-w-[22%] ">
      <div className="flex pt-6  justify-between">
        <div className="">Recently assigned</div>
        <div className="flex items-center">
          <img src="/Addd.png" className="h-2 sm:h-2 md:h-3" />
          <img src="/Ellipse5.png" className="h-1 pl-1 sm:h-1 md:h-2" />
          <img src="/Ellipse5.png" className="h-1 pl-1 sm:h-1 md:h-2" />
          <img src="/Ellipse5.png" className="h-1 pl-1 sm:h-1 md:h-2" />
        </div>
      </div>
      <div className="h-[650px]  border-2 border-gray-200 ">
        <button className="flex justify-center hover:bg-slate-200 w-[97%] m-1 py-1 rounded-[20px] items-center h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div>Add Task</div>
        </button>
      
        <div className="w-[97%] ml-1 h-[100px] hover:border rounded-2xl border border-white hover:border-gray-300 text-white hover:text-gray-500">
        <div className="flex w-[100%] p-3 justify-evenly">
              <AiOutlineCheckCircle
                size={20}
                className="text-gray-500 hover:text-green-500"
              />

              <input className="ml-3 w-[70%]" placeholder="Write a task name" />
              <div className="flex justify-center items-center ml-5">
                <TbDots className="h-6 w-5 hover:border-[1px] rounded-[10px] hover:bg-gray-200 hover:text-black " />
              </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="flex items-center w-[89%]   justify-between">
              <AiOutlineCalendar size={30} className="hover:border-dotted hover:text-black hover:border-[2px] p-1 hover:border-gray-500 rounded-full" />
              <AiOutlineLike size={20} className="  hover:text-black " />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
} 
