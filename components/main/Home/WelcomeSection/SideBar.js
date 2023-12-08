"use client"
import { IoIosArrowDown, IoIosCloseCircle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import { CiHome } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";

const Sidebar = ({ isWide, setIsWide }) => {
  const [team, setTeam] = useState(false);
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState();



  const toggleWidth = () => {
    setIsWide(!isWide);
  };
  return (
    <div className={`flex flex-col justify-between border-r pb-4  overflow-hidden fixed top-0 left-0 lg:relative bg-white duration-300 ${isWide ? "md:w-[50%] sm:w-[70%] w-[85%] lg:w-[23%] min-h-screen" : "w-0 lg:w-[23%]"} `}>
      <div>
        <div className='flex justify-between items-center px-6 py-8 border-b'>
          <img src="/mainlogo1.png" alt="" />
          <div onClick={toggleWidth} className='lg:hidden text-[#586AEA] text-[44px]'><IoIosCloseCircle /></div>
        </div>
        <div className='flex lg:items-center space-x-2 px-8 lg:px-0 lg:justify-center py-6 relative border-b'>
          <div className='w-5 h-5 bg-[#586AEA] flex items-center justify-center text-white font-extrabold'>T</div>
          <button onClick={() => setTeam(!team)} className='flex items-center space-x-2 text-[#586AEA]'>
            <p>Team Nexomos</p>
            <IoIosArrowDown />
          </button>
          <div className='text-[22px] text-[#7B7C7D]'><BsThreeDots /></div>
          {team && (
            <div className='flex justify-center absolute bg-white top-12'>
              <div className='space-y-2 py-2 border rounded-[8px] shadow-lg'>
                <a href='#' className='flex space-x-3 px-4 border-b py-2'><hr /><img src="/t.png" alt="" /><div>Team Nexomos</div></a>
                <a href='#' className='flex space-x-3 px-4 border-b py-2'><hr /><img src="/b.png" alt="" /><div>Back-end Team </div></a>
                <a href='#' className='flex space-x-3 px-4 border-b py-2'><hr /><img src="/f.png" alt="" /><div>Front-end Team </div></a>
                <a href='#' className='flex space-x-3 px-4 border-b py-2'><hr /><img src="/s.png" alt="" /><div>Sale & Marketing</div></a>
                <a href='#' className='flex space-x-3 px-4 py-2'><hr /><img src="/d.png" alt="" /><div>Design Team </div></a>
              </div>
            </div>
          )}
        </div>
        <div className='space-y-3 py-5 h-[220px] border-b-2'>
          <div className='px-6'>
            <div onClick={() => setActive(0)} className={`px-6 ${active === 0 ? "bg-[#F6F7FA] border-r-2 border-[#586AEA] text-[#586AEA]" : ""} flex items-center py-2 px-4 space-x-4`}>
              <div className='text-[22px]'><CiHome /></div>
              <a href="/">Home</a>
            </div>
          </div>

          <div className='px-6'>
            <div onClick={() => setActive(1)} className={`px-6 ${active === 1 ? "bg-[#F6F7FA] border-r-2 border-[#586AEA] text-[#586AEA]" : ""} flex items-center py-2 px-4 space-x-4`}>
              <div className='text-[22px]'><FiFileText /></div>
              <a href="/project">Projects</a>
            </div>
          </div>
        </div>

        <button onClick={() => setActive1(!active1)} className='px-4 py-2 flex items-center space-x-1 text-[18px] text-[#D9D9D9]'>
          <IoIosArrowDown />
          <p>Members</p>
        </button>
        {active1 && (
          <div className='text-[#616161] px-3 py-3 h-[200px] overflow-y-auto'>
            <div className='flex items-center space-x-2 py-2'>
              <div><img src="/t3.png" alt="" /></div>
              <div>Alexa Conor</div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
              <div><img src="/t2.png" alt="" /></div>
              <div>Jessica Doe</div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
              <div><img src="/t1.png" alt="" /></div>
              <div>Scarlette Johnson</div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
              <div><img src="/t1.png" alt="" /></div>
              <div>Scarlette Johnson</div>
            </div>
            <div className='flex items-center space-x-2 py-2'>
              <div><img src="/t1.png" alt="" /></div>
              <div>Scarlette Johnson</div>
            </div>
          </div>
        )}
      </div>
      <div className='w-[100%] flex justify-center'>
        <a href='/login' onClick={() => LOGOUT()} className='flex items-center space-x-2 bg-[#586AEA] xl:px-14 px-10 py-2 text-[22px] text-white rounded-[10px]'>
          <img src="/Logout.png" alt="" />
          <p>Log out</p>
        </a>
      </div>
    </div>
  )
}

export default Sidebar














// import React, { useState, useEffect } from "react";
// import Spinner from "../../../spinner/Spinner";
// import Link from "next/link";
// import { BsThreeDots } from "react-icons/bs";
// import { FaLock } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { SiConfluence } from "react-icons/si";
// import { GoPlus } from "react-icons/go";
// import { MdDeleteOutline } from "react-icons/md";
// // import { IoMdArrowDropright } from "react-icons/IO";
// import { ImCross } from "react-icons/im";
// import Modal from "react-modal";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import Api from "../../../../API/Api";
// import MenuItem from "@mui/material/MenuItem";
// import { data } from "autoprefixer";

// export default function

// SideBar({
//   Menus,
//   TeamID,
//   open,
//   setOpen,
//   tab,
//   setTab,
//   setrefreshSidebar,
//   refreshSidebar,
//   setIsOpen,
//   modalIsOpen,
//   setIsOpen1,
//   modalIsOpen1,
//   setIsOpen2,
//   modalIsOpen2,
//   setdelmodalIsOpen,
//   delmodalIsOpen,
//   setData,
//   inviteModal,
//   setinviteModal,
//   clientmodal,
//   setclientmodal,
//   projectdeletemodal,
//   setprojectdeletemodal,
// }) {
//   const reduxdata = useSelector((x) => x);
//   const dispatch = useDispatch();
//   const [state, setState] = useState(false);
//   const [projectdelete, setprojectdelete] = useState(false);
//   const [teamname, setteamname] = useState({});
//   const [projectName, setproject] = useState({});
//   const [invite, setInvite] = useState({});
//   const [team, setteam] = useState({});
//   const [teamsProjects, setTeamsProjects] = useState({});
//   const [refresh, setrefresh] = useState({});
//   const [TeamId, setTeamId] = useState({});
//   const [openIndices, setOpenIndices] = useState([]);
//   const [values, setValues] = useState(10);
//   const [searching, setsearching] = useState();
//   const [searchdata, setsearchdata] = useState();
//   const [projectTeamId, setprojectTeamId] = useState();
//   const [username, setUser] = useState();
//   const [message, setMessage] = useState(null);
//   const [message2, setMessage2] = useState(null);
//   const [selectedteamid, setSelectedteamid] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [teamrefresh, setteamrefresh] = useState("");
//   const [showAlert, setShowAlert] = useState(false);
//   const [projectAlert, setProjectAlert] = useState(false);
//   const [alertmsg, setAlertmsg] = useState(false);
//   const [InviteEmail, setInviteEmail] = useState("");
//   const [activeColor, setActiveColor] = useState();
//   const [dataID, setDataID] = useState(localStorage.getItem("myData"));
//   // const [clientmodal, setclientmodal] = useState(false);
//   const [clientemail, setclientemail] = useState("");
//   const [projectId, setprojectId] = useState();
//   const [projectdeleteid, setprojectdeleteid] = useState();
//   const [invitationsuccess, setinvitationsuccess] = useState(false);
//   const [projectaccessalert, setprojectaccessalert] = useState(false);
//   const [invitemsg, setinvitemsg] = useState(false);
//   const [clientmsg, setclientmsg] = useState(false);
//   const [clientinvitationsuccess, setclientinvitationsuccess] = useState(false);
//   const [workspaceData, setWorkspaceData] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(10);

//   const privacy = [
//     { value: 10, name: "Public to My Workspace" },
//     { value: 20, name: "Private to My Workspace" },
//   ];

//   // console.log(TeamID)

//   useEffect(() => {
//     let timeoutId;

//     if (invitationsuccess) {
//       timeoutId = setTimeout(() => {
//         setinvitationsuccess(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [invitationsuccess]);
//   useEffect(() => {
//     let timeoutId;

//     if (clientinvitationsuccess) {
//       timeoutId = setTimeout(() => {
//         setclientinvitationsuccess(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [clientinvitationsuccess]);

//   useEffect(() => {
//     setLoading(false);
//   }, []);
//   const createProject = (e) => {
//     // console.log(selectedOption, "privacy");
//     // return false;
//     e.preventDefault();
//     Api.fetchPost(
//       {
//         privacy: selectedOption != null ? selectedOption : 10,
//         name: projectName,
//         team_id: dataID,
//       },
//       "/projects"
//     )
//       .then((x) => {
//         // console.log(x, "id");
//         Api.fetchPost(
//           {
//             message: `${reduxdata.User_name} created a project "${x.data.name}"`,
//             project_id: x.data.id,
//           },
//           `/createnotification/team_id/${dataID}`
//         )
//           .then((t) => {
//             console.log(t, "projects");
//             setProjectAlert(true);
//             dispatch({
//               type: "overallRefresh",
//               payload: t,
//             });
//           })
//           .catch((err) => console.log(err));

//         // console.log(x),

//         setrefresh(x),
//           setrefreshSidebar(x),
//           x.data.message == "Project Created!" && setIsOpen1(false);
//         setteamrefresh(x);
//         dispatch({
//           type: "teamrefresh",
//           payload: teamrefresh,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     Api.fetchGet("/getTeam").then((x) => {
//       // console.log(x.data)
//       setWorkspaceData(x.data);
//     });
//   }, [refresh]);

//   useEffect(() => {
//     let timeoutId;

//     if (projectAlert) {
//       timeoutId = setTimeout(() => {
//         setProjectAlert(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [projectAlert]);
//   useEffect(() => {
//     let timeoutId;

//     if (invitemsg) {
//       timeoutId = setTimeout(() => {
//         setinvitemsg(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [invitemsg]);
//   useEffect(() => {
//     let timeoutId;

//     if (clientmsg) {
//       timeoutId = setTimeout(() => {
//         setclientmsg(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [clientmsg]);

//   useEffect(() => {
//     let timeoutId;

//     if (projectdelete) {
//       timeoutId = setTimeout(() => {
//         setprojectdelete(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [projectdelete]);

//   const deleteTeam = (id) => {
//     Api.fetchGet(`/deleteteam/${id}`)
//       .then((x) => {
//         setrefresh(x);
//         // console.log(x);
//         dispatch({
//           type: "page",
//           payload: "/",
//         });
//       })
//       .catch((e) => {
//         // console.log(e);
//         setAlertmsg(e.response.data);
//         setShowAlert(true);
//       });
//   };

//   const search = (e) => {
//     Api.fetchPost({ query: searching }, `/get/main/users`)
//       .then((x) => {
//         setsearchdata(x.data);
//         // console.log(x);
//       })
//       .catch((err) => console.log(err));
//   };
//   const addTeamUser = (e, id, sd) => {
//     e.preventDefault();
//     if (sd != null) {
//       setMessage2("Write an Email");
//     }
//     searching != null &&
//       Api.fetchPost({ team_id: id, user_id: sd }, `/add/teamsuser`)
//         .then((x) => {
//           Api.fetchPost(
//             { message: `${reduxdata.User_name} added a team member` },
//             `/createnotification/team_id/${dataID}`
//           )

//             .then((t) => {
//               dispatch({
//                 type: "overallRefresh",
//                 payload: t,
//               });
//               // Api.fetchPost(
//               //   { message: "assigned to the task", assigned_id: sd },
//               //   `/createnotification/team_id/${dataID}`
//               // )
//               //   .then((t) => {
//               //     // console.log(t);
//               //     console.log(assigned_id);
//               //   })
//               //   .catch((err) => console.log(err));
//               // console.log(t);
//             })
//             .catch((err) => console.log(err));
//           // console.log(x.data.message);
//           if (x.data.message == "Team Member Registered!") {
//             setIsOpen2(false), setrefresh(x), setrefreshSidebar(x);
//           }
//         })
//         .catch((err) => {
//           console.log(err.response.data.message);
//           setMessage(err.response.data.message);
//         });
//   };

//   const SIGNUPClient = (e) => {
//     e.preventDefault();

//     Api.fetchPost(
//       {
//         email: clientemail,
//         team_id: dataID,
//         project_id: projectId,
//         team_id: dataID,
//       },
//       "/registerclient"
//     )
//       .then((x) => {
//         Api.fetchPost(
//           {
//             message: `${reduxdata.User_name} invited ${clientemail} as a client`,
//             proect_id: reduxdata.Project_id,
//           },
//           `/createnotification/team_id/${dataID}`
//         )

//           .then((t) => {
//             dispatch({
//               type: "overallRefresh",
//               payload: t,
//             });
//           })
//           .catch((err) => console.log(err));
//       })
//       .then((x) => {
//         setclientinvitationsuccess(true);
//       })
//       .catch((err) => setclientmsg(err.response.data));
//   };

//   useEffect(() => {
//     search();
//   }, [searching, refreshSidebar]);
//   // useEffect(() => {
//   //   Api.fetchGet("/projects")
//   //     .then((x) => setDatas(x.data.data[0].projects, "<== projects"))
//   //     .catch((err) => console.log(err));
//   // }, []);

//   const toggleAccordion = (index) => {
//     setOpenIndices(
//       openIndices.includes(index)
//         ? openIndices.filter((i) => i !== index)
//         : [...openIndices, index]
//     );
//   };

//   function closeClientModal() {
//     setclientmodal(false);
//   }
//   function closeProjectDeleteModal() {
//     setprojectdeletemodal(false);
//   }

//   // functions to close Modals
//   function closeModal() {
//     setIsOpen(false);
//     setdelmodalIsOpen(false);
//   }
//   function closeInviteModal() {
//     setIsOpen(false);
//     setinviteModal(false);
//   }
//   function closeModal1() {
//     setIsOpen1(false);
//   }
//   function closeModal2() {
//     setIsOpen2(false);
//     setdelmodalIsOpen(false);
//   }

const LOGOUT = () => {
  localStorage.removeItem("user");
  localStorage.setItem("myData", null);
  window.location.reload();
};
const createTeam = (e) => {
  e.preventDefault();
  Api.fetchPost({ team_name: teamname }, `/createTeam`)
    .then((x) => {
      setrefresh(x),
        //  console.log(x.data),
        setUser(x.data.TeamMembers);

      Api.fetchPost(
        { message: `${reduxdata.User_name} created this team` },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          // console.log(t);
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err.response.data));
};

//   useEffect(() => {
//     let timeoutId;

//     if (showAlert) {
//       timeoutId = setTimeout(() => {
//         setShowAlert(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [showAlert]);
//   useEffect(() => {
//     let timeoutId;

//     if (projectaccessalert) {
//       timeoutId = setTimeout(() => {
//         setprojectaccessalert(false);
//       }, 2500);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [projectaccessalert]);

//   useEffect(() => {
//     Api.fetchGet("/getTeam").then((x) => {
//       // console.log(reduxdata.user_id, "sasasasasa");
//       setteam(x.data);
//     });
//   }, [
//     refresh,
//     refreshSidebar,
//     team.Teams,
//     reduxdata,
//     reduxdata.teamrefresh,
//     reduxdata.refreshProject,
//   ]);
//   // console.log(dataID);
//   // console.log(reduxdata.user_status);

//   useEffect(() => {
//     if (dataID) {
//       Api.fetchGet(`/getTeamandMember/${dataID}`)
//         .then((x) => {
//           // console.log(x, "saaasaaasaaaa");
//           setTeamsProjects(x.data.Teams[0].TeamProjects);
//           setTeamId(x.data.Teams[0]);
//         })
//         .catch((err) => {
//           console.log(err), "sdsadas";
//         });
//     }
//   }, [
//     refresh,
//     refreshSidebar,
//     team.Teams,
//     reduxdata,
//     reduxdata.teamrefresh,
//     reduxdata.refreshProject,
//     reduxdata.teamID,
//   ]);

//   // console.log(dataID)

//   useEffect(() => {
//     // Retrieve data from local storage on component mount
//     const savedData = localStorage.getItem("myData");
//     if (savedData) {
//       setDataID(savedData);
//     }
//   }, [reduxdata.teamID]);

//   // console.log(dataID)

//   useEffect(() => {
//     // // Retrieve data from local storage on component mount
//     // const savedData = localStorage.getItem("myData");
//     // if (savedData) {
//     //   setDataID(savedData);
//     // }
//   }, [
//     refresh,
//     refreshSidebar,
//     team.Teams,
//     reduxdata,
//     reduxdata.teamrefresh,
//     reduxdata.refreshProject,
//     reduxdata.teamID,
//   ]);

//   // console.log(reduxdata);

//   const DeleteProject = (id) => {
//     Api.Delete(`/projects/${projectdeleteid.id}`)
//       .then((x) => {
//         setrefresh(x);

//         Api.fetchPost(
//           {
//             message: `${reduxdata.User_name} deleted project "${projectdeleteid.name}"`,
//           },
//           `/createnotification/team_id/${dataID}`
//         )
//           .then((t) => {
//             console.log(t, "Zaid");
//             dispatch({
//               type: "overallRefresh",
//               payload: t,
//             });
//           })
//           .catch((err) => console.log(err));

//         setprojectdelete(true);
//         //  console.log(x);
//         dispatch({
//           type: "teamrefresh",
//           payload: teamrefresh,
//         });
//         closeProjectDeleteModal();
//         setrefreshSidebar(x), setteamrefresh(x);
//       })
//       .catch((err) => {
//         console.log(err);
//         setprojectaccessalert(err.response.data.message);
//         closeProjectDeleteModal();
//       });
//   };
//   const createprojectModal = () => {
//     setIsOpen1(true);
//   };

//   const invitePeople = (e) => {
//     e.preventDefault();
//     Api.fetchPost({ email: InviteEmail, team_id: dataID }, `/invitation`)
//       .then((x) => {
//         // You can set invitationSuccess to true here
//         setinvitationsuccess(true);

//         Api.fetchPost(
//           {
//             message: `${reduxdata.User_name} invited ${InviteEmail} as a user`,
//             proect_id: reduxdata.Project_id,
//           },
//           `/createnotification/team_id/${dataID}`
//         )
//           .then((t) => {
//             dispatch({
//               type: "overallRefresh",
//               payload: t,
//             });
//             setrefresh(x);
//             setUser(x.data.TeamMembers);
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div
//       className={` ${
//         open ? "md:w-[40%] w-[100%] sm:w-[100%] lg:w-[280px]" : "w-20"
//       } relative font-poppins bg-secondary p-5 pr-3 h-screen pt-3 duration-300 text-xs md:text-md flex flex-col`}
//     >
//       <Modal
//         className="flex justify-center items-center h-full relative z-50"
//         isOpen={projectdeletemodal}
//         onRequestClose={closeProjectDeleteModal}
//       >
//         <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
//           <div className="w-[100%] flex justify-between items-center ">
//             <p className=" text-[20px] text-rose font-poppins">
//               <p className="font-poppins">Are you Sure?</p>
//               You want to delete the Project!
//             </p>
//           </div>
//           <div className="flex flex-row space-x-10 mt-10 text-[14px]">
//             <button
//               onClick={() => {
//                 DeleteProject();
//               }}
//               type="submit"
//               className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
//             >
//               Yes
//             </button>
//             <button
//               onClick={() => closeProjectDeleteModal()}
//               type="submit"
//               className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
//             >
//               No
//             </button>
//           </div>
//         </div>
//       </Modal>
//       <img
//         src="/control.png"
//         className={`absolute cursor-pointer md:-right-3 top-5 w-7 border-secondary
//        border-2 rounded-full  ${!open && "rotate-180"} ${
//           open ? "sm:-right-0 -right-0 " : "sm:-right-3 -right-3"
//         }`}
//         onClick={() => setOpen(!open)}
//       />

//       <div className="flex gap-x-4 items-center">
//         <img
//           src="/sidebarlogo.png"
//           className={`w-[200px] cursor-pointer md:-right-3 top-8 duration-200 ${
//             !open && "hidden"
//           } ${open ? "sm:-right-0 -right-0 " : "sm:-right-3 -right-3"}`}
//         />
//         {showAlert && (
//           <div className="fixed top-0 right-0 bottom-0 left-0 text-primary flex justify-center items-center">
//             <div className="w-[50%] h-[100px] bg-secondary text-center rounded-2xl flex justify-center items-center">
//               <p>{alertmsg}</p>
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <ul className="pt-1">
//           {Menus.map((Menu, index) => {
//             return (
//               <li
//                 key={index}
//                 onClick={() => {
//                   setTab(Menu.toggle),
//                     dispatch({
//                       type: "page",
//                       payload: Menu.toggle,
//                     });
//                   dispatch({
//                     type: "Nav_heading",
//                     payload: Menu.titles,
//                   });
//                 }}
//                 set
//                 className={`flex h-[30px] cursor-pointer rounded-md hover:bg-[#0a0a0a] px-2 text-white text-sm items-center space-x-1
//               ${Menu.gap ? "mt-6" : "mt-1"}
//                 ${tab === Menu.toggle && "bg-[#0a0a0a]"}
//                  `}
//               >
//                 <img
//                   className={`${Menu.small ? "w-[16px]" : ""} w-[16px]`}
//                   src={`/${Menu.src}.png`}
//                 />
//                 <span
//                   className={`${
//                     !open && "hidden"
//                   } origin-left duration-200 font-poppins`}
//                 >
//                   {Menu.title}
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className={`${open ? "" : "hidden "}`}>
//         {projectAlert && (
//           <motion.div
//             animate={{ x: [140, 0] }}
//             transition={{ ease: "easeOut", duration: 0.6 }}
//             id="shadow"
//             className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//           >
//             <p className="font-poppins font-bold text-[17px]">
//               Project Created Successfully
//             </p>
//           </motion.div>
//         )}
//         {projectaccessalert && (
//           <motion.div
//             animate={{ x: [140, 0] }}
//             transition={{ ease: "easeOut", duration: 0.6 }}
//             id="shadow"
//             className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//           >
//             <p className="font-poppins font-bold text-[17px]">
//               {projectaccessalert}
//             </p>
//           </motion.div>
//         )}
//         {projectdelete && (
//           <motion.div
//             animate={{ x: [140, 0] }}
//             transition={{ ease: "easeOut", duration: 0.6 }}
//             id="shadow"
//             className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//           >
//             <p className="font-poppins font-bold text-[17px]">
//               Project Deleted Successfully
//             </p>
//           </motion.div>
//         )}
//         <div className="mt-10 flex text-white py-2 px-1 space-x-3">
//           <h1
//             className="text-[16px]  font-poppins font-medium"
//             // onClick={() => setProjectAlert(true)}
//           >
//             Projects
//           </h1>
//           {reduxdata.user_status === 10 && (
//             <p
//               onClick={() => {
//                 setIsOpen1(true);
//               }}
//               className="text-[20px] hover:cursor-pointer font-semibold -mt-[1px]"
//             >
//               +
//             </p>
//           )}
//         </div>
//         <Modal
//           className="flex justify-center items-center h-full relative z-50"
//           isOpen={modalIsOpen1}
//           onRequestClose={closeModal1}
//         >
//           <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center">
//             <div className="w-[100%] flex justify-between items-center">
//               <p
//                 onClick={() => console.log(t)}
//                 className="font-extrabold text-[25px] text-primary border-b border-b-white w-[330px]"
//               >
//                 Create a Project
//               </p>
//               <ImCross
//                 className="hover:text-gray-400 cursor-pointer text-[white]"
//                 onClick={() => closeModal1()}
//               />
//             </div>
//             <div className="flex flex-col">
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault(); // Prevent default form submission
//                   createProject(e); // Call the createProject function
//                   setIsOpen1(false); // Close the modal
//                 }}
//               >
//                 <div className="text-primary font-normal text-[13px]">
//                   Project Name
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     onChange={(e) => setproject(e.target.value)}
//                     className="border-black border mt-1 px-2 h-10 w-[330px]"
//                     placeholder="Write project name"
//                   />
//                   <select
//                     value={selectedOption}
//                     onChange={(e) => setSelectedOption(e.target.value)}
//                     className="border border-primary ml-5 text-secondary rounded text-[13px] bg-white px-2 h-12"
//                   >
//                     {privacy.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.name}
//                       </option>
//                     ))}
//                   </select>
//                   <button
//                     type="submit"
//                     className="border border-primary ml-5 py-3 text-white px-5 rounded text-[13px]"
//                   >
//                     Create
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </Modal>
//         <div className=" h-[160px] min-[1150px]:h-[200px] overflow-y-scroll text-white text-[15px]">
//           {invitationsuccess && (
//             <motion.div
//               animate={{ x: [140, 0] }}
//               transition={{ ease: "easeOut", duration: 0.6 }}
//               id="shadow"
//               className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//             >
//               <p className="font-poppins text-black font-bold text-[17px]">
//                 Invitation Successfull
//               </p>
//             </motion.div>
//           )}
//           {clientinvitationsuccess && (
//             <motion.div
//               animate={{ x: [140, 0] }}
//               transition={{ ease: "easeOut", duration: 0.6 }}
//               id="shadow"
//               className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//             >
//               <p className="font-poppins text-black font-bold text-[17px]">
//                 Client Invitation Successfull
//               </p>
//             </motion.div>
//           )}
//           {invitemsg && (
//             <motion.div
//               animate={{ x: [140, 0] }}
//               transition={{ ease: "easeOut", duration: 0.6 }}
//               id="shadow"
//               className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//             >
//               <p className="font-poppins text-black font-bold text-[17px]">
//                 {invitemsg}
//               </p>
//             </motion.div>
//           )}
//           {clientmsg && (
//             <motion.div
//               animate={{ x: [140, 0] }}
//               transition={{ ease: "easeOut", duration: 0.6 }}
//               id="shadow"
//               className="fixed top-4 right-0 flex justify-center items-center
//           py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
//             >
//               <p className="font-poppins text-black font-bold text-[17px]">
//                 {clientmsg}
//               </p>
//             </motion.div>
//           )}
//           {teamsProjects &&
//             teamsProjects.length > 0 &&
//             teamsProjects.map((project) => {
//               // Check if the reduxdata.user_status is 20 (client)
//               if (reduxdata.user_status === 20) {
//                 // Find the project that has the same user_id as reduxdata.user_id
//                 const assignedProject = project.projects.find(
//                   (proj) => proj.user_id === reduxdata.user_id
//                 );

//                 // If assignedProject is not undefined, it means the project is assigned to the client, so show it
//                 if (assignedProject) {
//                   return (
//                     <div key={project.id}>
//                       <div
//                         onClick={() => {
//                           dispatch({
//                             type: "page",
//                             payload: "/tasks",
//                           });
//                           dispatch({
//                             type: "project_name",
//                             payload: project.name,
//                           });
//                           dispatch({
//                             type: "project_id",
//                             payload: project.id,
//                           });
//                           dispatch({
//                             type: "team",
//                             payload: TeamId.id,
//                           });
//                           setActiveColor(project.id);
//                         }}
//                         className={`flex bg items-center justify-between my-1 py-1 w-[100%] cursor-pointer hover:bg-[#0b0b0b] rounded-[5px] ${
//                           project.id === activeColor
//                             ? "bg-[#0b0b0b]"
//                             : "bg-transparent"
//                         }`}
//                       >
//                         <div className="flex items-center max-w-[170px] pl-[4px] ">
//                           <div className="w-3 h-3 rounded-[2px] bg-rose mr-2 "></div>
//                           <p className="w-[120px] overflow-hidden font-poppins text-[12px]">
//                             {project.name}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }
//               }

//               // If user_status is not 20 (not client), show the project only if user_status is 10
//               if (reduxdata.user_status === 10) {
//                 const isUserAssignedToProject = project.projects.some(
//                   (proj) => proj.user_id === reduxdata.user_id
//                 );

//                 if (isUserAssignedToProject) {
//                   return (
//                     <div key={project.id} className="">
//                       <div
//                         onClick={() => {
//                           dispatch({
//                             type: "page",
//                             payload: "/tasks",
//                           });
//                           dispatch({
//                             type: "project_name",
//                             payload: project.name,
//                           });
//                           dispatch({
//                             type: "project_id",
//                             payload: project.id,
//                           });
//                           dispatch({
//                             type: "team",
//                             payload: TeamId.id,
//                           });
//                           setActiveColor(project.id);
//                         }}
//                         className={`flex items-center justify-between my-1 py-1 w-[100%] cursor-pointer hover:bg-[#0b0b0b] rounded-[5px] ${
//                           project.id === activeColor
//                             ? "bg-[#0b0b0b]"
//                             : "bg-transparent"
//                         }`}
//                       >
//                         <div className="flex items-center max-w-[170px] pl-[4px] ">
//                           <div className="w-3 h-3 rounded-[2px] bg-rose mr-2 "></div>
//                           <p className="w-[120px] overflow-hidden font-poppins text-[12px]">
//                             {project.name}
//                           </p>
//                           {project.privacy === 20 && (
//                             <div className="flex items-center">
//                               <FaLock size={8} color="white" />
//                             </div>
//                           )}
//                         </div>
//                         <div
//                           className="hover:bg-[#464646] text-rose w-5 h-5 flex items-center justify-center rounded-full"
//                           onClick={() => {
//                             setprojectdeleteid(project);
//                             setprojectdeletemodal(true);
//                           }}
//                         >
//                           <MdDeleteOutline size={14} color="rose" />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 } else if (project.privacy === 10) {
//                   // Display public projects with privacy 10
//                   return (
//                     <div key={project.id}>
//                       <div
//                         onClick={() => {
//                           dispatch({
//                             type: "page",
//                             payload: "/tasks",
//                           });
//                           dispatch({
//                             type: "project_name",
//                             payload: project.name,
//                           });
//                           dispatch({
//                             type: "project_id",
//                             payload: project.id,
//                           });
//                           dispatch({
//                             type: "team",
//                             payload: TeamId.id,
//                           });
//                           setActiveColor(project.id);
//                         }}
//                         className={`flex bg items-center justify-between my-1 py-1 w-[100%] cursor-pointer hover:bg-[#0b0b0b] rounded-[5px] ${
//                           project.id === activeColor
//                             ? "bg-[#0b0b0b]"
//                             : "bg-transparent"
//                         }`}
//                       >
//                         <div className="flex items-center max-w-[170px] pl-[4px] ">
//                           <div className="w-3 h-3 rounded-[2px] bg-rose mr-2 "></div>
//                           <p className="w-[120px] overflow-hidden font-poppins text-[12px]">
//                             {project.name}
//                           </p>
//                         </div>
//                         <div
//                           className="hover:bg-[#464646] text-rose w-5 h-5 flex items-center justify-center rounded-full"
//                           onClick={() => {
//                             setprojectdeleteid(project);
//                             setprojectdeletemodal(true);
//                           }}
//                         >
//                           <MdDeleteOutline size={14} color="rose" />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }
//               }

//               // If none of the conditions match, return null
//               return null;
//             })}
//         </div>
//       </div>
//       <div
//         className={`text-white font-poppins font-medium px-1 text-[16px] mt-10 py-2 ${
//           open ? "" : "hidden"
//         }`}
//       >
//         Team
//       </div>
//       {TeamId && TeamId.id > 0 && (
//         <div
//           onClick={() => {
//             // toggleAccordion(index),
//             dispatch({
//               type: "team",
//               payload: TeamId.id,
//             });
//             dispatch({
//               type: "page",
//               payload: "/teamdetails",
//             });
//           }}
//           className={`text-white px-2 flex hover:bg-[#0b0b0b] pt-2 pb-1 cursor-pointer rounded-[5px] ${
//             open ? "" : "hidden"
//           }`}
//         >
//           <div className="w-3 h-3 rounded-[2px] bg-rose mr-2 "></div>
//           <p className="font-poppins">{TeamId.team_name}</p>
//         </div>
//       )}
//       <div
//         className={`${
//           open ? "" : "hidden"
//         } absolute bottom-6 right-0 w-[100%] flex flex-col justify-center  items-center text-white min-[1150px]:space-y-6 space-y-2 mt-5`}
//       >
//         {reduxdata.user_status == 10 && (
//           <div
//             className="flex items-center justify-center bg-rose rounded-[20px] w-[110px] h-8 cursor-pointer"
//             onClick={() => setinviteModal(true)}
//           >
//             {/* <div className="w-[20px]">
//             <img src="/qmark.png" alt="" />
//           </div> */}
//             <p className="font-poppins">Invite People</p>
//           </div>
//         )}
//         {/* <div title="not working" className="flex items-center gap-x-2">
//           <div className="w-[20x]">
//             <img src="/user-add.png" alt="" />
//           </div>
//           <p>Help &amp; getting started</p>
//         </div>  */}
//         {reduxdata.user_status == 10 && (
//           <div className="w-[110px] flex justify-center h-8">
//             <button
//               onClick={() => setclientmodal(true)}
//               className=" bg-rose w-[100%] py-2 rounded-[20px] font-poppins"
//             >
//               Invite Client
//             </button>
//           </div>
//         )}
//         <Modal
//           className="flex justify-center items-center h-full relative z-50"
//           isOpen={clientmodal}
//           onRequestClose={closeClientModal}
//         >
//           <div className="h-[300px] bg-orange-700 rounded-lg px-9 w-[650px] space-y-14 flex flex-col">
//             <div className="w-[100%] flex justify-between items-center mt-16">
//               <p className="font-extrabold text-[25px] text-primary border-b border-b-white w-[475px]">
//                 Invite Client To My Team And Project
//               </p>
//               <ImCross
//                 className="hover:text-gray-400 cursor-pointer text-[white]"
//                 onClick={() => {
//                   closeClientModal();
//                   // setMessage(null);
//                 }}
//               />
//             </div>
//             <form
//               className="flex flex-col"
//               onSubmit={(e) => {
//                 SIGNUPClient(e);
//                 e.preventDefault(); // Prevent the default form submission
//                 closeClientModal();
//                 // console.log(clientemail);
//               }}
//             >
//               <div className="flex items-center space-x-5">
//                 <input
//                   onChange={(e) => setclientemail(e.target.value)}
//                   type="email"
//                   className="w-[330px] h-10 bg-white px-2 -mt-2"
//                 />
//                 <select
//                   onChange={(e) => setprojectId(e.target.value)}
//                   className="h-10 -mt-2 rounded-lg px-2"
//                 >
//                   <option className="text-[14px] px-2">Select Project</option>
//                   {teamsProjects &&
//                     teamsProjects.length > 0 &&
//                     teamsProjects.map((project) => {
//                       if (reduxdata.user_status === 10) {
//                         const isUserAssignedToProject = project.projects.some(
//                           (proj) => proj.user_id === reduxdata.user_id
//                         );
//                         if (isUserAssignedToProject) {
//                           return (
//                             <option
//                               key={project.id}
//                               className="text-[14px] px-2"
//                               value={project.id}
//                             >
//                               {project.name}
//                             </option>
//                           );
//                         }
//                       }
//                     })}
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className={`w-[100px] h-9 rounded-lg text-secondary font-semibold bg-primary ${
//                   message ? "mt-2" : "mt-5"
//                 }`}
//               >
//                 Invite
//               </button>
//             </form>
//           </div>
//         </Modal>

//         <div className="w-[110px] flex justify-center h-8">
//           <button
//             onClick={() => LOGOUT()}
//             className=" bg-rose w-[100%] py-2 rounded-[20px] font-poppins"
//           >
//             Log Out
//           </button>
//         </div>
//       </div>
//       {/* modal for team */}
//       <Modal
//         className="flex justify-center items-center h-full bottom left-0 right-0 top-0 bottom-0"
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//       >
//         <div className="h-[300px] bg-secondary overflow-hidden relative z-auto rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center items">
//           <div className="w-[100%] flex justify-between items-center ">
//             <p className="font-extrabold text-[25px] text-rose border-b border-b-white w-[330px]">
//               Create a Team
//             </p>
//             <ImCross
//               className="hover:text-rose cursor-pointer text-[white]"
//               onClick={() => closeModal()}
//             />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-rose font-semibold">Team Name</span>
//             <form
//               onSubmit={(e) => {
//                 createTeam(e), closeModal();
//               }}
//               className="space-x-3"
//             >
//               <input
//                 onChange={(e) => setteamname(e.target.value)}
//                 className=" border-black border px-2 h-10 w-[330px]"
//                 placeholder="Write team name"
//               />
//               <button
//                 type="submit"
//                 className="border border-rose text-rose px-3 h-9 rounded-lg"
//               >
//                 Create
//               </button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//       {/* Modal for Invite People */}
//       <Modal
//         className="flex justify-center items-center h-full bottom left-0 right-0 top-0 bottom-0"
//         isOpen={inviteModal}
//         onRequestClose={closeInviteModal}
//       >
//         <div className="h-[300px] bg-secondary overflow-hidden relative z-auto rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center items">
//           <div className="w-[100%] flex justify-between items-center ">
//             <p className="font-extrabold text-[25px] text-primary border-b border-b-white w-[380px]">
//               Invite People To Join Creavitech
//             </p>
//             <ImCross
//               className="hover:text-gray-400 cursor-pointer text-[white]"
//               onClick={() => closeInviteModal()}
//             />
//           </div>
//           <div className="flex flex-col ">
//             <span className="text-primary font-semibold">Email</span>
//             <form
//               onSubmit={(e) => {
//                 invitePeople(e), closeInviteModal();
//               }}
//             >
//               <div className="flex items-center space-x-5">
//                 <input
//                   type="email"
//                   onChange={(e) => setInviteEmail(e.target.value)}
//                   className=" border-black border px-2 h-10 w-[330px]"
//                   placeholder="Write email "
//                 />
//                 {/* <select
//                   onChange={(e) => setprojectId(e.target.value)}
//                   className="h-10 hover:cursor-pointer  rounded-lg px-2"
//                 >
//                   <option className="text-[14px] px-2">Select Project</option>
//                   {teamsProjects &&
//                     teamsProjects.length > 0 &&
//                     teamsProjects.map((project) => (
//                       <option className="text-[14px] px-2" value={project.id}>
//                         {project.name}
//                       </option>
//                     ))}
//                 </select> */}
//               </div>
//               <button
//                 type="submit"
//                 className="border my-4 border-primary hover:bg-slate-200 hover:text-secondary font-medium text-primary px-5 h-9 rounded-lg"
//               >
//                 Invite
//               </button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//       {/* Modal for Projects */}
//     </div>
//   );
// }

// {
//   /* <div className="flex items-center justify-between rounded-lg py-1 space-x-3 px-2 mt-6">
//           <h1 className="text-rose font-bold text-xl font-poppins">
//             My
//             <span
//               className="text-white font-poppins"
//               onClick={() => console.log(team)}
//             >
//               Teams
//             </span>
//           </h1>
//           <div className="hover:bg-[#464646] w-6 h-6 flex justify-center cursor-pointer items-center rounded-full">
//             <GoPlus
//               onClick={() => setIsOpen(true)}
//               size={16}
//               color={"white"}
//               className="font-bold"
//             />
//           </div>
//         </div> */
// }

// {
//   /* <Modal
//           className="flex justify-center items-center h-full relative z-50"
//           isOpen={delmodalIsOpen}
//           onRequestClose={closeModal2}
//         >
//           <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
//             <div className="w-[100%] flex justify-between items-center ">
//               <p className=" text-[20px] text-rose font-poppins">
//                 <p className="font-poppins">Are you Sure?</p>
//                 You want to delete the team!
//               </p>
//             </div>
//             <div className="flex flex-row space-x-10 mt-10 text-[14px]">
//               <button
//                 onClick={() => {
//                   deleteTeam(selectedteamid);
//                   closeModal2();
//                 }}
//                 type="submit"
//                 className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => closeModal2()}
//                 type="submit"
//                 className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </Modal> */
// }
// {
//   /* {team &&
//             team.length > 0 &&
//             team.map(
//               (t, index) =>
//                 t.Teams !== null && (
//                   <div className="flex flex-col mt-2 px-[2px] min-h-[20px] border border-black cursor-pointer">
//                     <div className="flex items-center justify-between">
//                       <div
//                         onClick={() => {
//                           toggleAccordion(index),
//                             dispatch({
//                               type: "team",
//                               payload: t.Teams.id,
//                             });
//                           dispatch({
//                             type: "page",
//                             payload: "/teamdetails",
//                           });
//                         }}
//                         className=" flex items-center space-x-2 my-[10px] "
//                       >
//                         <IoMdArrowDropright
//                           size={22}
//                           className={`text-primary mt-[5px] ${
//                             openIndices.includes(index) ? "rotate-90" : ""
//                           }`}
//                           onClick={() => {
//                             toggleAccordion(index);
//                           }}
//                         />
//                         <p className="lg:w-[180px] overflow-hidden">
//                           {t.Teams !== null && t.Teams.team_name}
//                         </p>
//                       </div>
//                       <div
//                         className="hover:bg-[#464646] text-rose w-5 h-5 flex items-center justify-center rounded-full"
//                         onClick={() => {
//                           console.log(t.Teams.id);
//                           setSelectedteamid(t.Teams.id);
//                           setdelmodalIsOpen(true);
//                         }}
//                       >
//                         <MdDeleteOutline />
//                       </div>
//                     </div>


//                     {openIndices.includes(index) && (
//                       <div className="text-[12px] font-normal  pb-1">
//                         <div className="flex justify-between space-x-2 h-6 w-[100%]  items-center">
//                           <div className="flex  overflow-x-scroll max-w-[90px] items-center">
//                             {t &&
//                               t.Teams.TeamMembers.length > 0 &&
//                               t.Teams.TeamMembers.map((members) => (
//                                 <div
//                                   onClick={() => console.log(members)}
//                                   className="w-[20px] h-[20px] mx-1 bg-primary flex text-center rounded-full"
//                                 >
//                                   <div className="bg-rose rounded-full w-7 h-5">
//                                     {" "}
//                                     {members &&
//                                       members.myprofile.fullname.split("")[0]}
//                                     {members &&
//                                       members.myprofile.fullname.split("")[1]}
//                                   </div>
//                                 </div>
//                               ))}
//                           </div>
//                           <button
//                             onClick={() => setIsOpen2(true)}
//                             className="flex items-center w-[100px] hover:bg-[#464646] h-6 px-[2px] rounded-md"
//                           >
//                             <img
//                               src="/add.png"
//                               className="h-[10px] mr-1 mt-[1px]"
//                             />
//                             <p>Assign People</p>
//                           </button>
//                           <Modal
//                             className="flex justify-center items-center h-full relative z-50"
//                             isOpen={modalIsOpen2}
//                             onRequestClose={closeModal2}
//                           >
//                             <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col">
//                               <div className="w-[100%] flex justify-between items-center mt-16">
//                                 <p className="font-extrabold text-[25px] text-primary border-b border-b-white w-[340px]">
//                                   Assign People To My Team
//                                 </p>
//                                 <ImCross
//                                   className="hover:text-gray-400 cursor-pointer text-[white]"
//                                   onClick={() => {
//                                     closeModal2();
//                                     setMessage(null);
//                                   }}
//                                 />
//                               </div>
//                               <div className="flex flex-col">
//                                 <form
//                                   className="flex flex-col"
//                                   onSubmit={(e) => {
//                                     invitePeople(e);
//                                     setIsOpen2(false);
//                                   }}
//                                 >
//                                   <div className="flex items-center  space-x-3">
//                                     <input
//                                       onClick={() => setMessage(null)}
//                                       onChange={(e) => {
//                                         setInviteEmail(e.target.value),
//                                           setsearching(e.target.value);
//                                       }}
//                                       type="email"
//                                       className={`w-[330px] h-10 bg-white px-2 -mt-2 ${
//                                         message ? `border-2 border-red-500` : ``
//                                       }`}
//                                       value={searching && searching.email}
//                                     />
//                                     {message && (
//                                       <div className="text-red-500 text-[14px] -mt-2">
//                                         {message}
//                                       </div>
//                                     )}
//                                   </div>

//                                   {searchdata &&
//                                     searchdata.length < 1 &&
//                                     searching && (
//                                       <button
//                                         type="submit"
//                                         className={`w-[100px] h-9 rounded-lg text-secondary font-semibold bg-primary ${
//                                           message ? `mt-2` : `mt-5`
//                                         }`}
//                                       >
//                                         Invite
//                                       </button>
//                                     )}
//                                 </form>
//                                 {searchdata &&
//                                   searchdata.length > 0 &&
//                                   searching && (
//                                     <div className="absolute mt-[34px] w-[330px] min-h-[0px] overflow-hidden bg-slate-100  rounded-[5px]">
//                                       {searchdata.map((sd) => (
//                                         <div
//                                           className=" items-center space-x-2 flex  py-[2px] border-b border-gray-400 mx-4"
//                                           onClick={() => {
//                                           }}
//                                         >
//                                           <div className="bg-primary rounded-full text-white w-7 h-7 text-xs flex items-center justify-center ">
//                                             <div className="bg-primary rounded-full w-7 h-7 text-xs flex items-center justify-center ">
//                                               {sd &&
//                                                 sd.myprofile.fullname.split(
//                                                   ""
//                                                 )[0]}
//                                               {sd &&
//                                                 sd.myprofile.fullname.split(
//                                                   ""
//                                                 )[1]}
//                                             </div>
//                                           </div>
//                                           <div className="w-[100%]">
//                                             <div className=" space-x-2  ">
//                                               <div>{sd.myprofile.fullname}</div>
//                                             </div>
//                                             <div className="flex text-xs items-center  h-6 justify-between w-[100%]">
//                                               <p>{sd.email}</p>
//                                               <button
//                                                 onClick={(e) => {

//                                                   addTeamUser(
//                                                     e,
//                                                     t.Teams.id,
//                                                     sd.id
//                                                   );
//                                                 }}
//                                                 type="submit"
//                                                 className={`w-[50px] h-6 rounded-lg text-white  font-semibold text-xs hover:text-gray-600 text-center bg-primary`}
//                                               >
//                                                 Assign
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   )}
//                               </div>
//                             </div>
//                           </Modal>
//                         </div>

