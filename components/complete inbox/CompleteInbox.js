import React, { useState } from "react";
import Archieve from "./Archieve";
import Inbox from "./Inbox";
import Message from "./Message";

export default function CompleteInbox() {
  const [state, setstate] = useState(1);
  return (
    <div>
      <div className="text-primary">
        <p className="text-bold text-[20px] font-bold px-5 py-3">Inbox</p>
      </div>
      <div className="border-b border-b-slate-300 pl-4 space-x-3 text-primary text-bold text-[15px] font-bold">
        <button
          onClick={() => setstate(1)}
          className="hover:text-black px-3 py-3 border-b-[3px] hover:border-primary border-white active:border-primary"
        >
          Activity
        </button>
        <button
          onClick={() => setstate(2)}
          className="hover:text-black border-r border-r-slate-300 py-3 border-b-[3px] hover:border-primary border-white hover:border-r-slate-300 px-3"
        >
          Archieve
        </button>
        <button
          onClick={() => setstate(3)}
          className="hover:text-black px-3 py-3 border-b-[3px] hover:border-primary border-white"
        >
          message {"I've"} sent
        </button>
      </div>

      {state == 1 && <Inbox />}

      {state == 2 && <Archieve />}
      {state == 3 && <Message />}
    </div>
  );
}
