import React, { useState, useEffect } from "react";
import Api from "../API/Api";
import { BsListTask } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./main/Home/WelcomeSection/Nav";
import { FaLock } from "react-icons/fa";

export default function AllProjects() {
  const [teamProjects, setTeamProjects] = useState();

  const dispatch = useDispatch();
  const reduxData = useSelector((x) => x);
  const [dataID, setDataID] = useState(localStorage.getItem("myData"));

  useEffect(() => {
    if (dataID) {
      Api.fetchGet(`/getTeamandMember/${dataID}`).then((x) => {
        setTeamProjects(x.data.Teams[0].TeamProjects);
      });
    }
  }, [teamProjects, reduxData.teamrefresh]);
  // useEffect(() => {
  //   Api.fetchGet(`/projects`).then((x) => {
  //     // console.log(x, "bol dete hay"),
  //     setTeamProjects(x.data.data);
  //   });
  // }, [teamProjects, reduxData.teamrefresh]);
  return (
    <div>
      <div className="min-h-[200px] w-[100%] ">
        <div
          onClick={() => console.log(teamProjects)}
          className="border-b-2 border-b-[#e9e9e9] text-[17px] p-5  w-[100%] bg-white font-semibold text-secondary"
        >
          <p>My Projects</p>
          <Nav />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-h-screen overflow-scroll px-5 pb-24">
          {teamProjects &&
            teamProjects.length > 0 &&
            teamProjects.map((p) => {
              if (reduxData.user_status === 10) {
                // User status is 10
                if (
                  p.privacy === 10 ||
                  p.projects.some((proj) => proj.user_id === reduxData.user_id)
                ) {
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        console.log(p);
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
                      className="h-12 mt-2 border rounded-lg flex items-center justify-between  bg-gray-50 shadow-md hover:bg-gray-100 text-secondary hover:border-2 cursor-pointer py-2 px-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] bg-secondary rounded-md flex items-center justify-center">
                          <BsListTask color="white" size={20} />
                        </div>
                        <p className="font-poppins">{p.name}</p>
                      </div>
                      {p.privacy === 20 && (
                        <div className="flex flex-col items-center">
                          <FaLock size={10} color="gray" />
                          <p className="text-[9px] text-gray-400 ml-1">
                            private
                          </p>
                        </div>
                      )}
                    </div>
                  );
                }
              } else if (reduxData.user_status === 20) {
                // User status is 20
                const assignedProject = p.projects.find(
                  (proj) => proj.user_id === reduxData.user_id
                );
                if (assignedProject) {
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        console.log(p);
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
              return null; // Return null if neither condition is met
            })}

          {/* <Modal
              className="flex justify-center items-center h-full"
              isOpen={modalIsOpen1}
              onRequestClose={closeModal1}
            >
              <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col justify-center ">
                <div className="w-[100%] flex justify-between items-center">
                  <p
                    onClick={() => console.log(t)}
                    className="font-extrabold text-[25px] text-primary border-b border-b-white w-[330px]"
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
                    {" "}
                    <div className="text-primary font-normal text-[13px]">
                      Project Name
                    </div>
                    <input
                      onChange={(e) => setproject(e.target.value)}
                      className=" border-black border mt-1 px-2 h-10 w-[330px]"
                      placeholder="Write team name"
                    />
                    <div className="text-primary font-normal text-[13px] mt-3">
                      Select Privacy
                    </div>
                    <select
                      className="w-[330px] h-10 mt-1"
                      disabled={!privacy.length}
                      value={values}
                      onChange={(e) => setValues(e.target.value)}
                    >
                      {privacy.map((x) => (
                        <option value={x.value}>{x.name}</option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="border border-primary ml-5 text-white py-2 px-5 rounded text-[13px]"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </Modal> */}
        </div>
      </div>
    </div>
  );
}
