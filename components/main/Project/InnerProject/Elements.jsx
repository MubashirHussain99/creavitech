import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function Elements({ element, index, privacy, open }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch({
          type: "page",
          payload: "/tasks",
        }),
          dispatch({
            type: "project_name",
            payload: element.name,
          });
        dispatch({
          type: "project_id",
          payload: element.id,
        });
      }}
      key={index}
      // className="h-12 mt-2 border rounded-lg flex items-center gap-2 bg-gray-50 shadow-md hover:bg-gray-100  cursor-pointer py-2 px-2"
      className="flex  gap-2 w-[100%] h-[65px] px-2 border rounded-xl items-center text-secondary hover:border-2 hover:bg-gray-100 cursor-pointer shadow-md"
    >
      <div className="h-11 w-11 rounded-lg flex items-center justify-center bg-secondary">
        <BsListTask size={22} color="white" />
      </div>
      <div className={`flex justify-between items-center ${open ? "w-[69%]" : "w-[79%]"}  `}>
        <div className="w-[98%]">
          <p className="text-[13px] overflow-hidden w-[100%] font-semibold text-secondary font-poppins">{element.name}</p>
          {privacy == 20 && (
            <div className="flex items-center">
              <FaLock size={10} color="gray" />
              <p className="text-[9px] text-gray-400 ml-1">private</p>
            </div>
          )}
        </div>
        <div className="rounded-xl w-6 h-6 hover:text-black">
          <BiDotsHorizontalRounded size={25}/>
        </div>
      </div>
    </div>
  );
}
// <p className="text-[12px]">{element.privacy}</p>
