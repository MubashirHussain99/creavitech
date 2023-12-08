import React, { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsChat } from "react-icons/bs";

import { BsArchiveFill } from "react-icons/bs";
import Mysetting from "./Mysetting";
import { useSelector } from "react-redux";
import { MdMarkChatUnread } from "react-icons/md";

export default function Inbox() {
  const [state, setstate] = useState(false);
  const [modal, setmodal] = useState(false);

  const data = useSelector((x) => x);
  return (
    <div className="flex relative">
      <div className="w-[55%]">
        <div className="flex py-2  xl:px-4 lg:px-4 px-1 md:px-2  justify-between xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2  border-b-slate-300 border-b lg:text-[15px] xl:text-[15px] lg:te md:text-[12px] text-[11px] sm:text-[12px]">
          <div>
            <button className="flex items-center xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 border rounded-[10px] hover-border-primary hover:text-primary border-gray-100 p-1 hover:bg-slate-200">
              <HiPencilAlt />
              <p>Send message</p>
            </button>
          </div>

          <div className="space-x-3 flex items-center">
            <button className="flex items-center xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 border rounded-[10px] hover-border-primary hover:text-primary border-gray-100 p-1 hover:bg-slate-200">
              <BsArrowsAngleExpand />
              <p>Expand</p>
            </button>

            <button className="flex items-center  xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 border rounded-[10px] hover-border-primary hover:text-primary border-gray-100 p-1 hover:bg-slate-200">
              <BsFilter />
              <p>filter</p>
            </button>
            <div className="flex flex-col items-end space-y-8">
              <button
                onClick={() => setstate(!state)}
                className="border hover-border-primary xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 rounded-[10px] hover:text-primary border-gray-100 py-1 px-2  hover:bg-slate-200 "
              >
                <BsThreeDots />
              </button>

              {state == true && (
                <div className="flex flex-col w-[15%] absolute z-1 bg-slate-100 roundded-[10px] border border-slate-300">
                  <div className="hover:bg-slate-300 border border-b-slate-200">
                    <button onClick={() => setmodal(!modal)}>
                      Manage notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Mysetting modal={modal} setmodal={setmodal} />
          </div>
        </div>
        <div className="px-5 py-2 border-slate-300 border-b ">
          <p>Earlier</p>
        </div>

        <div className="px-5 py-2   text-slate-200 hover:text-gray-400 border-b-gray-300 border-b bg-slate-200">
          <div className="flex  justify-between space-x-2">
            <div className="flex items-center justify-center  space-x-2 text-black">
              <BsChat />
              <p className="text-[20px]">Let's explore your Creavitech inbox</p>
            </div>
            <div className="flex items-center  space-x-3 border-slate-100 bg-slate-200 hover-border">
              <button className="hover:text-black">
                <MdMarkChatUnread />
              </button>
              <button className="hover:text-black">
                <BsArchiveFill />
              </button>
            </div>
          </div>
          <div className="py-4 ">
            <div className="flex space-x-2">
              <div className="flex items-center justify-center h-9 w-9 bg-slate-500 rounded-full "></div>
              <p className="text-black">Yeti</p>
            </div>
            <p className="pl-11 text-black">
              Hi {data.User_name}! Inbox is your central hub for all relevant
              updates and notifications on your tasks and projects. Let's
              explore how you can stay up to date with inbox.
            </p>
            <p className="pl-11 text-[12px] text-black py-2">24 days ago</p>
          </div>
        </div>

        <div className="py-2 pl-11 text-blue-400 border border-b-white hover:border-b-gray-300 hover:bg-slate-50  ">
          <p>
            <u>Archieve all notifications </u>
          </p>
        </div>
      </div>
      <div className="w-[45%] h-[830px] border-l-slate-300 border-l">
        <img className="bg-white" src="/yeti1.png" />
        <div className="py-2 px-10">
          <p>
            Hi {data.User_name}! Inbox is your central hub for all relevant
            updates and notifications on your tasks and projects. Let's explore
            how you can stay up to date with inbox.
          </p>
        </div>
        <div className="flex justify-center py-3 ">
          <button className="border border-blue-400 bg-blue-400 p-2 rounded-[10px] text-white">
            Explore Inbox
          </button>
        </div>
      </div>
    </div>
  );
}
