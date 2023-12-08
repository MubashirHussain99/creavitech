import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import Api from "../../../API/Api";

export default function Modals({ modal, setmodal }) {
  const [EmailModal, setEmailModal] = useState([]);

  const [email, setemail] = useState("");
  const [UserID, setUserID] = useState("");
  const [modalopen, setmodalopen] = useState(false);

  const data = useSelector((x) => x);

  const invitePeople = (e) => {
    e.preventDefault();
    setmodalopen(true)
    Api.fetchPost(
      { user_id: UserID, project_id: data.Project_id },
      "/add/projectsusers"
    ).then((x) =>  setmodalopen(false) , setmodal(false));
  };
  const setEmailuser = (e) => {
    Api.fetchPost({ query: e.target.value }, "/get/users")
      .then((x) => setEmailModal(x.data))
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      isOpen={modal}
      ariaHideApp={false}
      onRequestClose={() => !modal}
      className="bg-secondary border h-[30%] w-[50%] p-5  ml-[25%] mt-[10%]"
      contentLabel="Example Modal"
    >
      <div className="flex justify-between px-5 py-2">
        <div className="font-extrabold text-xl text-rose">
          Invite people to My Workspace
        </div>

        <div onClick={() => setmodal(false)} className="hover:text-red-500">
          <ImCross size={20} />
        </div>
      </div>
      <hr className=" ml-3 py-2 w-[50%] text-red-800" />
      <p className="text-white  ">
        Your teammates will get directly involve after inviting them in your
        workSpace
      </p>
      <form
        onSubmit={(e) => invitePeople(e)}
        className="flex items-center h-[50%] "
      >
        <div className=" mt-8">
          <h1 className=" text-primary">Email Address</h1>
         {modalopen == true ?
          <Box sx={{ display: "flex" }}>
          <CircularProgress size={8} />
        </Box>
       : 
          <input
            placeholder={email}
            value={email}
            className="bg-gray-50 h-10  w-56 py-3"
            onChange={(e) => {
              setemail(e.target.value), setEmailuser(e);
            }}
          />}
          <div>
            {EmailModal.length > 0 && email &&(
              <div className="absolute h-auto w-72 border text-primary bg-secondary border-slate-400">
                {EmailModal.map((x) => (
                  <div
                    key={x}
                    onClick={(t) => {
                      console.log(x);
                      setUserID(x.id), setEmailModal(""), setemail(x.email);
                    }}
                  >
                    {x.email}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input className="hidden" type={"submit"} />
        </div>
      </form>
    </Modal>
  );
}