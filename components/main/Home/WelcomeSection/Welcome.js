import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdDone, MdPeople } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import Prioritie from "../../My priorities/innerProject/Prioritie";
import Project from "../../Project/Project";
import Peoples from "../../Peoples/Peoples";
import Api from "../../../../API/Api";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";

export default function Welcome({ open }) {
  const [task, settaskn] = useState("");
  const [task1, settask1n] = useState("");
  const [completedtask, setcompletedtask] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [divHeight, setDivHeight] = useState(0);
  useEffect(() => {
    Api.fetchGet(`/completed/tasks`).then((x) => {
      setcompletedtask(x.data.data.length);
    });
  }, [completedtask]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const date = new Date();
  const data = useSelector((x) => x);

  const updateDivHeight = () => {
    const screenHeight = window.innerHeight;
    setDivHeight(screenHeight - 70);
  };

  useEffect(() => {
    // Initial update
    updateDivHeight();

    // Event listener to update the height on window resize
    window.addEventListener("resize", updateDivHeight);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);

  return (
    <div
      style={{ height: divHeight }}
      className=" text-secondary overflow-scroll"
    >
      <div className="md:px-4 px-2 text-secondary">
        <div className="space-y-4 py-4 flex flex-col items-center">
          <h6 className="text-sm font-semibold md:text-lg">
            {moment(date).format("LLLL")}
          </h6>
          <h1 className="md:text-[25px] text-lg font-poppins">
            Have a good day,
            <span className="text-rose ml-2 font-poppins">
              {data.User_name}
            </span>
          </h1>
          <div className="flex md:flex-row flex-col font-medium justify-between w-[45%] bg-[#f6f6f6] h-12  px-4 rounded-3xl text-[#5f5f5f] text-[14px]">
            <button
              // onClick={openModal}
              className="flex  py-2 px-2 rounded-[10px] flex-col md:flex-row items-center gap-3"
            >
              <span>
                <AiOutlinePlus />
              </span>
              <span>Create Project</span>
            </button>
            <div className="flex md:flex-row items-center gap-3">
              <span>
                <MdDone />
              </span>
              <span className="flex flex-row space-x-2">
                <div>{completedtask}</div>
                <p> tasks completed</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span>
                <AiOutlineUser />
              </span>
              <span>0 Collaborators</span>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between">
          <Prioritie />
          <Project open={open} />
        </div>
        <Peoples />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="flex justify-center items-center h-screen relative z-50"
      >
        <form>
          <div className="h-[300px] bg-secondary rounded-lg px-9 w-[650px] space-y-14 flex flex-col">
            <div className="w-[100%] flex justify-between items-center mt-16">
              <p className="font-bold text-[25px] text-primary border-b border-b-white w-[240px]">
                Create New Project
              </p>
              <ImCross
                className="hover:text-gray-400 cursor-pointer text-white"
                onClick={closeModal}
              />
            </div>
            <input
              className="border-black border mt-1 px-2 h-10 w-[330px]"
              placeholder="Write project name"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
