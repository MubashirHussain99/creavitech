import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatDetails from "../components/ChatDetails";
import LoginFormUI from "../components/login/LoginFormUI";
import { GoBell } from "react-icons/go";
import { BsFillChatTextFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { PiDotsNine } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

export default function Chat_section() {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  return (
    <>
      {user ? (
        <div>
          <div className="bg-secondary h-[50px] w-[100%] flex justify-between px-5 items-center ">
            <PiDotsNine size={26} color="white" />
            <div className="w-[50%] h-[32px] flex rounded-md bg-gray-200 ml-16 items-center space-x-2 px-3">
              <FiSearch color="gray" />
              <input
                className="w-[90%] h-[32px] rounded-md bg-gray-200"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center space-x-3">
              <BiDotsHorizontalRounded color="white" />
              <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center text-white relative">
                <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center text-white">
                  <p>Z</p>
                  <p>K</p>
                  <div className="absolute z-20 w-[10px] h-[10px] rounded-full bg-green-500 -bottom-[1px] right-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              id="innershadow"
              className=" w-[70px] bg-gray-100 flex flex-col items-center space-y-7 py-3"
            >
              <div>
                <GoBell size={24} color="gray" />
              </div>
              <div>
                <BsFillChatTextFill size={23} color="gray" />
              </div>
              <div>
                <HiUserGroup size={24} color="gray" />
              </div>
            </div>
            <ChatBox />
            <ChatDetails />
          </div>
        </div>
      ) : (
        <LoginFormUI />
      )}
    </>
  );
}
