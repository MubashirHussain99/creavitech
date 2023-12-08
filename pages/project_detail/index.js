"use client"
import React, { useState } from 'react'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { PiHamburger, PiUserPlus } from "react-icons/pi";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from '../../components/main/Home/WelcomeSection/SideBar';
import { BsThreeDots } from 'react-icons/bs';
// import BoardAccordion from '../../components/MyTask/BoardAccordion';
// import Board from '../../components/MyTask/Board/Board';

const page = () => {
    const [active, setactive] = useState(1);
    const [active11, setactive11] = useState(1);
    const [activeepic, setactiveepic] = useState(false);
    const [activ11, setactiv11] = useState();
    const [activ111, setactiv111] = useState();
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full h-screen'>
                <div className='flex justify-between w-[100%] px-10 pt-14 h-[126px] border '>
                    <div className='font-bold text-[26px] text-[#2F3663]'>Absol Tech</div>
                    <div className='flex items-center space-x-4'>
                        <div className='flex items-center px-4 border-2 space-x-2 rounded-lg'>
                            <CiSearch fontSize={20} color='#DFDEDE' />
                            <input type="search" name="" id="" className='py-2 outline-none' placeholder='Search...' />
                        </div>
                        <div>
                            <button className='px-4 py-2 rounded-lg bg-[#586AEA] text-white'>+ Create Project</button>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div><img src="/t3.png" alt="" /></div>
                            <div>
                                <div>Noah Ally</div>
                                <div className='text-[13px] leading-tight'>View Profile</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] pb-5 h-[calc(100%-126px)] overflow-y-auto'>
                    <div className='py-3 flex space-x-5 text-[#2D2D2D] px-10 border-b-2'>
                        <div onClick={() => setactive(1)}><a href="#" className={`${active === 1 ? "py-3 border-b-4 border-[#586AEA]" : ""}`}>Board</a></div>
                        <div onClick={() => setactive(3)}><a href="#" className={`${active === 3 ? "py-3 border-b-4 border-[#586AEA]" : ""}`}>Timeline</a></div>
                        <div onClick={() => setactive(4)}><a href="#" className={`${active === 4 ? "py-3 border-b-4 border-[#586AEA]" : ""}`}>Backlog</a></div>
                        <div onClick={() => setactive(6)}><a href="#" className={`${active === 6 ? "py-3 border-b-4 border-[#586AEA]" : ""}`}>Sprint</a></div>
                    </div>
                    <div className='flex items-center py-3 px-10 space-x-3'>
                        <div className='flex items-center px-4 border-2 space-x-2 rounded-lg'>
                            <CiSearch fontSize={20} color='#DFDEDE' />
                            <input type="search" name="" id="" className='py-2 outline-none' placeholder='Search...' />
                        </div>
                        <div><img src="/t3.png" alt="" /></div>
                        <div className='flex items-center px-3 text-[20px] py-3 rounded-full text-[#586AEA] bg-[#F7F8FF]'><PiUserPlus /></div>
                        {active == 4 && (
                            <div className='w-[100%] flex justify-between items-center'>
                                <div className='px-2 py-1'>
                                    <select>
                                        <option>Epic</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div>
                                    <button onClick={() => setactiveepic(!activeepic)} className='px-3 py-1 text-white bg-[#586AEA] rounded-lg'>Create Epic</button>
                                </div>
                            </div>
                        )}
                        {active == 3 && (
                            <div className='w-[100%] flex space-x-4 items-center'>
                                <div className='px-2 py-1'>
                                    <select className='outline-none'>
                                        <option>Status Category</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className='px-2 py-1'>
                                    <select className='outline-none'>
                                        <option>Epic</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                        )}
                        {active == 6 && (
                            <div className='w-[100%] flex justify-between items-center'>
                                <div className='px-2 py-1'>
                                    <select>
                                        <option>Epic</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div>
                                    <button className='px-3 py-1 text-white bg-[#586AEA] rounded-lg'>Create</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='px-10 py-3'>
                        {active == 1 && (
                            <div className='w-[100%] h-[670px] font-semibold text-[red]'>
                                Board is missng because or data is passing through props and redux
                            </div>
                        )}
                        {active == 3 && (
                            <div className='w-[100%] min-h-[600px] border'>
                                <div className='flex w-[100%] bg-[#EBEEFF]'>
                                    <div className='w-[350px] border-r-2  py-4'></div>
                                    <div className='w-[250px] text-center border-r-2  py-4'>NOV</div>
                                    <div className='w-[250px] text-center border-r-2  py-4'>DEC</div>
                                    <div className='w-[230px] text-center border-r-2  py-4'>JAN</div>
                                </div>
                                <div className='flex w-[100%] py-4 border-r-2 px-6 text-[#2F3663] text-[18px] font-medium border-b'>
                                    Sprints
                                </div>
                                <div className='w-[350px] min-h-[600px] border-r-2 space-y-2 py-4'>
                                    <div onClick={() => setactiv11(!activ11)} className='cursor-pointer flex px-4 items-center space-x-3'>
                                        <IoIosArrowForward color='#586AEA' />
                                        <div className='w-7 h-7 rounded-lg bg-[#586AEA]'></div>
                                        <div className=''>
                                            <div className='text-[#697077]'>Badegg Club dev</div>
                                            <div className='w-[150px] h-[2px] bg-[green]'></div>
                                        </div>
                                    </div>
                                    {activ11 && (
                                        <div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#929292] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#E9EBEE] bg-opacity-[12%]'>
                                                                <option>To do</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div onClick={() => setactive11(!active11)} className='cursor-pointer flex px-4 items-center space-x-3'>
                                        <IoIosArrowForward color='#586AEA' />
                                        <div className='w-7 h-7 rounded-lg bg-[#586AEA]'></div>
                                        <div className=''>
                                            <div className='text-[#697077]'>Badegg Club QA</div>
                                            <div className='w-[150px] h-[2px] bg-[green]'></div>
                                        </div>
                                    </div>
                                    {active11 && (
                                        <div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between px-4'>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[12px] text-[#697077]'><span className='text-[12px] text-[#697077]'> AB - 1</span> Dashboard revamp</div>
                                                </div>
                                                <div className='flex items-center space-x-20'>
                                                    <div className='text-[12px] text-[#1F845A] flex items-center space-x-5'>
                                                        <div className='px-2 py-1'>
                                                            <select className='bg-[#00FF95] bg-opacity-[12%]'>
                                                                <option>Done</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {active == 4 && (
                            <div className='flex space-x-2'>
                                <div className={` ${activ111 ? "w-[70%]" : "w-[100%]"} border`}>
                                    <div className='flex justify-between py-2 border-b px-2'>
                                        <div className='flex space-x-3 items-center'>
                                            <div className='text-[18px] font-semibold text-[#2F3663]'>Backlog</div>
                                            <div className='text-[#697077] font-light text-[14px]'>(2 Issues)</div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div className='py-1 px-3 rounded-full bg-[#E9EBEE] text-[#FFFFFF]'>0</div>
                                            <div className='py-1 px-3 rounded-full bg-[#0C66E4] text-[#FFFFFF]'>0</div>
                                            <div className='py-1 px-3 rounded-full bg-[#1F845A] text-[#FFFFFF]'>0</div>
                                            <div onClick={()=>setactiv111(!activ111)} className='cursor-pointer py-1 px-3 rounded-lg bg-[#F7F8FF] text-[#586AEA]'>Create Sprint</div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-b py-2'>
                                        <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                            <div><RxHamburgerMenu fontSize={20} /></div>
                                            <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                            <div>Zoolupm dashboard revamp</div>
                                        </div>
                                        <div className='flex items-center space-x-20'>
                                            <div className='text-[#586AEA] flex items-center space-x-5'>
                                                <div><img src="/Path.png" alt="" /></div>
                                                <div className='bg-[#F7F8FF] px-2 py-1'>+ Epic</div>
                                                <div className='bg-[#F7F8FF] px-2 py-1'>
                                                    <select>
                                                        <option>To do</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-3'>
                                                <div><img src="/t3.png" alt="" /></div>
                                                <div className='px-2 py-1 text-[#979797]'>
                                                    <select>
                                                        <option>Assignees</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-b py-2'>
                                        <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                            <div><RxHamburgerMenu fontSize={20} /></div>
                                            <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                            <div>Badegg Club Ui Revamp</div>
                                        </div>
                                    </div>
                                    <button className='text-[#2F3663] px-20 font-semibold py-3'>+ Create issue</button>
                                    {/* <IoMdCheckmarkCircleOutline /> */}
                                </div>
                                {activ111 && ( <div className='w-[30%] border h-full'>
                                    <div className='flex justify-between items-center px-4 py-2 border-b'>
                                        <div className='space-y-2'>
                                            <div className='text-[#697077] text-[14px]'>+Add epic/</div>
                                            <div>
                                                <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                                    <div className='text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                                    <div className='text-[#697077]'> AB - 1</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>setactiv111(false)} className='px-3 py-1 rounded-full text-[#697077] cursor-pointer border'>X</div>
                                    </div>
                                    <div className='px-4 space-y-3'>
                                        <div className='font-medium text-[#697077]'>Zoolupm Dashboard revamp</div>
                                        <div className='flex items-center space-x-3'>
                                            <div className='px-3 py-2 bg-[#F7F8FF] rounded-[2px]'><img src='/101.png' alt='' /></div>
                                            <div className='px-3 py-2 bg-[#F7F8FF] rounded-[2px]'><img src='/102.png' alt='' /></div>
                                            <div className='px-3 py-2 bg-[#F7F8FF] rounded-[2px]'><img src='/103.png' alt='' /></div>

                                        </div>
                                        <div>
                                            <select className='bg-[#F7F8FF]'>
                                                <option>To do</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        </div>
                                        <div className='border py-2 rounded-lg'>
                                            <div className='py-1 border-b pl-2 font-semibold'>Description</div>
                                            <div><input type='text' placeholder='Write a description...' className='px-2 py-2 outline-none' /></div>
                                        </div>
                                        <div className='border py-2 space-y-2 rounded-lg'>
                                            <div className='py-1 border-b pl-2 font-semibold'>Child issues</div>
                                            <div className='flex items-center px-2 justify-between border-b'>
                                                <div className='flex items-center space-x-2'>
                                                    <div><RxHamburgerMenu /></div>
                                                    <div className='text-[#586AEA]'>AB - 10</div>
                                                    <div className='text-[12px]'>Lorem ispam</div>
                                                </div>
                                                <div className='flex items-center space-x-3'>
                                                    <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                    <div className='text-[12px]'>
                                                        <select className='bg-[#F7F8FF]'>
                                                            <option>To do</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                            <div className='flex items-center px-2 justify-between border-b'>
                                                <div className='flex items-center space-x-2'>
                                                    <div><RxHamburgerMenu /></div>
                                                    <div className='text-[#586AEA]'>AB - 11</div>
                                                    <div className='text-[12px]'>Lorem ispam</div>
                                                </div>
                                                <div className='flex items-center space-x-3'>
                                                    <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                    <div className='text-[12px]'>
                                                        <select className='bg-[#F7F8FF]'>
                                                            <option>To do</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                            <div className='flex items-center px-2 justify-between border-b'>
                                                <div className='flex items-center space-x-2'>
                                                    <div><RxHamburgerMenu /></div>
                                                    <div className='text-[#586AEA]'>AB - 12</div>
                                                    <div className='text-[12px]'>Lorem ispam</div>
                                                </div>
                                                <div className='flex items-center space-x-3'>
                                                    <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                    <div className='text-[12px]'>
                                                        <select className='bg-[#F7F8FF]'>
                                                            <option>To do</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div><BsThreeDots /></div>
                                                </div>
                                            </div>
                                            <div>
                                                <input type='text' placeholder='What needs to be done?' className='px-2 py-2 outline-none' />
                                            </div>
                                        </div>
                                        <div className='border py-2 space-y-2 rounded-lg'>
                                            <div className='py-1 border-b pl-2 font-semibold'>Details</div>
                                            <div className='space-y-2'>
                                                <div className='flex items-center space-x-14 px-2'>
                                                    <div>Assignee</div>
                                                    <div>
                                                        <div className='flex items-center space-x-3'>
                                                            <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                            <div>Faisal Khan</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-28 px-2'>
                                                    <div>Sprints</div>
                                                    <div className='py-1 border-b pl-2 font-semibold'>Details</div>        <div>
                                                        none
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-14 px-2'>
                                                    <div>Reporter</div>
                                                    <div>
                                                        <div className='flex items-center space-x-3'>
                                                            <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                            <div>elsa Khan</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='text-[10px]'>Created Last week</div>
                                            <div className='text-[10px]'>Updated Last week</div>
                                        </div>
                                        <div className='px-4 w-[100%] h-0.5 bg-gray-200'></div>
                                        <div className='py-1 pl-2 font-semibold'>Activity</div>
                                        <div className='border py-2 space-y-2 rounded-lg'>
                                            <div className='flex items-center space-x-3 py-1 border-b pl-2 font-semibold'>
                                                <div><img src='/104.png' alt='' className='rounded-full' /></div>
                                                <input type='text' placeholder='Add a comment...' className='px-2 py-2 outline-none' />
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        )}
                        {active == 6 && (
                            <div className='w-[100%] border'>
                                <div className='flex justify-between py-2 border-b px-2'>
                                    <div className='flex space-x-3 items-center'>
                                        <div className='text-[18px] font-semibold text-[#2F3663]'>CREAV Sprint 1</div>
                                        <div className='text-[#697077] font-light text-[14px]'>29 Nov - 4 Dec (12 Issues)</div>
                                    </div>
                                    <div className='flex items-center space-x-3'>
                                        <div className='py-1 px-3 rounded-full bg-[#E9EBEE] text-[#FFFFFF]'>0</div>
                                        <div className='py-1 px-3 rounded-full bg-[#0C66E4] text-[#FFFFFF]'>2</div>
                                        <div className='py-1 px-3 rounded-full bg-[#1F845A] text-[#FFFFFF]'>4</div>
                                        <div className='py-1 px-3 rounded-lg bg-[#F7F8FF] text-[#586AEA]'>Create Sprint</div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b'>
                                    <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                        <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                        <div className='text-[#586AEA]'>AB - 1</div>
                                        <div>Zoolupm dashboard revamp</div>
                                    </div>
                                    <div className='flex items-center space-x-20'>
                                        <div className='text-[#586AEA] flex items-center space-x-5'>
                                            <div className='bg-[#F7F8FF] px-2 py-1'>MVP</div>
                                            <div className='bg-[#E0FFF2] px-2 py-1 text-[#1F845A] font-semibold'>
                                                <select className='bg-[#E0FFF2]'>
                                                    <option>Done</option>
                                                    <option>In Progress</option>
                                                    <option>To Do</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div><img src="/t3.png" alt="" /></div>
                                            <div className='px-2 py-1 text-[#979797]'>
                                                <select>
                                                    <option>Assignees</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b'>
                                    <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                        <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                        <div className='text-[#586AEA]'>AB - 2</div>
                                        <div> Badegg Club Ui Revamp</div>
                                    </div>
                                    <div className='flex items-center space-x-20'>
                                        <div className='text-[#586AEA] flex items-center space-x-5'>
                                            <div className='bg-[#F7F8FF] px-2 py-1'>MVP</div>
                                            <div className='bg-[#E0FFF2] px-2 py-1 text-[#1F845A] font-semibold'>
                                                <select className='bg-[#E0FFF2]'>
                                                    <option>Done</option>
                                                    <option>In Progress</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div><img src="/t3.png" alt="" /></div>
                                            <div className='px-2 py-1 text-[#979797]'>
                                                <select>
                                                    <option>Assignees</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b'>
                                    <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                        <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                        <div className='text-[#586AEA]'>AB - 3</div>
                                        <div>Club Ui Revamp</div>
                                    </div>
                                    <div className='flex items-center space-x-20'>
                                        <div className='text-[#586AEA] flex items-center space-x-5'>
                                            <div className='bg-[#F7F8FF] px-2 py-1'>MVP</div>
                                            <div className='bg-[#E0FFF2] px-2 py-1 text-[#1F845A] font-semibold'>
                                                <select className='bg-[#E0FFF2]'>
                                                    <option>Done</option>
                                                    <option>In Progress</option>
                                                    <option>To Do</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div><img src="/t3.png" alt="" /></div>
                                            <div className='px-2 py-1 text-[#979797]'>
                                                <select>
                                                    <option>Assignees</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b'>
                                    <div className='flex items-center px-2  space-x-3 text-[#697077]'>
                                        <div className='px-2 py-2 text-[#586AEA] shadow-xl'><IoMdCheckmarkCircleOutline /></div>
                                        <div className='text-[#586AEA]'>AB - 4</div>
                                        <div>Club Ui Revamp</div>
                                    </div>
                                    <div className='flex items-center space-x-20'>
                                        <div className='text-[#586AEA] flex items-center space-x-5'>
                                            <div className='bg-[#F7F8FF] px-2 py-1'>MVP</div>
                                            <div className='bg-[#DFECFF] px-2 py-1 text-[#0C66E4] font-semibold'>
                                                <select className='bg-[#DFECFF]'>
                                                    <option>In Progress</option>
                                                    <option>Done</option>
                                                    <option>To Do</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <div><img src="/t3.png" alt="" /></div>
                                            <div className='px-2 py-1 text-[#979797]'>
                                                <select>
                                                    <option>Assignees</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className='text-[#2F3663] px-20 font-semibold py-3'>+ Create issue</button> */}
                                {/* <IoMdCheckmarkCircleOutline /> */}
                            </div>
                        )}
                    </div>
                    {activeepic == 1 && (
                        <div
                            className="fixed right-6 bottom-0 p-5 pb-8 w-[35%] shadow-lg border bg-white rounded-md text-[#404040]"
                        >
                            <form className="w-[100%]">
                                <div className="flex justify-between pb-3 border-b">
                                    <div className="font-semibold">Create Epic</div>

                                    <div className="flex items-center">
                                        <button
                                            onClick={() => {
                                                setactiveepic(false);
                                            }}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 py-2 text-[14px]">
                                    <label className="font-medium">Project Name*</label>
                                    <select

                                        className="py-2 rounded-lg border outline-none px-2"
                                    >
                                        <option value="">Project name</option>
                                    </select>
                                </div>

                                <div className="flex flex-col space-y-2 py-2 text-[14px]">
                                    <label className="font-medium">Summary*</label>
                                    <input
                                        required
                                        name="summary"
                                        // onChange={handleEpicInputs}
                                        className="py-2 rounded-lg border outline-none px-2"
                                    />
                                </div>

                                <div className="flex flex-col space-y-2 py-2 text-[14px]">
                                    <label className="font-medium">Description</label>
                                    <textarea
                                        name="description"
                                        // onChange={handleEpicInputs}
                                        className="py-2 rounded-lg border outline-none px-2 h-32"
                                    />
                                </div>

                                <div className="flex flex-col space-y-2 py-2 text-[14px]">
                                    <label className="font-medium">Epic Color</label>
                                    <input
                                        // onChange={handleEpicInputs}
                                        name="color"
                                        type="color"
                                        className="w-[50px] h-[50px] outline-none rounded-md"
                                    // value={epicInputs.color}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#586AEA] text-[white] w-[100%] py-2 rounded-md mt-2"
                                >
                                    Create Epic
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default page