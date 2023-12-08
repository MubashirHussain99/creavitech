import React, { useState, useRef, useEffect } from "react";
import SideDetail from "./SideDetail";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import { BsCheckCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import Modal from "react-modal";
import {
  MdDeleteOutline,
  MdOutlineDriveFileRenameOutline,
  MdDeleteForever,
} from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useSelector } from "react-redux";
import Api from "../../API/Api";
import moment from "moment";
import SideDetail2 from "./SideDetail2";
import { useDispatch } from "react-redux";

// const data = [
//   { id: 1, name: "Sarim", tasks: [{ id: 6, name: "sariM" }] },
//   { id: 2, name: "Zaid", tasks: [{ id: 7, name: "zaiD" }] },
//   { id: 3, name: "Anas", tasks: [{ id: 8, name: "anaS" }] },
//   { id: 4, name: "Waleed", tasks: [{ id: 9, name: "waleeD" }] },
//   { id: 5, name: "Makhmoor", tasks: [{ id: 10, name: "makhmooR" }] },
// ];

const Accordion = ({
  sectionArr,
  user,
  details,
  setDetails,
  setrefresh,
  refresh,
  newTaskrefresh,
  setnewTaskrefresh,
  setIsOpen,
  setIsOpen1,
  setIsOpen2,
  setdelmodalIsOpen,
  modalIsOpen,
  modalIsOpen1,
  modalIsOpen2,
  delmodalIsOpen,
  clientmodal,
  projectusermodel,
  inviteModal,
  projectdeletemodal,
  setprojectdeletemodal,
}) => {
  const datas = useSelector((x) => x);
  const dispatch = useDispatch();
  const [openIndices, setOpenIndices] = useState([]);
  const [openSubtaskIndices, setOpenSubtaskIndices] = useState([]);
  const [openInput, setOpenInput] = useState([]);
  const [openDelete, setOpenDelete] = useState([]);
  const [opensubtask1, setOpensubtask1] = useState([]);
  const [opensubtask, setOpensubtask] = useState([]);
  const [task, setTask] = useState([]);
  const [AddingTaskName, setAddingTaskName] = useState("");
  const [addingtaskInput, setAddingTaskInput] = useState("");
  const [task1, settask1] = useState({});
  const [secId, setsecId] = useState({});
  const [name, setName] = useState();
  const [dueDate, setdueDate] = useState();
  const [secName, setsecName] = useState();
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedsubTaskId, setselectedsubTaskId] = useState("");
  const [taskName, settaskName] = useState(null);
  const [subTaskName, setsubTaskName] = useState(null);
  const [taskRefresh, settaskRefresh] = useState();
  const [deletetaskmsg, setdeletetaskmsg] = useState(false);
  const [taskcreatemsg, settaskcreatemsg] = useState(false);
  const [sectionmsg, setsectionmsg] = useState(false);
  const [deletesectionmsg, setdeletesectionmsg] = useState(false);
  const [deletesubtaskmsg, setdeletesubtaskmsg] = useState(false);
  const [taskId, settaskId] = useState();
  const [AccordionsubTask, setAccordionsubTask] = useState([]);
  const [status, setStatus] = useState();
  const [NowStatus, setNowStatus] = useState(task.status);
  const [NowStatus2, setNowStatus2] = useState(task.status);
  const [task_name, settask_name] = useState(task.name);
  const [loading, setLoading] = useState(true);
  const [taskdeletemodal, settaskdeletemodal] = useState(false);
  const [sectiondeletemodal, setsectiondeletemodal] = useState(false);
  const [subtaskdeletemodal, setsubtaskdeletemodal] = useState(false);
  const [sectaskdeletemodal, setsectaskdeletemodal] = useState(false);
  const [subtask1deletemodal, setsubtask1deletemodal] = useState(false);
  const [showSectionInput, setshowSectionInput] = useState(null);
  const [modalSelectedSectionId, setmodalSelectedSectionId] = useState();
  const [subtaskuserdeletemodal, setsubtaskuserdeletemodal] = useState(false);
  const [taskuserdeletemodal, settaskuserdeletemodal] = useState(false);
  const [validaitonmsg, setvalidaitonmsg] = useState(null);
  const [validaitonalert, setvalidaitonalert] = useState(false);
  // const [taskvalidaitonmsg, settaskvalidaitonmsg] = useState(false);
  // const [subtaskvalidaitonmsg, setsubtaskvalidaitonmsg] = useState(false);

  const [dataID, setDataID] = useState(localStorage.getItem("myData"));
  const [inputValue, setInputValue] = useState();
  const inputRef = useRef();
  const input1Ref = useRef();
  const secRef = useRef([]);
  const taskRef = useRef([]);
  const subTaskRef = useRef([]);
  const handleButtonClick1 = () => {
    setInput1(true);
  };
  const handleButtonClick = () => {
    setInput1(true);
  };
  const handleClickOutside1 = () => {
    setInput1(false);
  };
  const handleClickOutside = () => {
    setInput1(false);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  function closeTaskDeleteModal() {
    settaskdeletemodal(false);
  }
  function closeSubTaskDeleteModal() {
    setsubtaskdeletemodal(false);
  }
  function closeSectionDeleteModal() {
    setsectiondeletemodal(false);
  }
  function closeSectionTaskDeleteModal() {
    setsectaskdeletemodal(false);
  }
  function close1TaskDeleteModal() {
    setsubtask1deletemodal(false);
  }
  // console.log(datas.Project_id, "sadsadsadsa xxxxxxxxxxxxxxxxxx");

  // const inputWidth = (inputValue&&inputValue.length + 5)* 8
  // const minWidth = (inputValue&&inputValue.length + 5)* 8

  const handleSectionClick = (id) => {
    setSelectedSectionId(id);
  };
  const completeTask = (id) => {
    if (datas.user_status == 10) {
      Api.Update({ msg: "update" }, `/tasks/${id}`)
        .then((x) => {
          setNowStatus(x.data.status), setrefresh(x);
        })
        .catch((err) => console.log(err));
    }
  };
  const completedsubtask = (s) => {
    if (datas.user_status == 10) {
      Api.Update(
        { msg: "update" },
        `/completed/task/${s.task_id}/Subtasks/${s.id}`
      )
        .then((x) => {
          console.log(x);
          setNowStatus2(x.data.taskUpdate.status), setrefresh(x);
        })
        .catch((err) => console.log(err));
    }
  };
  const toggleAccordion = (index) => {
    setOpenIndices(
      openIndices.includes(index)
        ? openIndices.filter((i) => i !== index)
        : [...openIndices, index]
    );
  };
  const toggleAccordion6 = (index) => {
    setOpenIndices(
      openIndices.includes(index)
        ? openIndices.filter((i) => i == index)
        : [...openIndices, index]
    );
  };
  const toggleAccordion2 = (index) => {
    if (openInput.includes(index)) {
      setOpenInput(openInput.filter((i) => i !== index));
    } else {
      setOpenInput([...openInput, index]);
    }
  };
  const toggleAccordion3 = (index) => {
    if (openDelete.includes(index)) {
      setOpenDelete(openDelete.filter((i) => i !== index));
    } else {
      setOpenDelete([index]);
    }
  };
  const toggleAccordion4 = (index, s) => {
    setOpensubtask((prevState) => {
      const taskId = `${index}-${s}`;
      if (prevState.includes(taskId)) {
        return prevState.filter((x) => x !== taskId);
      } else {
        return [...prevState, taskId];
      }
    });
  };
  //sadsadsadsa//
  // console.log(taskdeletemodal, "sadsadsa");

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

    if (taskcreatemsg) {
      timeoutId = setTimeout(() => {
        settaskcreatemsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [taskcreatemsg]);
  useEffect(() => {
    let timeoutId;

    if (deletesectionmsg) {
      timeoutId = setTimeout(() => {
        setdeletesectionmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [deletesectionmsg]);
  useEffect(() => {
    let timeoutId;

    if (sectionmsg) {
      timeoutId = setTimeout(() => {
        setsectionmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [sectionmsg]);

  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    let timeoutId;

    if (deletesubtaskmsg) {
      timeoutId = setTimeout(() => {
        setdeletesubtaskmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [deletesubtaskmsg]);

  useEffect(() => {
    setLoading(false);
  }, []);

  const toggleAccordion5 = (index) => {
    if (opensubtask1.includes(index)) {
      setOpensubtask1(opensubtask1.filter((i) => i !== index));
    } else {
      setOpensubtask1([...opensubtask1, index]);
    }
  };
  const toggleAccordion7 = (index) => {
    if (openInput.includes(index)) {
      setOpenInput(openInput.filter((i) => i !== index));
    }
  };
  // console.log(datas);
  const addSections = () => {
    Api.fetchPost(
      { project_id: datas.Project_id, user_id: user },
      "/createsection"
    )
      .then((x) => {
        // Get the created section's name from the response (assuming it's in x.data.name)
        const sectionName = x.data.name;

        // Make another API request to create a notification
        Api.fetchPost(
          {
            message: `${datas.User_name} created this section "${x.data.name}"`,
          },
          `/createnotification/team_id/${dataID}`
        )
          .then((t) => {
            dispatch({
              type: "overallRefresh",
              payload: t,
            });
            setsectionmsg(true);
          })
          .catch((err) => console.log(err));

        // Update state variables
        setrefresh(x);
        settaskRefresh(x);
      })
      .catch((err) => console.log(err));
  };

  const addTask = (SectionId, e, index) => {
    e.preventDefault();
    Api.fetchPost(
      { name: AddingTaskName },
      `/projects/${datas.Project_id}/sections/${SectionId}/tasks`
    ).then((x) => {
      Api.fetchPost(
        {
          message: `${datas.User_name} created task "${x.data.task.name}"`,
          project_id: datas.Project_id,
        },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          settaskcreatemsg(true);
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
        })
        .catch((err) => console.log(err));
      setOpenInput(openInput.filter((i) => i == index));
      setrefresh(x), settaskRefresh(x);
    });
  };

  const Task = (e) => {
    e.preventDefault();
    Api.fetchPost(
      {
        name: addingtaskInput,
      },
      `/projects/${datas.Project_id}/sections/${0}/tasks`
    ).then((x) => {
      settaskcreatemsg(true);
      Api.fetchPost(
        {
          message: `${datas.User_name} created task "${x.data.task.name}"`,
          project_id: datas.Project_id,
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
      inputRef.current.value = "";
      setInput1(false);
      setrefresh(x), settaskRefresh(x);
    });
  };
  useEffect(() => {
    Api.fetchGet(`/projects/${datas.Project_id}/tasks`).then((x) => {
      if (x.status == 200) {
        settask1(x.data.task);
      }
    });
  }, [refresh, newTaskrefresh, taskRefresh, secId, datas.Project_id]);

  useEffect(() => {
    if (input1) {
      inputRef.current.focus();
    }
  }, [input1]);

  useEffect(
    (index) => {
      if (input2) {
        input1Ref.current.focus();
      }
    },
    [input2]
  );

  const EditSectionName = (e, s, index) => {
    e.preventDefault();
    Api.Update({ name: secName }, `/sectionName/${s.id}`)
      .then((x) => {
        if (x.status == 200) {
          secRef.current.blur(); // blur the input field after form submission
          setsecName(null);
          setrefresh(x), settaskRefresh(x);
          Api.fetchPost(
            {
              message: `${datas.User_name} renamed section "${s.name}" to "${x.data.name}"`,
              project_id: datas.Project_id,
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
        setshowSectionInput(null);
        setrefresh(x), settaskRefresh(x);
      })
      .catch((err) => console.log(err));
  };
  const EdittaskkName = (e, t, index) => {
    e.preventDefault();
    // taskRef.current[index].blur();
    task_name &&
      Api.Update({ name: task_name }, `/editName/${t.id}`).then((x) => {
        settask_name(null);
        console.log(x);
        Api.fetchPost(
          {
            message: `${datas.User_name} renamed task "${t.name}" to "${x.data.name}"`,
            project_id: datas.Project_id,
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
        // taskRef.current[index].blur();
        setrefresh(x), settaskRefresh(x);
      });
  };

  const EditsubTaskName = (e, s, index) => {
    e.preventDefault();

    Api.Update({ name: subTaskName }, `/editTaskName/${s.id}`).then((x) => {
      Api.fetchPost(
        {
          message: `${datas.User_name} updated subtask "${s.name}" to "${x.data.name}"`,
          project_id: datas.Project_id,
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
      setsubTaskName(null);
      subTaskRef.current[index].blur();
      setnewTaskrefresh(x);
    });
  };
  const DeleteSection = () => {
    Api.Delete(
      `/projects/${datas.Project_id}/sections/${subtaskuserdeletemodal}`
    ).then((x) => {
      console.log(x);
      setrefresh(x), setDetails(0);
      setnewTaskrefresh(x);
      setvalidaitonmsg(x.data.msg);
      setvalidaitonalert(true);

      if (x.data.msg == "Section deleted successfully!") {
        Api.fetchPost(
          {
            message: `${datas.User_name} deleted section "untitled"`,
            project_id: datas.Project_id,
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
  const DeleteTask = (p, s, t) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}`).then((x) => {
      console.log(x), setDetails(0);
      setvalidaitonmsg(x.data.msg);
      setvalidaitonalert(true);
      if (x.data.msg == "Task deleted successfully!") {
        Api.fetchPost(
          {
            message: `${datas.User_name} deleted task "${x.data.task.name}"`,
            project_id: datas.Project_id,
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
      setnewTaskrefresh(x);
    });
  };
  const DeletesubTask = (p, s, t, su) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}/Subtask/${su}`).then(
      (x) => {
        // console.log(x);
        setvalidaitonmsg(x.data.msg);
        setvalidaitonalert(true);
        if (x.data.msg == "Subtask deleted successfully!") {
          Api.fetchPost(
            {
              message: `${datas.User_name} deleted subtask "${x.data.name}"
            `,
              project_id: datas.Project_id,
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
        setDetails(0);
        setnewTaskrefresh(x);
        closeSubTaskDeleteModal();
      }
    );
  };

  useEffect(() => {
    if (showSectionInput != null) {
      secRef.current.focus();
    }
  }, [showSectionInput]);

  const focusInput = (x, index) => {
    setshowSectionInput(x.id);
    setsecName(x.name);
    // secRef.current[index].focus();
  };

  // const minWidth = "100px"; // Adjust the minimum width as needed
  // const maxWidth = "300px"; // Adjust the maximum width as needed
  // const inputWidth = `${Math.min(
  //   Math.max(inputValue.length * 10 + 30, parseInt(minWidth)),
  //   parseInt(maxWidth)
  // )}px`;

  // console.log(task1, "value");
  return (
    <div className="">
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
      {datas.user_status == 10 && (
        <div className="w-[100%] pl-[20px] mt-4">
          <button
            onClick={handleButtonClick}
            className="text-[12px] font-semibold space-x-1 h-7 flex items-center justify-between hover:bg-slate-200 border rounded-lg  px-2"
          >
            <GoPlus className=" text-secondary" size={14} />
            <p>Add Task</p>
          </button>
        </div>
      )}
      <Modal
        className="flex justify-center items-center h-full relative z-50"
        isOpen={sectiondeletemodal}
        onRequestClose={closeSectionDeleteModal}
      >
        <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
          <div className="w-[100%] flex justify-between items-center ">
            <p className=" text-[20px] text-rose font-poppins">
              <p className="font-poppins">Are you Sure?</p>
              You want to delete the Section!
            </p>
          </div>
          <div className="flex flex-row space-x-10 mt-10 text-[14px]">
            <button
              onClick={() => {
                DeleteSection(), closeSectionDeleteModal();
              }}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              Yes
            </button>
            <button
              onClick={() => closeSectionDeleteModal()}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      {/* {deletetaskmsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Task Deleted Successfully
          </p>
        </motion.div>
      )} */}
      {taskcreatemsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Task Created Successfully
          </p>
        </motion.div>
      )}
      {deletesectionmsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Section Deleted Successfully
          </p>
        </motion.div>
      )}
      {sectionmsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Section Created Successfully
          </p>
        </motion.div>
      )}
      {deletesubtaskmsg && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
        >
          <p className="font-poppins font-bold text-[17px]">
            Sub Task Deleted Successfully
          </p>
        </motion.div>
      )}
      <div
        className={`flex  font-semibold w-[100%] text-secondary mt-3 border ${
          details ? " w-[100%]" : " w-[100%]"
        }`}
      >
        <div className="w-[60%] px-[25px] border-r py-2">Task name</div>

        <div className="flex w-[40%] border-r">
          <div className=" border-r w-[33.33%] text-left px-2 py-2">
            Assignee
          </div>
          <div className=" w-[33.33%] text-left px-2 border-r py-2">
            Due Date
          </div>
          <div className=" w-[33.33%] text-left px-2 py-2">Priority</div>
        </div>
      </div>
      <div className="">
        {task1 &&
          task1.length > 0 &&
          task1.map((x, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedTaskId(x.id);
              }}
              className={`${
                modalIsOpen ||
                modalIsOpen1 ||
                modalIsOpen2 ||
                delmodalIsOpen ||
                inviteModal ||
                projectdeletemodal ||
                setprojectdeletemodal ||
                clientmodal ||
                projectusermodel ||
                subtaskdeletemodal ||
                sectaskdeletemodal ||
                subtask1deletemodal ||
                taskuserdeletemodal ||
                subtaskuserdeletemodal ||
                taskdeletemodal ||
                sectiondeletemodal
                  ? ``
                  : `relative z-10`
              }`}
            >
              <div>
                <div className=" text-gray-600 w-[100%] border-b border-r">
                  <div className=" flex flex-row">
                    <div
                      onClick={() => {
                        setTask(x);
                      }}
                      id="hover1"
                      className={`${
                        x.status == 20 ? `bg-green-50` : "bg-white"
                      } flex flex-row items-center justify-between pl-[20px] w-[60%] hover:border h-8 hover:border-black`}
                    >
                      <div className=" flex items-center text-secondary w-[60%]">
                        <div>
                          {opensubtask1.includes(index) ? (
                            <AiFillCaretDown
                              size={12}
                              className="mr-2"
                              onClick={() => {
                                toggleAccordion5(index);
                              }}
                            />
                          ) : (
                            <AiFillCaretRight
                              size={12}
                              className="mr-2"
                              onClick={() => {
                                toggleAccordion5(index);
                              }}
                            />
                          )}
                        </div>
                        {x.status == 20 ? (
                          <BsFillCheckCircleFill
                            onClick={() => {
                              completeTask(x.id), setTask(x);
                            }}
                            className={`${
                              // x.status == 20
                              // ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                              // :
                              `hover:text-green-800 text-green-700 w-[18px] h-[17px] rounded-full cursor-pointer mr-2`
                            }`}
                          />
                        ) : (
                          <BsCheckCircle
                            onClick={() => {
                              completeTask(x.id), setTask(x);
                            }}
                            className={`${
                              // x.status == 20
                              //   ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                              //   :
                              `hover:text-green-600 cursor-pointer mr-2`
                            }`}
                          />
                        )}
                        {/* <p>{x.name}</p> */}
                        {datas.user_status == 10 ? (
                          <form
                            className="w-[100%] "
                            onSubmit={(e) => EdittaskkName(e, x)}
                          >
                            <input
                              id="inputID2"
                              onClick={() => {
                                settask_name(x.name), setTask(x);
                              }}
                              className={`px-1 w-[100%]   hover:border-secondary hover:bg-white border-white border outline-none ${
                                x.status == 20
                                  ? `bg-green-50 border-green-50 text-green-600`
                                  : "bg-white text-secondary"
                              }`}
                              ref={(tl) => (taskRef.current[index] = tl)}
                              value={
                                x.id === selectedTaskId ? task_name : x.name
                              }
                              placeholder={x.name}
                              onChange={(e) => {
                                setInputValue(e.target.value);
                                if (x.id === selectedTaskId) {
                                  settask_name(e.target.value);
                                }
                              }}
                              onBlur={(e) => {
                                task_name && EdittaskkName(e, x),
                                  setrefresh(x),
                                  settaskRefresh(x);
                                setTask(x);
                              }}
                              key={`section-${x.id}-input`}
                            />
                          </form>
                        ) : (
                          <div>{x.name}</div>
                        )}
                      </div>
                      {/* <div
                        id="show1"
                        className="hidden items-center h-8 px-4 cursor-pointer justify-end"
                        onClick={() => {
                          setDetails(1);
                          setTask(x);
                        }}
                      >
                        <p
                          className={`text-xs text-primary 
                         text-black
                        ${details && " "}`}
                        >
                          Details
                        </p>
                        <IoIosArrowForward
                          className="text-black mt-[1px]"
                          size={13}
                        />
                      </div> */}
                      {/*  */}
                      <div
                        id="show1"
                        className="hidden items-center h-8 justify-between w-[30%] px-4 cursor-pointer"
                        onClick={() => {
                          setTask(x);
                          setAccordionsubTask(null);
                        }}
                      >
                        {datas.user_status == 10 ? (
                          <div
                            onClick={() => {
                              settaskdeletemodal(true);
                            }}
                            className="rounded-full h-6 w-6 hover:bg-slate-50 flex items-center justify-center"
                          >
                            <MdDeleteForever size={17} color={"red"} />
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <div
                          onClick={() => setDetails(1)}
                          className="flex items-center"
                        >
                          <p
                            className={`text-xs text-primary 
                         ${x.status == 20 ? `text-black` : "text-black"}
                            ${details && " "}`}
                          >
                            Details
                          </p>
                          <IoIosArrowForward
                            className={`mt-[1px] ${
                              x.status == 20 ? `text-black` : "text-black"
                            }`}
                            size={13}
                          />
                        </div>
                      </div>
                      <Modal
                        className="flex justify-center items-center h-full relative z-50"
                        isOpen={taskdeletemodal}
                        onRequestClose={closeTaskDeleteModal}
                      >
                        <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                          <div className="w-[100%] flex justify-between items-center ">
                            <p className=" text-[20px] text-rose font-poppins">
                              <p className="font-poppins">Are you Sure?</p>
                              You want to delete the Task!
                            </p>
                          </div>
                          <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                            <button
                              onClick={() => {
                                DeleteTask(x.project_id, x.section_id, x.id),
                                  closeTaskDeleteModal();
                              }}
                              type="submit"
                              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                            >
                              Yes
                            </button>
                            <button
                              onClick={() => closeTaskDeleteModal()}
                              type="submit"
                              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </div>
                    <div className="w-[13.33%] flex items-center h-8 border-x cursor-pointer">
                      <div className=" h-auto flex overflow-x-scroll max-w-[150px] px-1 pt-1 space-x-1">
                        {x.TaskUsers &&
                          x.TaskUsers.map((Taskusers) => (
                            <div
                              key={Taskusers}
                              className="bg-rose text-white rounded-full w-6 h-6 "
                            >
                              <div className="bg-rose text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                                {
                                  Taskusers.myuser.myprofile.fullname.split(
                                    ""
                                  )[0]
                                }

                                {
                                  Taskusers.myuser.myprofile.fullname.split(
                                    ""
                                  )[1]
                                }
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="w-[13.33%] h-8 text-[13px] flex items-center px-2 border-r">
                      {x.due_date && moment(x.due_date).format("MMM Do YY")}
                    </div>
                    {/* {moment(x.due_date).format("MMM Do YY")} */}
                    <div className="w-[13.33%] h-8 text-[13px] flex items-center px-2 text-black">
                      {x.priority == 10 && (
                        <div className="bg-yellow-300 px-2 rounded-lg">Low</div>
                      )}
                      {x.priority == 20 && (
                        <div className="bg-green-400 px-2 rounded-lg">
                          Medium
                        </div>
                      )}
                      {x.priority == 30 && (
                        <div className="bg-red-500 text-white pb-[2px] px-2 rounded-lg">
                          High
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {opensubtask1.includes(index) &&
                      x.SubTasks &&
                      x.SubTasks.map((s) => (
                        <div
                          onClick={() => {
                            setselectedsubTaskId(s.id);
                          }}
                          key={`section-${s.id}`}
                          id="hover5"
                          className={`text-gray-600 w-[100%] flex flex-row items-center justify-between h-8 ${
                            modalIsOpen ||
                            modalIsOpen1 ||
                            modalIsOpen2 ||
                            delmodalIsOpen ||
                            clientmodal ||
                            projectusermodel ||
                            inviteModal ||
                            projectdeletemodal ||
                            setprojectdeletemodal ||
                            subtaskdeletemodal ||
                            sectaskdeletemodal ||
                            subtask1deletemodal ||
                            taskuserdeletemodal ||
                            subtaskuserdeletemodal ||
                            taskdeletemodal ||
                            sectiondeletemodal
                              ? ``
                              : `relative z-10`
                          } `}
                        >
                          <div
                            className={` w-[60%] flex flex-row items-center justify-between border-t hover:border h-8 pl-[63px] hover:border-black ${
                              s.status == 20 ? `bg-green-50` : ""
                            }  `}
                          >
                            <div className="mr-2 flex items-center w-[58.4%]">
                              {s.status == 20 ? (
                                <BsFillCheckCircleFill
                                  onClick={() => {
                                    completedsubtask(s), setAccordionsubTask(s);
                                  }}
                                  className={`${
                                    // s.status == 20
                                    //   ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                    //   :
                                    `hover:text-green-800 text-green-700 cursor-pointer mr-2`
                                  }`}
                                />
                              ) : (
                                <BsCheckCircle
                                  onClick={() => {
                                    completedsubtask(s), setAccordionsubTask(s);
                                  }}
                                  className={`${
                                    // s.status == 20
                                    //   ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                    //   :
                                    `hover:text-green-600 cursor-pointer mr-2`
                                  }`}
                                />
                              )}
                              {datas.user_status == 10 ? (
                                <form
                                  className="w-[100%]"
                                  onSubmit={(e) => EditsubTaskName(e, s, index)}
                                >
                                  <input
                                    className={`px-1 w-[100%] hover:bg-white hover:border-secondary border ${
                                      s.status == 20
                                        ? `bg-green-50 text-green-600 border-green-50`
                                        : "bg-white text-secondary border-white"
                                    }`}
                                    onClick={() => {
                                      setDetails(2);
                                      setAccordionsubTask(s);
                                    }}
                                    id="inputID3"
                                    ref={(tl) =>
                                      (subTaskRef.current[index] = tl)
                                    }
                                    value={
                                      s.id === selectedsubTaskId
                                        ? subTaskName
                                        : s.name
                                    }
                                    onChange={(e) => {
                                      if (s.id === selectedsubTaskId) {
                                        setsubTaskName(e.target.value);
                                      }
                                    }}
                                    onBlur={(e) => {
                                      subTaskName != null &&
                                        EditsubTaskName(e, s, index),
                                        setrefresh(x),
                                        settaskRefresh(x);
                                    }}
                                    key={`task-${s.id}-input`}
                                    placeholder={s.name}
                                  />
                                </form>
                              ) : (
                                <div key={s}>{s.name}</div>
                              )}
                            </div>
                            <div
                              id="show5"
                              className="hidden items-center h-8 justify-between px-4 cursor-pointer w-[30%]"
                              onClick={() => {
                                setAccordionsubTask(s);
                              }}
                            >
                              {datas.user_status == 10 ? (
                                <div
                                  onClick={() => setsubtask1deletemodal(true)}
                                  className="rounded-full h-6 w-6 hover:bg-slate-100 flex items-center justify-center"
                                >
                                  <MdDeleteForever size={17} color={"red"} />
                                </div>
                              ) : (
                                <div></div>
                              )}
                              <div
                                onClick={() => setDetails(2)}
                                className="flex items-center"
                              >
                                <p
                                  className={`text-xs
                                  ${
                                    s.status == 20 ? `text-black` : "text-black"
                                  }
                                  ${details && " "}`}
                                >
                                  Details
                                </p>
                                <IoIosArrowForward
                                  className={`mt-[1px] ${
                                    s.status == 20 ? `text-black` : "text-black"
                                  }`}
                                  size={13}
                                />
                              </div>
                            </div>
                            <Modal
                              className="flex justify-center items-center h-full relative z-50"
                              isOpen={subtask1deletemodal}
                              onRequestClose={close1TaskDeleteModal}
                            >
                              <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                                <div className="w-[100%] flex justify-between items-center ">
                                  <p className=" text-[20px] text-rose font-poppins">
                                    <p className="font-poppins">
                                      Are you Sure?
                                    </p>
                                    You want to delete the Subtask!
                                  </p>
                                </div>
                                <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                                  <button
                                    onClick={() => {
                                      DeletesubTask(
                                        x.project_id,
                                        x.section_id,
                                        s.task_id,
                                        s.id
                                      ),
                                        close1TaskDeleteModal();
                                    }}
                                    type="submit"
                                    className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => close1TaskDeleteModal()}
                                    type="submit"
                                    className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </Modal>
                          </div>
                          <div className="w-[13.33%] h-8 border-t border-x  flex items-center pt-1">
                            <div className=" h-auto flex overflow-x-scroll max-w-[90%] px-1 space-x-1">
                              {s.subTaskUsers &&
                                s.subTaskUsers.map((Taskusers) => (
                                  <div
                                    key={Taskusers}
                                    className="bg-rose text-white rounded-full w-6 h-6 "
                                  >
                                    <div className="bg-rose text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                                      <p>
                                        {
                                          Taskusers.myuser.myprofile.fullname.split(
                                            ""
                                          )[0]
                                        }
                                      </p>

                                      <p>
                                        {
                                          Taskusers.myuser.myprofile.fullname.split(
                                            ""
                                          )[1]
                                        }
                                      </p>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="w-[13.33%] h-8 text-[13px] flex items-center px-2 border-r border-t">
                            {s.due_date && moment(s.due_date).format("MMM Do")}
                          </div>
                          <div className="w-[13.33%] h-8 text-[13px] flex items-center justify-center border-t">
                            {/* {moment(s.due_date).format("MMM Do")} */}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {input1 ? (
        <div className="w-[100%] pl-[20px] ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <form onSubmit={Task}>
                <input
                  onChange={(e) => {
                    setAddingTaskInput(e.target.value);
                  }}
                  placeholder={"Write Task"}
                  ref={inputRef}
                  className="w-[198px] h-7 border border-secondary rounded-md px-2"
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {input1 && (
        <div
          tabIndex={1}
          onClick={handleClickOutside}
          className="fixed top-0 left-0 bottom-0 right-0"
        />
      )}
      {sectionArr.map((x, index) => (
        <div
          onClick={() => {
            handleSectionClick(x.id);
          }}
          key={`section-${x.id}`}
          className=""
        >
          <div
            id="hover"
            key={`section-${x.id}-header`}
            className="border-b-2 "
          >
            <div className="flex items-center cursor-pointer">
              <div className="ml-[12px]">
                <IoMdArrowDropright
                  size={28}
                  className={` text-rose ${
                    openIndices.includes(index) ? "rotate-90" : ""
                  }`}
                  onClick={() => {
                    toggleAccordion(index);
                  }}
                />
              </div>

              <div className="relative">
                {datas.user_status == 10 && (
                  <div
                    id="overflow-hidden"
                    className="font-semibold text-[18px] text-black  w-[150px] h-[30px] my-1 px-1 cursor-text hover:bg-gray-100 border border-white hover:border-gray-400"
                    onClick={(e, index) => {
                      {
                        focusInput(x, index);
                        setsecName(x.name);
                      }
                    }}
                  >
                    {x.name}
                  </div>
                )}
                {datas.user_status == 10 &&
                  showSectionInput == x.id &&
                  showSectionInput != null && (
                    <form
                      className="absolute top-0 w-[300px] h-[30px] my-1"
                      onSubmit={(e) => EditSectionName(e, x, index)}
                    >
                      <input
                        className="font-semibold text-[18px] w-[300px] h-[30px] px-1 text-black bg-gray-100 border border-gray-400 outline-none"
                        value={x.id === selectedSectionId ? secName : x.name}
                        // ref={(el) => (secRef.current[index] = el)}
                        // set the ref object for this input field
                        // style={{ width: inputWidth, maxWidth }}
                        ref={secRef}
                        onChange={(e) => {
                          if (x.id === selectedSectionId) {
                            setsecName(e.target.value);
                          }
                        }}
                        onBlur={(e) => {
                          secName && EditSectionName(e, x.id, index);
                        }}
                        key={`section-${x.id}-input`}
                      />
                    </form>
                  )}
              </div>
              {datas.user_status == 20 && (
                <div className="font-semibold text-[18px] text-black">
                  {x.name}
                </div>
              )}

              {datas.user_status == 10 && (
                <div id="show" className="hidden w-24 h-5 ml-8 justify-evenly">
                  <div
                    onClick={() => {
                      toggleAccordion2(index), setInput2(true);
                    }}
                    className="flex justify-center hover:text-black text-secondary font-bold"
                  >
                    <button>
                      <GoPlus
                        className="hover:text-black text-secondary"
                        size={20}
                      />
                    </button>
                  </div>
                  <div
                    onClick={() => toggleAccordion3(index)}
                    className="justify-center items-center text-primary hover:text-orange-600  ml-3"
                  >
                    <button>
                      <BiDotsHorizontalRounded
                        className="hover:text-orange-600"
                        size={22}
                      />
                    </button>
                    {openDelete.includes(index) && (
                      <div
                        id="shadow2"
                        className="absolute z-30 w-[150px] h-auto rounded-md -mt-2 ml-4 bg-white border border-gray-300 "
                      >
                        <div
                          onClick={() => focusInput(x, index)}
                          className="flex items-center space-x-2 hover:bg-gray-300 border-b text-gray-400 hover:text-green-500 py-1 pl-1"
                        >
                          <MdOutlineDriveFileRenameOutline size={18} />
                          <p className="text-sm font-normal">Rename Section</p>
                        </div>
                        <div
                          onClick={() => {
                            setsubtaskuserdeletemodal(x.id),
                              setsectiondeletemodal(true);
                          }}
                          className="flex items-center space-x-2 hover:bg-gray-300 border-b text-gray-400 hover:text-red-500 py-1 pl-1"
                        >
                          <MdDeleteOutline size={18} />
                          <p className="text-sm font-normal">delete</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {openInput.includes(index) && (
              <div
                id="hover3"
                className=" text-gray-600  flex flex-row w-[100%] border "
              >
                <div className="w-[70%] flex flex-row items-center py-1 justify-between h-9 pl-[20px]  hover:border-black ">
                  <div className=" flex space-x-1 items-center  w-[150px]">
                    <form
                      onSubmit={(e) => {
                        addTask(x.id, e),
                          toggleAccordion6(index),
                          setInput2(false);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          setAddingTaskName(e.target.value);
                        }}
                        ref={input1Ref}
                        placeholder="Write Task"
                        className="w-[198px] h-7 border border-secondary rounded-md px-2"
                      />
                    </form>
                  </div>
                </div>
                {/* <div className="w-[15%] h-8 border-t border-r  "></div>
                <div className="w-[15%] h-8 border-t "></div> */}
              </div>
            )}
            {openInput.includes(index) && (
              <div
                tabIndex={1}
                onClick={() => {
                  toggleAccordion7(index), setInput2(false);
                }}
                className="fixed top-0 left-0 bottom-0 right-0"
              />
            )}
            {/*               */}
            {openIndices.includes(index) && (
              <div className=" text-gray-600  w-[100%] ">
                {x.tasks &&
                  x.tasks.map((t, s) => (
                    <div
                      onClick={() => {
                        setSelectedTaskId(t.id);
                      }}
                      key={`section-${t.id}`}
                    >
                      <div
                        className={`flex flex-row border ${
                          modalIsOpen ||
                          modalIsOpen1 ||
                          modalIsOpen2 ||
                          delmodalIsOpen ||
                          inviteModal ||
                          projectdeletemodal ||
                          setprojectdeletemodal ||
                          clientmodal ||
                          projectusermodel ||
                          subtaskdeletemodal ||
                          sectaskdeletemodal ||
                          subtask1deletemodal ||
                          taskuserdeletemodal ||
                          subtaskuserdeletemodal ||
                          taskdeletemodal ||
                          sectiondeletemodal
                            ? ``
                            : `relative z-10`
                        } `}
                      >
                        <div
                          id="hover4"
                          className={`${
                            t.status == 20 ? `bg-green-50` : "bg-white"
                          } w-[60%] flex flex-row items-center justify-between pl-[20px]  hover:border h-8 hover:border-black`}
                        >
                          <div className="flex items-center w-[60%] text-secondary">
                            <div>
                              {opensubtask.includes(`${index}-${s}`) ? (
                                <AiFillCaretDown
                                  size={12}
                                  className="mr-2"
                                  onClick={() => {
                                    toggleAccordion4(index, s);
                                  }}
                                />
                              ) : (
                                <AiFillCaretRight
                                  size={12}
                                  className="mr-2"
                                  onClick={() => {
                                    toggleAccordion4(index, s);
                                  }}
                                />
                              )}
                            </div>
                            {t.status == 20 ? (
                              <BsFillCheckCircleFill
                                onClick={() => {
                                  completeTask(t.id), setTask(t);
                                }}
                                className={`${
                                  // t.status == 20
                                  //   ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                  //   :
                                  `hover:text-green-800 text-green-700 w-[18px] h-[17px] rounded-full cursor-pointer mr-2`
                                }`}
                              />
                            ) : (
                              <BsCheckCircle
                                onClick={() => {
                                  completeTask(t.id), setTask(t);
                                }}
                                className={`${
                                  t.status == 20
                                    ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                    : `hover:text-green-600 cursor-pointer mr-2`
                                }`}
                              />
                            )}
                            {datas.user_status == 10 ? (
                              <form
                                className="w-[100%]"
                                onSubmit={(e) => EdittaskkName(e, t, s)}
                              >
                                <input
                                  id="inputID2"
                                  onClick={() => {
                                    settask_name(t.name), setTask(t);
                                  }}
                                  className={`px-1 w-[100%] hover:border-secondary hover:border ${
                                    t.status == 20
                                      ? `bg-green-50  text-green-600`
                                      : "bg-white text-secondary"
                                  }`}
                                  ref={(tl) => (taskRef.current[s] = tl)}
                                  value={
                                    t.id === selectedTaskId ? task_name : t.name
                                  }
                                  placeholder={t.name}
                                  onChange={(e) => {
                                    setInputValue(e.target.value);
                                    if (t.id === selectedTaskId) {
                                      settask_name(e.target.value);
                                    }
                                  }}
                                  onBlur={(e) => {
                                    task_name && EdittaskkName(e, t, s),
                                      setrefresh(x),
                                      settaskRefresh(x);
                                    setTask(t);
                                  }}
                                  key={`section-${t.id}-input`}
                                />
                              </form>
                            ) : (
                              <div>{t.name}</div>
                            )}
                          </div>
                          <div
                            id="show4"
                            className="hidden items-center h-8 justify-between w-[70%] px-4 cursor-pointer"
                            onClick={() => {
                              setTask(t);
                              setAccordionsubTask(null);
                            }}
                          >
                            {datas.user_status == 10 ? (
                              <div
                                onClick={() => {
                                  setsectaskdeletemodal(true);
                                }}
                                className="rounded-full h-6 w-6 hover:bg-slate-50 flex items-center justify-center"
                              >
                                <MdDeleteForever size={17} color={"red"} />
                              </div>
                            ) : (
                              <div></div>
                            )}
                            <div
                              onClick={() => setDetails(1)}
                              className="flex items-center"
                            >
                              <p
                                className={`text-xs  
                                ${t.status == 20 ? `text-black` : "text-black"}
                            ${details && " "}`}
                              >
                                Details
                              </p>
                              <IoIosArrowForward
                                className={`mt-[1px] ${
                                  t.status == 20 ? `text-black` : "text-black"
                                }`}
                                size={13}
                              />
                            </div>
                          </div>
                        </div>
                        <Modal
                          className="flex justify-center items-center h-full relative z-50"
                          isOpen={sectaskdeletemodal}
                          onRequestClose={closeSectionTaskDeleteModal}
                        >
                          <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                            <div className="w-[100%] flex justify-between items-center ">
                              <p className=" text-[20px] text-rose font-poppins">
                                <p className="font-poppins">Are you Sure?</p>
                                You want to delete the Task!
                              </p>
                            </div>
                            <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                              <button
                                onClick={() => {
                                  DeleteTask(t.project_id, t.section_id, t.id);

                                  closeSectionTaskDeleteModal();
                                }}
                                type="submit"
                                className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                              >
                                Yes
                              </button>
                              <button
                                onClick={() => closeSectionTaskDeleteModal()}
                                type="submit"
                                className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                              >
                                No
                              </button>
                            </div>
                          </div>
                        </Modal>
                        <div className="w-[13.33%] flex items-center h-8 border-x cursor-pointer">
                          <div className=" h-auto flex overflow-x-scroll max-w-[150px] px-1 space-x-1">
                            {t.TaskUsers &&
                              t.TaskUsers.map((Taskusers) => (
                                <div
                                  key={Taskusers}
                                  className="bg-rose text-white rounded-full w-6 h-6 "
                                >
                                  <div className="bg-rose text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                                    {
                                      Taskusers.myuser.myprofile.fullname.split(
                                        ""
                                      )[0]
                                    }

                                    {
                                      Taskusers.myuser.myprofile.fullname.split(
                                        ""
                                      )[1]
                                    }
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div className="w-[13.33%] h-8 text-[13px] flex items-center border-r px-2">
                          {t.due_date && moment(t.due_date).format("MMM Do")}
                        </div>
                        <div className="w-[13.33%] h-8 text-[13px] flex items-center px-2 text-black">
                          {t.priority == 10 && (
                            <div className="bg-yellow-300 px-2 rounded-lg">
                              Low
                            </div>
                          )}
                          {t.priority == 20 && (
                            <div className="bg-green-400 px-2 rounded-lg">
                              Medium
                            </div>
                          )}
                          {t.priority == 30 && (
                            <div className="bg-red-500 text-white pb-[2px] px-2 rounded-lg">
                              High
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        {/* Subtask */}

                        {opensubtask.includes(`${index}-${s}`) &&
                          t.SubTasks &&
                          t.SubTasks.map((s, ind) => (
                            <div
                              onClick={() => {
                                setselectedsubTaskId(s.id);
                              }}
                              key={`section-${s.id}`}
                              id="hover5"
                              className={` text-gray-600 w-[100%] flex items-center justify-between  h-8 ${
                                modalIsOpen ||
                                modalIsOpen1 ||
                                modalIsOpen2 ||
                                delmodalIsOpen ||
                                clientmodal ||
                                projectusermodel ||
                                inviteModal ||
                                projectdeletemodal ||
                                setprojectdeletemodal ||
                                subtaskdeletemodal ||
                                sectaskdeletemodal ||
                                subtask1deletemodal ||
                                taskuserdeletemodal ||
                                subtaskuserdeletemodal ||
                                taskdeletemodal ||
                                sectiondeletemodal
                                  ? ``
                                  : `relative z-10`
                              } `}
                            >
                              <div
                                className={`${
                                  s.status == 20 ? `bg-green-50` : "bg-white"
                                }  w-[60.2%] flex flex-row items-center justify-between border-t hover:border h-8 pl-[63px] border-r hover:border-black`}
                              >
                                <div className="mr-2 flex items-center  w-[59%]">
                                  {s.status == 20 ? (
                                    <BsFillCheckCircleFill
                                      onClick={() => {
                                        completedsubtask(s),
                                          setAccordionsubTask(s);
                                      }}
                                      className={`${
                                        // s.status == 20
                                        //   ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                        //   :
                                        `hover:text-green-800 text-green-700 cursor-pointer mr-2`
                                      }`}
                                    />
                                  ) : (
                                    <BsCheckCircle
                                      onClick={() => {
                                        completedsubtask(s),
                                          setAccordionsubTask(s);
                                      }}
                                      className={`${
                                        s.status == 20
                                          ? `text-green-600 hover:text-secondary cursor-pointer mr-2`
                                          : `hover:text-green-600 cursor-pointer mr-2`
                                      }`}
                                    />
                                  )}
                                  {datas.user_status == 10 ? (
                                    <form
                                      className="w-[100%]"
                                      onSubmit={(e) =>
                                        EditsubTaskName(e, s, ind)
                                      }
                                    >
                                      <input
                                        className={`px-1 w-[100%] hover:border-secondary border ${
                                          s.status == 20
                                            ? `bg-green-50  text-green-600`
                                            : "bg-white text-secondary"
                                        }`}
                                        // onClick={() => {
                                        //   setDetails(2);
                                        //   setAccordionsubTask(s);
                                        // }}
                                        id="inputID3"
                                        ref={(tl) =>
                                          (subTaskRef.current[ind] = tl)
                                        }
                                        value={
                                          s.id === selectedsubTaskId
                                            ? subTaskName
                                            : s.name
                                        }
                                        onChange={(e) => {
                                          if (s.id === selectedsubTaskId) {
                                            setsubTaskName(e.target.value);
                                          }
                                        }}
                                        onBlur={(e) => {
                                          subTaskName &&
                                            EditsubTaskName(e, s, ind),
                                            setrefresh(x),
                                            settaskRefresh(x);
                                        }}
                                        key={`task-${s.id}-input`}
                                        placeholder={s.name}
                                      />
                                    </form>
                                  ) : (
                                    <div>{s.name}</div>
                                  )}
                                </div>
                                <div
                                  id="show5"
                                  className="hidden items-center h-8 justify-between px-4 cursor-pointer w-[30%]"
                                  onClick={() => {
                                    setAccordionsubTask(s);
                                  }}
                                >
                                  {datas.user_status == 10 ? (
                                    <div
                                      onClick={() =>
                                        setsubtaskdeletemodal(true)
                                      }
                                      className="rounded-full h-6 w-6 hover:bg-slate-100 flex items-center justify-center"
                                    >
                                      <MdDeleteForever
                                        size={17}
                                        color={"red"}
                                      />
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                  <div
                                    onClick={() => setDetails(2)}
                                    className="flex items-center"
                                  >
                                    <p
                                      className={`text-xs  
                                      ${
                                        s.status == 20
                                          ? `text-black`
                                          : "text-black"
                                      }
                    ${details && " "}`}
                                    >
                                      Details
                                    </p>
                                    <IoIosArrowForward
                                      className={`mt-[1px] ${
                                        s.status == 20
                                          ? `text-black`
                                          : "text-black"
                                      }`}
                                      size={13}
                                    />
                                  </div>
                                </div>
                              </div>
                              <Modal
                                className="flex justify-center items-center h-full relative z-50"
                                isOpen={subtaskdeletemodal}
                                onRequestClose={closeSubTaskDeleteModal}
                              >
                                <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                                  <div className="w-[100%] flex justify-between items-center ">
                                    <p className=" text-[20px] text-rose font-poppins">
                                      <p className="font-poppins">
                                        Are you Sure?
                                      </p>
                                      You want to delete the Subtask!
                                    </p>
                                  </div>
                                  <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                                    <button
                                      onClick={() => {
                                        DeletesubTask(
                                          t.project_id,
                                          t.section_id,
                                          s.task_id,
                                          s.id
                                        );
                                      }}
                                      type="submit"
                                      className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                    >
                                      Yes
                                    </button>
                                    <button
                                      onClick={() =>
                                        setsubtaskdeletemodal(false)
                                      }
                                      type="submit"
                                      className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                    >
                                      No
                                    </button>
                                  </div>
                                </div>
                              </Modal>
                              <div className="w-[13.33%] h-8 border-t border-r flex items-center pt-1">
                                <div className=" h-auto flex overflow-x-scroll max-w-[95px] px-1 space-x-1">
                                  {s.subTaskUsers &&
                                    s.subTaskUsers.map((Taskusers) => (
                                      <div
                                        key={Taskusers}
                                        className="bg-rose text-white rounded-full w-6 h-6 "
                                      >
                                        <div className="bg-rose text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                                          <p>
                                            {
                                              Taskusers.myuser.myprofile.fullname.split(
                                                ""
                                              )[0]
                                            }
                                          </p>

                                          <p>
                                            {
                                              Taskusers.myuser.myprofile.fullname.split(
                                                ""
                                              )[1]
                                            }
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                              <div className="w-[13.33%] h-8 text-[13px] border-t border-r flex items-center">
                                {s.due_date &&
                                  moment(s.due_date).format("MMM Do")}
                              </div>
                              <div className="w-[13.33%] h-8 text-[13px] border-t border-r flex items-center justify-center"></div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {/*               */}
          </div>
        </div>
      ))}
      {datas.user_status == 10 && (
        <button
          onClick={() => addSections()}
          className="text-[12px] font-semibold space-x-1 h-7 flex items-center justify-between hover:bg-slate-200 border rounded-lg  px-2 ml-5 my-3"
        >
          <GoPlus className=" text-secondary" size={14} />
          <p>Add Section</p>
        </button>
      )}
      {details == 1 && task.id && (
        <motion.div
          animate={{ x: [400, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className={`border ${
            taskuserdeletemodal ? `z-0` : "z-50"
          } absolute bg-white bottom-5 h-[86.5%] right-0 -mt-[1px] w-[45%]`}
        >
          <SideDetail
            sectionArr={sectionArr}
            setDetails={setDetails}
            task={task}
            settaskRefresh={settaskRefresh}
            taskRefresh={taskRefresh}
            refresh={refresh}
            setrefresh={setrefresh}
            taskName={taskName}
            settaskName={settaskName}
            setName={setName}
            dueDate={dueDate}
            setdueDate={setdueDate}
            secId={secId}
            setsubTaskName={setsubTaskName}
            subTaskName={subTaskName}
            setTask={setTask}
            setStatus={setStatus}
            status={status}
            setNowStatus={setNowStatus}
            NowStatus={NowStatus}
            settask_name={settask_name}
            task_name={task_name}
            newTaskrefresh={newTaskrefresh}
            setnewTaskrefresh={setnewTaskrefresh}
            AccordionsubTask={AccordionsubTask}
            taskuserdeletemodal={taskuserdeletemodal}
            settaskuserdeletemodal={settaskuserdeletemodal}
          />
        </motion.div>
      )}
      {details == 1 && (
        <div
          tabIndex={1}
          onClick={() => setDetails(0)}
          className="fixed z-0 top-0 left-0 bottom-0 right-0"
        />
      )}
      {details == 2 && (
        <div
          tabIndex={1}
          onClick={() => setDetails(0)}
          className="fixed  z-0 top-0 left-0 bottom-0 right-0"
        />
      )}
      {details == 2 && (
        <motion.div
          animate={{ x: [400, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className={`border ${
            subtaskuserdeletemodal ? `z-0` : "z-50"
          } absolute bg-white bottom-5 h-[86.5%] right-0 -mt-[1px] w-[45%]`}
        >
          <SideDetail2
            setDetails={setDetails}
            task={task}
            settaskRefresh={settaskRefresh}
            taskRefresh={taskRefresh}
            refresh={refresh}
            setrefresh={setrefresh}
            taskName={taskName}
            settaskName={settaskName}
            setName={setName}
            dueDate={dueDate}
            setdueDate={setdueDate}
            secId={secId}
            setsubTaskName={setsubTaskName}
            subTaskName={subTaskName}
            setTask={setTask}
            setStatus={setStatus}
            status={status}
            setNowStatus2={setNowStatus2}
            NowStatus2={NowStatus2}
            settask_name={settask_name}
            task_name={task_name}
            newTaskrefresh={newTaskrefresh}
            setnewTaskrefresh={setnewTaskrefresh}
            AccordionsubTask={AccordionsubTask}
            subtaskuserdeletemodal={subtaskuserdeletemodal}
            setsubtaskuserdeletemodal={setsubtaskuserdeletemodal}
          />
        </motion.div>
      )}
    </div>
  );
};
export default Accordion;
