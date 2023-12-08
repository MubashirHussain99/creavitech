"use client"
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { LuLayoutList, LuMailPlus } from "react-icons/lu";
import { MdTaskAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect } from 'react';
import { TbLayoutDashboard } from "react-icons/tb";
//import SideBar from "./Home/WelcomeSection/SideBar";
import Sidebar from './Home/WelcomeSection/SideBar';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {



  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);


  //const [team, setTeam] = useState(false);
  const [active, setActive] = useState(0);
  //const [active1, setActive1] = useState();
  const [activeepic, setactiveepic] = useState(false);

  const [isWide, setIsWide] = useState(true);
  return (
    <div className='flex'>
      <Sidebar isWide={isWide} setIsWide={setIsWide} />
      <div className='w-full h-screen overflow-y-auto'>
        <div className='flex justify-between w-[100%] lg:px-10 px-5 pt-14 h-[126px] border '>
          <div className='font-bold text-[26px] space-x-2 flex'>
            <div className='lg:hidden text-[#586AEA] text-[44px] -mt-12' onClick={() => setIsWide(true)}><RxHamburgerMenu /></div>
            <div>Home</div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center px-4 border-2 space-x-2 rounded-lg'>
              <CiSearch fontSize={20} color='#DFDEDE' />
              <input type="search" name="" id="" className='py-2 outline-none' placeholder='Search...' />
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
        <div className='h-[calc(100%-126px)] overflow-y-auto w-[100%] sm:px-10 px-4 pt-5'>
          <div className='text-[#586AEA] '>{formattedDate}</div>
          <div className='sm:flex space-y-2 sm:space-y-0 items-center justify-between py-4'>
            <div>
              <div className='text-[28px] text-[#616161] font-medium'>Have a Nice Day! Noah</div>
            </div>
            <div className='flex space-x-3 items-center'>
              <button onClick={() => setActive(2)} className={`${active === 2 ? "text-[#586AEA] flex items-center space-x-2 border rounded-lg px-3 py-2 bg-[#EDEFFD]" : ""}flex items-center space-x-2 border rounded-lg px-3 py-2`}>
                <FiUserPlus />
                <p>Create team</p>
              </button>
              <button onClick={() => setActive(3)} className={`${active === 3 ? "text-[#586AEA] flex items-center space-x-2 border rounded-lg px-3 py-2 bg-[#EDEFFD]" : ""}flex items-center space-x-2 border rounded-lg px-3 py-2`}>
                <LuMailPlus />
                <p>Invite</p>
              </button>
            </div>
          </div>
          <div className='lg:flex lg:space-x-5 w-[100%] pb-6'>
            <div className='lg:w-[50%] space-y-6 pb-6'>
              <div className='w-[600px] overflow-hidden overflow-x-auto sm:w-[100%] border rounded-xl px-4 space-y-3'>
                <div className='text-[18px] font-medium text-[#616161] px-4 py-3 border-b'>My Tasks</div>
                <div className='px-4 py-3 text-[14px] text-[#434D57] rounded-xl border flex justify-between'>
                  <div>UpComing (2)</div>
                  <div>Over Due</div>
                  <div>Completed</div>
                </div>
                <div className='py-3 space-y-3 h-[180px] overflow-y-auto'>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                  <div className='flex justify-between items-center  px-4'>
                    <div className='flex items-center space-x-3 text-[#929292] text-[14px]'>
                      <div className='px-2 py-2 shadow-lg'><MdTaskAlt /></div>
                      <div>Badegg Club Ui Revamp</div>
                    </div>
                    <div><img src="/card.png" alt="" /></div>
                  </div>
                </div>
                <div className='py-3'>
                  <button className='bg-[#F6F7FA] w-[100%] rounded-xl py-3 text-[#586AEA]'>+ Add Task</button>
                </div>
              </div>
              <div className='w-[600px] overflow-hidden overflow-x-auto  sm:w-[100%] border rounded-xl px-4 space-y-3'>
                <div className='text-[18px] font-medium text-[#616161] px-4 py-3 border-b'>Team Members</div>
                <div className='w-[100%]'>
                  <div className='flex items-center space-x-3 py-3'>
                    <div className='w-[50%] flex items-center space-x-2 border px-3 py-2 rounded-xl'>
                      <div><img src="/Mask.png" alt="" /></div>
                      <div>
                        <div className='text-[#2F3663]'>Design team</div>
                        <div className='text-[#929292] text-[12px]'>Description</div>
                      </div>
                    </div>
                    <div className='w-[50%] flex items-center space-x-2 border px-3 py-2 rounded-xl'>
                      <div><img src="/Mask.png" alt="" /></div>
                      <div>
                        <div className='text-[#2F3663]'>Design team</div>
                        <div className='text-[#929292] text-[12px]'>Description</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3 py-3'>
                    <div className='w-[50%] flex items-center space-x-2 border px-3 py-2 rounded-xl'>
                      <div><img src="/Mask.png" alt="" /></div>
                      <div>
                        <div className='text-[#2F3663]'>Design team</div>
                        <div className='text-[#929292] text-[12px]'>Description</div>
                      </div>
                    </div>
                    <div className='w-[50%] flex items-center space-x-2 border px-3 py-2 rounded-xl'>
                      <div><img src="/Mask.png" alt="" /></div>
                      <div>
                        <div className='text-[#2F3663]'>Design team</div>
                        <div className='text-[#929292] text-[12px]'>Description</div>
                      </div>
                    </div>
                  </div>
                  <div className='py-3'>
                    <button className='bg-[#F6F7FA] w-[100%] rounded-xl py-3 text-[#586AEA]'>+ Add Team Members</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[600px] overflow-hidden overflow-x-auto sm:w-[100%] lg:w-[50%] border rounded-xl px-4'>
              <div className='text-[18px] font-medium text-[#616161] px-4 py-3 border-b'>My Projects</div>
              <div className='flex space-x-4 py-3'>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>

              </div>
              <div className='flex space-x-4 py-3'>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>

              </div>
              <div className='flex space-x-4 py-3'>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>
                <div className='w-[50%] rounded-xl border  px-3'>
                  <div className='flex text-[18px] justify-between py-4'>
                    <div className='flex font-bold'>Creavitech Revamp</div>
                    <div><HiOutlineDotsVertical className='-mt-1' /></div>
                  </div>
                  <div className='text-[12px] text-[#929292]'>Project management Product</div>
                  <div className='flex justify-between items-center text-[12px] text-[#929292] mt-4'>
                    <div>Team</div>
                    <div>PM</div>
                  </div>
                  <div className='w-[100%] mb-3 flex items-center justify-between py-2 px-3 rounded-xl bg-[#F7F7F8] mt-1'>
                    <div><img src="/combine.png" alt="" width={100} /></div>
                    <div className='px-2'><img src="/t3.png" alt="" /></div>
                  </div>
                </div>

              </div>

              <div className='py-3'>
                <button onClick={() => setactiveepic(!activeepic)} className='bg-[#F6F7FA] w-[100%] rounded-xl py-3 text-[#586AEA]'>+ Add Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeepic == 1 && (
        <div
          className="fixed right-6 bottom-0 p-5 pb-8 w-[35%] shadow-lg border bg-white rounded-md text-[#404040]"
        >
          <form className="w-[100%]">
            <div className="flex justify-between pb-3 border-b">
              <div className="font-semibold">Create Project</div>

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
              <input type="text" name="" placeholder='Project Name...' id="" className='px-2 py-3 border outline-none rounded-lg' />
            </div>
            <div className='px-3 py-3 border-b'>
              Privacy
            </div>
            <div className='py-2 border-b'>
              <div className='flex justify-between items-center'>
                <div>Public to Team</div>
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className='flex justify-between items-center'>
                <div>Private to Team members</div>
                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className='text-[#434D57]'>Default View</div>
            </div>
            <div className='flex items-center space-x-5 py-4 px-6'>
              <div className='border-l-4 border-[#586AEA]'>
                <div className='px-5 py-4 flex items-center justify-center space-x-3 border rounded-lg py'>
                  <div className='text-[60px] text-[#586AEA]'><LuLayoutList /></div>
                  <div>List View</div>
                </div>
              </div>
              <div className='px-5 py-4 flex items-center justify-center space-x-3 border rounded-lg py'>
                <div className='text-[60px] text-[#C3C3C3]'><TbLayoutDashboard /></div>
                <div>Board View</div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#586AEA] text-[white] w-[100%] py-2 rounded-md mt-2"
            >
              Create Project
            </button>
          </form>
        </div>
      )}
    </div>
  )
}































// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import Welcome from "./Home/WelcomeSection/Welcome";
// import Nav from "./Home/WelcomeSection/Nav";
// import SideBar from "./Home/WelcomeSection/SideBar";
// import Mytask from "../MyTask/Mytask";
// import { useDispatch, useSelector } from "react-redux";
// import Api from "../../API/Api";
// // import CompleteInbox from "../complete inbox/CompleteInbox";
// import TeamDetails from "../TeamDetails";
// import AllProjects from "../AllProjects";

// const Main = (TeamID) => {
//   ``;
//   const [open, setOpen] = useState(true);
//   const [listToggle, setListoggle] = useState(false);
//   const [showinput, SetshowInput] = useState(false);
//   const [getInput, setGetinput] = useState("");
//   const [datas, setData] = useState("");
//   const [tab, setTab] = useState("/");
//   const [refreshSidebar, setrefreshSidebar] = useState();
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [modalIsOpen1, setIsOpen1] = useState(false);
//   const [modalIsOpen2, setIsOpen2] = useState(false);
//   const [delmodalIsOpen, setdelmodalIsOpen] = useState(false);
//   const [inviteModal, setinviteModal] = useState(false);
//   const [clientmodal, setclientmodal] = useState(false);
//   const [projectdeletemodal, setprojectdeletemodal] = useState(false);

