import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiUpload } from "react-icons/hi";
import { BiSmile } from "react-icons/bi";
import { GiPaperClip } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";
// import { HiOutlineGif } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";

function ChatFiles() {
  const [divHeight, setDivHeight] = useState(0);

  // Function to update the div height
  const updateDivHeight = () => {
    const screenHeight = window.innerHeight;
    setDivHeight(screenHeight - 130);
  };
  useEffect(() => {
    // Initial update
    updateDivHeight();

    // Event listener to update the height on window resize
    window.addEventListener("resize", updateDivHeight);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);
  return (
    <div>
      <div
        style={{ height: `${divHeight}px` }}
        className={`overflow-y-scroll bg-gray-100 p-7`}
      >
        <div
          style={{ height: `${divHeight - 70}px` }}
          className={`overflow-y-scroll bg-white pl-1 rounded-md shadow-md`}
        >
          <div className="flex items-center space-x-3 px-4 h-[40px]">
            <HiUpload />
            <p className="">Share</p>
          </div>
          <div className="px-4 w-[100%] h-[40px] flex justify-between border-b-2 text-[12px] text-gray-600">
            <div className="flex md:space-x-10">
              <AiOutlineCheck size={20} />
              <p>Type</p>
              <p>Name</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">Shared on</p>
              <p className="w-[120px] ">Sent by</p>

            </div>
          </div>

          {/* mapping of files  */}
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Zaid Kashan</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Sarim Wajid</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Usama Rasheed</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Makhmoor Rehman</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Mirza Anas</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Shahzaib Sheikh</p>

            </div>
          </div>
          <div className="px-4 w-[100%] h-[40px] border-b-2 hover:bg-gray-200 flex justify-between items-center text-[12px] text-gray-800">
            <div className="flex md:space-x-10">
              <div className="w-[20px]"></div>
              <p>Type</p>
              <p>File.jpeg</p>
            </div>

            <div className="flex space-x-12 mr-12">
              <p className="w-[120px]">14 May</p>
              <p className="w-[120px] ">Muzammil Rasheed</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatFiles;
