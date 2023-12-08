import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLike, AiOutlineCheck } from "react-icons/ai";
import { CgAttachment } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";
import { CgPushRight } from "react-icons/cg";
import { TbSubtask } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
// import { HiDotsHorizontal } from "react-icons/Hi";
import Detailbox from "../Detailbox/Details2";
import Api from "../../API/Api";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Details from "../Detailbox/Details";
import Details2 from "../Detailbox/Details2";
import { motion } from "framer-motion";

export default function SideDetail2({
  setDetails,
  task,
  taskRefresh,
  settaskRefresh,
  setName,
  taskName,
  dueDate,
  setdueDate,
  secId,
  setsubTaskName,
  subTaskName,
  settaskName,
  setTask,
  setStatus,
  status,
  setrefresh,
  refresh,
  setNowStatus2,
  NowStatus2,
  settask_name,
  task_name,
  Subtask,
  newTaskrefresh,
  setnewTaskrefresh,
  AccordionsubTask,
  subtaskuserdeletemodal,
  setsubtaskuserdeletemodal,
}) {
  const data = useSelector((x) => x);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [dataID, setDataID] = useState(localStorage.getItem("myData"));

  const dispatch = useDispatch();

  const completed = () => {
    if (data.user_status == 10) {
      Api.Update(
        { msg: "update" },
        `/completed/task/${AccordionsubTask.task_id}/Subtasks/${AccordionsubTask.id}`
      )
        .then((x) => {
          if (x.data.taskUpdate.status === 20) {
            Api.fetchPost(
              {
                message: `${data.User_name} marked subtask " ${AccordionsubTask.name} " as Completed in project " ${data.Project_name} ""`,
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
          if (x.data.taskUpdate.status === 10) {
            Api.fetchPost(
              {
                message: `${data.User_name} marked subtask " ${AccordionsubTask.name} as Incompleted in project " ${data.Project_name} " "`,
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
          console.log(x, "asasaasassaa");
          console.log(statusmsg, "asasaasassaa");
          setNowStatus2(x.data.taskUpdate.status), setrefresh(x);
          if (x.data.taskUpdate.status === 20) {
            setstatusmsg(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (statusmsg) {
      timeoutRef.current = setTimeout(() => {
        setstatusmsg(false);
      }, 2500);
    } else {
      clearTimeout(timeoutRef.current);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [statusmsg]);

  useEffect(() => {
    setNowStatus2(AccordionsubTask.status);
  }, [AccordionsubTask, data.Project_id]);

  const [deletediv, setdelete] = useState(false);
  const [loading, setLoading] = useState(true);

  const [statusmsg, setstatusmsg] = useState(false);

  return (
    <div className="border z-50 -mt-[1px] w-[100%]">
      <div className="h-14 flex justify-between  p-5 items-center">
        {NowStatus2 == 10 ? (
          <div
            onClick={() => completed()}
            className="w-[120px] p-2 h-[28px] flex justify-between cursor-pointer
             text-[12px] rounded-lg items-center border-[1px] "
          >
            <AiOutlineCheck />
            <p>Mark Complete</p>
          </div>
        ) : (
          <div
            onClick={() => completed()}
            className="w-[100px] p-2 h-[28px] flex justify-between cursor-pointer
             text-[12px] text-green-400 rounded-lg items-center border-[1px] border-green-400 "
          >
            <AiOutlineCheck />
            <p>Completed</p>
          </div>
        )}

        {statusmsg && (
          <motion.div
            animate={{ x: [140, 0] }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            id="shadow"
            className="fixed top-4 right-0 flex justify-center items-center
          py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
          >
            <p className="font-poppins font-bold text-[17px]">
              SubTask Completed Successfully
            </p>
          </motion.div>
        )}

        <div className="flex justify-end space-x-3 lg:w-[40%] text-gray-500 ">
          {/* <div className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center">
            <AiOutlineLike size={20} />
          </div>
          <div className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center">
            <CgAttachment size={20} />
          </div>
          <div className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center">
            <TbSubtask size={20} />
          </div>
          <div className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center">
            <BsLink45Deg size={20} />
          </div> */}
          {/* <div
            onClick={() => setdelete(!deletediv)}
            className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center"
          >
            <HiDotsHorizontal size={20} />
            {deletediv == true && (
              <div
                id="shadow2"
                className="absolute z-10 w-[90px] h-auto rounded-md mt-24 ml-4 bg-white border border-gray-100 "
              >
                <div
                  //  onClick={()=>DeleteSection(x.project_id,x.id)}
                  className="flex items-center space-x-2 border-b text-gray-400 hover:text-red-500 py-1 pl-1"
                >
                  <MdDeleteOutline size={18} />
                  <p className="text-sm font-normal">delete</p>
                </div>
              </div>
            )}
          </div> */}
          <div
            onClick={() => {
              setDetails(false), setdelete(false);
            }}
            className="hover:bg-slate-100 w-8 rounded-xl flex items-center justify-center"
          >
            <CgPushRight size={20} />
          </div>
        </div>
      </div>
      <Details2
        settaskRefresh={settaskRefresh}
        taskRefresh={taskRefresh}
        setrefresh={setrefresh}
        task={task}
        taskName={taskName}
        setName={setName}
        dueDate={dueDate}
        setdueDate={setdueDate}
        secId={secId}
        setsubTaskName={setsubTaskName}
        subTaskName={subTaskName}
        settaskName={settaskName}
        setTask={setTask}
        setStatus={setStatus}
        status={status}
        setDetails={setDetails}
        settask_name={settask_name}
        task_name={task_name}
        Subtask={Subtask}
        newTaskrefresh={newTaskrefresh}
        setnewTaskrefresh={setnewTaskrefresh}
        AccordionsubTask={AccordionsubTask}
        subtaskuserdeletemodal={subtaskuserdeletemodal}
        setsubtaskuserdeletemodal={setsubtaskuserdeletemodal}
      />
    </div>
  );
}
