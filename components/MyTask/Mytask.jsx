import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiSave3Line } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { BiDuplicate } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import List from "./List";
import List2 from "./List2";
import Board from "./Board/Board";
import Calender from "./Calender/Calenders";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../main/Home/Modals";
import { ImCross } from "react-icons/im";
import Api from "../../API/Api";
import Nav from "../main/Home/WelcomeSection/Nav";
import Modal from "react-modal";
import { motion } from "framer-motion";

export default function Mytask({
  tab,
  setTab,
  open,
  setIsOpen,
  modalIsOpen,
  setIsOpen1,
  modalIsOpen1,
  setIsOpen2,
  modalIsOpen2,
  setdelmodalIsOpen,
  delmodalIsOpen,
  clientmodal,
  inviteModal,
  projectdeletemodal,
  setprojectdeletemodal,
}) {
  const [listToggle, setListoggle] = useState(false);
  const [showinput, SetshowInput] = useState(false);
  const [projectuser_id, Setprojectuser_id] = useState();
  const [projectuser_name, Setprojectuser_name] = useState();
  const [projectuser, Setprojectuser] = useState(false);
  const [projectuserdeletemsg, Setprojectuserdeletemsg] = useState(false);
  const [projectuserdeletemodal, setprojectuserdeletemodal] = useState(false);
  const [projectusermsg, Setprojectusermsg] = useState(false);
  const [getInput, setGetinput] = useState("");
  const [state, setState] = useState(1);
  const [message, setMessage] = useState(null);
  const [details, setDetails] = useState(0);
  const [modal, setmodal] = useState(false);
  const [showProjectInput, setshowProjectInput] = useState(false);
  const [projectusermodel, setprojectusermodel] = useState(false);
  const [projectuseralert, setprojectuseralert] = useState(false);
  const [down, setdown] = useState(true);
  const [project_name, setproject_name] = useState("");
  const [refreshProject, setrefreshProject] = useState();
  const [searching, setsearching] = useState();
  const [searching2, setsearching2] = useState();
  const reduxdata = useSelector((x) => x);
  const [searchdata, setsearchdata] = useState();
  const [dataID, setDataID] = useState(localStorage.getItem("myData"));
  const [projectdata, setprojectdata] = useState();

  const [showInfo, setShowInfo] = useState(
    Array(projectuser.length).fill(false)
  );
  const dispatch = useDispatch();

  const toggleInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };

  function closeProjectUserDeleteModal() {
    setprojectuserdeletemodal(false);
  }

  const DeleteprojectUser = () => {
    Api.Delete(
      `/projectuser/project_id/${data.Project_id}/user_id/${projectuser_id}`
    )
      .then((x) => {
        console.log(x);
        // closeProjectUserDeleteModal();
        // Setprojectuserdeletemsg(true);
        Api.fetchPost(
          {
            message: `${data.User_name} removed ${projectuser_name} from project "${data.Project_name}"`,
            project_id: data.Project_id,
          },
          `/createnotification/team_id/${dataID}`
        )
          .then((t) => {
            dispatch({
              type: "overallRefresh",
              payload: t,
            });
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleValue = (id) => {
    const newArr = ProjectsData.map((obj) => {
      if (obj.id === id) {
        return { ...obj, Project: getInput };
      }
    });
    setProjectsData(newArr);
    SetshowInput(false);
  };
  const data = useSelector((x) => x);

  useEffect(() => {
    search();
  }, [searching]);

  useEffect(() => {
    search2();
  }, [searching2]);

  useEffect(() => {
    let timeoutId;

    if (projectuseralert) {
      timeoutId = setTimeout(() => {
        setprojectuseralert(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [projectuseralert]);

  const search2 = (e) => {
    Api.fetchPost({ query: searching2, team_id: data.team }, `/getuserfortask`)
      .then((x) => {
        setsearchdata(x.data);
        // console.log(x.data, "sadsada");
      })
      .catch((err) => console.log(err));
  };
  const addProjectUser = (e, sd) => {
    e.preventDefault();
    Api.fetchPost(
      { user_id: sd, project_id: data.Project_id },
      `/add/projectsusers`
    )
      .then((x) => {
        // setsearchdata(x.data);
        // console.log(x.data, "sadsada");
        closeaddprojectuserModal();
        setprojectuseralert(true);

        Api.fetchPost(
          {
            message: `${data.User_name} added ${projectuser_name} project "${data.Project_name}"`,
            project_id: data.Project_id,
            on,
          },
          `/createnotification/team_id/${dataID}`
        )
          .then((t) => {
            dispatch({
              type: "overallRefresh",
              payload: t,
            });
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => {
        console.log(err);
        closeaddprojectuserModal();
        if (projectuseralert === false) {
          Setprojectusermsg(true);
        }
      });
  };

  const search = (e) => {
    Api.fetchPost({ query: searching }, `/getteamandproject`)
      .then((x) => {
        console.log(object);
        // setsearchdata(x.data);
        // console.log(x.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let timeoutId;

    if (projectusermsg) {
      timeoutId = setTimeout(() => {
        Setprojectusermsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [projectusermsg]);
  useEffect(() => {
    let timeoutId;

    if (projectuserdeletemsg) {
      timeoutId = setTimeout(() => {
        Setprojectuserdeletemsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [projectuserdeletemsg]);

  function closeaddprojectuserModal() {
    setprojectusermodel(false);
  }
  const editprojectname = (e) => {
    e.preventDefault();
    // blurName.current.blur();
    if (data.Project_name != project_name) {
      project_name != null &&
        Api.Update({ name: project_name }, `/projects/${data.Project_id}`).then(
          (x) => {
            setrefreshProject("Zaid");
            setproject_name(null);
            setshowProjectInput(false);
            dispatch({
              type: "refreshProject",
              payload: refreshProject,
            });

            dispatch({
              type: "project_name",
              payload: project_name,
            });
            Api.fetchPost(
              {
                message: `${reduxdata.User_name} renamed project 
               "${data.Project_name}" to "${x.data.name}"`,
                proect_id: data.Project_id,
              },
              `/createnotification/team_id/${dataID}`
            )
              .then((t) => {
                console.log(t, "Zaid");
                dispatch({
                  type: "overallRefresh",
                  payload: t,
                });
              })
              .catch((err) => console.log(err));
          }
        );
    }
  };

  useEffect(() => {
    Api.fetchGet(`/getprojectusers/project/${data.Project_id}`)
      .then((x) => {
        Setprojectuser(x.data, "user of project");

        // console.log(x, "user of project");
      })
      .catch((err) => {
        console.log(err, "project user");
      });
  });
  useEffect(() => {
    setproject_name(null);
  }, [data.project_name]);

  useEffect(() => {
    if (showProjectInput) {
      projectRef.current.focus();
    }
  }, [showProjectInput]);
  const projectRef = useRef();

  return (
    <div className="w-[700px] lg:w-[100%] md:w-[100%] ">
      {projectuserdeletemsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            ProjectUser Deleted Successfully
          </p>
        </motion.div>
      )}
      {projectuseralert && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            ProjectUser Assigned Successfully
          </p>
        </motion.div>
      )}
      {projectusermsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            User is already a member of this project.
          </p>
        </motion.div>
      )}

      <Modal
        className="flex justify-center items-center h-full relative z-50"
        isOpen={projectusermodel}
        onRequestClose={closeaddprojectuserModal}
      >
        <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col">
          <div className="w-[100%] flex justify-between items-center mt-16">
            <p className="font-extrabold text-[25px] text-primary border-b border-b-white w-[360px]">
              Assign People To My Project
            </p>
            <ImCross
              className="hover:text-gray-400 cursor-pointer text-[white]"
              onClick={() => {
                closeaddprojectuserModal();
                setMessage(null);
              }}
            />
          </div>
          <div className="flex flex-col">
            <form
              className="flex flex-col"
              onSubmit={(e) => {
                // addTeamUser(e, t.Teams.id);
                setsearching2(null);
                // invitePeople(e);
                setIsOpen2(false);
              }}
            >
              <div className="flex items-center  space-x-3">
                <input
                  onClick={() => setMessage(null)}
                  onChange={(e) => {
                    // setInviteEmail(e.target.value),
                    setsearching2(e.target.value);
                  }}
                  type="email"
                  className={`w-[330px] h-10 bg-white px-2 -mt-2 ${
                    message ? `border-2 border-red-500` : ``
                  }`}
                  value={searching2 && searching2.email}
                />
                {message && (
                  <div className="text-red-500 text-[14px] -mt-2">
                    {message}
                  </div>
                )}
              </div>

              {searchdata && searchdata.length < 1 && searching2 && (
                <button
                  type="submit"
                  className={`w-[100px] h-9 rounded-lg text-secondary font-semibold bg-primary ${
                    message ? `mt-2` : `mt-5`
                  }`}
                >
                  Invite
                </button>
              )}
            </form>
            {searchdata && searchdata.length > 0 && searching2 && (
              <div className="absolute mt-[34px] w-[330px] min-h-[0px] overflow-hidden bg-slate-100  rounded-[5px]">
                {searchdata.map((sd) => (
                  <div
                    key={sd}
                    className=" items-center space-x-2 flex  py-[2px] border-b border-gray-400 mx-4"
                    onClick={() => {
                      // setsearching(sd);
                    }}
                  >
                    <div className="bg-primary rounded-full text-white w-7 h-7 text-xs flex items-center justify-center ">
                      <div className="bg-primary rounded-full w-7 h-7 text-xs flex items-center justify-center ">
                        {sd && sd.UserInfo.myprofile.fullname.split("")[0]}
                        {sd && sd.UserInfo.myprofile.fullname.split("")[1]}
                      </div>
                    </div>
                    <div className="w-[100%]">
                      <div className=" space-x-2  ">
                        <div>{sd.UserInfo.myprofile.fullname}</div>
                      </div>
                      <div className="flex text-xs items-center  h-6 justify-between w-[100%]">
                        <p>{sd.UserInfo.email}</p>
                        <button
                          onClick={(e) => {
                            // setsearching(sd);

                            addProjectUser(e, sd.user_id);
                          }}
                          type="submit"
                          className={`w-[50px] h-6 rounded-lg text-white  font-semibold text-xs hover:text-gray-600 text-center bg-primary`}
                        >
                          Assign
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Modal>
      <nav className="flex justify-between px-[20px] items-center border-b border-t-black ">
        <div className="text-primary font-bold flex gap-1 items-center w-[70%]">
          <div className="md:block">
            <div className="bg-secondary text-white text-[16px] h-12 w-12 rounded-[50px] flex items-center justify-center mt-2">
              <div>
                {
                  <div className="flex ">
                    {reduxdata.User_name && reduxdata.User_name.split("")[0]}
                    {reduxdata.User_name && reduxdata.User_name.split("")[1]}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="flex w-[100%]">
            <div className=" w-[100%] pt-3 space-y-2">
              <div className="flex items-center">
                <div className=" w-[100%]">
                  {showProjectInput && (
                    <form
                      className="w-[100%] "
                      onSubmit={(e) => {
                        editprojectname(e);
                      }}
                    >
                      <input
                        id="inputProject"
                        className="font-bold text-lg w-[70%] text-secondary px-1"
                        onChange={(e) => setproject_name(e.target.value)}
                        value={project_name}
                        ref={projectRef}
                        onBlur={(e) => editprojectname(e)}
                      />
                    </form>
                  )}
                  {data.user_status == 10 ? (
                    showProjectInput == false && (
                      <div
                        onClick={(e) => {
                          setshowProjectInput(true),
                            setproject_name(data.Project_name);
                        }}
                        className="text-[18px] px-1 hover:bg-gray-50 hover:border-gray-300 w-[70%] border border-white font-bold text-secondary"
                      >
                        {data.Project_name}
                      </div>
                    )
                  ) : (
                    <div className="text-[18px] font-bold text-secondary">
                      {data.Project_name}
                    </div>
                  )}

                  {/* <div className="relative">
                      {" "}
                      <button onClick={() => setdown(!down)}>
                        <IoIosArrowDown
                          className="text-primary pt-2"
                          size={24}
                        />
                      </button>
                    </div> */}

                  {/* {down == false && (
                    <div className="absolute py-1 z-10 w-[175px] h-[315px] bg-white border border-gray-300 ">
                      <div className="flex items-center space-x-2 hover:bg-gray-300 py-1 pl-1">
                        <BiPencil className="text-gray-400" />
                        <button className="text-gray-400 text-sm font-normal">
                          Edit projects details
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 py-1 pl-1 border-b border-gray-300">
                        <div className="border border-black h-5 w-5 bg-blue-600 "></div>
                        <button className="text-gray-400 text-sm font-normal">
                          Set colors & icons
                        </button>
                        <button className="text-gray-400 ">
                          <BsChevronRight />
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <FiLink size={18} />
                        <p className="text-gray-400 text-sm font-normal">
                          Copy project link
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <RiSave3Line size={18} />
                        <p className="text-gray-400 text-sm font-normal">
                          Save layout as default
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <BiDuplicate size={18} />
                        <p className="text-gray-400 text-sm font-normal">
                          Duplicate
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <HiTemplate size={18} />
                        <p className="text-gray-400 text-sm font-normal">
                          Save as template
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1  border-b border-gray-300">
                        <IoMdAdd size={18} />
                        <p className="text-gray-400 text-sm font-normal">
                          Add to portfolio
                        </p>
                      </div>
                      <div className="flex justify-between items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <p className="text-gray-400 text-sm font-normal">
                          Import
                        </p>
                        <BsChevronRight />
                      </div>
                      <div className="flex justify-between items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <p className="text-gray-400 text-sm font-normal">
                          Export/Print
                        </p>
                        <BsChevronRight />
                      </div>
                      <div className="flex justify-between items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-white py-1 pl-1">
                        <p className="text-gray-400 text-sm font-normal">
                          Archive
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 hover:bg-gray-300 text-gray-400 hover:text-red-500 py-1 pl-1">
                        <MdDeleteOutline size={18} />
                        <p className="text-sm font-normal">delete</p>
                      </div>
                    </div>
                  )} */}
                  {/* <div /> */}
                </div>
              </div>
              <div className="flex px-1 space-x-4 text-[#838383] font-poppins text-[14px]">
                <button
                  onClick={() => {
                    setState(1), setDetails(false);
                  }}
                  className={`hover:text-secondary px-1 hover:border-secondary ${
                    state == 1
                      ? `text-secondary border-b-[3px] border-secondary font-extrabold text-[15px]`
                      : `border-b-[3px] border-white`
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => {
                    setState(2), setDetails(false);
                  }}
                  className={`hover:text-secondary px-1 hover:border-secondary ${
                    state == 2
                      ? `text-secondary border-b-[3px] border-secondary font-extrabold text-[15px]`
                      : `border-b-[3px] border-white`
                  }`}
                >
                  Board
                </button>
                {/* <button
                  onClick={() => {
                    setState(3), setDetails(false);
                  }}
                  className={`hover:text-secondary px-1 hover:border-secondary ${
                    state == 3
                      ? `text-secondary border-b-[3px] border-secondary font-extrabold text-[15px]`
                      : `border-b-[3px] border-white`
                  }`}
                >
                  Calendar
                </button>
                <button
                  onClick={() => {
                    setState(4), setDetails(false);
                  }}
                  className={`hover:text-secondary px-1 hover:border-secondary ${
                    state == 4
                      ? `text-secondary border-b-[3px] border-secondary font-extrabold text-[15px]`
                      : `border-b-[3px] border-white`
                  }`}
                >
                  Files
                </button> */}
              </div>
            </div>
          </div>
          <div className=" h-auto flex overflow-x-scroll w-[220px] items-center hover:cursor-pointer px-1 mx-5 space-x-2">
            {projectuser &&
              projectuser.length > 0 &&
              projectuser.map((projectuser, index) => (
                <div
                  key={index}
                  className="h-8 flex items-center justify-center bottom-2"
                >
                  <Modal
                    className="flex justify-center items-center h-full relative z-50"
                    isOpen={projectuserdeletemodal}
                    onRequestClose={closeProjectUserDeleteModal}
                  >
                    <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                      <div className="w-[100%] flex justify-between items-center ">
                        <p className=" text-[20px] text-rose font-poppins">
                          <p className="font-poppins">Are you Sure?</p>
                          You want to delete the TaskUser!
                        </p>
                      </div>
                      <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                        <button
                          onClick={() => {
                            DeleteprojectUser(), closeProjectUserDeleteModal();
                          }}
                          type="submit"
                          className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => closeProjectUserDeleteModal()}
                          type="submit"
                          className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </Modal>
                  <div
                    className="bg-rose text-white rounded-full w-6 h-6 relative"
                    key={index}
                    onMouseEnter={() => toggleInfo(index)}
                    onMouseLeave={() => toggleInfo(index)}
                  >
                    <div
                      id="hovercrosstask"
                      className="bg-rose text-white relative rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1"
                    >
                      <p>
                        {projectuser.myuser.myprofile.fullname.split("")[0]}
                      </p>
                      <p>
                        {projectuser.myuser.myprofile.fullname.split("")[1]}
                      </p>
                      <div
                        onClick={() => {
                          setprojectuserdeletemodal(true),
                            Setprojectuser_id(projectuser.user_id);
                          Setprojectuser_name(
                            projectuser?.myuser?.myprofile?.fullname
                          );
                          // console.log(
                          //   projectuser?.myuser?.myprofile?.fullname,
                          //   "uuid"
                          // );
                        }}
                        className="absolute hidden bg-white  hover:bg-slate-300 flex items-center justify-center hover:text-red-500 h-[13px] w-[13px] mt-[2px] rounded-full text-black text-[11px] -top-[6px] z-40 -right-1"
                        id="crosstask"
                      >
                        x
                      </div>
                    </div>
                    {showInfo[index] && (
                      <div className="fixed z-10 -mr-[10px] text-center mt-2 px-2 bg-white border rounded-lg shadow-lg">
                        {/* Additional information */}
                        <p className="relative text-black font-semibold text-[14px]">
                          {projectuser.myuser.myprofile.fullname}
                        </p>
                        <p className="relative text-black font-semibold text-[12px]">
                          {projectuser.myuser.myprofile.email}
                        </p>
                        {/* Add more information here as needed */}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className=" flex flex-row space-x-2 mb-3">
            <button
              onClick={() => {
                setprojectusermodel(true);
              }}
              className=" bg-[#171717] text-white w-[200px] py-2 rounded-[10px] text-secondary"
            >
              Add ProjectUser
            </button>
          </div>
        </div>

        <div className="flex gap-x-3 items-center">
          {/* <div className="flex justify-center items-center text-center rounded-[90px] text-white  h-8 w-20 bg-primary p-3">
            <img src="/Share.png" className="text-white h-4 pr-1" />
            Share
          </div> */}
          {/* <div>
            <div className="absolute">
              <div className="relative top-2 px-2 text-white ">
                <FiSearch />
              </div>
            </div>
            <input
              onChange={(e) => setsearching(e.target.value)}
              type="text"
              placeholder="Search"
              className="bg-secondary rounded-[40px] p-1 pl-8 pr-3 outline-none w-40 text-white"
            />
          </div> */}

          {/* <div onClick={() => setmodal(true)} className="md:block">
            <img src="/plus.png" alt="loading" />
          </div> */}
          <Modals modal={modal} setmodal={setmodal} />
          {/* <div className=" md:block">
            <div className=" rounded-[90px] text-white h-10 w-10 bg-primary font-semibold text-[18px] flex justify-center items-center">
            <p>{reduxdata.User_name&&reduxdata.User_name.split("")[0]}</p>
            </div>
          </div> */}
        </div>

        <div>
          <Nav />
        </div>
      </nav>

      {state == 1 ??
        state ==
          2(
            <div className="flex md:justify-end justify-center pt-2 px-5 border-b-2 border-b-gray-200 pb-2">
              <div className="flex space-x-4">
                <div className="flex  justify-center items-center space-x-1">
                  <div>
                    <AiOutlineCheckCircle className="text-primary" />
                  </div>
                  <div>Incomplete Tasks</div>
                </div>
                <div className="flex  justify-center items-center space-x-1">
                  <img src="/customize.png" className="h-4" />
                  <div>Short</div>
                </div>
                <div className="flex space-x-1 justify-center items-center ">
                  <img src="/arrow.png" className="h-4" />
                  <div>Customize</div>
                </div>
              </div>
            </div>
          )}

      {state == 1 && (
        <div className=" w-[100%]">
          <List2
            showinput={showinput}
            listToggle={listToggle}
            SetshowInput={SetshowInput}
            setListoggle={setListoggle}
            getInput={getInput}
            details={details}
            setDetails={setDetails}
            open={open}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            setIsOpe1n={setIsOpen1}
            modalIsOpen1={modalIsOpen1}
            setIsOpen2={setIsOpen2}
            modalIsOpen2={modalIsOpen2}
            delmodalIsOpen={delmodalIsOpen}
            setdelmodalIsOpen={setdelmodalIsOpen}
            inviteModal={inviteModal}
            clientmodal={clientmodal}
            projectusermodel={projectusermodel}
            projectdeletemodal={projectdeletemodal}
            setprojectdeletemodal={setprojectdeletemodal}
          />
        </div>
      )}
      {state == 2 && (
        <div>
          <Board
            showinput={showinput}
            listToggle={listToggle}
            SetshowInput={SetshowInput}
            setListoggle={setListoggle}
            getInput={getInput}
            details={details}
            setDetails={setDetails}
            open={open}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            setIsOpe1n={setIsOpen1}
            modalIsOpen1={modalIsOpen1}
            setIsOpen2={setIsOpen2}
            modalIsOpen2={modalIsOpen2}
            delmodalIsOpen={delmodalIsOpen}
            setdelmodalIsOpen={setdelmodalIsOpen}
          />
        </div>
      )}
      {state == 3 && <Calender />}
    </div>
  );
}
