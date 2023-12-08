import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { BsFillBellFill, BsCheckCircle } from "react-icons/bs";
import Api from "../../API/Api";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "@mui/material";
import { MentionsInput, Mention } from "react-mentions";
import { baseUrl } from "../../Constants/BaseURL";

export default function BoardDetails2({
  task,
  settaskRefresh,
  setRefresh,
  Refresh,
  settaskName,
  taskName,
  setDetails,
  secId,
  setTask,
  setStatus,
  status,
  settask_name,
  task_name,
  Subtask,
  subTaskName,
  setsubTaskName,
  newTaskrefresh,
  setnewTaskrefresh,
  AccordionsubTask,
}) {
  const data = useSelector((x) => x);
  const [leave, setLeave] = useState(true);
  const [isInput, setInput] = useState(false);
  const [AddingSubtaskInput, setAddingTaskName] = useState("");
  const [subtask, setsubtask] = useState({});
  const [subtaskUser, setsubtaskUser] = useState({});
  const [description, setdescription] = useState(AccordionsubTask.desc);
  // const [description1, setdescription1] = useState(task.desc||"Type your Description");
  const [duedate, setduedate] = useState();
  const [dateChange, setdateChange] = useState(false);
  // const [taskName, settaskName] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedsubTaskId, setselectedsubTaskId] = useState("");
  // const [subTaskName, setsubTaskName] = useState("");
  const [message, setMessage] = useState("");
  const [comment, setcomment] = useState("");
  const [mess, setmess] = useState();
  const [getComment, setgetComment] = useState({});
  const [assigneeInput, setAssigneeInput] = useState(false);
  const [assignee, setAssignee] = useState();
  const [assigneeMap, setAssigneeMap] = useState();
  const [reffresh, setreffresh] = useState("");
  const [loading, setLoading] = useState(true);
  const [commentmessage, setcommentmessage] = useState();
  const [inputs, setInputs] = useState({
    message: "",
    message_type: 0,
    attachment: "",
  });
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

      Api.fetchPost(
        updatedInputs,
        `/boardsubtask/${AccordionsubTask.id}/comments`
      )
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

      Api.fetchPost(
        updatedInputs,
        `/boardsubtask/${AccordionsubTask.id}/comments`
      )
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
  // console.log(task, "===checking");
  // console.log(AccordionsubTask, "===AccordionsubTask");
  const assignRef = useRef();
  const blurName = useRef();
  const refComment = useRef();
  // const comments = (e) => {
  //   e.preventDefault();
  //   Api.fetchPost(
  //     { message: comment },
  //     `/subtask_comments/${AccordionsubTask.id}`
  //   )

  //     .then((x) => {
  //       console.log(x);
  //       setmess(x);
  //       refComment.current.scrollIntoView();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  useEffect(() => {
    setLoading(false);
  }, []);

  const assigneePost = (e, userid) => {
    e.preventDefault();
    Api.fetchPost(
      {
        user_id: userid,
        task_id: task.id,
        subtask_id: AccordionsubTask.id,
      },
      `/boardsubtasks/users`
    )

      .then((x) => {
        AccordionsubTask.subTaskUsers.push(x.data.task[0]);
        console.log(x, "kia ara hay");
        setRefresh(x);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const Assignee = () => {
    // this.form.submit()
    Api.fetchPost({ query: assignee, team_id: data.team }, `/getuserfortask`)

      .then((x) => {
        // console.log(x, "<======nishani");
        setRefresh(x);
        setAssigneeMap(x.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const MentionAssignee = () => {
    // this.form.submit()
    Api.fetchPost({ query: assignee, team_id: data.team }, `/getuserfortask`)

      .then((x) => {
        // console.log(x, "<======nishani");
        setRefresh(x);
        setAssigneeMap(x.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    MentionAssignee();
  }, [assignee, data.team]);

  useEffect(() => {
    Api.fetchGet(`/boardsubtask/${AccordionsubTask.id}/boardsubtaskusers`).then(
      (x) => {
        // console.log(x, "====aaao");
        setsubtaskUser(x.data.boardsubtasks);
      }
    );
  }, [AccordionsubTask.id, Refresh]);

  const gettaskUser = () => {
    Api.fetchGetTask({ task_id: task.id }, `/get_section_task_users`)
      .then((x) => {
        console.log(x, "usersssssssssssss");
        setreffresh(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Assignee();
  }, [assignee, data.team]);

  useEffect(
    (e) => {
      // this.form.submit()
      Api.fetchGet(`/boardsubtask/${AccordionsubTask.id}/comments`)
        .then((x) => {
          setgetComment(x.data.boardsubtaskcomments);
          refComment.current.focus();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [mess]
  );
  // console.log(getComment)
  const EditsubName = (e) => {
    e.preventDefault();
    Api.Update(
      { name: task_name || task.name },
      ` /task/${AccordionsubTask.task.id}/subtask/${AccordionsubTask.id}/updatename`
    ).then((x) => {
      settask_name(null);
      setRefresh(x);
    });
  };

  const editsubdate = (e) => {
    e.preventDefault();
    Api.Update(
      { due_date: duedate },
      `/boardsubtask/${AccordionsubTask.id}/update_due_date`
    ).then((x) => {
      setRefresh(x);
    });
  };

  const editsubdesc = (e) => {
    e.preventDefault();
    Api.Update(
      { desc: description },
      `/boardsubtask/${AccordionsubTask.id}/updatedesc`
    )
      .then((x) => {
        console.log(x);
        setRefresh(x);
      })
      .catch((err) => {
        console.log(err);
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
  }, [isInput, Refresh]);

  // Api.fetchGet(`/task/:${task.id}/subtask`);
  useEffect(() => {
    Api.fetchGet(`/task/${task.id}/subtask`).then((x) =>
      setsubtask(x.data.subtask)
    );
  }, [task.id, Refresh]);

  const subTask = (e) => {
    e.preventDefault();
    Api.fetchPost(
      {
        name: AddingSubtaskInput,
        project_id: data.Project_id,
      },
      `/task/${task.id}/subtask`
    ).then((x) => {
      // settaskRefresh(x, "Task");
      console.log(x, "<=== sub task");
    });
  };

  const EditBoardSubTaskName = (e, id) => {
    e.preventDefault();
    Api.Update({ name: subTaskName }, `/boardsubtask/${id}/updatename`).then(
      (x) => {
        setsubTaskName(null);
        setRefresh(x);
        console.log(x);
        // setnewTaskrefresh(x);
      }
    );
  };

  const DeletesubTask = (p, s, t, su) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}/Subtask/${su}`).then(
      (x) => {
        console.log(x), setDetails(false);
      }
    );
  };
  useEffect(() => {
    setdescription(task.desc);
  }, [task]);
  useEffect(() => {
    if (assigneeInput) {
      assignRef.current.focus();
    }
  }, [assigneeInput]);
  // console.log(AccordionsubTask, "AcoSubtask");

  useEffect(() => {
    setdescription(AccordionsubTask.desc);
  }, []);
  return (
    <div onClick={() => setMessage(null)} className="h-[86%] -space-y-6">
      <div className="overflow-scroll h-[520px] px-[20px] text-secondary">
        <form
          onClick={() => {
            setSelectedTaskId(task.id);
          }}
          onSubmit={(e) => EditBoardSubTaskName(e, AccordionsubTask.id)}
        >
          <textarea
            onClick={() => setsubTaskName(AccordionsubTask.name)}
            id="inputID"
            className="outline-none w-[100%] text-[25px] font-semibold text-black "
            value={subTaskName}
            placeholder={AccordionsubTask.name}
            onChange={(e) => {
              setsubTaskName(e.target.value);
            }}
            onBlur={(e) => {
              EditBoardSubTaskName(e, AccordionsubTask.id);
            }}
            key={`task-${task.id}-input`}
          />
        </form>

        <div className=" w-full flex flex-col justify-between space-y-5 items-center  mt-2 text-[13px]">
          <div className="w-[100%] space-x-12 font-normal flex">
            <div
              onClick={() => console.log(task)}
              className="h-8 flex w-28 items-center"
            >
              Assignee
            </div>
            {assigneeInput == false && (
              <div
                onClick={() => {
                  setAssigneeInput(true);
                }}
                className="space-x-2 h-8 flex justify-between items-center hover:bg-slate-100 px-2 cursor-pointer rounded-lg"
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
                    assigneeMap.map((a) => (
                      <div
                      key={a}
                        onClick={(e) => {
                          assigneePost(e, a.user_id), setRefresh("x");
                          setAssigneeInput(false), setAssignee(null);
                        }}
                        className="text-[14px] h-6 px-2"
                      >
                        {a.UserInfo.email}
                      </div>
                    ))}
                </div>
              </div>
            )}
            <div className=" h-auto flex overflow-x-scroll max-w-[95px] px-1 space-x-1">
              {subtaskUser &&
                subtaskUser.length > 0 &&
                subtaskUser.map((Taskusers) => (
                  <div key="task" className="bg-primary text-white rounded-full w-6 h-6 ">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-[12px] pb-1">
                      <p> {Taskusers.myuser.myprofile.fullname.split("")[0]}</p>
                      <p> {Taskusers.myuser.myprofile.fullname.split("")[1]}</p>
                    </div>
                  </div>
                ))}
            </div>
            {message && (
              <div className="text-red-500 text-[12px] w-[150px]">
                {message}
              </div>
            )}
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div
              onClick={() => {
                console.log(task.desc);
              }}
              className=" h-8 flex w-28 items-center "
            >
              Due date
            </div>
            <div className="space-x-2 h-8 flex justify-between items-center hover:bg-slate-100 px-2 cursor-pointer rounded-lg ">
              <div className="w-8 h-8 rounded-full border border-dashed border-secondary flex justify-center items-center">
                <HiOutlineCalendar size={19} />
              </div>
              <div>
                <div onClick={() => setdateChange(!dateChange)}>
                  {moment(duedate || AccordionsubTask.due_date).format(
                    "MMM Do"
                  )}
                </div>
                {dateChange == true && (
                  <input
                    onChange={(e) => {
                      setduedate(e.target.value);
                    }}
                    className="hover:bg-slate-100"
                    type="date"
                    onBlur={(e) => editsubdate(e, AccordionsubTask.id)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div className=" h-8 flex w-28 items-center ">Project</div>
            <div>
              <div className="space-x-3 h-8 flex justify-between items-center text-[12px] ">
                <div className=" h-6 rounded-md text-center cursor-pointer text-[15px] font-semibold hover:bg-slate-200 px-1">
                  {data.Project_name}
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[100%] "
            onClick={() => console.log(AccordionsubTask)}
          >
            Discription
          </div>
          <div className="w-[100%] ">
            <textarea
              id="inputID3"
              className="w-[98%] h-20 rounded-lg px-2 border"
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              onBlur={(e) => {
                editsubdesc(e);
              }}
            />
          </div>
          <div className="w-[100%]"></div>

          <div className="w-[100%]    ">
            <div className="w-[100%] py-2 flex items-center space-x-2 border-b font-semibold ">
              <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                <div className="flex">
                  {AccordionsubTask.myuser.myprofile.fullname &&
                    AccordionsubTask.myuser.myprofile.fullname.split("")[0]}
                  {AccordionsubTask.myuser.myprofile.fullname &&
                    AccordionsubTask.myuser.myprofile.fullname.split("")[1]}
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <p>
                  {AccordionsubTask.myuser.myprofile.fullname} created this
                  subtasks.
                </p>

                <p className="text-gray-500 font-normal">
                  {" "}
                  {moment(AccordionsubTask.created_at).fromNow()}
                </p>
              </div>
            </div>
            {getComment.length > 0 &&
              getComment.map((x) => (
                <div key={x} className="w-[100%] py-2 flex items-center space-x-2 font-semibold ">
                  <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                    <div className="flex">
                      {AccordionsubTask.myuser.myprofile.fullname &&
                        AccordionsubTask.myuser.myprofile.fullname.split("")[0]}
                      {AccordionsubTask.myuser.myprofile.fullname &&
                        AccordionsubTask.myuser.myprofile.fullname.split("")[1]}
                    </div>
                  </div>
                  <div className="max-w-[500px]">
                    <div className="bold text-black">
                      {x.myprofile.fullname}
                    </div>
                    <div className="text-gray-800 font-normal">{x.message}</div>
                    <div className="text-gray-800 font-normal">
                      {x.BoardSubtaskcommentAttachments?.length >= 1 && (
                        <>
                          {x.BoardSubtaskcommentAttachments.map((e) => (
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
            {/* {getComment &&
              getComment.length > 0 &&
              getComment.map((x) => (
                <div className="w-[100%] py-2 flex items-center space-x-2 font-semibold ">
                  <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                    <div className="flex">
                      {AccordionsubTask.myuser.myprofile.fullname &&
                        AccordionsubTask.myuser.myprofile.fullname.split("")[0]}
                      {AccordionsubTask.myuser.myprofile.fullname &&
                        AccordionsubTask.myuser.myprofile.fullname.split("")[1]}
                    </div>
                  </div>
                  <div className="max-w-[500px]">
                    <div className="bold text-black">
                      {x.myprofile.fullname}
                    </div>
                    <div className="text-gray-800 font-normal">{x.message}</div>
                  </div>
                </div>
              ))} */}
            <div className="h-10" ref={refComment}></div>
          </div>
        </div>
      </div>
      <div className="pl-[20px] h-[120px] bg-gray-50 relative -bottom-4 w-[100%]">
        <div className="w-[100%]  py-3 flex items-center space-x-2 ">
          <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
            <div className="flex">
              {AccordionsubTask.myuser.myprofile.fullname &&
                AccordionsubTask.myuser.myprofile.fullname.split("")[0]}
              {AccordionsubTask.myuser.myprofile.fullname &&
                AccordionsubTask.myuser.myprofile.fullname.split("")[1]}
            </div>
          </div>

          {/* <div className="max-w-[90%] w-[90%] rounded-lg h-[45px] overflow-hidden border border-[#c0c0c0]">
            <form onSubmit={(e) => comments(e)}>
              <input
                onChange={(e) => setcomment(e.target.value)}
                placeholder="Ask a question or post an update"
                className="w-[100%]  rounded-lg px-2 border h-[45px] outline-none"
              />
            </form>
          </div> */}
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
                  renderSuggestion={(
                    suggestion,
                    search,
                    highlightedDisplay
                  ) => (
                    <span style={{ color: "blue" }}>{highlightedDisplay}</span>
                  )} // Render the mention suggestion with blue color
                  markup="@[__display__]"
                  displayTransform={(id, display) => display.replace("@", "")} // Remove the "@" symbol from the displayed text
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
                {AccordionsubTask.myuser.myprofile.fullname &&
                  AccordionsubTask.myuser.myprofile.fullname.split("")[0]}
                {AccordionsubTask.myuser.myprofile.fullname &&
                  AccordionsubTask.myuser.myprofile.fullname.split("")[1]}
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
