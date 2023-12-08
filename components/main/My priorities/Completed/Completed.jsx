import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Api from "../../../../API/Api";
import moment from "moment";

export default function Completed() {
  const [task, settask] = useState("");
  const [task1, settask1] = useState("");
  useEffect(() => {
    Api.fetchGet("/findmysubtask").then((x) => settask(x.data));
  }, [task]);
  useEffect(() => {
    Api.fetchGet("/completed/subtasks").then((x) =>{
    // console.log(x.data.data)
      settask1(x.data.data)
    }
    );
  }, [task1]);
  
  return (
    <div className="justify-between px-16 h-[70%] overflow-y-scroll ">
      {task1 &&
        task1.map((x, i) => (
          <div key={i}>
            {x.status == 20 && (
              <div className="flex items-center py-1 justify-between text-[12px]">
                <div className="flex items-center space-x-1 sm:text-[12px] lg:text-[25px] text-[12px]">
                  <AiOutlineCheckCircle size={18} color="green" />

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
      {task &&
        task.map((s) => (
          <div key={s}>
            {s.status == 20 && (
              <div className="flex items-center justify-between py-1 text-[12px]">
                <div className="flex items-center space-x-1 sm:text-[12px] lg:text-[25px] text-[12px]">
                  <AiOutlineCheckCircle size={18} color="green" />

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
{
  /* <div className="flex flex-col justify-between px-16 bg-slate h-[178px] overflow-scroll" >
      {task &&
        task.map((x) => (
          <div>
            
            <div className="flex items-center justify-between my-2">
              <div className="flex sm:text-[15px] lg:text-[25px] text-[15px]">
                <AiOutlineCheckCircle color="green" />
              
              <div className="text-[12px] sm:text-[12px] lg:text-[18px]">
                {x.name}
              </div>
              </div>
              <div className="text-right text-[12px]">
              {moment(x.due_date).format("MMM Do")}
                </div>
            </div>
            
          </div>
        ))}
    </div> */
}
