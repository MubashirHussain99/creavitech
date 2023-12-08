import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { BsFillBellFill, BsCheckCircle } from "react-icons/bs";
import Api from "../../API/Api";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { baseUrl } from "../../Constants/BaseURL";
import { Link } from "@mui/material";
import { MentionsInput, Mention } from "react-mentions";

export default function BoardDetails({
  task,
  setrefresh,
  settaskRefresh,
  taskRefresh,
  settaskName,
  taskName,
  Refresh,
  setDetails,
  secId,
  setTask,
  setStatus,
  status,
  settask_name,
  task_name,
  Subtask,
  // setsubTaskName,
  // subTaskName,
  newTaskrefresh,
  setnewTaskrefresh,
  AccordionsubTask,
}) {
  const data = useSelector((x) => x);
  const dispatch = useDispatch();
  const [leave, setLeave] = useState(true);
  const [isInput, setInput] = useState(false);
  const [subTaskName, setsubTaskName] = useState("");
  const [AddingSubtaskInput, setAddingTaskName] = useState("");
  const [subtask, setsubtask] = useState({});
  const [taskuser, settaskuser] = useState({});
  const [description, setdescription] = useState();
  // const [description1, setdescription1] = useState(task.desc||"Type your Description");
  //   const [duedate, setduedate] = useState(task.due_date);
  const [dateChange, setdateChange] = useState(false);
  // const [taskName, settaskName] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedsubTaskId, setselectedsubTaskId] = useState("");
  const [comment, setcomment] = useState("");
  const [attachment, setAttachment] = useState("");
  const [tags, setTags] = useState("");
  const [mess, setmess] = useState();
  const [getComment, setgetComment] = useState({});
  const [getCommentAttach, setgetCommentAttach] = useState({});
  const [getTags, setgetTags] = useState({});
  const [assigneeInput, setAssigneeInput] = useState(false);
  const [assignee, setAssignee] = useState();
  const [assigneeMap, setAssigneeMap] = useState();
  const [reffresh, setreffresh] = useState();
  const [message, setmessage] = useState();
  const [commentmessage, setcommentmessage] = useState();
  const [tagsmessage, settagsmessage] = useState();
  const [duedate, setduedate] = useState(task.due_date);
  // console.log(task, "===checking");
  // console.log(AccordionsubTask, "===AccordionsubTask");
  const assignRef = useRef();
  const blurName = useRef();
  const refComment = useRef();
  const [inputs, setInputs] = useState({
    message: "",
    message_type: 0,
    attachment: "",
  });
  // console.log(assigneeMap)
  const checkIfImage = (filename) => {
    const fileExtension = filename.split(".").pop().toLowerCase();
    const imageExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "tiff",
      "svg",
    ];
    return imageExtensions.includes(fileExtension);
  };

  const mentionData = [
    // Define your mention suggestions here
    { id: 1, display: "John Doe" },
    { id: 2, display: "Jane Smith" },
    // ...
  ];

  const resetInputs = () => {
    setInputs({ message: "", attachment: null });
    const fileInput = document.getElementById("attachment");
    fileInput.type = "text";
    fileInput.type = "file";
  };

  const comments = (e) => {
    e.preventDefault();

    const hasMessage = inputs.message && inputs.message.trim() !== "";
    const hasAttachment = inputs.attachment !== null;

    if (!hasMessage && !hasAttachment) {
      setcommentmessage("Please enter a message or attach a file");
      return;
    }

    if (!hasMessage && hasAttachment) {
      // Only attachment is present, proceed with API call
      const updatedInputs = { attachment: inputs.attachment, message_type: 1 };

      Api.fetchPost(updatedInputs, `/boardtask/${task.id}/comments`)
        .then((x) => {
          setmess(x);
          resetInputs();
          refComment.current.scrollIntoView();
        })
        .catch((e) => {
          console.log(e.response);
        });
    }

    if (hasMessage && !hasAttachment) {
      // Only message is present, proceed with API call
      const updatedInputs = { message: inputs.message };

      Api.fetchPost(updatedInputs, `/boardtask/${task.id}/comments`)
        .then((x) => {
          setmess(x);
          resetInputs();
          refComment.current.scrollIntoView();
        })
        .catch((e) => {
          console.log(e.response);
        });
    }

    if (hasMessage && hasAttachment) {
      // Both message and attachment are present, proceed with API call
      const updatedInputs = { ...inputs };

      Api.fetchPost(updatedInputs, `/tasks/${task.id}/comments`)
        .then((x) => {
          setmess(x);
          resetInputs();
          refComment.current.scrollIntoView();
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  };

  const Tags = (e) => {
    e.preventDefault();
    if (!tags) {
      settagsmessage("Please enter a tag name");
    }
    Api.fetchPost({ name: tags }, `/tasks/${task.id}/createtag`)

      .then((x) => {
        console.log(x);
        setmess(x);
        setTags("");
        settagsmessage("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const assigneePost = (e, userid, subtask) => {
    e.preventDefault();
    // this.form.submit()
    Api.fetchPost({ user_id: userid, task_id: task.id }, `/boardtasks/users`)

      .then((x) => {
        console.log(x, "kia ara hay");
        task.TaskUsers.push(x.data.task[0]);
        setrefresh(x);
        dispatch({
          type: "overallRefresh",
          payload: x,
        });
      })
      .catch((err) => {
        console.log(err);
        // setmessage(err.response.data.message);
      });
  };

  // const assigneePostsubtask = (e, userid, subtask) => {
  //   e.preventDefault();
  //   // this.form.submit()
  //   Api.fetchPost(
  //     { user_id: userid, task_id: task.task_id, subtask_id: task.id },
  //     `/subtasks/users `
  //   )
  //     .then((x) => {
  //       // task.TaskUsers.push(x.data.task[0]);
  //       console.log(x, "kia ara hay");
  //       // setnewTaskrefresh(x);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // };
  const Assignee = () => {
    // this.form.submit()
    Api.fetchPost({ query: assignee, team_id: data.team }, `/getuserfortask`)

      .then((x) => {
        // console.log(x, "<======nishani");
        setAssigneeMap(x.data);
        dispatch({
          type: "overallRefresh",
          payload: x,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    Assignee();
  }, [assigneeMap, assignee]);

  useEffect(
    (e) => {
      Api.fetchGet(`/boardtask/${task.id}/comments`)
        .then((x) => {
          setgetComment(x.data.boardtaskcomments);
          setgetCommentAttach(x.data.boardtaskcomments);
          // console.log(x.data);
          refComment.current.focus();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [mess, reffresh]
  );
  // GET TAGS
  useEffect(
    (e) => {
      Api.fetchGet(`/tasks/${task.id}/showtag`)
        .then((x) => {
          setgetTags(x.data.tag);
          // console.log(x.data.tag);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [mess, reffresh]
  );
  // console.log(getComment)
  const EdittaskkName = (e) => {
    e.preventDefault();
    Api.Update(
      { due_date: duedate, name: task_name || task.name, desc: description },
      `/boardtasks/${task.id}`
    ).then((x) => {
      settask_name(null);
      setdescription(null);
      dispatch({
        type: "overallRefresh",
        payload: x,
      }),
        setreffresh(x);
      setrefresh(x);
      setdateChange(false);
    });
  };
  // useEffect(
  //   (e)=>{
  //     EdittaskkName(e)
  //   },[duedate]
  // )
  const inputRef = useRef();
  const handleButtonClick = () => {
    setInput(true);
  };
  const handleClickOutside = () => {
    setInput(false);
  };
  useEffect(() => {
    if (isInput) {
      inputRef.current.focus();
    }
  }, [isInput, taskRefresh]);
  // Api.fetchGet(`/task/:${task.id}/subtask`);
  useEffect(() => {
    Api.fetchGet(`/boardtask/${task.id}/subtask`).then((x) => {
      setsubtask(x.data.boardsubtask);
      // console.log(x.data.boardsubtask);
    });
  }, [task.id, Refresh]);
  useEffect(() => {
    Api.fetchGet(`/boardtask/${task.id}/boardtaskusers`).then((x) => {
      settaskuser(x.data.tasks);
      setrefresh(x);
      // console.log(x.data.tasks,'============data')
    });
  }, [task.id, Refresh, data.overallRefresh]);

  // useEffect(() => {
  //   Api.fetchGet(`/boardtask/${task.id}/boardtaskusers`).then((x) => {
  //     settaskuser(x.data.tasks);
  //     // console.log(x,'============data')
  //   });
  // }, [task.id, newTaskrefresh, taskRefresh]);

  // const subTask = (e) => {
  //   e.preventDefault();
  //   Api.fetchPost(
  //     {
  //       name: AddingSubtaskInput,
  //       project_id: data.Project_id,
  //     },
  //     `/task/${task.id}/subtask`
  //   ).then((x) => {
  //     // settaskRefresh(x, "Task");
  //     console.log(x, "<=== sub task");
  //   });
  // };
  // console.log(subTaskName)
  const EditBoardSubTaskName = (e, id) => {
    e.preventDefault();
    // blurName.current.blur();
    Api.Update({ name: subTaskName }, `/boardsubtask/${id}/updatename`).then(
      (x) => {
        setrefresh(x);
        setsubTaskName(null);
        console.log(subTaskName);
        dispatch({
          type: "overallRefresh",
          payload: x,
        });
      }
    );
  };
  // const EditmainsubTaskName = (e, id) => {
  //   e.preventDefault();
  //   blurName.current.blur();
  //   Api.Update({ name: subTaskName }, `/editTaskName/${id}`).then((x) => {
  //     setsubTaskName(null);
  //     // setrefresh(x);
  //     console.log(x);
  //     setrefresh(x);
  //   });
  // };

  // const DeleteTask = (p, s, t) => {
  //   Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}`).then((x) => {
  //     console.log(x), setDetails(0);
  //   });
  // };
  // const DeletesubTask = (p, s, t, su) => {
  //   Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}/Subtask/${su}`).then(
  //     (x) => {
  //       console.log(x), setDetails(0);
  //     }
  //   );
  // };
  const DeleteTags = (tg) => {
    Api.Delete(`/tag/${tg}`).then((x) => {
      console.log(x);
      setmess(x);
    });
  };

  useEffect(() => {
    setdescription(task.desc);
  }, [task]);
  useEffect(() => {
    if (assigneeInput) {
      assignRef.current.focus();
    }
  }, [assigneeInput]);

  const [listtag, setListTag] = useState("");
  useEffect(() => {
    let getvalue = listtag.split("@");
    // this.form.submit()
    Api.fetchPost({ query: getvalue, team_id: data.team }, `/getuserfortask`)

      .then((x) => {
        setrefresh(x);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [listtag]);
  // console.log(AccordionsubTask,"AcoSubtask")
  // console.log(task,"<====task")

  function handleKeyDown(e) {
    if (e.key === "@") {
      // useEffect(() => {
      //   Api.fetchGet(`/get/main/users'`).then((x) => {
      //     settaskuser(x);
      //   });
      // }, []);
      console.log("hello");
    }
  }

  return (
    <div onClick={() => setmessage(null)} className="h-[86%] -space-y-6">
      <div className="overflow-scroll h-[520px] px-[20px] text-secondary">
        <form
          className=""
          onClick={() => {
            setSelectedTaskId(task.id);
            settask_name(task.name);
          }}
          onSubmit={(e) => EdittaskkName(e, task.id)}
        >
          <textarea
            onClick={() => settask_name(task.name)}
            id="inputID"
            className="outline-none w-[100%] text-[25px] font-semibold text-black bg-transparent"
            value={task_name}
            placeholder={task.name}
            onChange={(e) => {
              settask_name(e.target.value);
            }}
            onBlur={(e) => {
              task_name && EdittaskkName(e, task.id);
            }}
            key={`task-${task.id}-input`}
          />
        </form>

        <div className=" w-full flex flex-col justify-between space-y-5 items-center  mt-2 text-[13px]">
          <div className="w-[100%] ">Description:</div>
          <div className="w-[100%] ">
            <textarea
              id="inputID3"
              // onClick={() => setdescription(task.desc)}
              className="w-[98%] min-h-[280px] max-h-[280px] rounded-lg px-2 border"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              placeholder={task.desc}
              onBlur={(e) => {
                EdittaskkName(e);
              }}
            />
          </div>
          <div className="w-[100%] space-x-12 font-normal flex">
            <div
              onClick={() => console.log(task)}
              className=" h-8 flex w-28 items-center"
            >
              Assignee:
            </div>
            {assigneeInput == false && (
              <div
                onClick={() => {
                  setAssigneeInput(true);
                  setmessage(null);
                }}
                className="space-x-2 h-8 flex  justify-between items-center hover:bg-slate-100 px-2 cursor-pointer rounded-lg"
              >
                <div className="w-8 h-8 rounded-full border border-dashed border-secondary flex justify-center items-center">
                  <AiOutlineUser size={19} />
                </div>
                <div>Add assignee</div>
              </div>
            )}
            {assigneeInput == true && (
              <div>
                <div className="flex space-x-1 items-center">
                  <input
                    ref={assignRef}
                    className="w-[105px] h-7"
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                  />
                  <ImCross
                    color="red"
                    size={12}
                    onClick={() => {
                      setAssigneeInput(false);
                    }}
                  />
                </div>
                <div
                  className={`${
                    assigneeMap == null && "hidden"
                  } max-h-[300px] absolute overflow-y-scroll px-1 flex flex-col bg-[#f0efef]`}
                >
                  {assignee &&
                    assigneeMap &&
                    assigneeMap.length > 0 &&
                    assigneeMap.map((a) => (
                      <div
                      key={e}
                        onClick={(e) => {
                          assigneePost(e, a.user_id),
                            setAssigneeInput(false),
                            setAssignee(null);
                        }}
                        className="text-[14px] h-6 px-2"
                      >
                        {a.UserInfo.email}
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div key={taskuser} className=" h-auto flex overflow-x-scroll max-w-[95px] px-1 space-x-1">
              {taskuser &&
                taskuser.length > 0 &&
                taskuser.map((Taskusers) => (
                  <div key={Taskusers} className="bg-primary text-white rounded-full w-6 h-6 ">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                      <p> {Taskusers.myuser.myprofile.fullname.split("")[0]}</p>

                      <p> {Taskusers.myuser.myprofile.fullname.split("")[1]}</p>
                    </div>
                  </div>
                ))}
            </div>
            {/* {message && <div className="text-red-500 w-[130px]">{message}</div>} */}
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div
              onClick={() => {
                console.log(task.id);
              }}
              className=" h-8 flex w-28 items-center "
            >
              Due date:
            </div>
            <div className="space-x-2 h-8 flex justify-between items-center hover:bg-slate-100 px-2 cursor-pointer rounded-lg ">
              <div className="w-8 h-8 rounded-full border border-dashed border-secondary flex justify-center items-center">
                <HiOutlineCalendar size={19} />
              </div>
              <div>
                <div onClick={() => setdateChange(!dateChange)}>
                  {duedate
                    ? moment(duedate || task.due_date).format("MMM Do")
                    : "Select Date"}
                </div>
                {dateChange == true && (
                  <input
                    onChange={(e) => {
                      setduedate(e.target.value);
                      settask_name(task.name);
                    }}
                    className="hover:bg-slate-100"
                    type="date"
                    onBlur={(e) => EdittaskkName(e, task.id)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div className=" h-8 flex w-28 items-center ">Projects:</div>
            <div>
              <div className="space-x-3 h-8 flex justify-between items-center text-[12px] ">
                <div className=" h-6 rounded-md text-center cursor-pointer text-[15px] font-semibold hover:bg-slate-200 px-1">
                  {data.Project_name}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 auto-cols-max gap-1 w-[100%]">
            {getTags.length > 0 &&
              getTags.map((x) => (
                <div key={x}
                  className={`${
                    (x.name == "high" ||
                      x.name == "High" ||
                      x.name == "HIGH") &&
                    `text-red-500 bg-red-100`
                  } ${
                    (x.name == "medium" ||
                      x.name == "Medium" ||
                      x.name == "MEDIUM") &&
                    `text-yellow-500 bg-yellow-100`
                  } ${
                    (x.name == "low" || x.name == "Low" || x.name == "LOW") &&
                    `text-green-500 bg-green-50`
                  } text-black bg-gray-200 px-3 flex justify-between items-center rounded-md space-x-1 py-[2px]`}
                >
                  <div className="">{x.name}</div>
                  <ImCross
                    size={10}
                    className="hover:text-red-800 cursor-pointer"
                    onClick={() => {
                      DeleteTags(x.id);
                    }}
                  />
                </div>
              ))}
          </div>

          <form
            onSubmit={(e) => Tags(e)}
            className="w-[100%] rounded-lg border border-[#c0c0c0]"
          >
            <input
              onChange={(e) => setTags(e.target.value)}
              placeholder={tagsmessage ? tagsmessage : "Tags"}
              value={tags}
              className="w-[100%]  rounded-lg px-2 border h-[45px] outline-none"
            />
          </form>
          {/* </div> */}
          {/* {subtask &&
            subtask.length &&
            subtask.map((s) => <div className="w-[100%]">{s.name}</div>)} */}

          <div className="w-[100%]">
            {subtask.length > 0 &&
              subtask.map((s) => (
                <div key={s}
                  id="hover6"
                  className="flex items-center border-b h-7 justify-between "
                >
                  <div className="flex items-center">
                    <BsCheckCircle
                      size={20}
                      className="hover:text-green-600 cursor-pointer mr-2"
                    />
                    <form
                      onClick={() => {
                        setselectedsubTaskId(s.id);
                      }}
                      onSubmit={(e) => EditBoardSubTaskName(e, s.id)}
                    >
                      <input
                        onClick={() => setsubTaskName(s.name)}
                        value={
                          s.id === selectedsubTaskId ? subTaskName : s.name
                        }
                        onChange={(e) => {
                          if (s.id === selectedsubTaskId) {
                            setsubTaskName(e.target.value);
                          }
                        }}
                        onBlur={(e) => {
                          subTaskName && EditBoardSubTaskName(e, s.id),
                            setrefresh("x");
                        }}
                        key={`subtask-${s.id}-input`}
                      />
                    </form>
                    {/* value={s.name}/> */}
                  </div>
                  {/* <div id="show6" className="hidden space-x-2 ">
                    <div className="w-5 h-5 rounded-full border mt-1 border-dashed border-secondary flex justify-center cursor-pointer items-center">
                      <HiOutlineCalendar size={15} />
                    </div>
                    <div className="w-5 h-5 rounded-full border mt-1 border-dashed border-secondary flex justify-center cursor-pointer items-center">
                      <AiOutlineUser size={15} />
                    </div>
                    <div className="w-10 flex items-center ">
                      <MdOutlineChatBubbleOutline size={20} className="mt-1" />
                      <BiChevronRight size={22} />
                    </div>
                  </div> */}
                </div>
              ))}
          </div>
          {isInput ? (
            <div className="w-[100%] ">
              {/* data */}

              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  {/* <form onSubmit={subTask}> */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      Api.fetchPost(
                        {
                          name: AddingSubtaskInput,
                          project_id: data.Project_id,
                        },
                        `/boardtask/${task.id}/subtask`
                      ).then((x) => {
                        setrefresh(x),
                          // console.log(x.data.data, "<=== sub task");
                          subtask.push(x.data.data);
                        setInput(false);
                      });
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setAddingTaskName(e.target.value);
                      }}
                      placeholder="Write Subtask Name"
                      ref={inputRef}
                      className="max-w-[100%] h-8 px-2"
                    />
                  </form>
                </div>
                {/* <div className="flex space-x-2 ">
                  <div className="w-6 h-6 rounded-full border border-dashed border-secondary flex justify-center cursor-pointer items-center">
                    <HiOutlineCalendar size={17} />
                  </div>
                  <div className="w-6 h-6 rounded-full border border-dashed border-secondary flex justify-center cursor-pointer items-center">
                    <AiOutlineUser size={17} />
                  </div>
                  <div className="w-10 flex items-center ">
                    <MdOutlineChatBubbleOutline size={20} className="mt-1" />
                    <BiChevronRight size={22} />
                  </div>
                </div> */}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="w-[100%]">
            <button
              onClick={handleButtonClick}
              className="text-[12px] h-7 flex items-center justify-between hover:bg-slate-100 border rounded-lg  px-1"
            >
              <GoPlus className=" text-secondary mr-1" size={14} />
              Add subtask
            </button>
          </div>
          {isInput && (
            <div
              tabIndex={1}
              onClick={handleClickOutside}
              className="fixed top-0 left-0 bottom-0 right-0"
            />
          )}
          <div className="w-[100%]  py-2  ">
            <div className="w-[100%] py-2 flex items-center space-x-2 border-b font-semibold ">
              <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                <div className="flex">
                  {task.myuser.myprofile.fullname &&
                    task.myuser.myprofile.fullname.split("")[0]}
                  {task.myuser.myprofile.fullname &&
                    task.myuser.myprofile.fullname.split("")[1]}
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                {task.SubTasks && (
                  <p>{task.myuser.myprofile.fullname} created this task.</p>
                )}
                {!task.SubTasks && (
                  <p>{task.myuser.myprofile.fullname} created this subtask.</p>
                )}
                <p className="text-gray-500 font-normal">
                  {moment(task.created_at).fromNow()}
                </p>
              </div>
            </div>
            {getComment.length > 0 &&
              getComment.map((x) => (
                <div key={x} className="w-[100%] py-2 flex items-center space-x-2 font-semibold ">
                  <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                    <div className="flex">
                      {x.myprofile.fullname &&
                        x.myprofile.fullname.split("")[0]}
                      {x.myprofile.fullname &&
                        x.myprofile.fullname.split("")[1]}
                    </div>
                  </div>
                  <div className="max-w-[500px]">
                    <div className="bold text-black">
                      {x.myprofile.fullname}
                    </div>
                    <div className="text-gray-800 font-normal">{x.message}</div>
                    <div className="text-gray-800 font-normal">
                      {x.BoardTaskcommentAttachments?.length >= 1 && (
                        <>
                          {x.BoardTaskcommentAttachments.map((e) => (
                            <div key={e.attachment}>
                              {checkIfImage(e.attachment) ? (
                                <img
                                  src={baseUrl + "/uploads/" + e.attachment}
                                  alt={e.attachment}
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "300px",
                                  }}
                                />
                              ) : (
                                <div>
                                  <Link
                                    href={baseUrl + "/uploads/" + e.attachment}
                                  >
                                    <a className="btn btn-primary">
                                      Download {e.attachment}
                                    </a>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            <div className="h-10" ref={refComment}></div>
          </div>
        </div>
      </div>
      <div className="pl-[20px] h-[120px] bg-gray-50 relative -bottom-4 w-[100%]">
        <div className="w-[100%]  py-3 flex items-center space-x-2 ">
          <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
            <div className="flex">
              {task.myuser.myprofile.fullname &&
                task.myuser.myprofile.fullname.split("")[0]}
              {task.myuser.myprofile.fullname &&
                task.myuser.myprofile.fullname.split("")[1]}
            </div>
          </div>

          <div className="max-w-[90%] w-[90%]  flex overflow-hidden items-center space-x-2">
            <form
              onSubmit={(e) => {
                comments(e);
              }}
              className="w-[100%] rounded-lg border border-[#c0c0c0] overflow-hidden"
            >
              <MentionsInput
                onChange={(e) => {
                  setInputs({ ...inputs, message: e.target.value });
                  // setListTag(e.target.value);
                }}
                // onKeyDown={(e) => handleKeyDown(e)}
                placeholder={
                  commentmessage
                    ? commentmessage
                    : "Ask a question or post an update"
                }
                value={inputs.message}
                className="w-[100%] rounded-lg px-2 border h-[45px] outline-none"
              >
                <Mention
                  trigger="@"
                  data={mentionData} // Replace `mentionData` with your mention data source
                  markup="@{{__display__}}" // Customize the markup for the mention
                />
              </MentionsInput>

              <label className=" w-6 h-6">
                <input
                
                  onChange={(e) => {
                    setInputs({
                      ...inputs,
                      attachment: e.target.files[0],
                      message_type: 1,
                    });
                  }}
                  id="attachment"
                  type="file"
                  className="w-[200px]"
                />
              </label>
              <button type="submit" className="bg-primary px-2">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="w-[100%] px-[45px] flex justify-between">
          <div className="flex items-center space-x-1">
            <div className=" rounded-lg overflow-hidden text-[12px] text-[gray]">
              Collaborates
            </div>
            <div className="bg-primary text-[13px] flex items-center justify-center rounded-full w-6 h-6 text-secondary font-semibold">
              <div className="flex">
                {/* {task.myuser.myprofile.fullname &&
                  task.myuser.myprofile.fullname.split("")[0]}
                {task.myuser.myprofile.fullname &&
                  task.myuser.myprofile.fullname.split("")[1]} */}
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border border-dashed border-secondary flex justify-center items-center">
              <AiOutlineUser size={17} />
            </div>
            <div className="w-6 h-6 rounded-full border border-dashed border-secondary flex justify-center items-center">
              <AiOutlineUser size={17} />
            </div>
          </div>
          <div>
            {/* <div className="flex space-x-1">
              {leave == true && (
                <button
                  onClick={() => setLeave(false)}
                  className="flex font-semibold cursor-pointer hover:bg-[#c3bfbf] px-1 rounded-lg items-center space-x-1"
                >
                  <BsFillBellFill className=" text-secondary mr-1" size={14} />
                  Leave task
                </button>
              )}
              {leave == false && (
                <button
                  onClick={() => setLeave(true)}
                  className="flex cursor-pointer font-semibold hover:bg-[#c3bfbf] px-1 rounded-lg items-center space-x-1"
                >
                  <BsFillBellFill className=" text-secondary mr-1" size={14} />
                  Join task
                </button>
              )}
            </div> */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
