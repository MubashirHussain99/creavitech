import React, { useEffect, useState } from "react";
import ChatMembers from "./ChatMembers";

function ChatBox() {
  const data = [
    {
      id: 1,
      name: "Zaid",
      lastMsg:
        "hello I am the last message! hello I am the last message! hello I am the last message! hello I am the last message!",
      time: "04:50",
    },
    {
      id: 2,
      name: "Sarim",
      lastMsg:
        "hello I am the last message! hello I am the last message! hello I am the last message! hello I am the last message!",
      time: "02:40",
    },
    {
      id: 3,
      name: "Usama",
      lastMsg:
        "hello I am the last message! hello I am the last message! hello I am the last message! hello I am the last message!",
      time: "03:30",
    },
    {
      id: 4,
      name: "Shahzaib",
      lastMsg:
        "hello I am the last message! hello I am the last message! hello I am the last message! hello I am the last message!",
      time: "01:56",
    },
    {
      id: 5,
      name: "Anas",
      lastMsg:
        "hello I am the last message! hello I am the last message! hello I am the last message! hello I am the last message!",
      time: "02:27",
    },
    {
      id: 6,
      name: "Makhmoor",
      lastMsg:
        "hello I am Groot! hello I am Groot! hello I am Groot! hello I am Groot!",
      time: "07:35",
    },
    {
      id: 7,
      name: "Saad",
      lastMsg:
        "hello I am Groot! hello I am Groot! hello I am Groot! hello I am Groot!",
      time: "04:25",
    },
    {
      id: 8,
      name: "Waleed",
      lastMsg:
        "hello I am Groot! hello I am Groot! hello I am Groot! hello I am Groot!",
      time: "09:55",
    },
    {
      id: 9,
      name: "Umair",
      lastMsg:
        "hello I am Groot! hello I am Groot! hello I am Groot! hello I am Groot!",
      time: "04:49",
    },
    {
      id: 10,
      name: "Saad",
      lastMsg:
        "hello I am Groot! hello I am Groot! hello I am Groot! hello I am Groot!",
      time: "04:25",
    },
    {
      id: 11,
      name: "Waleed",
      lastMsg:
        "hello I am final message! hello I am final message! hello I am final message! hello I am final message!",
      time: "09:15",
    },
    {
      id: 12,
      name: "Umair",
      lastMsg:
        "hello I am final message! hello I am final message! hello I am final message! hello I am final message!",
      time: "03:49",
    },
    {
      id: 13,
      name: "Saad",
      lastMsg:
        "hello I am final message! hello I am final message! hello I am final message! hello I am final message!",
      time: "02:25",
    },
    {
      id: 14,
      name: "Waleed",
      lastMsg:
        "hello I am final message! hello I am final message! hello I am final message! hello I am final message!",
      time: "01:55",
    },
    {
      id: 15,
      name: "Umair",
      lastMsg:
        "hello I am final message! hello I am final message! hello I am final message! hello I am final message!",
      time: "06:49",
    },
  ];

  const [divHeight, setDivHeight] = useState(0);
  const updateDivHeight = () => {
    const screenHeight = window.innerHeight;
    setDivHeight(screenHeight - 110);
  };

  useEffect(() => {
    updateDivHeight();
    window.addEventListener("resize", updateDivHeight);
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);

  return (
    <div id="innershadow" className=" w-[23%] relative bg-gray-100 ">
      <div className="h-[60px] w-[100%] border flex items-center text-gray-900 px-5">
        <p className="font-bold text-[20px] font-poppins ">Chat</p>
      </div>
      <div
        key={data}
        style={{ height: `${divHeight}px` }}
        className={` overflow-y-scroll px-1`}
      >
        {data &&
          data.map((members) => (
            <ChatMembers key={members} members={members} />
          ))}
      </div>
    </div>
  );
}

export default ChatBox;
