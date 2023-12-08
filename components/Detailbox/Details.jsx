import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
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
import { motion } from "framer-motion";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

export default function Details({
  task,
  sectionArr,
  settaskRefresh,
  taskRefresh,
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
  setsubTaskName,
  subTaskName,
  newTaskrefresh,
  setnewTaskrefresh,
  AccordionsubTask,
  taskuserdeletemodal,
  settaskuserdeletemodal,
}) {
  const data = useSelector((x) => x);
  const [leave, setLeave] = useState(true);
  const [isInput, setInput] = useState(false);
  const [AddingSubtaskInput, setAddingTaskName] = useState("");
  const [subtask, setsubtask] = useState({});
  const [assigneealert, setassigneealert] = useState(false);
  const [subtaskalert, setsubtaskalert] = useState(false);
  const [taskuser, settaskuser] = useState({});
  const [description, setdescription] = useState();
  // const [description1, setdescription1] = useState(task.desc||"Type your Description");
  const [duedate, setduedate] = useState(task.due_date);
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
  const [attachmessage, setattachmessage] = useState();
  const [commentmessage, setcommentmessage] = useState();
  const [tagsmessage, settagsmessage] = useState();
  const [taskuser_id, settaskuser_id] = useState();
  const [taskuser_name, settaskuser_name] = useState();
  const [taskuserdeletealert, settaskuserdeletealert] = useState();
  const [dataID, setDataID] = useState(localStorage.getItem("myData"));
  const [mentionData, setmentionData] = useState({});
  const [validaitonmsg, setvalidaitonmsg] = useState(null);
  const [validaitonalert, setvalidaitonalert] = useState(false);
  // console.log(task, "===checking");
  // console.log(AccordionsubTask, "===AccordionsubTask");
  const assignRef = useRef();
  const blurName = useRef();
  const refComment = useRef();
  const [showInfo, setShowInfo] = useState(Array(taskuser.length).fill(false));
  const dispatch = useDispatch();

  const toggleInfo = (index) => {
    const newShowInfo = [...showInfo];
    newShowInfo[index] = !newShowInfo[index];
    setShowInfo(newShowInfo);
  };
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

  const mentionData2 = [
    // Define your mention suggestions here
    { id: 1, display: "John Doe" },
    { id: 2, display: "Jane Smith" },
    { id: 3, display: "George Smith" },
    // ...
  ];

  // useEffect(
  //   (e) => {
  //     Api.fetchGet(`/${data.team}/getMentionUser`)
  //       .then((x) => {
  //         setmentionData(x.data);
  //         console.log(x.data);
  //         console.log(x.data.UserInfo.myprofile.fullname);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  //   [data.team]
  // );

  function closeTaskUserDeleteModal() {
    settaskuserdeletemodal(false);
  }

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

      Api.fetchPost(updatedInputs, `/tasks/${task.id}/comments`)
        .then((x) => {
          setmess(x);
          resetInputs();
          refComment.current.scrollIntoView();
        })
        .catch((e) => {
          setattachmessage(e.response.statusText);
          console.log(e, "status");
        });
    }

    if (hasMessage && !hasAttachment) {
      // Only message is present, proceed with API call
      const updatedInputs = { message: inputs.message };

      Api.fetchPost(updatedInputs, `/tasks/${task.id}/comments`)
        .then((x) => {
          console.log(x);
          Api.fetchPost(
            {
              message: `${data.User_name} commented`,
              project_id: data.Project_id,
            },
            `/createnotification/team_id/${dataID} `
          )
            .then((t) => {
              dispatch({
                type: "overallRefresh",
                payload: t,
              });
            })
            .catch((err) => console.log(err));
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
          Api.fetchPost(
            {
              message: `${data.User_name} attached a file`,
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
          setmess(x);
          resetInputs();
          refComment.current.scrollIntoView();
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  };

  const resetInputs = () => {
    setInputs({ message: "", attachment: null });
    const fileInput = document.getElementById("attachment");
    fileInput.type = "text";
    fileInput.type = "file";
  };

  const Tags = (e) => {
    e.preventDefault();
    if (!tags) {
      settagsmessage("Please enter a tag name");
    }
    Api.fetchPost({ name: tags }, `/tasks/${task.id}/createtag`)

      .then((x) => {
        Api.fetchPost(
          {
            message: `${data.User_name} created this tag`,
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
    Api.fetchPost(
      { user_id: userid, task_id: task.id, project_id: data.Project_id },
      `/tasks/users`
    )

      .then((x) => {
        task.TaskUsers.push(x.data.task[0]);
        console.log(x, "kia ara hay");
        setnewTaskrefresh(x), setreffresh(x);
      })
      .catch((err) => {
        Api.fetchPost(
          {
            message: `${data.User_name} added ${err.response.data.taskUser[0].myuser.myprofile.fullname} in task "${task.name}"`,
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

        // console.log(
        //   err.response.data.taskUser[0].myuser.myprofile.fullname,
        //   "kia ara hay"
        // );
        setmessage(err.response.data.message);
        setassigneealert(true);
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
  // };
  const Assignee = () => {
    // this.form.submit()
    Api.fetchPost({ query: assignee, team_id: data.team }, `/getuserfortask`)

      .then((x) => {
        // console.log(x, "<======nishani");
        setAssigneeMap(x.data);
        setnewTaskrefresh(x);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

    if (assigneealert) {
      timeoutId = setTimeout(() => {
        setassigneealert(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [assigneealert]);

  useEffect(() => {
    let timeoutId;

    if (subtaskalert) {
      timeoutId = setTimeout(() => {
        setsubtaskalert(false);
      }, 2500);
    }
    if (taskuserdeletealert) {
      timeoutId = setTimeout(() => {
        settaskuserdeletealert(false);
      }, 2500);
    }

    return () => clearTimeout(timeoutId);
  }, [taskuserdeletealert, subtaskalert]);

  const gettaskUser = () => {
    Api.fetchGetTask(`/tasks/${task.id}/taskusers`)
      .then((x) => {
        console.log(x, "usersssssssssssss");
        setreffresh(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(()=>{
  //   gettaskUser()
  // },[task.id,reffresh])

  useEffect(() => {
    Assignee();
  }, [assignee, assigneeMap, task, data.team, reffresh]);

  useEffect(
    (e) => {
      Api.fetchGet(`/tasks/${task.id}/comments`)
        .then((x) => {
          setgetComment(x.data.comments);
          setgetCommentAttach(x.data.comments);
          // console.log(x.data.comments, "sasaasas");
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
  const EdittaskkName = (e, t) => {
    e.preventDefault();
    Api.Update(
      { due_date: duedate, name: task_name || task.name, desc: description },
      `/projects/${data.Project_id || task.project_id}/sections/${
        task.section_id
      }/tasks/${task.id}`
    ).then((x) => {
      if (task_name) {
        Api.fetchPost(
          {
            message: `${data.User_name} renamed task "${t.name}" to "${x.data.name}"`,
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
      }
      if (description) {
        Api.fetchPost(
          {
            message: `${data.User_name} added description of task "${t.name}" in project ${data.Project_name}"`,
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
      }
      if (duedate) {
        Api.fetchPost(
          {
            message: `${data.User_name} added due_date of task "${t.name}" in project ${data.Project_name}"`,
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
      }
      settask_name(null);
      setdescription(null);
      setnewTaskrefresh(x);
    });
    // console.log(taskName,'value')
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
    Api.fetchGet(`/task/${task.id}/subtask`).then((x) =>
      setsubtask(x.data.subtask)
    );
  }, [task.id, newTaskrefresh, taskRefresh]);

  useEffect(() => {
    Api.fetchGet(`/tasks/${task.id}/taskusers`).then((x) => {
      settaskuser(x.data.tasks);
      // console.log(x.data.tasks,'============data')
    });
  }, [task.id, newTaskrefresh, taskRefresh]);

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
  const EditsubTaskName = (e, id) => {
    e.preventDefault();
    // blurName.current.blur();
    Api.Update({ name: subTaskName }, `/editTaskName/${id}`).then((x) => {
      setnewTaskrefresh(x);
      setsubTaskName(null);
      console.log(x);
    });
  };
  const EditmainsubTaskName = (e, id) => {
    e.preventDefault();
    blurName.current.blur();
    Api.Update({ name: subTaskName }, `/editTaskName/${id}`).then((x) => {
      setsubTaskName(null);
      // setrefresh(x);
      console.log(x);
      setnewTaskrefresh(x);
    });
  };

  const DeleteTask = (p, s, t) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}`).then((x) => {
      console.log(x), setDetails(0);
    });
  };
  const DeleteTaskUser = () => {
    Api.Delete(
      `/team_id/${dataID}/taskuserdelete/task_id/${task.id}/user_id/${taskuser_id}`
    )
      .then((x) => {
        setnewTaskrefresh(x);
        closeTaskUserDeleteModal();
        // settaskuserdeletealert(true);
        setvalidaitonmsg(x.data.msg);
        setvalidaitonalert(true);
        console.log(x, "1");
      })
      .then(() => {
        console.log(validaitonmsg, "2");
        Api.fetchPost(
          {
            message: `${data.User_name} removed ${taskuser_name} from task "${task.name}"`,
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
  const DeletesubTask = (p, s, t, su) => {
    Api.Delete(`/projects/${p}/sections/${s}/tasks/${t}/Subtask/${su}`).then(
      (x) => {
        console.log(x), setDetails(0);
      }
    );
  };

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
        setnewTaskrefresh(x);
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

  const ChangeSection = (e, id) => {
    e.preventDefault();
    console.log(id);
    Api.Update({ id: id }, `/sectionIdUpdate/${task.id}`).then((x) => {});
    // console.log(taskName,'value')
  };

  const ChangePriority = (e, p) => {
    e.preventDefault();
    console.log(p);
    Api.Update({ priority: p }, `/priorityUpdate/${task.id}`).then((x) => {
      console.log(x);
      settaskRefresh(x);
      setnewTaskrefresh(x);
    });
    // console.log(taskName,'value')
  };

  return (
    <div onClick={() => setmessage(null)} className="h-[86%]  -space-y-6">
      {validaitonalert && (
        <motion.div
          animate={{ x: [140, 0] }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          id="shadow"
          className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-40"
        >
          <p className="font-poppins font-bold text-[17px]">{validaitonmsg}</p>
        </motion.div>
      )}
      <Modal
        className="flex justify-center items-center h-full relative z-50"
        isOpen={taskuserdeletemodal}
        onRequestClose={closeTaskUserDeleteModal}
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
                DeleteTaskUser();
              }}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              Yes
            </button>
            <button
              onClick={() => closeTaskUserDeleteModal()}
              type="submit"
              className="w-[80px] mt-8 h-9 rounded-lg text-white hover:bg-[#333333] font-semibold border border-primary"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <div className="overflow-scroll h-[520px] px-[20px] text-secondary">
        {data.user_status == 10 ? (
          <form
            onClick={() => {
              setSelectedTaskId(task.id);
            }}
            onSubmit={(e) => EdittaskkName(e, task)}
          >
            <textarea
              onClick={() => settask_name(task.name)}
              id="inputID"
              className="outline-none w-[100%] text-[25px] font-semibold text-black "
              value={task_name}
              placeholder={task.name}
              onChange={(e) => {
                settask_name(e.target.value);
              }}
              onBlur={(e) => {
                task_name && EdittaskkName(e, task);
                //  settaskRefresh("x");
              }}
              key={`task-${task.id}-input`}
            />
          </form>
        ) : (
          <div className="outline-none w-[100%] text-[25px] font-semibold text-black ">
            {task.name}
          </div>
        )}

        <div className=" w-full flex flex-col justify-between space-y-5 items-center  mt-2 text-[13px]">
          <div className="w-[100%] space-x-12 font-normal flex">
            <div
              onClick={() => console.log(task)}
              className=" h-8 flex w-28 items-center"
            >
              Assignee
            </div>

            {assigneeInput == false && data.user_status == 10 && (
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
            {assigneealert && !message && (
              <motion.div
                animate={{ x: [140, 0] }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                id="shadow"
                className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
              >
                <p className="font-poppins font-bold text-[17px]">
                  Task Assigned Successfully
                </p>
              </motion.div>
            )}
            {subtaskalert && (
              <motion.div
                animate={{ x: [140, 0] }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                id="shadow"
                className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
              >
                <p className="font-poppins font-bold text-[17px]">
                  Subtask Created Successfully
                </p>
              </motion.div>
            )}

            {taskuserdeletealert && (
              <motion.div
                animate={{ x: [140, 0] }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                id="shadow"
                className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
              >
                <p className="font-poppins font-bold text-[17px]">
                  TaskUSer Unassigned Successfully
                </p>
              </motion.div>
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
                  {assigneeMap.length > 0 &&
                    assignee &&
                    assigneeMap.map((a) => (
                      <div
                        key={a}
                        onClick={(e) => {
                          assigneePost(e, a.user_id),
                            setAssigneeInput(false),
                            setnewTaskrefresh("x"),
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

            <div className=" h-auto flex overflow-x-scroll max-w-[99px] hover:cursor-pointer px-1 space-x-2">
              {taskuser &&
                taskuser.length > 0 &&
                taskuser.map((Taskusers, index) => (
                  <div
                    key={index}
                    className="h-8 flex items-center justify-center bottom-2"
                  >
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
                          {Taskusers.myuser.myprofile.fullname.split("")[0]}
                        </p>
                        <p>
                          {Taskusers.myuser.myprofile.fullname.split("")[1]}
                        </p>
                        <div
                          onClick={() => {
                            settaskuserdeletemodal(true),
                              settaskuser_id(Taskusers.user_id);
                            settaskuser_name(
                              Taskusers.myuser.myprofile.fullname
                            );
                          }}
                          className="absolute hidden bg-white  hover:bg-slate-300 flex items-center justify-center hover:text-red-500 h-[13px] w-[13px] mt-[2px] rounded-full text-black text-[11px] -top-[6px] z-40 -right-1"
                          id="crosstask"
                        >
                          x
                        </div>
                      </div>
                      {showInfo[index] && (
                        <div className="fixed z-10 right-0 mr-[260px] text-center mt-2 px-2 bg-white border rounded-lg shadow-lg">
                          {/* Additional information */}
                          <p className="relative text-black font-semibold text-[14px]">
                            {Taskusers.myuser.myprofile.fullname}
                          </p>
                          <p className="relative text-black font-semibold text-[12px]">
                            {Taskusers.myuser.myprofile.email}
                          </p>
                          {/* Add more information here as needed */}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            {message && <div className="text-red-500 w-[130px]">{message}</div>}
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div
              onClick={() => {
                console.log(task.id);
              }}
              className=" h-8 flex w-28 items-center "
            >
              Due date
            </div>
            {data.user_status == 10 ? (
              <div className="space-x-2 h-8 flex justify-between items-center hover:bg-slate-100 px-2 cursor-pointer rounded-lg ">
                <div className="w-8 h-8 rounded-full border border-dashed border-secondary flex justify-center items-center">
                  <HiOutlineCalendar size={19} />
                </div>

                <div>
                  <div onClick={() => setdateChange(!dateChange)}>
                    {task.due_date || duedate ? (
                      moment(duedate || task.due_date).format("MMM Do")
                    ) : (
                      <div>Set Date</div>
                    )}
                  </div>
                  {dateChange == true && (
                    <input
                      onChange={(e) => {
                        setduedate(e.target.value);
                        settask_name(task.name);
                      }}
                      className="hover:bg-slate-100"
                      type="date"
                      onBlur={(e) => EdittaskkName(e, task)}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="px-3">
                {moment(duedate || task.due_date).format("MMM Do")}
              </div>
            )}
          </div>
          <div className="w-[100%] space-x-12 font-normal flex ">
            <div
              className=" h-8 flex w-28 items-center "
              onClick={() => console.log(task.section_id)}
            >
              Projects
            </div>
            <div>
              <div className="space-x-3 h-8 flex justify-between items-center text-[12px] ">
                <div className=" h-6 rounded-md text-center cursor-pointer text-[15px] font-semibold flex space-x-2 px-1">
                  <p className="px-2 hover:bg-slate-200">{data.Project_name}</p>
                  {data.user_status == 10 && (
                    <select
                      className="hover:border-gray-600 border rounded-md border-white"
                      defaultValue={task.section_id}
                      onChange={(e) => ChangeSection(e, e.target.value)}
                    >
                      {sectionArr &&
                        sectionArr.map((x) => (
                          <option
                            //  className={`${task.section_id == x.id && "bg-green-600"}`}
                            key={x.id}
                            value={x.id}
                          >
                            {x.name}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] space-x-12 font-normal flex ">
            <div
              className=" h-8 flex w-28 items-center "
              onClick={() => console.log(task.section_id)}
            >
              Priority
            </div>
            <div>
              <div className="space-x-3 h-8 flex justify-between items-center text-[12px] ">
                <div className="h-6 rounded-md text-center cursor-pointer text-[15px] font-semibold flex space-x-2 px-1">
                  {data.user_status == 10 ? (
                    <select
                      defaultValue={task.priority}
                      className="hover:border-gray-600 border rounded-md border-white"
                      onChange={(e) => ChangePriority(e, e.target.value)}
                    >
                      <option value={0}>No Priority</option>
                      <option value={10}>Low</option>
                      <option value={20}>Medium</option>
                      <option value={30}>High</option>
                    </select>
                  ) : (
                    <select
                      // defaultValue={task.priority}
                      className="hover:border-gray-600 border rounded-md border-white w-[120px]"
                    >
                      {task.priority == 0 && (
                        <option value={0}>
                          <div>No Priority</div>
                        </option>
                      )}
                      {task.priority == 10 && (
                        <option value={10}>
                          <div>Low</div>
                        </option>
                      )}
                      {task.priority == 20 && (
                        <option value={20}>
                          <div>Medium</div>
                        </option>
                      )}
                      {task.priority == 30 && (
                        <option value={30}>
                          <div>High</div>
                        </option>
                      )}
                    </select>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] ">Description</div>
          <div className="w-[100%] ">
            {data.user_status == 10 ? (
              <form onSubmit={(e) => EdittaskkName(e, task)}>
                {" "}
                <textarea
                  id="inputID3"
                  // onClick={() => setdescription(task.desc)}
                  className="w-[98%] h-20 rounded-lg px-2 border"
                  onChange={(e) => setdescription(e.target.value)}
                  value={description}
                  placeholder={task.desc}
                  onBlur={(e) => {
                    EdittaskkName(e, task);
                  }}
                />
                <button
                  type="submit"
                  className="bg-rose text-white py-1 px-2 rounded-md hover:bg-slate-400"
                >
                  Save Description
                </button>
              </form>
            ) : (
              <div>
                <p>{task.desc}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 auto-cols-max gap-1 w-[100%]">
            {getTags.length > 0 &&
              getTags.map((x) => (
                <div
                  key={x}
                  className=" text-black bg-gray-200 px-3 flex justify-between items-center rounded-md space-x-1 py-[2px]"
                >
                  <div className="">{x.name}</div>
                  {data.user_status == 10 && (
                    <ImCross
                      size={10}
                      className="text-black hover:text-red-800 cursor-pointer"
                      onClick={() => {
                        DeleteTags(x.id);
                      }}
                    />
                  )}
                </div>
              ))}
          </div>

          {data.user_status == 10 && (
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
          )}
          <div className="w-[100%]">
            {subtask.length > 0 &&
              subtask.map((s) => (
                <div
                  key={s}
                  id="hover6"
                  className="flex items-center border-b h-7 justify-between "
                >
                  <div className="flex items-center">
                    <BsCheckCircle
                      size={20}
                      className="hover:text-green-600 cursor-pointer mr-2"
                    />{" "}
                    <form
                      onClick={() => {
                        setselectedsubTaskId(s.id);
                      }}
                      onSubmit={(e) => EditsubTaskName(e, s.id)}
                    >
                      <input
                        value={
                          s.id === selectedsubTaskId ? subTaskName : s.name
                        }
                        onChange={(e) => {
                          if (s.id === selectedsubTaskId) {
                            setsubTaskName(e.target.value);
                          }
                        }}
                        onBlur={(e) => {
                          subTaskName && EditsubTaskName(e, s.id),
                            settaskRefresh("x");
                        }}
                        key={`task-${s.id}-input`}
                      />
                    </form>
                    {/* value={s.name}/> */}
                  </div>
                  <div id="show6" className="hidden space-x-2 ">
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
                  </div>
                </div>
              ))}
          </div>
          {isInput ? (
            <div className="w-[100%] h-16 ">
              {/* data */}

              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <BsCheckCircle
                    size={20}
                    className="hover:text-green-600 cursor-pointer mr-2"
                  />
                  {/* <form onSubmit={subTask}> */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      Api.fetchPost(
                        {
                          name: AddingSubtaskInput,
                          project_id: data.Project_id,
                        },
                        `/task/${task.id}/subtask`
                      ).then((x) => {
                        console.log(x.data.data.name);
                        Api.fetchPost(
                          {
                            message: `${data.User_name} created a subtask "${x.data.data.name}"`,
                            project_id: data.Project_id,
                          },
                          `/createnotification/team_id/${dataID}`
                        )
                          .then((t) => {
                            setsubtaskalert(true);
                            dispatch({
                              type: "overallRefresh",
                              payload: t,
                            });
                          })
                          .catch((err) => console.log(err));
                        setnewTaskrefresh(x);
                        console.log(x.data.data, "<=== sub task");
                        subtask.push(x.data.data);
                        setInput(false);
                      });
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setAddingTaskName(e.target.value);
                      }}
                      ref={inputRef}
                      className="max-w-[100%] h-8 px-2"
                    />
                  </form>
                </div>
                <div className="flex space-x-2 ">
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
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {data.user_status == 10 && (
            <div className="w-[100%]">
              {task.SubTasks && (
                <button
                  onClick={handleButtonClick}
                  className="text-[12px] h-7 flex items-center justify-between hover:bg-slate-100 border rounded-lg  px-1"
                >
                  <GoPlus className=" text-secondary" size={14} />
                  Add subtask
                </button>
              )}
            </div>
          )}
          {isInput && (
            <div
              tabIndex={1}
              onClick={handleClickOutside}
              className="fixed top-0 left-0 bottom-0 right-0"
            />
          )}
          <div className="w-[100%]  py-2  ">
            <div className="w-[100%] py-2 flex items-center space-x-2 border-b font-semibold ">
              <div className="bg-rose flex items-center  justify-center rounded-full w-8 h-8 text-white font-semibold">
                <div className="flex ">
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
                  {" "}
                  {moment(task.created_at).fromNow()}
                </p>
              </div>
            </div>
            {getComment.length > 0 &&
              getComment.map((x) => (
                <div
                  key={x}
                  className="w-[100%] py-2 flex items-center space-x-2 font-semibold "
                >
                  <div className="bg-rose flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
                    <div className="flex text-white">
                      {task.myuser.myprofile.fullname &&
                        task.myuser.myprofile.fullname.split("")[0]}
                      {task.myuser.myprofile.fullname &&
                        task.myuser.myprofile.fullname.split("")[1]}
                    </div>
                  </div>
                  <div className="max-w-[500px]">
                    <div className="bold text-black">{x.myuser.fullname}</div>
                    <div className="text-gray-800 font-normal">{x.message}</div>
                    <div
                      onClick={() => console.log(x)}
                      className="text-gray-800  font-normal"
                    >
                      {x.commentAttachments?.length >= 1 && (
                        <>
                          {x.commentAttachments.map((e) => (
                            <div key={e.attachment}>
                              {checkIfImage(e.document) ? (
                                <img
                                  src={baseUrl + "/uploads/" + e.document}
                                  alt={e.attachment}
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "300px",
                                  }}
                                />
                              ) : (
                                <div>
                                  <Link
                                    href={baseUrl + "/uploads/" + e.document}
                                  >
                                    <a className="btn btn-primary">
                                      Download {e.document}
                                    </a>
                                  </Link>
                                  <div>
                                    <img
                                      src={baseUrl + "/uploads/" + e.attachment}
                                      alt={e.attachment}
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "300px",
                                      }}
                                    />
                                  </div>
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
        <div className="w-[100%]  py-3 flex items-center space-x-2  ">
          <div className="bg-rose flex items-center justify-center rounded-full w-8 h-8 text-secondary font-semibold">
            <div className="flex text-white">
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
                  setListTag(e.target.value);
                }}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder={
                  commentmessage || attachmessage
                    ? commentmessage || attachmessage
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
            <div className="bg-rose text-[13px] flex items-center justify-center rounded-full w-6 h-6 text-secondary font-semibold">
              <div className="flex text-white">
                {task.myuser.myprofile.fullname &&
                  task.myuser.myprofile.fullname.split("")[0]}
                {task.myuser.myprofile.fullname &&
                  task.myuser.myprofile.fullname.split("")[1]}
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
