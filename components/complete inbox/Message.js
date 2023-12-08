import React from 'react'
import { BsArrowDownUp } from "react-icons/bs";

export default function Message() {
  return (
    <div>
<div className="flex py-2 xl:px-4 lg:px-4 px-1 md:px-2  justify-end xl:space-x-3 lg::space-x-3 md::space-x-2 sm:space-x-2   border-b-slate-300 border-b lg:text-[15px] xl:text-[15px] lg:te md:text-[12px] text-[11px] sm:text-[12px]">
        <button className='hover:bg-gray-200  lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm'>Refine Search</button>            
        <button className='hover:bg-gray-200  lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm'>Save Search</button>            
        <button className='hover:bg-gray-200  lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm flex items-center space-x-1 '>
            <BsArrowDownUp/>
           <p> Sort:Last modified</p>
            </button> 
            <p className='text-blue-500'>Send feedback</p>           
        </div>
       
        <div className='flex flex-col space-y-4 items-center justify-center h-[500px]'>
        <img src='message.png' />
        <h1 className='text-[35px] font-bold '>Connect your words to your work</h1>
        <p>Send a message to kick off projects. Or discuss tasks. Or brainstorm ideas.</p>
        <button className="border hover:bg-blue-500 border-blue-400 bg-blue-400 p-2 rounded-[10px] text-white">
           Send message
            </button>
      </div>
    </div>
  )
}
