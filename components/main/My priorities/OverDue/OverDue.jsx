import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Api from "../../../../API/Api";
import moment from "moment";

export default function OverDue() {
  const [task, settask] = useState("");
  const [subtask, setsubtask] = useState("");

  useEffect(() => {
    Api.fetchGet("/incompleted/subtasks").then((x) =>
      settask(x.data.data, "*&*&")
    );
  }, []);

  useEffect(() => {
    Api.fetchGet("/findmysubtask").then((x) => {
      setsubtask(x.data);
    });
  }, []);
  // useEffect(() => {
  //   Api.fetchGet("/incompleted/Subtasks").then((x) => setsubtask(x.data.data));
  // }, []);
  // console.log(subtask, "<===========");
  return (
    <div className="justify-between px-16  ">
      {task &&
        task.map((x, i) => (
          <div key={i} className="border-b-2 border-b-gray-300 px-3">
            {x.status == 10 && (
              <div className="flex items-center py-1 justify-between text-[12px]">
                <div className="flex items-center space-x-1 sm:text-[12px] lg:text-[25px] text-[12px]">
                  <AiOutlineCheckCircle size={18} color="gray" />

                  <div className="text-[12px] sm:text-[12px] lg:text-[18px]">
                    {x.name}
                  </div>
                </div>
                <div className="text-right text-[12px]">
                  {moment(x.due_date).format("MMM Do")}
                  {/* </div> */}
                </div>
              </div>
            )}
          </div>
        ))}
      {subtask &&
        subtask.map((s) => (
          <div key={s}>
            {s.status == 10 && (
              <div className="flex items-center justify-between py-1 text-[12px] border-b-2 border-b-secondary ">
                <div className="flex items-center space-x-1 sm:text-[12px] lg:text-[25px] text-[12px] bg-red-500">
                  <AiOutlineCheckCircle size={18} color="red" />

                  <p className="text-[12px] sm:text-[12px] lg:text-[17px]">
                    {s.name}
                  </p>
                </div>
                <div className="text-[12px]">
                  {moment(s.due_date).format("MMM Do")}
                  {/* </div> */}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
