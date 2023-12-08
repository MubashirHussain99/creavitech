import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import Api from "../../../API/Api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CommentSection({ TaskId, setcomment, msg, setmsg }) {
  const data = useSelector((x) => x);

  // useEffect(() => {}, []);

  const createComment = (e) => {
    e.preventDefault();
    setstate(true);
    Api.fetchPost({ message: msg }, `/tasks/${TaskId}/comments`)
      .then((x) => {
        if (x.data.message == "your message is sent") {
          // window.location.reload();
          setstate(false);
          setmsg("");
        }
      })
      .catch((err) => console.log(err));
  };
  const [state, setstate] = useState(false);
  return (
    <div className="bg-slate-50 text-gray-200 ">
      <div className="flex h-[150px] bg-slate-50 pt-5 w-[100%]  ">
        <div className="text-[10px] w-7 h-7 m-2 rounded-[40px] bg-secondary flex justify-center items-center">
          <p className="text-white">
            {data.User_name && data.User_name.split("")[0]}
            {data.User_name && data.User_name.split("")[1]}
          </p>
        </div>

        <form className="w-full" onSubmit={(e) => createComment(e)}>
          <div className="mb-4 w-full bg-gray-50 rounded-lg ">
            <div className="py-2 px-4 bg-white rounded-t-lg border border-gray-200">
              <label className="sr-only">
                Your comment
              </label>
              <TextField
                sx={{ width: 490 }}
                value={msg}
                label="comment"
                className="text-decoration"
                variant="outlined"
                helperText="Please enter your comment"
                onChange={(e) => setmsg(e.target.value)}
              ></TextField>
            </div>
            <div className="flex justify-center items-center py-2 px-3 border-t ">
              <button
                onClick={(e) => {
                  createComment(e);
                }}
                type={"submit"}
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-secondary rounded-full focus:ring-4 focus:ring-blue-200 "
              >
                {state == true ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress size={8} />
                  </Box>
                ) : (
                  "Post comment"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="flex justify-between mb-2">
        <div className="flex pl-3">
          <div>colaborators</div>
          <div className="flex ml-5">
            <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center">
              <p className="text-gray-500">Wn</p>
            </div>
            <div className="h-8 w-8 ml-1 rounded-full">
              <img src="/user1.png" />
            </div>
            <div className="h-8 w-8 ml-1 rounded-full">
              <img src="/user1.png" />
            </div>
            <div className="h-8 w-8 ml-2 flex items-center justify-center hover:rounded-md hover:bg-slate-100">
              <img src="/Addd.png" />
            </div>
          </div>
        </div>
        <div className="flex items-centers justify-center">
          <BsBell className="mt-[5px] " />

          <div>Leave Task</div>
        </div>
      </div> */}
    </div>
  );
}