//                         {t.Teams.TeamProjects &&
//                           t.Teams.TeamProjects.map((project) => (
//                             <div className="flex items-center justify-between py-2 w-[100%]">
//                               <div
//                                 className="flex items-center max-w-[170px] pl-[4px] "
//                                 onClick={() => {
//                                   dispatch({
//                                     type: "page",
//                                     payload: "/tasks",
//                                   }),
//                                     dispatch({
//                                       type: "project_name",
//                                       payload: project.name,
//                                     });
//                                   dispatch({
//                                     type: "project_id",
//                                     payload: project.id,
//                                   });
//                                   dispatch({
//                                     type: "team",
//                                     payload: t.Teams.id,
//                                   });
//                                 }}
//                               >
//                                 <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
//                                 <p className="w-[120px] overflow-hidden">
//                                   {project.name}
//                                 </p>
//                               </div>
//                               <div
//                                 className="hover:bg-[#464646] text-rose w-5 h-5 flex items-center justify-center rounded-full"
//                                 onClick={() => {
//                                   DeleteProject(project.id),
//                                     console.log(project.id);
//                                 }}
//                               >
//                                 {" "}
//                                 <MdDeleteOutline size={14} color="rose" />
//                               </div>
//                             </div>
//                           ))}

//                         <button
//                           onClick={() => {
//                             createprojectModal(), setprojectTeamId(t.Teams.id);
//                           }}
//                           className="flex justify-center items-center hover:bg-[#464646] rounded-[5px] py-1 h-7 px-1 mt-2"
//                         >
//                           <img src="/add.png" className="h-[10px] mr-1" />

