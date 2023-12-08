import React, { useEffect, useState } from "react";

import ChatFiles from "./ChatFiles";
import ChatTalk from "./ChatTalk";

function ChatDetails() {
  const [state, setstate] = useState(1);

  return (
    <div id="shadow1" className="w-[77%] ">
      {/* Top */}
      <div className="h-[60px] w-[100%] flex items-center border bg-gray-100 text-gray-600 space-x-3 px-6">
        <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
          <p className="font-poppins font-medium text-white text-[14px]">ZA</p>
        </div>
        <div className="font-semibold text-[20px] font-poppins">Zaid</div>
        <div className="text-[16px] flex space-x-3 pl-5 text-gray-500">
          <button
            onClick={() => setstate(1)}
            className={`border-secondary hover:border-b-gray-500 h-[60px] ${
              state == 1 && "text-gray-600 border-b-[3px] border-b-blue-500"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setstate(2)}
            className={` border-secondary hover:border-b-gray-500 h-[60px] ${
              state == 2 && "text-gray-600 border-b-[3px] border-b-blue-500"
            }`}
          >
            Files
          </button>
        </div>
      </div>
      {state == 1 && <ChatTalk />}
      {state == 2 && <ChatFiles />}
    </div>
  );
}

export default ChatDetails;
