import React,{useState}from "react";
import Modal from "react-modal";
  import Emailforwarding from "./Emailforwarding";
  import { ImCross } from "react-icons/im";
import Profile from "./Profile";
import { height } from "@mui/system";

export default function Mysetting({setmodal, modal}) {
  const [state, setstate] = useState(1)
  return (
    <Modal
      isOpen={modal}
      ariaHideApp={false}
      contentLabel="Example Modal"
      // onRequestClose={() => !modal}
      className={` ${
        state == 3 ?" bg-secondary select-none h-[66%] w-[57%] ml-[21%] mt-[4%]" : " bg-secondary select-none h-[80%] w-[57%] ml-[21%] mt-[4%]"}`}
     
    >
      <div>
        <div
       
        className="px-7 py-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-rose">My Settings</h1>
          <div
           onClick={()=>setmodal(false)}
          className="hover:text-red-500">
          <ImCross size={20} />
          </div>
        </div>
        <div className="flex space-x-3 px-7  border-b border-b-gray-400">
          <div className="space-x-6 text-white">
            <button
             onClick={() => setstate(1)}
            className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Profile
            </button>
            <button className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Notifications
            </button>
            <button
            onClick={() => setstate(3)}
            className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Email Forwarding
            </button>
            <button className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Account
            </button>
            <button className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Display
            </button>
            <button className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Apps
            </button>
            <button className="font-bold hover:text-primary border-b-[3px] py-2 border-b-secondary hover:border-b-primary">
              Hacks
            </button>
          </div>
           
         
        </div>
        {state == 1 &&
          <Profile modal={modal} setmodal={setmodal}/>
            }
             {state == 3 &&
          <Emailforwarding modal={modal} setmodal={setmodal}/>
            } 
      </div>
    </Modal>
  );
}
