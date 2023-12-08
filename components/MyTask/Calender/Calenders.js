import React from 'react'
import {BsPlus} from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";


export default function Calender() {
  return (
    <div className='h-[screen]'>
            <div className='flex border-b-2 py-3'>
                <div className='flex w-[60%] sm:space-x-3 space-x-3 md:space-x-3 lg:space-x-7 '>
                <button className='flex text-white justify-center items-center bg-primary rounded-[5px] lg:space-x-2 md:space-x-2 sm:space-x-1 space-x-1 md:ml-3 sm:ml-2 lg:ml-3 ml-3'>
                    <BsPlus className='lg:h-8 md:h-7 sm:h-6'/>
                    <p className='lg:text-sm md:text-sm'>Add Task</p>
                    {/* <button ><IoIosArrowDown  className='border-l h-[39px]'/></button> */}
                </button>
                <div>
                    <button className='border border-gray-500 hover:bg-gray-200 bg-white lg:text-sm md:text-sm lg:px-2 md:px-2 rounded-[5px] md:my-1 py-1'>
                        Today
                    </button>
                </div>
                <div className='flex items-center lg:py-1  text-gray-500 '>
                    <BsChevronLeft size={25}  className='hover:bg-gray-200 p-1 rounded-[5px]'/>
                    <BsChevronRight size={25} className='hover:bg-gray-200 p-1 rounded-[5px]'/>
                </div>
                <p className='lg:text-2xl xl:text-2xl md:text-lg sm:text-xl text-xl p-1 text-gray-600 flex lg:pl-2 xl:pl-14'>
                     October 2022 
                     </p>
                </div>
                <div className='flex space-x-3 md:space-x-3 lg:space-x-5 lg:px-2 w-[40%] md:w-[42%] justify-end'>
                    <div className='flex justify-end hover:bg-gray-200 items-center lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm'>
                      <FaSearchPlus/>
                        week view
                    </div>
                    <div className='flex justify-end hover:bg-gray-200 items-center lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm'>
                        <AiOutlineCheckCircle size={15}/>
                        All tasks
                    </div>
               <div className='flex  hover:bg-gray-200 items-center lg:p-1 rounded-[5px] text-gray-600 hover:text-black md:text-sm'>
                Unscheduled
                </div>     
            </div>
            </div>
            

        <div className='w-[100%] flex border-b-2'>
            <div className=' text-normal text-gray-500  md:p-1 lg:p-3 md:text-sm border-r-2'>
               <div className='font-bold'> Sun</div>
              <div className='text-black text-lg'>
                31
                </div>              
            </div>
            <div className=' text-normal text-white hover:text-gray-500 lg:lg:p-3 md:p-1 md:text-sm border-r-2 w-[20%]'>
           <div className='flex hover:text-gray-500 justify-between'>          
              <div className='font-bold text-gray-500'>Mon</div>
                <button className='flex hover:bg-gray-200 items-center rounded-[5px] '>
                    <BsPlus size={15} className='hover:bg-gray-200'/>
                    <p className=''>Add Task</p>
                    
                </button>  
           </div>
                <div className='text-black text-lg'>
                1
                </div>  
                <div className="h-[670px]">
        <button className="flex justify-center items-center hover:bg-slate-200 w-[97%] xl:m-1 lg:m-1 py-1 rounded-[20px] h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div className='text-gray-500'>Add Task</div>
        </button>
        <div/>         
            </div>
            </div>
            <div className=' text-normal text-white hover:text-gray-500 lg:p-3 md:p-1  md:text-sm border-r-2 w-[20%]'>
           <div className='flex hover:text-gray-500 justify-between'>          
              <div className='font-bold text-gray-500'>Tues</div>
                <button className='flex hover:bg-gray-200 items-center rounded-[5px] '>
                    <BsPlus size={15} className='hover:bg-gray-200'/>
                    <p className=''>Add Task</p>
                    
                </button>  
           </div>
                <div className='text-black text-lg'>
                2
                </div>  
                <div className="h-[670px]">
        <button className="flex justify-center items-center hover:bg-slate-200 w-[97%] xl:m-1 lg:m-1 py-1 rounded-[20px] h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div className='text-gray-500'>Add Task</div>
        </button>
        <div/>         
            </div>  
            </div>
            <div className=' text-normal text-white hover:text-gray-500 lg:p-3 md:p-1   md:text-sm border-r-2 w-[20%]'>
           <div className='flex hover:text-gray-500 justify-between'>          
              <div className='font-bold text-gray-500'>Wed</div>
                <button className='flex hover:bg-gray-200 items-center rounded-[5px] '>
                    <BsPlus size={15} className='hover:bg-gray-200'/>
                    <p className=''>Add Task</p>
                    
                </button> 
                 
           </div>
                <div className='text-black text-lg'>
                3
                </div>  
                <div className="h-[670px]">
        <button className="flex justify-center items-center hover:bg-slate-200 w-[97%] xl:m-1 lg:m-1 py-1 rounded-[20px] h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div className='text-gray-500'>Add Task</div>
        </button>
        <div/>         
            </div>  
            </div>
            <div className='text-normal text-white hover:text-gray-500 lg:p-3 md:p-1   md:text-sm  border-r-2 w-[20%]'>
           <div className='flex hover:text-gray-500 justify-between'>          
              <div className='font-bold text-gray-500'>Thurs</div>
                <button className='flex hover:bg-gray-200 items-center rounded-[5px] '>
                    <BsPlus size={15} className='hover:bg-gray-200'/>
                    <p className=''>Add Task</p>
                    
                </button>  
           </div>
                <div className='text-black text-lg'>
                4
                </div>  
                <div className="h-[670px]">
        <button className="flex justify-center items-center hover:bg-slate-200 w-[97%] xl:m-1 lg:m-1 py-1 rounded-[20px] h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div className='text-gray-500'>Add Task</div>
        </button>
        <div/>         
            </div>  
            </div>
            <div className=' text-normal text-white hover:text-gray-500 lg:p-3 md:p-2  md:text-sm border-r-2 w-[19%]'>
           <div className='flex hover:text-gray-500 justify-between'>          
              <div className='font-bold text-gray-500'>Fri</div>
                <button className='flex hover:bg-gray-200 items-center rounded-[5px] '>
                    <BsPlus size={15} className='hover:bg-gray-200'/>
                    <p className=''>Add Task</p>
                    
                </button>  
           </div>
                <div className='text-black text-lg'>
                5
                </div>  
                <div className="h-[670px]">
        <button className="flex justify-center items-center hover:bg-slate-200 w-[97%] xl:m-1 lg:m-1 py-1 rounded-[20px] h-100">
          <img src="/Addd.png" className="h-2 md:h-3 sm:h-2" />
          <div className='text-gray-500'>Add Task</div>
        </button>
        <div/>         
            </div>  
            </div>
            <div className='text-normal text-gray-500 lg:p-3 md:p-1 p-1 md:text-sm border-r-2'>
            <div className='font-bold'> Sat</div>
              <div className='text-black text-lg'>
                6
                </div>         
            </div>
        </div>
    </div> 
  )
}
