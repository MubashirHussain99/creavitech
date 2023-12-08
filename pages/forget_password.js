import React from "react";
import { useState } from "react";
import Spinner from "../components/spinner/Spinner";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function forget_password() {
  const [password1, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordVisibility2 = () => {
    setShowNewPassword(!showNewPassword);
  };
  return (
    <section className="h-screen">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="md:w-60 w-44 absolute top-0 left-0 overflow-hidden">
            <div className="relative -left-[70px] -top-[45px]">
              <img
                src="https://i.postimg.cc/ydmjbWsx/sider-black.png"
                alt="loading"
              />
            </div>
          </div>

          <div key="" className=" flex justify-center items-center h-screen">
            <form
              onSubmit={(e) => ForgetPassword(e)}
              className=" w-[90%] flex justify-center items-center h-full"
            >
              <div
                id="shadow"
                className="flex flex-col w-[450px] h-[500px] justify-evenly "
              >
                <div className="flex flex-col items-center  space-y-1">
                  <h1 className="mb-1">
                    <img
                      className="w-64"
                      src="/sidebarlogo.png"
                      alt="loading"
                    />
                  </h1>
                  <h6 className="text-secondary font-semibold">
                    Change your <span className="text-rose"> Password </span>
                  </h6>
                </div>

                <div className="w-[100%] space-y-10 text-[13px] px-[20px]  h-[180px] flex flex-col items-center text-secondary">
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    type={showPassword ? "text" : "password"}
                    label="password"
                    placeholder="Enter your password"
                    value={password1}
                    onChange={(e) => setPassword(e.target.value)}
                    // error={message == "Invalid login"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordVisibility}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    type={showNewPassword ? "text" : "password"}
                    label="NewPassword"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    // error={message == "Invalid login"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordVisibility2}>
                            {showNewPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <p className="text-red-700 text-base flex items-center justify-center">
                    {/* {message && message} */}
                  </p>
                </div>

                <div className="text-xs py-2 text-center space-y-7">
                  <button
                    id="shadow1"
                    type="submit"
                    className="w-[90%] bg-rose text-center h-10 rounded-md text-white font-semibold text-[14px]"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="md:w-60 w-44 absolute bottom-0 right-0 overflow-hidden rotate">
            <div className="relative md:-bottom-[45px] md:-right-[70px] -bottom-[50px] -right-[70px]">
              <img
                src="https://i.postimg.cc/pXtsNwd4/sider-orange.png "
                alt="loading"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default forget_password;
