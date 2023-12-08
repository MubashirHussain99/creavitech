import React, { useState } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import Api from "../../../../API/Api";

export default function Invitemodal({ setmodal, modal }) {
  const [EmailModal, setEmailModal] = useState([]);

  const [email, setemail] = useState("");
  const [UsersID, setUsersID] = useState("");

  const data = useSelector((x) => x);

  const invitePeople = (e) => {
    Api.fetchPost(
      { email: email, invited_user_id: UsersID },
      "/add/userstoProfile"
    ).then((x) => console.log(x, "<=== invited user"));
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
        <div className="font-extrabold = text-xl text-rose">
          Invite people to My Workspace
        </div>

        <div onClick={() => setmodal(false)} className="hover:text-red-500">
          <ImCross size={20} />
        </div>
      </div>

      <form
        onSubmit={(e) => invitePeople(e)}
        className="flex items-center h-[50%] "
      >
        <div className=" mt-8 text-primary">
          <h1>Email Address</h1>
          <input
            placeholder={UsersID}
            value={email}
            className="bg-gray-50 h-10 w-56 py-3"
            onChange={(e) => {
              setemail(e.target.value), setEmailuser(e);
            }}
          />
          <div>
            {EmailModal.length ? (
              <div className="absolute h-auto w-72 border border-slate-400">
                {EmailModal.map((x, i) => (
                  <div
                    key={i}
                    onClick={(t) => {
                      setUsersID(x.id), setEmailModal(""), setemail(x.email);
                    }}
                  >
                    {x.email}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <input className="hidden" type={"submit"} />
        </div>
      </form>
    </Modal>
  );
}