//                           <p className="text-white ">Create New Project</p>
//                         </button>
//                       </div>
//                     )}
//                     <Modal
//                       className="flex justify-center items-center h-full relative z-50"
//                       isOpen={modalIsOpen1}
//                       onRequestClose={closeModal1}
//                     >
//                       <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center ">
//                         <div className="w-[100%] flex justify-between items-center">
//                           <p
//                             onClick={() => console.log(t)}
//                             className="font-extrabold text-[25px] text-primary border-b border-b-white w-[330px]"
//                           >
//                             Create a Project
//                           </p>
//                           <ImCross
//                             className="hover:text-gray-400 cursor-pointer text-[white]"
//                             onClick={() => closeModal1()}
//                           />
//                         </div>
//                         <div className="flex flex-col">
//                           <form
//                             onSubmit={(e) => {
//                               {
//                                 createProject(e), setIsOpen1(false);
//                               }
//                             }}
//                           >
//                             {" "}
//                             <div className="text-primary font-normal text-[13px]">
//                               Project Name
//                             </div>
//                             <input
//                               onChange={(e) => setproject(e.target.value)}
//                               className=" border-black border mt-1 px-2 h-10 w-[330px]"
//                               placeholder="Write team name"
//                             />
//                             <div className="text-primary font-normal text-[13px] mt-3">
//                               Select Privacy
//                             </div>
//                             <select
//                               className="w-[330px] h-10 mt-1"
//                               disabled={!privacy.length}
//                               value={values}
//                               onChange={(e) => setValues(e.target.value)}
//                             >
//                               {privacy.map((x) => (
//                                 <option value={x.value}>{x.name}</option>
//                               ))}
//                             </select>
//                             <button
//                               type="submit"
//                               className="border border-primary ml-5 text-white py-2 px-5 rounded text-[13px]"
//                             >
//                               Create
//                             </button>
//                           </form>
//                         </div>
//                       </div>
//                     </Modal>
//                   </div>
//                 )
//             )} */
// }
