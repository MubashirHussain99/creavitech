import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlinePlus } from "react-icons/ai";

export default function Emailforwarding({ setmodal, modal }) {
  const [values, setValues] = React.useState("");

  const privacy = [
    { value: 10, name: "Public to My Workspace" },
    { value: 20, name: "Private to My Workspace" },
  ];

  const handleChange = (event) => {
    setValues(event.target.value);
    console.log(event);
  };
  return (
    <div className="text-white bg-secondary">
      <div className="py-3 px-5">
        <p>
          You can create tasks & messages from email addresses associated with
          Creavitech.
        </p>
      </div>
      <div className="py-3 px-5 space-y-4">
        <p>
          <b>Create Tasks</b> by emailing{" "}
          <span className="text-blue-400"> x@mail.creavitech.com</span>. Tasks
          emailed will appear in your My Tasks list.
        </p>
        <div>
          <li>The subject line will be the task name</li>
          <li>The body will be the task description</li>
          <li>All email attachments will be attached to the task</li>
          <li>You can cc teammates to add them as task collaborators</li>
        </div>
        <div className="py-2 pl-3">
          <p>
            <b>Create messages </b>by emailing [team-name]@mail.creavitech.com.
            For example, marketing@mail.creavitech.com goes to the Marketing
            team, and customer-success@mail.creavitech.com goes to the Customer
            Success team
          </p>
        </div>
        <div className="flex pt-8 px-3 text-base">
          <div className="space-y-8">
            <p className="text-gray-300">EMAILS SENT FROM</p>
            <p>muhammadsarimwajid@gmail.com</p>
          </div>
          <div className="ml-16 space-y-3 ">
            <p className="text-gray-300">CREATE TASKS & MESSAGES IN</p>
            <FormControl sx={{ width: 250 }} variant="standard" fullWidth>
              <InputLabel
                sx={{ color: "white" }}
                color="warning"
                id="demo-simple-select-standard-label"
              >
                Select your privacy
              </InputLabel>
              <Select
                value={values}
                inputProps={{
                  sx: {
                    color: "white",
                    borderBottom: "2px #ee802e solid",
                  },
                }}
                color="warning"
                label="Select your privacy"
                onChange={handleChange}
              >
                {privacy.map((x) => (
                  <MenuItem key="name" value={x.value}>
                    {x.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="py-3  ">
          <div className="flex justify-between py-3 border-t border-t-gray-200">
            <button className="flex items-center space-x-1 bg-primary bg-white  py-2 px-2 rounded-[5px] text-black">
              <AiOutlinePlus />
              <p> Add New Email</p>
            </button>
            <button className="bg-red-500  py-2 px-5 rounded-[5px] text-black  md:text-sm">
              Remove Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
