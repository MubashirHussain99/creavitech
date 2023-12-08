import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import Api from "../../../../API/Api";
import { useDispatch, useSelector } from "react-redux";
import { MdNotificationsActive } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import moment from "moment";
import { setRef } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav({ setIsOpen, modalIsOpen }) {
  const [open, setopen] = useState(false);
  const [hasUnseenNotification, setHasUnseenNotification] = useState(false);
  const [notification, setnotification] = useState(false);
  const [workSpace, setWorkSpace] = useState(false);
  const [teamname, setteamname] = useState({});
  const [modal, setmodal] = useState(false);
  const [fullname, setfullname] = useState("");
  const [job_title, setjob_title] = useState("");
  const [about_me, setabout_me] = useState("");
  const [email, setemail] = useState("");
  const [searching, setsearching] = useState();
  const [searchedteam, setsearchedteam] = useState();
  const [searchedproject, setsearchedproject] = useState();
  const [refresh, setrefresh] = useState();
  // const [datadiv, setdatadiv] = useState(false);
  const [showdiv, setShowdiv] = useState(false);
  const [teamAlert, setteamAlert] = useState(false);
  const [workspaceData, setWorkspaceData] = useState([]);
  const [dataID, setDataID] = useState(localStorage.getItem("myData"));
  const dispatch = useDispatch();
  const data = useSelector((x) => x);

  // console.log(dataID);

  // console.log(workspaceData[0].Teams);
  // console.log(workspaceData[0].Teams);

  // function closeModal() {
  //   setmodal(false);
  // }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let timeoutId;

    if (teamAlert) {
      timeoutId = setTimeout(() => {
        setteamAlert(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [teamAlert]);

  const EditUserName = (e) => {
    e.preventDefault();
    Api.Update(
      {
        fullname: fullname,
        email: email,
        job_title: job_title,
        about_me: about_me,
      },
      `/letmeupdate`
    ).then((x) => {
      console.log(x);
    });
  };

  useEffect(() => {
    Api.fetchGet(`/getnotification/team_id/${dataID}`)
      .then((x) => {
        setnotification(x.data.notifications);
        setHasUnseenNotification(x.data.status);
        // console.log(x, " ================== nusahni ===============");
      })
      .catch((err) => {
        console.log(err, " ================== nusahni2 ===============");
      });
  }, [data.overallRefresh]);

  const editNotificationStatus = (e) => {
    e.preventDefault();
    Api.Update({ team_id: dataID }, `/updateStatus`).then((x) => {});
  };

  useEffect(() => {
    search();
    if (searching == null || searching == "") {
      setShowdiv(false);
    } else {
      setShowdiv(true);
    }
  }, [searching]);

  const search = (e) => {
    Api.fetchPost({ query: searching }, `/getteamandproject`)
      .then((x) => {
        setsearchedteam(x.data.teams);
        setsearchedproject(x.data.projects);
        // console.log(x.data);
        // setdatadiv(true);
      })
      .catch(
        (err) => {}
        // console.log(err)
      );
  };

  useEffect(() => {
    Api.fetchGet("/getTeam").then((x) => {
      // console.log(x.data)
      setWorkspaceData(x.data);
    });
  }, [refresh]);

  const openNewTab = () => {
    window.open("/", "_blank");
  };
  // const editNotificationStatus = (e) => {
  //   console.log("Notify");
  // };

  const handleSave = (id) => {
    dispatch({
      type: "teamID",
      payload: id,
    });
    // Save data to local storage
    localStorage.setItem("myData", id);
    // alert("Data saved!");
    setWorkSpace(!workSpace);
    window.location.reload();
  };

  const createTeam = (e) => {
    e.preventDefault();
    Api.fetchPost({ team_name: teamname }, `/createTeam`)
      .then((x) => {
        setrefresh(x),
          console.log(x.data),
          // setUser(x.data.TeamMembers);

          Api.fetchPost(
            { message: `${data.User_name} created a team` },
            `/createnotification/team_id/${dataID}`
          )
            .then((t) => {
              // console.log(t);
              dispatch({
                type: "overallRefresh",
                payload: t,
              });
              setteamAlert(true);
            })
            .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err.response.data));
  };
  // console.log(notification[0].myprofile.fullname);
  return (
    <nav className="flex justify-between h-16 items-center absolute top-0 right-0 font-normal text-[16px]">
      <div className="flex gap-x-3 items-center  mr-6">
        <button
          onClick={(e) => {
            // Invoke the function by adding parentheses
            setopen(!open);
          }}
          className="hover:scale-125 relative "
        >
          {hasUnseenNotification == 10 && (
            <div className="w-2 h-2 rounded-full bg-red-600 absolute right-0" />
          )}
          <MdNotificationsActive />
        </button>
        {open == true && (
          <div className="max-[1150px]:h-[490px] h-[550px] overflow-hidden absolute top-14 z-20 right-[260px] w-[90%] bg-white border border-gray-300 rounded-[20px]">
            <h1 className="text-center font-semibold text-xl py-3 border-b bg-gray-100">
              Notifications
            </h1>
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(100% - 45px)" }}
            >
              {notification && notification.length > 0 ? (
                notification.map((t) => (
                  <div
                    className={`w-[100%] py-2 px-3 flex items-center space-x-2 ${
                      t.status == 10
                        ? "bg-slate-200 font-semibold border-b-white"
                        : "bg-white border-b-gray-300"
                    }  border-b `}
                    key={t.id}
                  >
                    <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                      <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                        <IoNotificationsOutline />
                      </div>
                    </div>
                    <div className="flex justify-between w-[100%] px-2">
                      {t && (
                        <div className="text-start text-[12px] w-[140px]">
                          <p
                            className=""
                            style={{ overflowWrap: "break-word" }}
                          >
                            {t.message}
                          </p>
                        </div>
                      )}

                      <p className="text-gray-500 font-normal flex items-center text-[10px]">
                        {moment(t.created_at).fromNow()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-primary text-center py-3">
                  No notifications
                </div>
              )}
            </div>
          </div>
        )}
        {open == true && (
          <div
            onClick={(e) => {
              editNotificationStatus(e); // Invoke the function by adding parentheses
              setopen(!open);
              dispatch({
                type: "overallRefresh",
                payload: e,
              });
            }}
            className="  fixed top-0 right-0 left-0 bottom-0 z-10 bg-transparent"
          />
        )}

        <div className="flex items-center bg-secondary rounded-xl">
          <div className="">
            <div className="relative px-2 text-white">
              <FiSearch />
            </div>
          </div>
          <input
            onChange={(e) => setsearching(e.target.value)}
            type="text"
            placeholder="Search  Projects"
            className="bg-secondary rounded-[40px] p-1 pr-3 outline-none w-56 text-white"
          />
        </div>

        {showdiv == true && (
          <div className="absolute top-[60px] right-[10%] min-w-[300px] h-[500px] max-w-[400px] bg-white border-2 rounded-xl overflow-hidden">
            {/* {searchedteam && (
              <p className="text-rose font-semibold text-[18px] border-b px-3">
                Teams
              </p>
            )}
            <div className=" max-h-[215px] rounded-xl overflow-scroll">
              {searchedteam &&
                searchedteam.length > 0 &&
                searchedteam.map((t) => (
                  <div
                    className="border-b cursor-pointer px-3"
                    onClick={() => {
                      dispatch({
                        type: "team",
                        payload: t.Teams.id,
                      });
                      dispatch({
                        type: "page",
                        payload: "/teamdetails",
                      });
                    }}
                  >
                    {t.Teams.team_name}
                  </div>
                ))}
              {searchedteam && searchedteam.length == 0 && (
                <div className="px-3 py-1">No Teams</div>
              )} */}
            {/* </div> */}
            {searchedproject && (
              <p className="text-rose font-semibold text-[18px] border-b px-3">
                Projects
              </p>
            )}
            <div className="max-h-[215px] bg-white rounded-xl overflow-scroll">
              {searchedproject &&
                searchedproject.length > 0 &&
                searchedproject.map(
                  (p) =>
                    p.team_id == dataID && (
                      <div
                        key={p.id}
                        className="border-b cursor-pointer px-3"
                        onClick={() => {
                          console.log(p);
                          dispatch({
                            type: "page",
                            payload: "/tasks",
                          }),
                            dispatch({
                              type: "project_name",
                              payload: p.name,
                            });
                          dispatch({
                            type: "project_id",
                            payload: p.id,
                          });
                        }}
                      >
                        {p.name}
                      </div>
                    )
                )}
              {searchedproject && searchedproject.length == 0 && (
                <div className="px-3 py-1">No Project</div>
              )}
            </div>
            {/* {searchedproject&&searchedproject.map((p) => (
              <div
                onClick={() => {
                }}
              >
                {p.project_name}
                
              </div>
            ))} */}
          </div>
        )}

        {/* <div className="hidden md:block">
          <img src="/plus.png" alt="" />
        </div> */}
        {/* <div
          onClick={() => setmodal(true)}
          className="mr-3 flex items-center space-x-2 rounded-lg bg-rose py-[7px] px-2 cursor-pointer text-white font-semibold text-[12px]"
        >
          <p>Edit Profile</p>
          <AiFillEdit />
        </div> */}

        <div
          onClick={() => setWorkSpace(!workSpace)}
          className="w-8 h-8 bg-rose rounded-full cursor-pointer"
        >
          <div className="w-8 h-8 flex justify-center items-center bg-rose rounded-full text-white text-center font-poppins text-[14px]">
            {data.User_name && data.User_name.split("")[0]}
            {data.User_name && data.User_name.split("")[1]}
          </div>
        </div>
      </div>

      {workSpace == true && (
        <div className="h-[650px] overflow-y-auto absolute top-14 z-20 right-10 w-[280px] shadow-md bg-white border border-gray-300  rounded-[10px]">
          <h1 className="text-[18px] font-semibold px-6 border-b cursor-default">
            My Teams
          </h1>
          <div className="min-h-[20px] max-h-[250px] overflow-y-auto bg-white border-b border-gray-300 py-2">
            {workspaceData &&
              workspaceData.length > 0 &&
              workspaceData.map((wd) => (
                <div
                  key={wd}
                  onClick={() => {
                    handleSave(wd.Teams.id);
                  }}
                  className=" cursor-pointer hover:bg-gray-100 px-6 py-3 flex items-center space-x-2  font-poppins"
                >
                  <p className="font-poppins">{wd.Teams.team_name}</p>
                </div>
              ))}
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="font-poppins cursor-pointer px-6 hover:bg-gray-100 py-2"
          >
            <button>+ Create New Team</button>
          </div>
        </div>
      )}
      {workSpace == true && (
        <div
          onClick={() => setWorkSpace(!workSpace)}
          className="  fixed top-0 right-0 left-0 bottom-0 z-10 bg-transparent"
        />
      )}

      <Modal
        className="flex justify-center items-center h-full bottom left-0 right-0 top-0 bottom-0"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="h-[300px] bg-secondary overflow-hidden relative z-auto rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center items">
          <div className="w-[100%] flex justify-between items-center ">
            <p className="font-extrabold text-[25px] text-rose border-b border-b-white w-[330px]">
              Create a Team
            </p>
            <ImCross
              className="hover:text-rose cursor-pointer text-[white]"
              onClick={() => closeModal()}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-rose font-semibold">Team Name</span>
            <form
              onSubmit={(e) => {
                createTeam(e), closeModal();
              }}
              className="space-x-3"
            >
              <input
                onChange={(e) => setteamname(e.target.value)}
                className=" border-black border px-2 h-10 w-[330px]"
                placeholder="Write team name"
              />
              <button
                type="submit"
                className="border border-rose text-rose px-3 h-9 rounded-lg"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </Modal>
      {teamAlert && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Team Created Successfully
          </p>
        </motion.div>
      )}

      {/* <Link href="/" TeamID={wd.Teams.id}>
        <div
          onClick={() => {
            dispatch({
              type: "teamID",
              payload: wd.Teams.id,
            });
            openNewTab(wd.Teams.id);
            console.log(wd.Teams.id);
          }}
          className=" cursor-pointer hover:bg-gray-100 px-6 py-3 flex items-center space-x-2 font-poppins"
        >
          <p className="font-poppins">{wd.Teams.team_name}</p>
        </div>
      </Link> */}

      {/* <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        className="flex justify-center items-center h-full bottom left-0 right-0 top-0 bottom-0"
      >
        <div className="h-[450px] bg-secondary overflow-hidden relative z-auto rounded-lg px-9 w-[650px] flex flex-col justify-center">
          <div className="w-[100%] flex justify-between items-center">
            <p className="font-extrabold text-[25px] text-rose border-b border-b-white w-[220px]">
              Edit Your Profile
            </p>
            <ImCross
              className="cursor-pointer"
              color="white"
              onClick={() => closeModal()}
            />
          </div>
          <div className="flex flex-col">
            <form
              onSubmit={(e) => {
                EditUserName(e), closeModal();
              }}
              className="space-y-2"
            >
              <div className="flex flex-col mt-2">
                <span className="text-primary font-semibold">Full Name</span>
                <input
                  onChange={(e) => setfullname(e.target.value)}
                  className=" border-black border px-2 rounded-md h-10 w-[530px]"
                  placeholder="Write full name"
                />
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-primary font-semibold">Email</span>
                <input
                  type={email}
                  onChange={(e) => setemail(e.target.value)}
                  className=" border-black border px-2 rounded-md h-10 w-[530px]"
                  placeholder="Write email"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-semibold">Job Title</span>
                <input
                  onChange={(e) => setjob_title(e.target.value)}
                  className=" border-black border px-2 rounded-md h-10 w-[530px]"
                  placeholder="Job name (Optional)"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-semibold">About Me</span>
                <textarea
                  onChange={(e) => setabout_me(e.target.value)}
                  className=" border-black border px-2 rounded-md h-20 w-[530px]"
                  placeholder="About Me (Optional)"
                />
              </div>

              <button
                type="submit"
                className="bg-rose text-white font-semibold px-5 h-9 rounded-lg"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </Modal> */}
    </nav>
  );
}
