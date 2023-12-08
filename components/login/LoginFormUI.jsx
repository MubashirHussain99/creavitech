import React, { useEffect, useState } from "react";
import Link from "next/link";
import Api from "../../API/Api";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import Spinner from "../spinner/Spinner";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Bars } from "react-loader-spinner";
import Custom_Textfield from "../structure/custom_textfield";
import Custrom_Button from "../structure/custrom_button";

const LoginFormUI = () => {
  const [email, setEmail] = useState("");
  const [forgetemail, setforgetemail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [emailmessage, setemailMessage] = useState("");
  const [Emailmessage, setEmailMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setmodal] = useState(false);
  const [VerificationCode, setVerificationCode] = useState(false);
  const [NewPassword, setNewPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState(false);
  const [codesuccess, setcodesuccess] = useState(false);
  const [loadingbtn, setLoadingbtn] = useState(false);
  const [btnLoader, setbtnLoader] = useState(false);
  const [btnLoader2, setbtnLoader2] = useState(false);

  const reduxdata = useSelector((x) => x);

  const dispatch = useDispatch();
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const afterlogin = (token) => {
    localStorage.setItem("user", token);
    token &&
      Api.fetchGet("/getTeam")
        .then((x) => {
          // console.log(x.data[0].Teams.id);
          localStorage.setItem("myData", x.data[0].Teams.id);
          x.data[0].Teams.id && (window.location = "/");
        })
        .catch((e) => {
          console.log(e);
        });
    // Api.fetchGet("/get/userinfo").then((x) => {
    //   console.log(x.data.data.myprofile.status);
    //   token &&
    //     dispatch({
    //       type: "user_status",
    //       payload: x.data.data.myprofile.status,
    //     });
    // });
  };

  // console.log(reduxdata.user_status);

  const LOGIN = (e) => {
    setLoadingbtn(true);
    e.preventDefault();
    Api.fetchPost({ email, password }, "/login")
      .then((x) => {
        setLoadingbtn(false);
        afterlogin(x.data.token);
      })
      .catch((e) => {
        // console.log(e);

        setLoadingbtn(false);

        setemailMessage(e.response.data); //e.response.data

      });
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    setbtnLoader(true);
    Api.fetchPost({ email: forgetemail }, "/forgotPassword")
      .then((x) => {
        setbtnLoader(false);
        setcodesuccess(true);
        // alert("code has been successfully sent to your email");
      })
      .catch((e) => {
        setbtnLoader(false);
        // console.log(e);
        setEmailMessage(e.response.data.message);
      });
  };
  useEffect(() => {
    setLoading(false);
  }, []);
  const updatepassword = (e) => {
    e.preventDefault();
    setbtnLoader2(true);
    Api.fetchPost(
      { email: forgetemail, VerificationCode, NewPassword, ConfirmPassword },
      "/updatePassword"
    )
      .then((x) => {
        alert(x.data.message);
        setbtnLoader2(false);
        window.location.reload();
        setcodesuccess(true);
        // afterlogin(x.data.token);
      })
      .catch((e) => {
        // console.log(e);
        setbtnLoader2(false);
        setMessage(e.response.data.message);
        // console.log(e);
      });
  };
  useEffect(() => {
    setLoading(false);

    if (message) {
      setbtnLoader2(false);
    }
  }, []);
  return (
    <section className="">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {codesuccess && (
            <motion.div
              animate={{ x: [140, 0] }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              id="shadow"
              className="fixed top-4 right-0 flex justify-center items-center
        py-8 px-4 bg-green-200 border-gray-600 rounded-l-lg z-50"
            >
              <p className="font-poppins font-bold text-[17px]">
                Mail Send To Your Email
              </p>
            </motion.div>
          )}
          {/* <div className="md:w-60 w-44 absolute top-0 left-0 overflow-hidden">
            <div className="relative -left-[70px] -top-[45px]">
              <img
                src="https://i.postimg.cc/ydmjbWsx/sider-black.png"
                alt="loading"
              />
            </div>
          </div> */}

          {/* <div className=" flex justify-center items-center h-screen">
            <form
              //onSubmit={(e) => LOGIN(e)} // Funtional
              className=" w-[90%] flex justify-center items-center h-full"
            >
              <div
                id="shadow"
                className="flex flex-col w-[450px] h-[500px] justify-evenly "
              >
                <div className="flex flex-col items-center -mt-[40px]  space-y-1">
                  <img
                    className="w-48 mb-1"
                    src="/sidebarlogo1.png"
                    alt="loading"
                  />
                  <h6 className="text-secondary font-semibold -mt-[20px]">
                    Log in to <span className="text-rose"> Creavitech </span>
                  </h6>
                </div>

                <div className="w-[100%] space-y-10 text-[13px] px-[20px]  h-[180px] flex flex-col items-center text-secondary">
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    type="email"
                    label="Email"
                    placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    error={message == "Invalid login"}
                    required
                  />
                  <TextField
                    style={{ width: "100%" }}
                    variant="standard"
                    type={showPassword ? "text" : "password"}
                    label="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={message == "Invalid login"}
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
                </div>
                {message && (
                  <p className="text-red-700 text-base flex items-center justify-center uppercase relative bottom-5">
                    {emailmessage && emailmessage}
                  </p>
                )}

                <div className="text-xs flex flex-col justify-center  items-center py-2 text-center space-y-7">
                  {loadingbtn ? (
                    <div className="w-[90%] flex justify-center items-center bg-rose text-center h-10 rounded-md text-white font-semibold text-[14px]">
                      <Bars
                        height="35"
                        width="35"
                        color="white"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    </div>
                  ) : (
                    <button
                      id="shadow1"
                      
                      // type="submit" functional 
                      className="w-[90%] bg-rose text-center h-10 rounded-md text-white font-semibold text-[14px]"
                    >
                      Log In
                    </button>
                  )}
                  <p className="text-secondary text-[13px] font-semibold">
                    Don't Have any account?
                    <span className="text-rose underline ml-2">
                      <Link href="/signup">
                        <a>Sign up</a>
                      </Link>
                    </span>
                    <span
                      className="text-rose underline ml-5 cursor-pointer"
                      onClick={() => setmodal(true)}
                    >
                      <a>Forget Password</a>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div> */}







          <div>
            <div className='w-[100%] sm:px-12 px-4 py-7'>
              <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <form onSubmit={(e) => LOGIN(e)} className='lg:w-[35%] md:w-[50%] sm:w-[65%] w-[90%] sm:px-0 px-4'>
                <div className='text-[#323338] font-bold sm:text-[32px] text-[18px] py-4'>Log in to your account </div>
                <div className='text-[#616161] py-2'>Enter your work email address </div>
                <Custom_Textfield error={message == "Invalid login"} setInput={setEmail} labelText="Email Address" placeholder="Enter your Email " type="email" />
                <Custom_Textfield error={message == "Invalid login"} setInput={setPassword} labelText="Passowrd" placeholder="Enter your Passowrd " type="password" />
                {emailmessage && (
                  <p className="text-[#586AEA] text-base flex items-center justify-center uppercase relative">
                    {emailmessage && emailmessage}
                  </p>
                )}
                <div className='sm:flex justify-between space-y-2 sm:space-y-0'>  
                  <div className='flex items-center space-x-3'>
                    <input type="checkbox" name="checkbox" id="checkbox" className='w-[20px] h-[20px]' />
                    <div className='text-[#434D57] font-medium'>Remember me</div>
                  </div>
                  <button onClick={() => setmodal(true)} className="sm:px-4 underline font-semibold text-[#2C73EB]">Forget Password</button>
                </div>
                <div className='pt-8'>
                  <Custrom_Button type="submit" buttonText="Login" className={`w-[100%] py-4 bg-[#586AEA] text-white font-medium rounded-[6px]`} />
                </div>
              </form>
              <div className="flex items-center sm:space-x-4 space-x-2 sm:px-0 px-4 py-5">
                <div className="sm:w-[200px] w-[70px] h-0.5 bg-[#434D57]"></div>
                <div className="sm:text-[16px] text-[14px]">Or sign in with </div>
                <div className="sm:w-[200px] w-[70px] h-0.5 bg-[#434D57]"></div>
              </div>
              <div className="sm:flex sm:space-x-5 space-y-3 sm:space-y-0 py-2 ">
                <Custrom_Button imageUrl="/Google.png" buttonText="Continue with Google" className={`flex items-center px-3 py-3 border-[#979797] space-x-2 border-2 rounded-[6px]`} />
                <Custrom_Button imageUrl="/apple.png" buttonText="Continue with Apple" className={`flex items-center px-3 py-3 border-[#979797] space-x-2 border-2 rounded-[6px]`} />
              </div>
              <div className="text-[#696F79] py-3">Dont have an account ? <a href="/signup" className="font-semibold text-[#2C73EB]">Sign up here </a></div>
            </div>
          </div>










          {/* <div className="md:w-60 w-44 absolute bottom-0 right-0 overflow-hidden rotate">
            <div className="relative md:-bottom-[45px] md:-right-[70px] -bottom-[50px] -right-[70px]">
              <img
                src="https://i.postimg.cc/pXtsNwd4/sider-orange.png "
                alt="loading"
              />
            </div>
          </div> */}
        </div>
      )}

      {modal && (
        <div className="bg-[#00000048] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <div className="rounded-lg w-[90%] md:w-[50%] lg:w-[28%] bg-white">
            <div className="h-[80px] border-b w-[100%] px-10 flex justify-between  items-center">
              <div className="font-bold">FORGET PASSWORD</div>
              <div>
                <AiOutlineClose
                  size={26}
                  className="cursor-pointer hover:text-[#586AEA]"
                  onClick={() => {
                    setmodal(false), setcodesuccess(false);
                  }}
                />
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) =>
                  !codesuccess ? forgotPassword(e) : updatepassword(e)
                }
                className="flex flex-col space-y-5 items-center py-5"
              >
                <input
                  onChange={(e) => {
                    setforgetemail(e.target.value);
                    setEmailMessage(false);
                    setMessage(false);
                  }}
                  required
                  placeholder="enter your email here"
                  className="border border-gray-300 rounded-lg outline-none w-[300px] px-3 py-2"
                />
                {Emailmessage && (
                  <p className="text-[#586AEA] text-base flex items-center justify-center">
                    {Emailmessage && Emailmessage}
                  </p>
                )}

                {!codesuccess && (
                  <>
                    {!btnLoader && (
                      <button
                        // onClick={(e) => forgotPassword(e)}
                        id="shadow1"
                        type="submit"
                        className="w-[70%] bg-[#586AEA] text-center h-10 rounded-md text-white font-semibold text-[14px]"
                      >
                        Continue
                      </button>
                    )}
                    {btnLoader && (
                      <div className="w-[70%] bg-[#586AEA] text-center flex justify-center items-center h-10 rounded-md text-white font-semibold text-[14px]">
                        <Bars
                          height="35"
                          width="35"
                          color="white"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    )}
                  </>
                )}
                {codesuccess && (
                  <div className="flex flex-col space-y-5 items-center">
                    <input
                      required
                      onChange={(e) => {
                        setVerificationCode(e.target.value);
                        setMessage(false);
                      }}
                      placeholder="Enter your code here"
                      className="border border-gray-300 rounded-lg outline-none w-[300px] px-3 py-2"
                    />
                    <input
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                      type="password"
                      placeholder="Enter password here"
                      className="border border-gray-300 rounded-lg outline-none w-[300px] px-3 py-2"
                    />
                    <input
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm password here"
                      className="border border-gray-300 rounded-lg outline-none w-[300px] px-3 py-2"
                    />
                    <p className="text-[#2C73EB] text-base flex items-center justify-center">
                      {message && message}
                    </p>
                    {!btnLoader2 ? (
                      <button
                        type="submit"
                        id="shadow1"
                        className="w-[90%] bg-[#586AEA] text-center h-10 rounded-md text-white font-semibold text-[14px]"
                      >
                        Reset Password
                      </button>
                    ) : (
                      <div className="w-[70%] bg-[#586AEA] text-center flex justify-center items-center h-10 rounded-md text-white font-semibold text-[14px]">
                        <Bars
                          height="35"
                          width="35"
                          color="white"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginFormUI;
