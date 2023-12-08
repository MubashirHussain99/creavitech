import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Api from "../../../API/Api";

export default function Newprojects() {
  const [inputs, setInputs] = useState({
    name: "",
    privacy: 10,
  });

  const [values, setValues] = React.useState("");

  const privacy = [
    { value: 10, name: "Public to My Workspace" },
    { value: 20, name: "Private to My Workspace" },
  ];
  const afterCreate = (x) => {
    x.data.message == "Project Created!" && (window.location = "/");
  };
  const createProject = () => {
    Api.fetchPost({ privacy: values, name: inputs.name }, "/projects")
      .then((x) => afterCreate(x))
      .catch((err) => console.log(err));
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setValues(event.target.value);
    console.log(event);
  };
  return (
    <div className="flex">
      <div className="w-[35%]">
        <div>
          <div className="pt-40 pl-16">
            <div>
              <h1 className="text-3xl text-primary">New Project</h1>
            </div>
            <div className="pt-10">
              <FormControl sx={{ width: 300 }}>
                <TextField
                  label="Project name"
                  className="text-decoration"
                  variant="standard"
                  helperText="Please enter your Project name"
                  onChange={(x) =>
                    setInputs({ ...inputs, name: x.target.value })
                  }
                ></TextField>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="pl-16 py-5">
          <FormControl sx={{ width: "300px" }} variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">
              Select your privacy
            </InputLabel>
            <Select
              value={values}
              label="Select your privacy"
              onChange={handleChange}
            >
              {privacy.map((x) => (
                <MenuItem key={x} value={x.value}>{x.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <button
            onClick={createProject}
            className="border-2 border-block w-[300px] mt-8 pt-1 pb-1 ml-16 border-primary text-primary"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="w-[70%] pt-36 pl-14">
        <img src="/asana1.png" />
      </div>
    </div>
  );
}
