import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Modal from "react-modal";

export default function Profile({ setmodal, modal }) {
  const [name, setname] = useState("");
  const [pronouns, setpronouns] = useState("");
  const [title, settitle] = useState("");
  const [team, setteam] = useState("");
  const [aboutme, setaboutme] = useState("");

  const profileUpdate = () => {
    Api.Update(
      { department_team: team, fullname: name, job_title: title },
      `/letmeupdate`
    )
      .then((x) => {
        console.log(x);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className=" px-5 py-2 text-white">
        <p>Your photo</p>
        <div className="flex space-x-5">
          <div className="h-12 w-12 bg-white rounded-full "></div>
          <div>
            <button className="text-primary">
              <u>Upload your photo</u>
            </button>
            <p>Photos help your teammates recognize you in Creavitech</p>
          </div>
        </div>
      </div>

      <form className="px-6 py-6 text-white">
        <div className="space-y-10">
          <div className="flex justify-evenly">
            <div className="space-y-2">
              <p>Your full name</p>
              <TextField
                onChange={(x) => setname({ ...input, name: x.target.value })}
                sx={{ width: 250 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
              />
            </div>
            <div className="space-y-2">
              <p>Pronouns</p>
              <TextField
                onChange={(x) =>
                  setpronouns({ ...input, name: x.target.value })
                }
                sx={{ width: 250 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
                placeholder="Third-person pronouns"
                className="border-white border text-white"
              />
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="space-y-2">
              <p>Job title</p>
              <TextField
                onChange={(x) => settitle({ ...input, name: x.target.value })}
                sx={{ width: 250 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
              />
            </div>
            <div className="space-y-2">
              <p>Department or team</p>
              <TextField
                onChange={(x) => setteam({ ...input, name: x.target.value })}
                sx={{ width: 250 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div>
              <p>Email</p>
              <TextField
                sx={{ width: 250 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
                placeholder="Nexomos@gmail.com"
                className="pt-4"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <div>
              <p>About me</p>
              <TextField
                sx={{ width: 600 }}
                inputProps={{
                  sx: {
                    color: "gray",
                    borderBottom: "2px white solid",
                    "&:hover": {
                      borderBottom: "2px white solid",
                    },
                  },
                }}
                variant="standard"
                color="warning"
                placeholder="Nexomos@gmail.com"
                className="pt-4"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 pt-16">
          <div className="space-y-2">
            <p className="text-sm">invite type</p>
            <p className="font-bold text-lg">
              Signed up on <span className="text-primary"> Oct 12, 2022</span>
            </p>
          </div>
          <div>
            <button className="py-2 px-2 border border-gray-400  rounded-[10px]">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
