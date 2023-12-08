import React, { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Api from "../API/Api";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import Nav from "./main/Home/WelcomeSection/Nav";

export default function TeamDetails({ setrefreshSidebar, refreshSidebar }) {
  const data = useSelector((x) => x);

  const [teamName, setTeamName] = useState();
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState();
  const [teamMembers, setTeamMembers] = useState({});
  const [teamProjects, setTeamProjects] = useState({});
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [searching, setsearching] = useState();
  const [updateTeam, setUpdateTeam] = useState();
  const [searchdata, setsearchdata] = useState();
  const [privacydiv, setprivacydiv] = useState();
  const [values, setValues] = useState(10);
  const [message, setMessage] = useState(null);
  const [projectName, setproject] = useState({});
  const [loading, setLoading] = useState(true);
  const [invitationsuccess, setinvitationsuccess] = useState(false);
  const [teamrefresh, setteamrefresh] = useState("");
  const [teammembermsg, setteammembermsg] = useState(false);
  const [projectmsg, setprojectmsg] = useState(false);
  const [userRemovedmsg, setuserRemovedmsg] = useState(false);
  const [teamUserDelete, setteamUserDelete] = useState();
  const [subtaskuserdeletemodal, setsubtaskuserdeletemodal] = useState(false);
  const [showTeamNameInput, setShowTeamNameInput] = useState(false);
  const [teamUserName, setteamUserName] = useState();
  const [selectedOption, setSelectedOption] = useState(10);
  const [descShow, setdescShow] = useState(false);
  const [validaitonmsg, setvalidaitonmsg] = useState(null);
  const [validaitonalert, setvalidaitonalert] = useState(false);

  const [dataID, setDataID] = useState(localStorage.getItem("myData"));

  const [username, setUser] = useState();

  const [InviteEmail, setInviteEmail] = useState("");
  const dispatch = useDispatch();
  const privacy = [
    { value: 10, name: "Public to My Workspace" },
    { value: 20, name: "Private to My Workspace" },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);
  const postDescription = () => {
    Api.fetchPost({ description: description }, `/description/${data.team}`)
      .then((x) => {
        setDescription("");
        setrefreshSidebar(x);
      })
      .catch((err) => console.log(err));
  };

  const invitePeople = (e) => {
    e.preventDefault();
    Api.fetchPost({ email: InviteEmail }, `/invitation`)
      .then((x) => {
        console.log(x.data), setUser(x.data.TeamMembers);
        setinvitationsuccess(true),
          dispatch({
            type: "teamrefresh",
            payload: teamrefresh,
          });
      })
      .catch((err) => console.log(err));
  };

  const editTeamName = (e) => {
    e.preventDefault();
    // blurName.current.blur();
    if (updateTeam != teamName.team_name) {
      updateTeam != null &&
        Api.Update({ name: updateTeam }, `/team/${teamName.id}`).then((x) => {
          // setrefreshProject("Zaid");
          setteamrefresh(x);
          dispatch({
            type: "teamrefresh",
            payload: "teamrefresh1",
          }),
            setShowTeamNameInput(false);
          setUpdateTeam(null);
          console.log(x);
          Api.fetchPost(
            {
              message: `${data.User_name} renamed team 
             "${teamName.team_name}" to "${x.data.team_name}"`,
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
        });
    }
  };
  // console.log(teamName.id)

  function closeModal2() {
    setIsOpen2(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }

  useEffect(() => {
    let timeoutId;

    if (validaitonalert) {
      timeoutId = setTimeout(() => {
        setvalidaitonalert(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [validaitonalert]);

  useEffect(() => {
    let timeoutId;

    if (invitationsuccess) {
      timeoutId = setTimeout(() => {
        setinvitationsuccess(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [invitationsuccess]);
  useEffect(() => {
    let timeoutId;

    if (teammembermsg) {
      timeoutId = setTimeout(() => {
        setteammembermsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [teammembermsg]);
  useEffect(() => {
    let timeoutId;

    if (projectmsg) {
      timeoutId = setTimeout(() => {
        setprojectmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [projectmsg]);

  useEffect(() => {
    let timeoutId;

    if (userRemovedmsg) {
      timeoutId = setTimeout(() => {
        setuserRemovedmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [userRemovedmsg]);

  const search = (e) => {
    Api.fetchPost({ query: searching }, `/get/main/users`)
      .then((x) => {
        setsearchdata(x.data);
      })
      .catch((err) => console.log(err));
  };
  const addTeamUser = (e, id, sd) => {
    e.preventDefault();
    Api.fetchPost({ team_id: id, user_id: sd.id }, `/add/teamsuser`)
      .then((x) => {
        setteammembermsg(true);
        console.log(x);
        Api.fetchPost(
          {
            message: `${data.User_name} added "${sd.myprofile.fullname}" to team`,
            //  "${teamName.team_name}" `,
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
        dispatch({
          type: "teamrefresh",
          payload: "teamrefresh2",
        });
        console.log(x.data.message);
        if (x.data.message == "Team Member Registered!") {
          setIsOpen2(false), setrefreshSidebar(x);
        }
        if (x.data.message == "User is already a member of this team.") {
          setIsOpen2(false), setrefreshSidebar(x);
          alert("User is already a member of this team.");
        }
      })
      .catch((err) => {
        err.response.data.message && setMessage(err.response.data.message);
      });
  };
  const createProject = (e) => {
    e.preventDefault();
    Api.fetchPost(
      {
        privacy: selectedOption != null ? selectedOption : 10,
        name: projectName,
        team_id: data.team,
      },
      "/projects"
    )
      .then((x) => {
        setprojectmsg(true);
        // console.log(x)
        Api.fetchPost(
          { message: `${data.User_name} created project "${x.data.name}"` },
          `/createnotification/team_id/${dataID}`
        )
          .then((t) => {
            dispatch({
              type: "overallRefresh",
              payload: t,
            });
            dispatch({
              type: "teamrefresh",
              payload: t,
            });
          })
          .catch((err) => console.log(err));
        console.log(x), setrefreshSidebar(x);
        if (x.data.message == "Project Created!") {
          setIsOpen1(false);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (dataID) {
      Api.fetchGet(`/getTeamandMember/${dataID}`).then((x) => {
        // console.log(x, "bol dete hay"),
        setTeamName(x.data.Teams[0]);
        setTeamMembers(x.data.Teams[0].TeamMembers);
        setTeamProjects(x.data.Teams[0].TeamProjects);
        setDescription1(x.data.Teams[0].description);
      });
    }
  }, [data.teamrefresh, teamrefresh, updateTeam]);

  useEffect(() => {
    search();
  }, [searching, refreshSidebar]);
  // console.log(teamMembers)

  function closeSubTaskUserDeleteModal() {
    setsubtaskuserdeletemodal(false);
  }

  const DeleteTeamUser = () => {
    Api.Delete(`/teaamuserdelete/team_id/${dataID}/user_id/${teamUserDelete}`)
      .then((x) => {
        console.log(x, "msg aaya!");

        dispatch({
          type: "teamrefresh",
          payload: x,
        }),
          setsubtaskuserdeletemodal(false);
        // setuserRemovedmsg(true);
        setvalidaitonmsg(x.data.msg);
        setvalidaitonalert(true);
      })
      .then(() => {
        if (validaitonmsg == "Team Member deleted successfully") {
          Api.fetchPost(
            {
              message: `${data.User_name} removed "${teamUserName}" from team`,
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
        }
      });
  };

  // console.log(dataID);

  useEffect(() => {
    if (showTeamNameInput) {
      inputRef.current.focus();
    }
  }, [showTeamNameInput]);
  const inputRef = useRef();

  const changePrivacy = (e, id) => {
    e.preventDefault();
    Api.Update(
      { asdasdasdas: "asdasdasdasdas" },
      `/updateprojectstatus/project/${id}`
    )
      .then((x) => {
        setteamrefresh(x);
        dispatch({
          type: "teamrefresh",
          payload: teamrefresh,
        }),
          setprivacydiv(0);
        console.log(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen overflow-scroll">
      {userRemovedmsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            User Removed Successfully
          </p>
        </motion.div>
      )}
      {validaitonalert && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">{validaitonmsg}</p>
        </motion.div>
      )}
      <Modal
        className="flex justify-center items-center h-full relative z-50"
        isOpen={subtaskuserdeletemodal}
        onRequestClose={closeSubTaskUserDeleteModal}
      >
        <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
          <div className="w-[100%] flex justify-between items-center ">
            <p className=" text-[20px] text-rose font-poppins ">
              <p className="font-poppins">Are you Sure?</p>
              You want to remove
              <span className="text-white"> {teamUserName}</span> from team!
            </p>
          </div>
          <div className="flex flex-row space-x-10 mt-10 text-[14px]">
            <button
              onClick={() => {
                DeleteTeamUser();
              }}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              Yes
            </button>
            <button
              onClick={() => closeSubTaskUserDeleteModal()}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <div className="px-10 mt-4">
        {showTeamNameInput && (
          <form onSubmit={(e) => editTeamName(e)}>
            <input
              id="inputTeam"
              onChange={(e) => setUpdateTeam(e.target.value)}
              className=" text-[20px] text-rose font-semibold w-[40%] relative z-20"
              // placeholder={teamName && teamName.team_name}
              ref={inputRef}
              value={updateTeam}
              onBlur={(e) => editTeamName(e)}
            />
          </form>
        )}
        {showTeamNameInput && (
          <div
            onClick={(e) => setShowTeamNameInput(false)}
            className="fixed top-0 bottom-0 right-0 left-0 z-10"
          ></div>
        )}
        {data.user_status == 10 && showTeamNameInput == false && (
          <div
            onClick={(e) => {
              setUpdateTeam(teamName.team_name), setShowTeamNameInput(true);
            }}
            className="text-rose text-[20px] font-semibold cursor-text"
          >
            {teamName && teamName.team_name}
          </div>
        )}
        {data.user_status == 20 && (
          <div className="text-rose text-[20px] font-semibold ">
            {/* {teamName.team_name} */}
          </div>
        )}
        <Nav />
        {invitationsuccess && (
          <motion.div
            animate={{ x: [140, 0] }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            id="shadow"
            className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
          >
            <p className="font-poppins font-bold text-[17px]">
              Invitation Successfull
            </p>
          </motion.div>
        )}
        {teammembermsg && (
          <motion.div
            animate={{ x: [140, 0] }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            id="shadow"
            className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
          >
            <p className="font-poppins font-bold text-[17px]">
              Team Member Resgistered Successfully
            </p>
          </motion.div>
        )}
        {projectmsg && (
          <motion.div
            animate={{ x: [140, 0] }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            id="shadow"
            className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
          >
            <p className="font-poppins font-bold text-[17px]">
              Project Created Successfully
            </p>
          </motion.div>
        )}
        {/* <form
          className="w-[100%]"
          onSubmit={(e) => {
            editprojectname(e)
          }}
        >
          <input
            onClick={() => setproject_name(data.Project_name)}
            id="inputProject"
            className="font-bold text-lg w-[70%] "
            onChange={(e) => setproject_name(e.target.value)}
            placeholder={data.Project_name}
            value={project_name}
            onBlur={(e) => editprojectname(e)}
          />
         </form> */}
        {data.user_status == 10 && (
          <div className="min-h-[120px] w-[100%] mt-4">
            <div className="min-h-[120px] w-[100%] mt-4">
              <div className="border-b-2 border-b-[#e9e9e9] font-semibold">
                About Team
              </div>
              {descShow == true ? (
                <textarea
                  id="inputdesc"
                  onClick={() => setDescription(description1)}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-[100%] hover:border rounded-lg mt-2 relative z-10"
                  placeholder={description1}
                  value={description}
                  onBlur={() => {
                    {
                      postDescription(), setdescShow(false);
                    }
                  }}
                />
              ) : (
                <div
                  onClick={() => {
                    setDescription(description1), setdescShow(true);
                  }}
                  className="w-[100%] hover:border rounded-lg mt-2 cursor-text min-h-[50px]"
                >
                  Zaid
                </div>
              )}
            </div>
            {/* {descShow == true && (
              <div
                className="fixed top-0 left-0 bottom-0 right-0 z-0 "
                onClick={() => setdescShow(false)}
              ></div>
            )} */}
          </div>
        )}
        <div className="min-h-[100px] w-[100%] mt-4">
          <div className="border-b-2 border-b-[#e9e9e9] font-semibold">
            Members
          </div>
          <div className=" grid grid-cols-4 w-[100%] max-h-[250px] overflow-scroll gap-3 py-2">
            {data.user_status == 10 && (
              <div
                onClick={() => setIsOpen2(true)}
                className="h-10 mt-2 border rounded-lg flex items-center gap-2 bg-gray-100 shadow-md hover:bg-gray-200 text-secondary hover:border-2 cursor-pointer py-2 px-2"
              >
                <div className="w-7 h-7 rounded-full pl-[1px] pb-[1px] flex justify-center items-center">
                  <div className="w-7 h-7 rounded-full border border-dashed border-secondary pb-[1px] flex justify-center items-center">
                    <AiOutlineUser size={19} />
                  </div>
                </div>
                <div>Add Member</div>
              </div>
            )}
            {teamMembers &&
              teamMembers.length > 0 &&
              teamMembers.map((m) => (
                <div
                  key={m}
                  className="h-10 mt-2 border rounded-md flex items-center justify-between bg-gray-50 shadow-md hover:bg-gray-100 text-secondary hover:border-2 cursor-pointer py-2 px-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] bg-secondary rounded-full">
                      <div className="w-[30px] h-[30px] bg-rose rounded-full flex justify-center items-center pr-[1px] text-white ">
                        <p> {m.UserInfo.myprofile.fullname.split("")[0]}</p>
                        <p> {m.UserInfo.myprofile.fullname.split("")[1]}</p>
                      </div>
                    </div>
                    <p>{m.UserInfo.myprofile.fullname}</p>
                  </div>

                  <Modal
                    className="flex justify-center items-center h-full relative z-50"
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                  >
                    <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col">
                      <div className="w-[100%] flex justify-between items-center mt-16">
                        <p className="font-extrabold text-[25px] text-primary border-b border-b-white w-[340px]">
                          Assign People To My Team
                        </p>
                        <ImCross
                          className="hover:text-gray-400 cursor-pointer text-[white]"
                          onClick={() => {
                            closeModal2();
                            setMessage(null);
                          }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <form
                          className="flex flex-col"
                          onSubmit={(e) => {
                            // addTeamUser(e, t.Teams.id);
                            // setsearching(null);
                            invitePeople(e);
                            setIsOpen2(false);
                          }}
                        >
                          <div className="flex items-center  space-x-3">
                            <input
                              onClick={() => setMessage(null)}
                              onChange={(e) => {
                                setInviteEmail(e.target.value),
                                  setsearching(e.target.value);
                              }}
                              type="email"
                              className={`w-[330px] h-10 bg-white px-2 -mt-2 ${
                                message ? `border-2 border-red-500` : ``
                              }`}
                              value={searching && searching.email}
                            />
                            {message && (
                              <div className="text-red-500 text-[14px] -mt-2">
                                {message}
                              </div>
                            )}
                          </div>

                          {searchdata && searchdata.length < 1 && searching && (
                            <button
                              type="submit"
                              className={`w-[100px h-9 rounded-lg text-secondary font-semibold bg-primary ${
                                message ? `mt-2` : `mt-5`
                              }`}
                            >
                              Invite
                            </button>
                          )}
                        </form>
                        {searchdata && searchdata.length > 0 && searching && (
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
                                    {sd && sd.myprofile.fullname.split("")[0]}
                                    {sd && sd.myprofile.fullname.split("")[1]}
                                  </div>
                                </div>
                                <div className="w-[100%]">
                                  <div className=" space-x-2  ">
                                    <div>{sd.myprofile.fullname}</div>
                                  </div>
                                  <div className="flex text-xs items-center  h-6 justify-between w-[100%]">
                                    <p>{sd.email}</p>
                                    <button
                                      onClick={(e) => {
                                        // setsearching(sd);
                                        // setTeamUserData(sd.myprofile.fullname),
                                        addTeamUser(e, data.team, sd);
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
                  <div
                    onClick={() => {
                      // console.log(m.user_id)
                      setteamUserName(m.UserInfo.myprofile.fullname);
                      setteamUserDelete(m.user_id),
                        setsubtaskuserdeletemodal(true);
                    }}
                    className=" text-black w-5 h-5 hover:bg-gray-200 rounded-full flex justify-center items-center"
                  >
                    <div className="text-black">x</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="min-h-[200px] w-[100%] mt-4">
          <div className="border-b-2 border-b-[#e9e9e9] font-semibold">
            Projects
          </div>
          <div className="grid grid-cols-4 gap-3 py-5  max-h-[250px] overflow-y-scroll ">
            {data.user_status == 10 && (
              <div
                onClick={() => {
                  setIsOpen1(true);
                }}
                className="h-12 mt-2 border rounded-lg flex items-center gap-2 bg-gray-100 shadow-md hover:bg-gray-200 text-secondary hover:border-2 cursor-pointer py-2 px-2"
              >
                <div className="w-[30px] h-[30px] border-primary border rounded-md flex items-center justify-center bg-secondary">
                  <BsListTask size={20} className="text-white" />
                </div>
                <div>Add Project</div>
              </div>
            )}
            {teamProjects &&
              teamProjects.length > 0 &&
              teamProjects.map((p) => {
                if (data.user_status === 20) {
                  const assignedProject = p.projects.find(
                    (proj) => proj.user_id === data.user_id
                  );
                  if (assignedProject) {
                    return (
                      <div
                        onClick={() => {
                          dispatch({
                            type: "page",
                            payload: "/tasks",
                          });
                          dispatch({
                            type: "project_name",
                            payload: p.name,
                          });
                          dispatch({
                            type: "project_id",
                            payload: p.id,
                          });
                        }}
                        key={p.id}
                        className="h-12 mt-2 border rounded-lg flex items-center gap-2 bg-gray-50 shadow-md hover:bg-gray-100 text-secondary hover:border-2 cursor-pointer py-2 px-2"
                      >
                        <div className="w-[30px] h-[30px] bg-secondary rounded-md flex items-center justify-center">
                          <BsListTask color="white" size={20} />
                        </div>
                        <p>{p.name}</p>
                      </div>
                    );
                  }
                }

                if (data.user_status === 10) {
                  const isUserAssignedToProject = p.projects.some(
                    (proj) => proj.user_id === data.user_id
                  );

                  if (isUserAssignedToProject || p.privacy === 10) {
                    return (
                      <div
                        key="done"
                        className=" h-12 mt-2 border rounded-lg relative flex items-center justify-between gap-2 bg-gray-50 shadow-md hover:bg-gray-100 text-secondary hover:border-2 cursor-pointer py-2 px-2"
                      >
                        <div
                          onClick={() => {
                            dispatch({
                              type: "page",
                              payload: "/tasks",
                            });
                            dispatch({
                              type: "project_name",
                              payload: p.name,
                            });
                            dispatch({
                              type: "project_id",
                              payload: p.id,
                            });
                          }}
                          key={p.id}
                          className="h-10 flex items-center space-x-3 w-[90%]"
                        >
                          <div className="w-[30px] h-[30px] bg-secondary rounded-md flex items-center justify-center">
                            <BsListTask color="white" size={20} />
                          </div>
                          <div>
                            <p>{p.name}</p>
                            {p.privacy === 20 && (
                              <div className="flex items-center">
                                <FaLock size={10} color="gray" />
                                <p className="text-[9px] text-gray-400 ml-1">
                                  private
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        {isUserAssignedToProject && (
                          <div
                            onClick={() => {
                              setprivacydiv(p.id);
                            }}
                            className="w-[10%]  rounded-full hover:bg-gray-300"
                          >
                            <BiDotsHorizontalRounded size={25} />
                          </div>
                        )}
                        {privacydiv === p.id && (
                          <div
                            onClick={() => setprivacydiv(0)}
                            className="fixed top-0 bottom-0 left-0 right-0 z-10"
                          ></div>
                        )}
                        {privacydiv === p.id && p.privacy === 20 && (
                          <div
                            onClick={(e) => changePrivacy(e, p.id)}
                            className="absolute rounded-md border bg-gray-100 hover:bg-gray-200 -bottom-5 px-2 py-1 z-20 -right-5 w-[100px] text-[12px]"
                          >
                            Make It Public
                          </div>
                        )}
                        {privacydiv === p.id && p.privacy === 10 && (
                          <div
                            onClick={(e) => changePrivacy(e, p.id)}
                            className="absolute rounded-md border bg-gray-100 hover:bg-gray-200 -bottom-5 px-2 py-1 z-20 -right-5 w-[100px] text-[12px]"
                          >
                            Make It Private
                          </div>
                        )}
                      </div>
                    );
                  }
                }

                return null;
              })}

            <Modal
              className="flex justify-center items-center h-full"
              isOpen={modalIsOpen1}
              onRequestClose={closeModal1}
            >
              <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center ">
                <div className="w-[100%] flex justify-between items-center">
                  <p
                    onClick={() => console.log(t)}
                    className="font-extrabold text-[25px] text-rose border-b border-b-white w-[330px]"
                  >
                    Create a Project
                  </p>
                  <ImCross color="white" onClick={() => closeModal1()} />
                </div>
                <div className="flex flex-col">
                  <form
                    onSubmit={(e) => {
                      {
                        createProject(e),
                          setrefreshSidebar("hello"),
                          setIsOpen1(false);
                      }
                    }}
                  >
                    <div className="text-primary font-normal text-[13px]">
                      Project Name
                    </div>
                    <div className="flex items-center">
                      <input
                        onChange={(e) => setproject(e.target.value)}
                        className="border-black border mt-1 px-2 h-10 w-[330px]"
                        placeholder="Write team name"
                      />
                      <select
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="border border-primary ml-5 text-secondary rounded text-[13px] bg-white px-2 h-12"
                      >
                        {privacy.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="border border-primary ml-5 py-3 text-white px-5 rounded text-[13px]"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
