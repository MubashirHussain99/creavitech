import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Api from "../API/Api";
import Spinner from "./spinner/Spinner";
import { useDispatch } from "react-redux";
import Custom_Textfield from "./structure/custom_textfield";

const EmailVerify = ({
  message,
  email,
  password,
  setpassworderror,
  Name,
  confirmpass,
  inviteemail,
  inviteteam_id,
  // inviteproject_id,
}) => {
  const [verCode, setVerCode] = useState("");
  // const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [Already, setAlready] = useState(true);

  const afterSignup = (msg) => {
    // msg == "Profile is created" && (window.location = "/");
    Api.fetchPost({ email, password }, "/login")
      .then((x) => {
        afterlogin(x.data.token);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const dispatch = useDispatch();

  const afterlogin = (token) => {
    localStorage.setItem("user", token);
    token && (window.location = "/signup2");
    token &&
      Api.fetchGet("/getTeam")
        .then((x) => {
          console.log(x.data[0].Teams.id);
          localStorage.setItem("myData", x.data[0].Teams.id);
        })
        .catch((e) => {
          console.log(e);
        });
    token &&
      Api.fetchGet("/get/userinfo").then((x) => {
        console.log(x.data.data.myprofile.status);
        token &&
          dispatch({
            type: "userstatus",
            payload: x.data.data.myprofile.status,
          });
      });
  };

  // Api.fetchPost({ email, password }, "/login")
  //   .then((x) => {
  //     afterlogin(x.data.token);
  //   })
  //   .catch((e) => {
  //     setMessage("error"); //e.response.data
  //   });

  // const GetCode = (e) => {
  //   e.preventDefault();
  //   if (password.length < 8) {
  //     setpassworderror(true);
  //   } else {
  //     setpassworderror(false);
  //   }
  //   if (Name.length < 4) {
  //     setnameerror(true);
  //   } else {
  //     setnameerror(false);
  //   }
  //   if (!email.match(/\S+@\S+\.\S+/)) {
  //     setemailerror(true);
  //   } else {
  //     setemailerror(false);
  //   }
  //   if (confirmpass != password) {
  //     setConfirmPassmsg(true);
  //   } else {
  //     setConfirmPassmsg(false);
  //   }

  //   email.match(/\S+@\S+\.\S+/) &&
  //     password.length > 7 &&
  //     Name.length > 2 &&
  //     confirmpass == password &&
  //     Api.fetchPost({ email: email }, "/sentcode")
  //       .then((x) => {
  //         setmsg(x.data.message), console.log(x.data.message);
  //         setchangeComp(true);
  //       })
  //       .catch((e) => {
  //         console.log(e.response);
  //       });
  // };

  const SIGNUP = (e) => {
    e.preventDefault();
    Api.fetchPost(
      {
        email: inviteemail ? inviteemail : email,
        password: password,
        fullname: Name,
        reset_code: verCode,
        inviteteam_id: inviteteam_id,
      },
      "/register"
    )
      .then((x) => {
        afterSignup(x.data.message);
        console.log(x.data);
      })
      .catch((e) => {
        // console.log(e.response.data);
        setAlready(e.response.data);
        // afterSignup(e.response.data)
      });
  };
  //   const GetCode = (e) => {
  //     e.preventDefault();
  //     Api.fetchPost({ email: email }, "/sentcode")
  //       .then((x) => {setmsg(x.data.message)})
  //       .catch((e) => {
  //         console.log(e.response);
  //       });
  //   };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="h-[100vh]">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="w-[100%] h-screen items-center justify-center">
            <div className='w-[100%] sm:px-12 px-4 py-7'>
              <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
            </div>
            <form
              onSubmit={(e) => SIGNUP(e)}
              className=" w-[100%] flex justify-center items-center py-10"
            >
              <div
                id=""
                className="relative sm:w-[450px] sm:p-5 p-3 w-[100%] flex flex-col justify-between z-50 "
              >
                <div className="flex flex-col justify-between ">
                  {/* <div className="flex flex-col items-center">
                    <img
                      className="w-48  -mt-[60px]"
                      src="/sidebarlogo1.png"
                      alt="loading"
                    />
                  </div> */}

                  <div className="md:text-[13px] text-[12px] text-secondary py-6">
                   
                    <div className='text-[#323338] font-bold sm:text-[32px] text-[18px] py-4'>Verify your account</div>
                    {/* <div className="text-[16px]">
                      By signing up, I agree to the
                      <span className="text-sky"> Creavitech </span> Privacy
                      Policy <br />
                      &amp; Terms and conditions
                    </div> */}
                  </div>
                </div>
                <div className=" text-secondary flex flex-col justify-between space-y-2">
                  <Custom_Textfield id="variant" setInput={setVerCode} labelText="Verification Code" placeholder="Enter your Verification Code " type="number" />
                  {/* <TextField
                    className="-mt-3"
                    id="variant"
                    label="Verification Code"
                    variant="standard"
                    onChange={(e) => setVerCode(e.target.value)}
                    required
                  /> */}
                  {message && <div>{message}</div>}
                  {Already && (
                    <div className="text-sky text-[14px]">{Already}</div>
                  )}
                </div>
                {/* <div>
                  <button
                    onClick={() => GetCode(e)}
                    className="text-primary text-[14px]"
                  >
                    Resend Code
                  </button>
                </div> */}
                <div className=" h-[100px] flex flex-col justify-evenly">
                  <button
                    type="submit"
                    //id="shadow1"
                    className="w-[100%] font-semibold bg-sky text-center h-[40px] rounded-md text-white text-md"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* form ends */}
        </div>
      )}
    </section>

  );
};

export default EmailVerify;