//   const data = useSelector((x) => x);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     Api.fetchGet("/get/userinfo").then((x) => {
//       // console.log(x.data)
//       dispatch({
//         type: "username",
//         payload: x.data.data.myprofile.fullname,
//       });
//       dispatch({
//         type: "user_status",
//         payload: x.data.data.myprofile.status,
//       });
//     });
//   }, [open, tab, data.Page_State, data.Project_id, refreshSidebar]);

//   const Menus = [
//     { title: "Home", src: "home", toggle: "/" },
//     { title: "My Projects", src: "check", small: true, toggle: "/projects" },
//     // { title: "Inbox", src: "bell", toggle: "/CompleteInbox" },
//     // { title: "Portfolios ", src: "folder" },
//     // { title: "Goals", src: "star" },
//   ];

//   //My Project and Task related variable & functions starts

//   const handleValue = (id) => {
//     const newArr = ProjectsData.map((obj) => {
//       if (obj.id === id) {
//         return { ...obj, Project: getInput };
//       }
//     });

//     setProjectsData(newArr);
//     SetshowInput(false);
//   };

//   //My Project and Task variable & functions ends

//   return (
//     <>
//       {
//         <div className="flex h-screen overflow-hidden">
//           {/* {sidebar} */}
//           <SideBar
//             TeamID={TeamID}
//             Menus={Menus}
//             open={open}
//             setOpen={setOpen}
//             setIsOpen={setIsOpen}
//             modalIsOpen={modalIsOpen}
//             setIsOpen1={setIsOpen1}
//             modalIsOpen1={modalIsOpen1}
//             setIsOpen2={setIsOpen2}
//             modalIsOpen2={modalIsOpen2}
//             delmodalIsOpen={delmodalIsOpen}
//             setdelmodalIsOpen={setdelmodalIsOpen}
//             tab={tab}
//             setTab={setTab}
//             datas={datas}
//             setData={setData}
//             setrefreshSidebar={setrefreshSidebar}
//             refreshSidebar={refreshSidebar}
//             inviteModal={inviteModal}
//             setinviteModal={setinviteModal}
//             clientmodal={clientmodal}
//             setclientmodal={setclientmodal}
//             projectdeletemodal={projectdeletemodal}
//             setprojectdeletemodal={setprojectdeletemodal}
//           />
//           {/* Home tab */}
//           <div
//             className={`${
//               data.Page_State === "/" ? "block" : "hidden"
//             }  h-[939px]  overflow-x-hidden overflow-y-hidden md:w-[100%]`}
//           >
//             <div
//               className={`${
//                 open ? "md:block md:w-[100%] hidden" : "w-[100%] block"
//               }`}
//             >
//               <div>
//                 {/* Navbar */}
//                 <div className="border-b-2 border-b-[#e9e9e9] text-[17px] p-5 w-[100%]  font-semibold text-secondary">
//                   <p>Home</p>
//                   <Nav setIsOpen={setIsOpen} />
//                 </div>
//                 {/* {Project Section} */}
//                 <Welcome open={open} />
//               </div>
//             </div>
//           </div>
//           <div />
//           {/* My Task */}
//           <div
//             className={`${
//               data.Page_State === "/tasks" ? "block" : "hidden"
//             }  md:w-[100%]`}
//           >
//             <div
//               className={`${
//                 open ? "md:block md:w-[100%] hidden" : "block w-[100%]"
//               } `}
//             >
//               <Mytask
//                 open={open}
//                 setIsOpen={setIsOpen}
//                 modalIsOpen={modalIsOpen}
//                 setIsOpen1={setIsOpen1}
//                 modalIsOpen1={modalIsOpen1}
//                 setIsOpen2={setIsOpen2}
//                 modalIsOpen2={modalIsOpen2}
//                 delmodalIsOpen={delmodalIsOpen}
//                 setdelmodalIsOpen={setdelmodalIsOpen}
//                 inviteModal={inviteModal}
//                 clientmodal={clientmodal}
//                 projectdeletemodal={projectdeletemodal}
//                 setprojectdeletemodal={setprojectdeletemodal}
//               />
//               {/* {<AllProjects open={open}/>} */}
//             </div>
//           </div>
//           {/* My projects */}
//           <div
//             className={`${
//               data.Page_State === "/projects" ? "block" : "hidden"
//             }  md:w-[100%]`}
//           >
//             <div
//               className={`${
//                 open ? "md:block md:w-[100%] hidden" : "block w-[100%]"
//               } `}
//             >
//               {/* <Mytask open={open} /> */}
//               {<AllProjects open={open} />}
//             </div>
//           </div>
//           {/* Team Details */}
//           <div
//             className={`${
//               data.Page_State === "/teamdetails" ? "block" : "hidden"
//             }  md:w-[100%]`}
//           >
//             <div
//               className={`${
//                 open ? "md:block md:w-[100%] hidden" : "block w-[100%]"
//               } `}
//             >
//               {data.Page_State === "/teamdetails" && (
//                 <TeamDetails
//                   open={open}
//                   setrefreshSidebar={setrefreshSidebar}
//                   refreshSidebar={refreshSidebar}
//                 />
//               )}
//             </div>
//           </div>
//           {/* Complete Inbox */}
//           <div
//             className={`${
//               data.Page_State === "/CompleteInbox" ? "block" : "hidden"
//             }  md:w-[100%]`}
//           >
//             <div
//               className={`${
//                 open ? "md:block md:w-[100%] hidden" : "block w-[100%]"
//               } `}
//             >
//               {/* <CompleteInbox open={open} /> */}
//             </div>
//           </div>
//         </div>
//       }
//     </>
//   );
// };

// export default Main;
