import React, { useState, useEffect } from "react";
import BoardAccordion from "../BoardAccordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsCheckCircle } from "react-icons/bs";
import SideDetail from "../SideDetail";
import Api from "../../../API/Api";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { TextField } from "@mui/material";
import { color } from "@mui/system";
import { MdDeleteOutline } from "react-icons/md";
import jwtdecode from "jwt-decode";
import { ImCross } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function Board({
  details,
  setDetails,
  open,
  setIsOpen,
  modalIsOpen,
  setIsOpen1,
  modalIsOpen1,
  setIsOpen2,
  modalIsOpen2,
  setdelmodalIsOpen,
  delmodalIsOpen,
}) {
  const [taskdetail, settaskdetail] = useState();
  const data = useSelector((x) => x);
  const dispatch = useDispatch();
  const [RealSection, setSection] = useState("");
  const [AddingFeatureName, setAddingFeatureName] = useState("");
  const [Addingtaskdec, setAddingTaskdec] = useState("");
  const [AddingSubtaskInput, setAddingSubTaskInput] = useState("");
  const [AddingSectionname, setAddingSectionname] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [TaskAssign, setTaskAssign] = useState({});
  const [user, setuser] = useState("");
  const [Taskuser, setTaskuser] = useState({});
  const [userId, setuserId] = useState(0);
  const [TaskId, setTaskId] = useState(0);
  const [Users, setUsers] = useState("");
  const [subtaskID, setsubtaskID] = useState("");
  const [subtaskDetail, setsubtaskDetail] = useState("");
  const [getsubtask, setgetsubtask] = useState("");
  const [sectionArr, setSectionArr] = useState([]);
  const [Addingtask, setAddingTask] = useState([]);
  const [section, setSectionid] = useState("");
  //const [subtasks, setSubTask] = useState(subtasks);
  const [sectioname, setsectioname] = useState("");
  const [featurename, setfeaturename] = useState("");
  const [Taskname, setTaskname] = useState("");
  const [taskname, settaskname] = useState(0);
  const [secid, setsecid] = useState(false);
  const [statuss, setstatuss] = useState("");
  const [refresh, setrefresh] = useState("");
  const [newTaskrefresh, setnewTaskrefresh] = useState("");
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  // console.log(details, ls");
  const taskUpdate = (e, taskId) => {
    // e.preventDefault();
    // this.form.submit()
    Api.Update(
      { due_date: TaskDate, name: AddingFeatureName, desc: Addingtaskdec },
      `/projects/${data.Project_id}/sections/${SectionId}/tasks/${taskId}`
    )
      .then((x) => {
        console.log(x);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  const SectionDelete = (sectionid) => {
    Api.Delete({ secid }, `/projects/${data.Project_id}/sections/${sectionid}`)
      .then((x) => {
        setSection(x.data.sections[0].sections, "section deleting process");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const FeatureDelete = (FeatureID) => {
  //   Api.Delete(
  //     { FeatureID, projectID: data.Project_id },
  //     `/delete/${FeatureID}`
  //   )
  //     .then((x) => {
  //       setrefresh(x);
  //       // setSection(x.data.sections[0].sections, "section deleting process");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  useEffect(() => {
    // setDetails(false);
  }, [data.team, data.Project_id]);
  const TaskDelete = (subtask_id) => {
    Api.Delete(
      { subtask_id, projectID: data.Project_id },
      `/delete/task/${subtask_id}`
    )
      .then((x) => {
        // console.log(x);
        setrefresh(x);
        // setSection(x.data.sections[0].sections, "section deleting process");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    Api.fetchGet(`/get/userinfo`)
      .then((x) => {
        x.data.data.id,
          dispatch({
            type: "user_id",
            payload: x.data.data.id,
          }),
          setuser(x.data.data.id);
      })
      .catch((err) => console.log(err));
  }, [user, data.Project_id]);

  useEffect(() => {
    Api.fetchGet(`/projects/${data.Project_id}/sections`)
      .then((x) => {
        x.data.data.length > 0 &&
          setSectionArr(x.data.data[0].sections, "<=== section");
          // console.log(x.data.data[0].sections);
      })
      .catch((err) => console.log(err));
  }, [data.Project_id, data.Page_state, refresh, newTaskrefresh]);

  // useEffect(() => {
  //   Api.fetchPost({ subtask_id: subtaskID }, `/get/subtasksusers`)
  //     .then((x) => setgetsubtask(x))
  //     .catch((err) => console.log(err));
  // }, [refresh]);
  // console.log(sectionArr);

  const addingSections = (e) => {
    e.preventDefault();
    Api.fetchPost(
      { name: AddingSectionname },
      `/projects/${data.Project_id}/sections`
    )
      .then((x) => {
        if (x.data.message == "Section is registered") {
          setAddingSectionname(x);
          RealSection.push(x.data.data);
          setAddingSectionname("");
          setSectionid(x.data.data.data.id);
        }
      })
      .catch((err) => console.log(err));
  };

  // const settaskuser = (e) => {
  //   Api.fetchPost(
  //     { search: e.target.value, project_id: data.Project_id },
  //     "/get/projectusers"
  //   )
  //     .then((x) => setTaskAssign(x.data))
  //     .catch((err) => console.log(err));
  // };

  const assignTask = (e, taskId) => {
    // e.preventDefault();
    Api.fetchPost({ user_id: userId, task_id: taskId }, `/tasks/users`).then(
      (x) => setuser("")
    );
  };

  const EditSectionName = (id) => {
    // console.log(x);
    Api.Update({ name: sectioname }, `/sectionName/${id}`)
      .then((x) => {
        if (x.status == 200) {
          // setsectioname(x.data.name);
          setrefresh(x);
        }
        // console.log(x);
      })
      .catch((err) => console.log(err));
    console.log(sectioname);
  };
  const EditFeatureName = (FeatureID) => {
    // x.preventDefault()
    featurename &&
      FeatureID &&
      Api.Update({ name: featurename }, `/editName/${FeatureID}`).then((x) => {
        if (x.status == 200) {
          setfeaturename(x.data.name);
          console.log(x.data.name);
        }
      });
    // console.log(sectioname)
  };

  const EditTaskname = (TaskID) => {
    Api.Update({ name: Taskname }, `/editTaskName/${TaskID}`).then((x) => {
      if (x.status == 200) {
        setrefresh(x);
        // setTaskname(x.data.name);
      }
      console.log(x);
    });
    // console.log(sectioname)
  };

  const TaskUsers = (TaskId) => {
    Api.fetchPost({ task_id: TaskId }, `/get/tasksusers`).then((x) =>
      console.log(x.data.tasks)
    );
    setTaskId(TaskId);
  };

  const addSection = {};

  const Addingtasks = () => {
    setAddingTask([...Addingtask, addSection]);
  };

  return(
    <div className={` ${details ? "flex " : ""} w-[1160px] overflow-x-scroll`}>
      <div
        className={`w-[100%]  ${
          open
            ? "lg:w-[100%] md:w-[100%]"
            : "lg:w-[100%] sm:w-[100%] md:w-[100%] "
        } 
         lg:h-[] sm:h-[]`}
      >
       
        {/*  Working here in real */}
        <div className="h-[670px] overflow-hidden">
          {/* 1 */}
          {
             
              <BoardAccordion
                sectionArr={sectionArr}
                details={details}
                setDetails={setDetails}
                setrefresh={setrefresh}
                refresh={refresh}
                user={user}
                newTaskrefresh={newTaskrefresh}
                setnewTaskrefresh={setnewTaskrefresh}
                setIsOpen={setIsOpen}
                modalIsOpen={modalIsOpen}
                setIsOpe1n={setIsOpen1}
                modalIsOpen1={modalIsOpen1}
                setIsOpen2={setIsOpen2}
                modalIsOpen2={modalIsOpen2}
                delmodalIsOpen={delmodalIsOpen}
                setdelmodalIsOpen={setdelmodalIsOpen}
              />
            
            //   RealSection.map((x) => (
            //     <Accordion disabled>
            //     <AccordionSummary>
            //       Summary
            //     </AccordionSummary>
            //     <AccordionDetails>
            //       Details
            //     </AccordionDetails>
            //   </Accordion>
            //   )
            //   )
          }
          {/* 1 end */}

          {/* 2 end */}
          {/* {sectionArr.map((x, i) => (
          <div key={i}>
            <Accordion className=" h-[30px] flex items-center  ">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="flex items-center justify-center "
              >
                <img src="Play.png" className=" h-5 mr-3 " />
                <Typography className={"text-primary w-[30%]"}>
                  <form onSubmit={addingSections}>
                    <input 
                      onChange={(e) => setAddingSectionname(e.target.value)}
                      type={"text"}
                      className="px-2 "
                      placeholder="Type your Section Name"
                    />
                  </form>
                </Typography>
              </AccordionSummary>
            </Accordion>
          </div>
          ))} */}

          {/*  Working end in real */}
        </div>
      </div>
    </div>
  );
}
