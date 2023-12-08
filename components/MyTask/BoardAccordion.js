
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { MdDeleteOutline, MdDeleteForever } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../API/Api";
import Modal from "react-modal";
import BoardSideDetails from "./BoardSideDetails";
import BoardSideDetails2 from "./BoardSideDetails2";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SideDetail from "./SideDetail";
import SideDetail2 from "./SideDetail2";
import { BsThreeDotsVertical } from "react-icons/bs";

const BoardAccordion = ({
  sectionArr,
  user,
  setrefresh,
  refresh,
  details,
  setDetails,
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
}) => {
  const datas = useSelector((x) => x);
  const dispatch = useDispatch();

  const [deletetaskmsg, setdeletetaskmsg] = useState(false);
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);
  const [Refresh, setRefresh] = useState("");
  const [AccordionsubTask, setAccordionsubTask] = useState([]);
  const [BoardTask, setBoardTask] = useState("");
  const [boardData, setBoardData] = useState({});
  const [createBoard, setCreateBoard] = useState("");
  const [editBoard, setEditBoard] = useState("");
  const [BoardTaskDetails, setBoardTaskDetails] = useState([]);
  const [selectedBoardId, setselectedBoardId] = useState();
  const [showsubtask, setShowsubtask] = useState();
  const [editTask, setEditTask] = useState("");
  const [taskRefresh, settaskRefresh] = useState();
  const [selectedTaskId, setselectedTaskId] = useState();
  const [selectedsubTaskId, setselectedsubTaskId] = useState("");
  const [delmodalIsOpen2, setdelmodalIsOpen2] = useState(false);
  const [task_name, settask_name] = useState(BoardTask.name);
  const [NowStatus, setNowStatus] = useState(BoardTask.status);
  const [NowStatus2, setNowStatus2] = useState(BoardTask.status);
  const [subTaskName, setsubTaskName] = useState("");
  const [opensubtask1, setOpensubtask1] = useState([]);
  const [taskcreatemsg, settaskcreatemsg] = useState(false);
  const [firstTask, setfirstTask] = useState([]);
  const [updatetaskboard, setupdatetaskboard] = useState();
  const [dragtaskid, setdragtaskid] = useState();
  const [state, setState] = useState(boardData);
  const [taskuserdeletemodal, settaskuserdeletemodal] = useState(false);
  const [subtaskuserdeletemodal, setsubtaskuserdeletemodal] = useState(false);
  const [task, setTask] = useState([]);
  const [taskdeletemodal, settaskdeletemodal] = useState(false);
  const [deletesubtaskmsg, setdeletesubtaskmsg] = useState(false);
  const [subtask1deletemodal, setsubtask1deletemodal] = useState(false);
  // const [dataID, setDataID] = useState(localStorage.getItem("myData"));
  const [sectionmsg, setsectionmsg] = useState(false);
  const [deletesectionmsg, setdeletesectionmsg] = useState(false);
  const reduxdata = useSelector((x) => x);
  const subTaskRef = useRef([]);
  const inputRef = useRef();
  const input1Ref = useRef();

  // console.log(sectionArr, "section in board");

  //Create Board

  useEffect(() => {
    let timeoutId;

    if (deletetaskmsg) {
      timeoutId = setTimeout(() => {
        setdeletetaskmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [deletetaskmsg]);

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

    if (taskcreatemsg) {
      timeoutId = setTimeout(() => {
        settaskcreatemsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [taskcreatemsg]);

  const addSections = () => {
    Api.fetchPost(
      { project_id: datas.Project_id, user_id: datas.user_id },
      "/createsection"
    )
      .then((x) => {
        Api.fetchPost(
          {
            message: `${datas.User_name} created section "${x.data.name}"  `,
            proect_id: datas.Project_id,
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
        setrefresh(x);
        setsectionmsg(true);
      })
      .catch((err) => console.log(err));
    // setSectionArr([...sectionArr, addSection]);
  };
  useEffect(
    (index) => {
      if (input) {
        inputRef.current.focus();
      }
    },
    [input]
  );

  const CreateBoard = (e) => {
    e.preventDefault();
    Api.fetchPost(
      {
        name: createBoard,
      },

      `/projects/${datas.Project_id}/boards`
    ).then((x) => {
      input1Ref.current.value = "";
      setInput1(false), setrefresh(x);
      console.log(x);
    });
  };
  // Get Board
  // useEffect(() => {
  //   Api.fetchGet(`/projects/${datas.Project_id}/boards`).then((x) => {
  //     setBoardData(x.data[0].boards);
  //     // console.log(x);
  //   });
  // }, [Refresh, datas.Project_id, datas.overallRefresh]);

  // Update Board
  const EditBoardNAme = (e, s) => {
    e.preventDefault();
    if (editBoard != null && editBoard != "") {
      Api.Update({ name: editBoard }, `/sectionName/${s.id}`)
        .then((x) => {
          Api.fetchPost(
            {
              message: `${datas.User_name} renamed section "${s.name}" to "${x.data.name}"`,
              proect_id: datas.Project_id,
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
          setrefresh(x);
        })
        .catch((err) => console.log(err));
    }
  };

  //Delete Board

  const deleteBoard = (id) => {
    Api.Delete(`/projects/${datas.Project_id}/sections/${id}`).then((x) => {
      console.log(x);
      setrefresh(x);
      Api.fetchPost(
        {
          message: `${datas.User_name} deleted section "${x.data.section.name}"`,

          proect_id: datas.Project_id,
        },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
          setdeletesectionmsg(true);
        })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    let timeoutId;

    if (deletesubtaskmsg) {
      timeoutId = setTimeout(() => {
        setdeletesubtaskmsg(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [deletesubtaskmsg]);

  function closeModal2() {
    setdelmodalIsOpen2(false);
  }

  function closeTaskDeleteModal() {
    settaskdeletemodal(false);
  }

  function close1TaskDeleteModal() {
    setsubtask1deletemodal(false);
  }

  //Create BoardTask

  const CreateBoardTask = (e, id) => {
    e.preventDefault();
    Api.fetchPost(
      {
        name: BoardTask,
        status: 10,
      },

      `/projects/${datas.Project_id}/boards/${id}/boardstasks`
    ).then((x) => {
      // inputRef.current.value = "";
      setrefresh(x);
      setInput(false);
      console.log(x);
    });
  };
  const toggleAccordion5 = (index) => {
    if (opensubtask1.includes(index)) {
      setOpensubtask1(opensubtask1.filter((i) => i !== index));
    } else {
      setOpensubtask1([...opensubtask1, index]);
    }
  };
  // Update Board Task
  const EditTask = (e, id) => {
    e.preventDefault();
    if (task_name != null && task_name != "") {
      Api.Update({ name: task_name }, `/editName/${id}`)
        .then((x) => {
          setrefresh(x);
        })
        .catch((err) => console.log(err));
    }
  };

  // Delete Board Task
  const BoardTaskDelete = (id) => {
    Api.Delete(`/boardtasks/${id}`)
      .then((x) => {
        console.log(x);
        setrefresh(x);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const EditBoardSubTaskName = (e, s, index) => {
    e.preventDefault();
    Api.Update({ name: subTaskName }, `/editTaskName/${s.id}`).then((x) => {
      setsubTaskName(null);
      // console.log(object)
      Api.fetchPost(
        {
          message: `${datas.User_name} renamed subtask "${s.name}" to "${x.data.name}"`,
          proect_id: datas.Project_id,
        },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          console.log(t);
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
        })
        .catch((err) => console.log(err));
      subTaskRef.current[s.id].blur();
      setrefresh(x);
    });
  };

  // const DeletesubTask = (id) => {
  //   Api.Delete(`/boardsubtask/${id}/delete`)
  //     .then((x) => {
  //       console.log(x);
  //       setrefresh(x);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  const DeletesubTask = (p, s, t, su) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}/Subtask/${su}`).then(
      (x) => {
        console.log(x), setDetails(0);
        setnewTaskrefresh(x);
        Api.fetchPost(
          {
            message: `${datas.User_name} deleted subtask 
            "${x.data.name}"
            `,
            proect_id: datas.Project_id,
          },
          `/createnotification/team_id/${dataID}`
        ).then((t) => {
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
          setdeletesubtaskmsg(true);
        });
      }
    );
  };

  function closeModal2() {
    setdelmodalIsOpen2(false);
  }

  const handleClickOutside = () => {
    setInput(false);
  };

  const handleClickOutside1 = () => {
    setInput1(false);
  };
  const handleButtonClick1 = () => {
    setInput1(true);
  };

  // useEffect(() => {
  //   if (input) {
  //     inputRef.current.focus();
  //   }
  // }, [input]);

  useEffect(() => {
    if (input1) {
      input1Ref.current.focus();
    }
  }, [input1]);

  useEffect(() => {
    Api.fetchGet(`/projects/${datas.Project_id}/tasks`).then((x) => {
      if (x.status == 200) {
        setfirstTask(x.data.task);
      }
    });
  }, [refresh, datas.Project_id]);

  // function setBoardId(id) {
  //   console.log("data");
  //   Api.Update({ id: id }, `/boardtaskIdUpdate/${id}/board_id`).then((x) => {
  //     setrefresh(x);
  //   });
  // }
  // console.log(boardData);
  // const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  //   const newTaskIds = Array.from(sourceCol.taskIds);
  //   const [removed] = newTaskIds.splice(startIndex, 1);
  //   newTaskIds.splice(endIndex, 0, removed);

  //   const newColumn ={
  //     ...sourceCol,
  //     taskIds:newTaskIds,
  //   }
  //   return newColumn;
  // };

  const DragEnd = async (result) => {
    const { destination, source } = result;
    // console.log("ID HAI YEH ->", result.draggableId);
    //unknown destination
    if (!destination) return;

    //drags and drops at same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    //drags and drops at different position but in same Board

    // const taskId =board
    {
      if (
        destination.droppableId != source.droppableId &&
        reduxdata.user_status == 10
      ) {
        await Api.Update(
          { destination: destination.droppableId },
          `/boardtaskIdUpdate/${result?.draggableId}/board_id`
        ).then((x) => {
          console.log("working");
          setrefresh(x);
        });
      }
    }

    // const sourceCol = state[source.droppableId];
    // const destinationCol = state[destination.droppableId];

    // if (sourceCol === destinationCol) {
    //   const newColumn = reorderColumnList(
    //     sourceCol,
    //     source.index,
    //     destination.index
    //   );
    //   const newState = {
    //     ...state,
    //     columns: {
    //       ...state,
    //       [newColumn.id]: newColumn,
    //     },
    //   };
    //   setState(newState);
    // }
    //drags and drops to another board
  };

  const addTask = (SectionId, e) => {
    e.preventDefault();
    Api.fetchPost(
      { name: BoardTask, status: 10 },
      `/projects/${datas.Project_id}/sections/${SectionId}/tasks`
    ).then((x) => {
      Api.fetchPost(
        {
          message: `${datas.User_name} created this task "${x.data.task.name}"`,
          proect_id: datas.Project_id,
        },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
          setInput(0);
          settaskcreatemsg(true);
        })
        .catch((err) => console.log(err));
      setrefresh(x);
    });
  };

  // const datas = useSelector((x) => x);

  const DeleteTask = (p, s, t) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}`).then((x) => {
      setDetails(0);
      setnewTaskrefresh(x);
      Api.fetchPost(
        {
          message: `${datas.User_name} deleted task "${x.data.task.name}"`,
          proect_id: datas.Project_id,
        },
        `/createnotification/team_id/${dataID}`
      )
        .then((t) => {
          dispatch({
            type: "overallRefresh",
            payload: t,
          });
          setdeletetaskmsg(true);
        })
        .catch((err) => console.log(err));
    });
  };
  const [editactive, setEditactive] = useState()
  const setEditactiveForIndex = (index) => {
    setEditactive((prev) => (prev === index ? null : index));
  };
  return (
    <DragDropContext onDragEnd={DragEnd}>
      <div className=" h-full overflow-hidden">
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

        {deletetaskmsg && (
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
        )}
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
        <div
          id="scrollbar"
          className="overflow-x-scroll h-full min-w-[400px] max-w-[100%] relative right-0  bottom-0 flex space-x-3 px-2"
        >
          {sectionArr &&
            sectionArr.length > 0 &&
            sectionArr.map((b, index) => (
              <div
                key={index}
                id="shadow1"
                className="  border rounded-[10px] shadow-lg mt-4"
              >
                <div className="w-[300px] h-full">
                  <div className="w-[100%] h-[40px] flex px-[8px] justify-between  items-center">
                    {reduxdata.user_status == 10 ? (
                      <form
                        className="w-[200px]"
                        onSubmit={(e) => EditBoardNAme(e, b)}
                      >
                        <input
                          onClick={() => {
                            setEditBoard(b.name);
                            setselectedBoardId(b.id);
                          }}
                          id="inputID4"
                          className="text-[20px] text-[#2F3663] font-bold px-2 w-[200px]"
                          placeholder={b.name}
                          value={b.id === selectedBoardId ? editBoard : b.name}
                          onChange={(e) => {
                            if (b.id === selectedBoardId) {
                              setEditBoard(e.target.value);
                            }
                          }}
                          onBlur={(e) => EditBoardNAme(e, b)}
                        />
                      </form>
                    ) : (
                      <div className="text-[18px] font-semibold px-2 w-[200px]">
                        {b.name}
                      </div>
                    )}

                    <div className="flex relative">
                      {/* {reduxdata.user_status == 10 && (
                        <div
                          className="cursor-pointer  hover:bg-slate-200 w-6 h-6 flex justify-center items-center pb-1 rounded-full"
                          onClick={() => setInput(b.id)}
                        >
                          <p className="text-[24px] font-semibold">+</p>
                        </div>
                      )} */}
                      {/* {reduxdata.user_status == 10 && (
                        <div
                          className="hover:bg-slate-200 cursor-pointer w-6 h-6 flex text-red-600 items-center justify-center rounded-full "
                          onClick={() => {
                            setselectedBoardId(b.id);
                            setdelmodalIsOpen2(true);
                          }}
                        >
                          <MdDeleteOutline />
                        </div>
                      )} */}
                      <button onClick={() => setEditactiveForIndex(index)} className="">
                        <BsThreeDotsVertical fontSize={20} />
                      </button>
                      {editactive == index && (
                        <div className='absolute top-4 right-3 font-semibold space-y-2 py-3 rounded-lg shadow-lg text-[#2D2D2D] px-3 bg-white'>
                          <div
                            className='border py-1 rounded-lg'>
                            <button className='px-6 py-1 border-l bg-white text-[#586AEA] border-[#586AEA]'>
                              <p>Edit</p>
                            </button>
                          </div>
                          <div
                            onClick={() => {
                              setselectedBoardId(b.id);
                              setdelmodalIsOpen2(true);
                            }}
                            className='border py-1 rounded-lg'>
                            <button className='px-6 py-1 border-l bg-white text-[#E04C4C] border-[#E04C4C]'>Delete</button>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                  {reduxdata.user_status == 10 && (
                    <div className="p-4">
                      <button
                        className="cursor-pointer text-[#586AEA] w-[100%] text-[28px] font-semibold hover:bg-slate-200 bg-[#F7F8FF] rounded-lg"
                        onClick={() => setInput(b.id)}
                      >+
                      </button>
                    </div>
                  )}
                  {input == b.id && (
                    <div className="w-[100%] my-2 px-2 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <form onSubmit={(e) => addTask(b.id, e)}>
                            <input
                              onBlur={() => setInput(0)}
                              onChange={(e) => {
                                setBoardTask(e.target.value);
                              }}
                              placeholder={"Write Task Name"}
                              ref={inputRef}
                              className="w-[198px] h-8 border border-secondary rounded-md px-2"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* {input == b.id && (
                    <div
                      onClick={() => setInput(0)}
                      className="fixed top-0 right-0 left-0 bottom-0 z-10"
                    ></div>
                  )} */}
                  <div className="h-[92%] overflow-y-scroll px-2">
                    <Droppable droppableId={`${b.id}`}>
                      {(droppableProvided, droppableSnapshot) => (
                        <div
                          className="h-full w-[100%]"
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          {b.tasks &&
                            b.tasks.length > 0 &&
                            b.tasks.map((t, index) => (
                              <Draggable
                                key={t.id}
                                draggableId={`${t.id}`}
                                index={index}
                              >
                                {(draggableProvided, draggableSnapshot) => (
                                  <div
                                    onClick={() => console.log(t.status)}
                                    draggable // Set draggable attribute to true
                                    onTouchStart={(e) => {
                                      // console.log(t.id, "task id");
                                      setdragtaskid(t.id);
                                      // e.dataTransfer.setData("text/plain", ""); // Required for dragging in some browsers
                                    }}
                                    className={`$
                                    w-[100%] border shadow-lg flex flex-col p-3 rounded-lg transition`}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                  >
                                    <div className="w-[100%]">
                                      {/* <form
                                        className="w-[200px]"
                                        onSubmit={(e) => EditTask(e, t.id)}
                                      >
                                        <input
                                          onClick={() => {
                                            setEditTask(t.name),
                                              setselectedTaskId(t.id);
                                          }}
                                          onBlur={(e) => EditTask(e, t.id)}
                                          id="inputID4"
                                          className="text-[16px] px-2 w-[200px]"
                                          placeholder={t.name}
                                          value={
                                            t.id == selectedTaskId
                                              ? task_name
                                              : t.name
                                          }
                                          onChange={(e) => {
                                            if (t.id === selectedTaskId) {
                                              settask_name(e.target.value);
                                            }
                                          }}
                                        />
                                      </form> */}
                                      <div className='flex space-x-4 py-1 px-1'>
                                        <div className='border bg-[#F4F4F5] rounded-lg'>
                                          <button className='px-8 py-1 text-[#8C8C8C]'>
                                            {/* <p className='px-2 py-1 hidden hover:block'><CiEdit /></p> */}
                                            <p>Epic</p>
                                          </button>
                                        </div>
                                        <div className='border rounded-lg bg-[#E7E9FE]'>
                                          <button className='px-2 py-1 text-[#586AEA]'>Zoolu Sprints</button>
                                        </div>
                                      </div>
                                      <div className="text-[#586AEA] py-2 flex justify-between items-center text-[20px] font-semibold px-1">
                                        <div>{t.name}</div>
                                        <div><BsThreeDotsVertical fontSize={20} color="black" /></div>
                                        
                                      </div>
                                      <div className="w-[100%] h-0.5 bg-gray-200"></div>
                                      <div className="mt-4 flex justify-between items-center">
                                        <div><img src="/lalala.png" alt="" width={30} className="rounded-full" /></div>
                                        <div className="text-[14px] text-[#838A91]">20 Nov - 04 Dec 2023</div>
                                      </div>








                                      {/* code of delete and edit and delete */}



                                      {/* <div className=" w-[60px] flex justify-between items-center py-[1px] h-[24px]">
                                        {reduxdata.user_status == 10 && (
                                          <div
                                            className="hover:bg-slate-200 cursor-pointer text-red-600 w-6 h-6 flex items-center justify-center rounded-full "
                                            onClick={() => {
                                              settaskdeletemodal(true);
                                            }}
                                          >
                                            <MdDeleteOutline />
                                          </div>
                                        )}
                                        <Modal
                                          className="flex justify-center items-center h-full relative z-50"
                                          isOpen={taskdeletemodal}
                                          onRequestClose={closeTaskDeleteModal}
                                        >
                                          <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                                            <div className="w-[100%] flex justify-between items-center ">
                                              <p className=" text-[20px] text-rose font-poppins">
                                                <p className="font-poppins">
                                                  Are you Sure?
                                                </p>
                                                You want to delete the Task!
                                              </p>
                                            </div>
                                            <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                                              <button
                                                onClick={() => {
                                                  DeleteTask(
                                                    t.project_id,
                                                    t.section_id,
                                                    t.id
                                                  ),
                                                    closeTaskDeleteModal();
                                                }}
                                                type="submit"
                                                className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                              >
                                                Yes
                                              </button>
                                              <button
                                                onClick={() =>
                                                  closeTaskDeleteModal()
                                                }
                                                type="submit"
                                                className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                              >
                                                No
                                              </button>
                                            </div>
                                          </div>
                                        </Modal>
                                        <div
                                          className="text-[18px] w-[50px] cursor-pointer flex justify-center items-center"
                                          onClick={() => {
                                            setDetails(1);
                                            setBoardTask(t);
                                          }}
                                        >
                                          <TbListDetails />
                                        </div>
                                      </div> */}
                                    </div>
                                    <div className=" px-2 flex justify-between">
                                      <div className="rounded-full  flex justify-center items-center pb-1 ">
                                        {/* <TbListDetails
                                          size={24}
                                          // onClick={() => setBoardId(t.id)}
                                        /> */}
                                        {/* <p>Za</p> */}
                                      </div>
                                      {t.SubTasks.length > 0 && (
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
                                      )}
                                    </div>
                                    {showsubtask == t.id && (
                                      <div className=" px-2 flex flex-col space-y-1">
                                        {t.SubTasks &&
                                          t.SubTasks.length > 0 &&
                                          t.SubTasks.map((s) => (
                                            <div
                                              key={s}
                                              className=""
                                              onClick={() => {
                                                setDetails(2);
                                                setAccordionsubTask(s);
                                              }}
                                            >
                                              {s.name}
                                            </div>
                                          ))}
                                      </div>
                                    )}

                                    {opensubtask1.includes(index) &&
                                      t.SubTasks &&
                                      t.SubTasks.map((s) => (
                                        <div
                                          onClick={() => {
                                            setselectedsubTaskId(s.id);
                                          }}
                                          key={`section-${s.id}`}
                                          id="hover5"
                                          className={`text-gray-600 w-[100%] flex flex-row items-center justify-between h-8 `}
                                        >
                                          <div
                                            className={` w-[100%] flex flex-row items-center justify-between h-8 ${s.status == 20
                                              ? `bg-green-50`
                                              : ""
                                              }  `}
                                          >
                                            <div className="mr-2 flex items-center px-2 w-[70%]">
                                              {/* <BsCheckCircle
                                  onClick={() => {
                                    // completedsubtask(s), 
                                    setAccordionsubTask(s);
                                  }}
                                  className={`${
                                    s.status == 20
                                      ? `text-green-400 hover:text-secondary cursor-pointer mr-2`
                                      : `hover:text-green-400 cursor-pointer mr-2`
                                  }`}
                                /> */}
                                              {reduxdata.user_status == 10 ? (
                                                <form
                                                  className="w-[100%]"
                                                  onSubmit={(e) => {
                                                    EditBoardSubTaskName(
                                                      e,
                                                      s,
                                                      index
                                                    ),
                                                      setAccordionsubTask(s);
                                                  }}
                                                >
                                                  <input
                                                    className={`px-1 w-[100%] hover:border-secondary border ${s.status == 20
                                                      ? `bg-green-50 text-green-400`
                                                      : "bg-white text-secondary"
                                                      }`}
                                                    id="inputID3"
                                                    ref={(tl) =>
                                                    (subTaskRef.current[
                                                      s.id
                                                    ] = tl)
                                                    }
                                                    value={
                                                      s.id === selectedsubTaskId
                                                        ? subTaskName
                                                        : s.name
                                                    }
                                                    onChange={(e) => {
                                                      if (
                                                        s.id ===
                                                        selectedsubTaskId
                                                      ) {
                                                        setsubTaskName(
                                                          e.target.value
                                                        );
                                                      }
                                                    }}
                                                    onBlur={(e) => {
                                                      subTaskName != null &&
                                                        EditBoardSubTaskName(
                                                          e,
                                                          s,
                                                          index
                                                        );
                                                      // ("x")
                                                      // settaskRefresh(x);
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
                                              className="hidden items-center h-8 justify-end cursor-pointer w-[30%]"
                                            >
                                              {reduxdata.user_status == 10 ? (
                                                <div
                                                  onClick={() =>
                                                    setsubtask1deletemodal(true)
                                                  }
                                                  className="rounded-full h-6 w-6 hover:bg-slate-200 flex items-center justify-center"
                                                >
                                                  <MdDeleteOutline
                                                    size={18}
                                                    color={"red"}
                                                  />
                                                </div>
                                              ) : (
                                                <div></div>
                                              )}
                                              <Modal
                                                className="flex justify-center items-center h-full relative z-50"
                                                isOpen={subtask1deletemodal}
                                                onRequestClose={
                                                  close1TaskDeleteModal
                                                }
                                              >
                                                <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
                                                  <div className="w-[100%] flex justify-between items-center ">
                                                    <p className=" text-[20px] text-rose font-poppins">
                                                      <p className="font-poppins">
                                                        Are you Sure?
                                                      </p>
                                                      You want to delete the
                                                      Subtask!
                                                    </p>
                                                  </div>
                                                  <div className="flex flex-row space-x-10 mt-10 text-[14px]">
                                                    <button
                                                      onClick={() => {
                                                        DeletesubTask(
                                                          s.project_id,
                                                          s.section_id,
                                                          s.task_id,
                                                          s.id
                                                        );
                                                        close1TaskDeleteModal();
                                                      }}
                                                      type="submit"
                                                      className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                                    >
                                                      Yes
                                                    </button>
                                                    <button
                                                      onClick={() =>
                                                        close1TaskDeleteModal()
                                                      }
                                                      type="submit"
                                                      className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
                                                    >
                                                      No
                                                    </button>
                                                  </div>
                                                </div>
                                              </Modal>
                                              <div className="flex items-center">
                                                <p
                                                  onClick={() => {
                                                    setDetails(2);
                                                    setAccordionsubTask(s);
                                                  }}
                                                  className={`text-xs text-primary  hover:bg-slate-200 rounded-full text-black p-1 ml-1
                                     ${details && " "}`}
                                                >
                                                  <IoIosArrowForward
                                                    className="text-black mt-[2px]"
                                                    size={13}
                                                  />
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div className="w-[15%] h-8 border-t border-x px-2 flex items-center justify-center pt-1">
                              <div className=" h-auto flex overflow-x-scroll max-w-[90%] px-1 space-x-1">
                                {s.subTaskUsers &&
                                  s.subTaskUsers.map((Taskusers) => (
                                    <div className="bg-primary text-white rounded-full w-6 h-6 ">
                                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
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
                            </div> */}
                                          {/*  <div className="w-[15%] h-8 text-[13px] flex items-center justify-center border-t">
                               {moment(s.due_date).format("MMM Do")} 
                            </div>*/}
                                        </div>
                                      ))}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          {droppableProvided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              </div>
            ))}
          <div className="mt-4">
            {reduxdata.user_status == 10 && (
              <div
                onClick={() => addSections()}
                className="cursor-pointer hover:bg-slate-50 h-[30px] w-[150px] px-2 my-3 flex justify-center items-center space-x-2 rounded-full mt-[8px] border"
              >
                <p className=" font-bold text-[23px] mb-1">+</p>
                <p className=" font-semibold">Add Section</p>
              </div>
            )}
            {input1 ? (
              <div className="w-[100%] ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <form onSubmit={(e) => CreateBoard(e)}>
                      <input
                        onChange={(e) => {
                          setCreateBoard(e.target.value);
                        }}
                        placeholder={"Write Board Name"}
                        ref={input1Ref}
                        className="w-[198px] h-7  border border-secondary rounded-md px-2"
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
                onClick={handleClickOutside1}
                className="fixed top-0 left-0 bottom-0 right-0"
              />
            )}
          </div>
        </div>

        <Modal
          className="flex justify-center items-center h-full relative z-50"
          isOpen={delmodalIsOpen2}
          onRequestClose={closeModal2}
        >
          <div className="h-[200px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex ">
            <div className="w-[100%] flex justify-between items-center ">
              <p className="font-bold text-[20px] text-primary ">
                <p>Are you Sure?</p>
                You want to delete this Section
              </p>
            </div>
            <div className="flex flex-row space-x-10 mt-10 text-[14px]">
              <button
                onClick={() => {
                  deleteBoard(selectedBoardId);
                  closeModal2();
                }}
                type="submit"
                className="w-[80px] mt-8 h-9 rounded-lg text-white font-semibold border border-primary"
              >
                Yes
              </button>
              <button
                onClick={() => closeModal2()}
                type="submit"
                className="w-[80px] mt-8 h-9 rounded-lg text-white font-semibold border border-primary"
              >
                No
              </button>
            </div>
          </div>
        </Modal>

        {details == 1 && (
          <motion.div
            animate={{ x: [400, 0] }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            id="shadow"
            className={`border ${taskuserdeletemodal ? `z-0` : "z-50"
              } absolute bg-white bottom-5 h-[86.5%] right-0 -mt-[1px] w-[45%]`}
          >
            <SideDetail
              setDetails={setDetails}
              task={BoardTask}
              refresh={refresh}
              setrefresh={setrefresh}
              // dueDate={dueDate}
              // setdueDate={setdueDate}
              // secId={secId}
              setsubTaskName={setsubTaskName}
              subTaskName={subTaskName}
              setTask={setBoardTask}
              // setStatus={setStatus}
              // status={status}
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

            {/* <BoardSideDetails
              // setrefresh={setrefresh}
              Refresh={Refresh}
              setDetails={setDetails}
              task={BoardTask}
              setrefresh={setrefresh}
              // taskName={taskName}
              // settaskName={settaskName}
              // setName={setName}
              // dueDate={dueDate}
              // setdueDate={setdueDate}
              // secId={secId}
              setsubTaskName={setsubTaskName}
              subTaskName={subTaskName}
              // setTask={setTask}
              // setStatus={setStatus}
              // status={status}
              setNowStatus={setNowStatus}
              NowStatus={NowStatus}
              settask_name={settask_name}
              task_name={task_name}
              // newTaskrefresh={newTaskrefresh}
              // setnewTaskrefresh={setnewTaskrefresh}
              // AccordionsubTask={AccordionsubTask}
            /> */}
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
          <div
            id="shadow"
            className={`border ${subtaskuserdeletemodal ? `z-0` : "z-50"
              } absolute bg-white bottom-5 h-[86.5%] right-0 -mt-[1px] w-[45%]`}
          >
            {/* <BoardSideDetails2
              setDetails={setDetails}
              task={BoardTask}
              // settaskRefresh={settaskRefresh}
              // taskRefresh={taskRefresh}
              Refresh={Refresh}
              setrefresh={setrefresh}
              // taskName={taskName}
              // settaskName={settaskName}
              // setName={setName}
              // dueDate={dueDate}
              // setdueDate={setdueDate}
              // secId={secId}

              setsubTaskName={setsubTaskName}
              subTaskName={subTaskName}
              // setTask={setTask}
              // setStatus={setStatus}
              // status={status}
              setNowStatus2={setNowStatus2}
              NowStatus2={NowStatus2}
              settask_name={settask_name}
              task_name={task_name}
              newTaskrefresh={newTaskrefresh}
              setnewTaskrefresh={setnewTaskrefresh}
              AccordionsubTask={AccordionsubTask}
              subtaskuserdeletemodal={subtaskuserdeletemodal}
              setsubtaskuserdeletemodal={setsubtaskuserdeletemodal}
            /> */}
            <SideDetail2
              setDetails={setDetails}
              task={task}
              refresh={refresh}
              setrefresh={setrefresh}
              setsubTaskName={setsubTaskName}
              subTaskName={subTaskName}
              setTask={setTask}
              setNowStatus2={setNowStatus2}
              NowStatus2={NowStatus2}
              settask_name={settask_name}
              task_name={task_name}
              newTaskrefresh={newTaskrefresh}
              setnewTaskrefresh={setnewTaskrefresh}
              AccordionsubTask={AccordionsubTask}
              subtaskuserdeletemodal={subtaskuserdeletemodal}
              setsubtaskuserdeletemodal={setsubtaskuserdeletemodal}
              settaskRefresh={settaskRefresh}
            />
          </div>
        )}
      </div>
    </DragDropContext>
  );
};
export default BoardAccordion;
