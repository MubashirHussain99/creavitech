import React from 'react'
import { HiPencilAlt } from "react-icons/hi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


export default function Archieve() {
  return (
    <div>
        <div className="flex py-2 xl:px-4 lg:px-4 px-1 md:px-2  justify-between xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2  border-b-slate-300 border-b lg:text-[15px] xl:text-[15px] lg:te md:text-[12px] text-[11px] sm:text-[12px]">
        <div>
          <button className="flex items-center xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 border rounded-[10px] hover-border-primary hover:text-primary border-gray-100 p-1 hover:bg-slate-200">
            <HiPencilAlt />
            <p>Send message</p>
          </button>
        </div>
        <div>
        <button className="border hover-border-primary xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2 rounded-[10px] hover:text-primary border-gray-100 py-1 px-2  hover:bg-slate-200 ">
            <BsThreeDots />
          </button>
        </div>
         
      </div>
      <div className='flex flex-col space-y-4 items-center justify-center h-[600px]'>
        <h1  className='text-[35px] font-bold '>You {"haven't"} archived any notifications yet.</h1>
        <p>Click the archive icon in the top right of a notification to archive it.</p>
        <button className="border hover:bg-blue-500 border-blue-400 bg-blue-400 p-2 rounded-[10px] text-white">
            Back to Activity
            </button>
      </div>
    </div>
  )
}
