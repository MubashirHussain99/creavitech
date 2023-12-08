import React, { useState, useEffect } from "react";
import { AiOutlineLike, AiOutlineCheck } from "react-icons/ai";
import { CgAttachment } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";
import { CgPushRight } from "react-icons/cg";
import { TbSubtask } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import Detailbox from "../Detailbox/Details2";
import Api from "../../API/Api";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Details from "../Detailbox/Details";
import Details2 from "../Detailbox/Details2";
import BoardDetails2 from "../Detailbox/BoardDetails2";

export default function BoardSideDetails2({
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
  setRefresh,
  Refresh,
  setNowStatus2,
  NowStatus2,
  settask_name,
  task_name,
  Subtask,
  newTaskrefresh,
  setnewTaskrefresh,
  AccordionsubTask,
}) {
  const data = useSelector((x) => x);
  useEffect(() => {
    setLoading(false);
  }, []);

  const completed = () => {
    Api.Update(
      { msg: "update" },
      `/boardsubtasks/${AccordionsubTask.id}/status`
    )
      .then((x) => {
        console.log(x);
        setNowStatus2(x.data.status), setRefresh(x);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setNowStatus2(AccordionsubTask.status);
  }, [AccordionsubTask, data.Project_id]);

  const [deletediv, setdelete] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className="border z-50 -mt-[1px] w-[100%] ">
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
      
      <BoardDetails2
        settaskRefresh={settaskRefresh}
        Refresh={Refresh}
        setRefresh={setRefresh}
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
      />
    </div>
  );
}
