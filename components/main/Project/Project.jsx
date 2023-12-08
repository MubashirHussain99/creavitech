import React, { useEffect, useState } from "react";
import Elements from "./InnerProject/Elements";
import Link from "next/link";
import Api from "../../../API/Api";

import { useSelector, useDispatch } from "react-redux";

export default function Project({ open }) {
  const data = useSelector((x) => x);
  const [Projects, setProject] = useState({});

  const [dataID, setDataID] = useState(localStorage.getItem("myData"));

  useEffect(() => {
    if (dataID) {
      Api.fetchGet(`/getTeamandMember/${dataID}`).then((x) => {
        // console.log(x, "bol dete hay");
        //  setTeamName(x.data.Teams[0]);
        // setTeamMembers(x.data.Teams[0].TeamMembers);
        setProject(x.data.Teams[0].TeamProjects);
        // setDescription1(x.data.Teams[0].description);
      });
    }
  }, [data.teamrefresh]);

  // useEffect(() => {
  //   Api.fetchGet("/projects")
  //     .then((x) => {
  //       // console.log(x)
  //       setProject(x.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [data.teamrefresh]);

  return (
    <div
      id="shadow"
      className={`border flex flex-col lg:w-[49%] h-[400px] overflow-scroll overflow-x-hidden ${
        Projects.length > 6 ? "" : "overflow-y-hidden"
      }     py-2 pl-5 my-3 rounded-3xl `}
    >
      <h1
        onClick={() => console.log(Projects)}
        className="py-1 text-secondary md:text-[22px] text-2xl font-bold"
      >
        Projects
      </h1>

      <div className="w-[95%] max-h-[400px] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-between py-2">
        {/* <Link href={"/"}>
          <div
            className={`flex flex-wrap flex-row w-[40%] p-1 cursor-pointer gap-2 hover:bg-gray-100 rounded-xl  items-center `}
          >
            <div>
              <img className="w-10" src="/Group30.png" />
            </div>
            <p className="text-[14px] font-semibold">Create Project</p>
          </div>
        </Link> */}
        {data.user_status === 10
          ? // Map for user_status 10
            Projects &&
            Projects.length > 0 &&
            Projects.map((element, index) => {
              if (data.user_status === 10) {
                const isUserAssignedToProject = element.projects.some(
                  (proj) => proj.user_id === data.user_id
                );
                if (isUserAssignedToProject) {
                  return (
                    <Elements
                      key={index}
                      element={element}
                      index={index}
                      privacy={element.privacy}
                      open={open}
                    />
                  );
                } else if (element.privacy === 10) {
                  return (
                    <Elements
                      key={index}
                      element={element}
                      index={index}
                      privacy={element.privacy}
                      open={open}
                    />
                  );
                }
              }
            })
          : // Condition for user_status 20
            Projects &&
            Projects.length > 0 &&
            Projects.map((element, index) => {
              // Find the project that has the same user_id as data.user_id
              const assignedProject = element.projects.find(
                (proj) => proj.user_id === data.user_id
              );

              if (assignedProject) {
                return (
                  <Elements
                    key={index}
                    element={element}
                    index={index}
                    privacy={element.privacy}
                    open={open}
                  />
                );
              }

              return null; // Return null if assignedProject doesn't exist
            })}
      </div>
    </div>
  );
}
// <div className={`flex flex-wrap flex-row ${open? '':'w-[48%]'} px-1 gap-2  hover:bg-gray-100 rounded-xl  items-center `}></div>
