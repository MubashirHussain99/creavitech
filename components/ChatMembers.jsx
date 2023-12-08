import React from "react";

function ChatMembers({ members }) {
  return (
    <div className="py-1 px-5 flex justify-between items-center cursor-pointer hover:bg-white rounded-sm">
      <div className="flex space-x-2 items-center overflow-hidden">
        <div className="w-8 h-8 rounded-full bg-rose relative z-10 ">
          <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center text-white  text-[15px]">
            <p>{members.name.split("")[0]}</p>
            <p>{members.name.split("")[1]}</p>
            <div className="absolute w-[10px] h-[10px] rounded-full bg-white bottom-0 right-0 flex justify-center items-center">
              <div className=" w-[8px] h-[8px] rounded-full bg-yellow-500"></div>
            </div>
          </div>
        </div>
        <div>
          <div>{members.name}</div>
          <div
            id="overflow-hidden"
            className="text-[12px] w-[150px] lg:w-[200px]"
          >
            {members.lastMsg}
          </div>
        </div>
      </div>
      <div className="text-[12px] font-semibold text-gray-600">
        {members.time}
      </div>
    </div>
  );
}

export default ChatMembers;
