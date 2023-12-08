import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Api from "../../API/Api";
import Spinner from "../spinner/Spinner";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailVerify from "../EmailVerify";
import { Bars } from "react-loader-spinner";
import { useRouter } from "next/router";
import Custom_Textfield from "../structure/custom_textfield";
import Custrom_Button from "../structure/custrom_button";

const SignupFormUI = () => {
  const [email, setEmail] = useState("");
  const [verCode, setVerCode] = useState("");
  // const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [confirmpassmsg, setConfirmPassmsg] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const [msg, setmsg] = useState("");
  const [nameerror, setnameerror] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingbtn, setLoadingbtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showconfPassword, setShowconfPassword] = useState(false);
  const [changeComp, setchangeComp] = useState(false);

  const afterSignup = (msg) => {
    msg == "Profile is created" && (window.location = "/");
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordVisibility2 = () => {
    setShowconfPassword(!showconfPassword);
  };

  const router = useRouter();
  const {
    eam: inviteteam_id,
    // ect: inviteproject_id,
    ail: inviteemail,
  } = router.query;

  // console.log("Team ID:", inviteteam_id);
  // console.log("Project ID:", inviteproject_id);
  // console.log("Email:", inviteemail);

  useEffect(() => {
    if (inviteemail) {
      setEmail(inviteemail);
    }
  }, [inviteemail]);

  // const SIGNUP = (e) => {
  //   e.preventDefault();

  //   Api.fetchPost(
  //     { email: email, password: password, fullname: Name, reset_code: verCode },
  //     "/register"
  //   ).then((x) => console.log(x, "testttttt"), afterSignup(x.data.message));
  // };
  const GetCode = (e) => {
    setLoadingbtn(true);
    e.preventDefault();
    if (password.length < 8) {
      setpassworderror(true);
      setLoadingbtn(false);
    } else {
      setpassworderror(false);
      setLoadingbtn(false);
    }
    if (Name.length < 4) {
      setnameerror(true);
      setLoadingbtn(false);
    } else {
      setnameerror(false);
      setLoadingbtn(false);
    }
    if (email && !email.match(/\S+@\S+\.\S+/)) {
      setLoadingbtn(false);
      setemailerror(true);
    } else {
      setLoadingbtn(false);
      setemailerror(false);
    }
    if (confirmpass != password) {
      setLoadingbtn(false);
      setConfirmPassmsg(true);
    } else {
      setLoadingbtn(false);
      setConfirmPassmsg(false);
    }

    email.match(/\S+@\S+\.\S+/) &&
      password.length > 7 &&
      Name.length > 2 &&
      confirmpass == password &&
      Api.fetchPost({ email: email }, "/sentcode")
        .then((x) => {
          console.log(x, "ussuadsaudsaudsaud");
          setmsg(x.data.message), console.log(x);
          setchangeComp(true);
          setLoadingbtn(false);
        })
        .catch((e) => {
          console.log(e.response,"Response");
          setLoadingbtn(false);
        });
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="h-[100vh]">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {/*black logo start*/}
          {/* <div className="md:w-60 w-44 absolute top-0 left-0 overflow-hidden">
            <div className="relative -left-[70px] -top-[45px]">
              <img
                src="https://i.postimg.cc/ydmjbWsx/sider-black.png"
                alt="loading"
              />
            </div>
          </div> */}
          {/*black logo end*/}

          {/* form start */}
          {changeComp == false ? (
            // <div className="w-[100%] h-screen flex flex-col items-center justify-center">
            //   <form
            //     onSubmit={(e) => {
            //       GetCode(e);
            //     }}
            //     className=" w-[90%] flex justify-center"
            //   >
            //     <div
            //       id="shadow"
            //       className="relative  h-[600px] sm:w-[450px] sm:p-5 p-3 w-[100%] flex flex-col justify-between z-50 "
            //     >
            //       <div className="flex flex-col justify-between items-center h-[150px] ">
            //         <div className="flex flex-col items-center">
            //           <img
            //             className="w-48  -mt-[60px]"
            //             src="/sidebarlogo1.png"
            //             alt="loading"
            //           />
            //         </div>

            //         <div className="md:text-[13px] text-[12px] text-center text-secondary -mt-[40px]">
            //           <h6 className="text-secondary font-bold text-[24px]">
            //             Sign up{" "}
            //           </h6>
            //           <p>
            //             By signing up, I agree to the
            //             <span className="text-rose"> Creavitech </span> Privacy
            //             Policy <br />
            //             &amp; Terms and conditions
            //           </p>
            //         </div>
            //       </div>
            //       <div className=" text-secondary h-[250px] flex flex-col justify-between space-y-2">
            //         <TextField
            //           id="standard-basic"
            //           label="Name"
            //           type="name"
            //           placeholder="Enter your name"
            //           variant="standard"
            //           minLength={8}
            //           onChange={(e) => setName(e.target.value)}
            //           // error={
            //           //   (nameerror.fullname &&
            //           //     nameerror.fullname[0] ==
            //           //       "The fullname is requried!") ||
            //           //   nameerror.fullname ==
            //           //     "Name must be greater than 3 characters"
            //           // }
            //           required
            //         />
            //         <div className="text-red-600">
            //           {nameerror == true && (
            //             <div>Name must be at least 4 characters</div>
            //           )}
            //         </div>

            //         {/* <TextField

            //       id="standard-basic"
            //       label="Email-address"
            //       type="email"
            //       placeholder="name@company.com"
            //       variant="standard"
            //       onChange={(e) => setEmail(e.target.value)}
            //       error={
            //         emailerror.email &&
            //         emailerror.email[0] == "Invalid email" &&
            //         "Invalid email"
            //       }
            //       required
            //     /> */}

            //         {inviteemail != null ? (
            //           <TextField
            //             id="standard-basic"
            //             type="email"
            //             placeholder="name@company.com"
            //             variant="standard"
            //             onChange={(e) => setEmail(e.target.value)}
            //             value={inviteemail && inviteemail}
            //             // Use inviteemail if available, otherwise use an empty string
            //             // error={
            //             //   emailerror.email &&
            //             //   emailerror.email[0] == "Invalid email" &&
            //             //   "Invalid email"
            //             // }
            //             required
            //           />
            //         ) : (
            //           <TextField
            //             id="standard-basic"
            //             label="Email-address"
            //             type="email"
            //             placeholder="name@company.com"
            //             variant="standard"
            //             onChange={(e) => setEmail(e.target.value)}
            //             // error={
            //             //   emailerror.email &&
            //             //   emailerror.email[0] == "Invalid email" &&
            //             //   "Invalid email"
            //             // }
            //             required
            //           />
            //         )}

            //         <p className="text-red-600">
            //           {emailerror == true && "Invalid email"}
            //         </p>

            //         <TextField
            //           id="standard-basic"
            //           type={showPassword ? "text" : "password"}
            //           label="Password"
            //           placeholder="Enter your password"
            //           variant="standard"
            //           onChange={(e) => setPassword(e.target.value)}
            //           InputProps={{
            //             endAdornment: (
            //               <InputAdornment position="end">
            //                 <IconButton onClick={handlePasswordVisibility}>
            //                   {showPassword ? (
            //                     <VisibilityOff />
            //                   ) : (
            //                     <Visibility />
            //                   )}
            //                 </IconButton>
            //               </InputAdornment>
            //             ),
            //           }}
            //         />
            //         <div className="text-red-600">
            //           {passworderror == true && (
            //             <div>Password must be at least 8 characters</div>
            //           )}
            //         </div>
            //         <TextField
            //           id="standard-basic"
            //           type={showconfPassword ? "text" : "password"}
            //           label="Confirm Password"
            //           placeholder="Re-enter password"
            //           variant="standard"
            //           onChange={(e) => setConfirmPass(e.target.value)}
            //           InputProps={{
            //             endAdornment: (
            //               <InputAdornment position="end">
            //                 <IconButton onClick={handlePasswordVisibility2}>
            //                   {showconfPassword ? (
            //                     <VisibilityOff />
            //                   ) : (
            //                     <Visibility />
            //                   )}
            //                 </IconButton>
            //               </InputAdornment>
            //             ),
            //           }}
            //         />
            //         <div className="text-red-600">
            //           {confirmpassmsg == true && (
            //             <div>Confirm Password Not Matched</div>
            //           )}
            //         </div>
            //       </div>
            //       <div className=" h-[100px] flex flex-col justify-evenly">
            //         <button
            //           id="shadow1"
            //           className="w-[100%] font-semibold bg-rose text-center h-[40px] rounded-md flex justify-center items-center text-white text-md"
            //         >
            //           {loadingbtn ? (
            //             <Bars
            //               height="35"
            //               width="35"
            //               color="white"
            //               ariaLabel="bars-loading"
            //               wrapperStyle={{}}
            //               wrapperClass=""
            //               visible={true}
            //             />
            //           ) : (
            //             <p>Continue</p>
            //           )}
            //         </button>
            //         <div className="text-[13px] font-semibold text-center">
            //           <p className="text-secondary">
            //             Already have an account?
            //             <span className="text-rose ml-2">
            //               <Link href="/login">
            //                 <a className="underline">Login</a>
            //               </Link>
            //             </span>
            //           </p>
            //         </div>
            //       </div>
            //     </div>
            //   </form>
            // </div>




            <div>
              <div className='w-[100%] sm:px-12 px-4 py-7'>
                <img src="/mainlogo.png" alt="Main logo is missing Beacuse of Network issue." />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <form onSubmit={(e) => { GetCode(e) }} className='lg:w-[35%] md:w-[50%] sm:w-[65%] w-[90%] sm:px-0 px-4'>
                  <div className='text-[#323338] font-bold sm:text-[32px] text-[18px] py-4'>Create your account</div>
                  <Custom_Textfield setInput={setName} labelText="Full Name" placeholder="Enter your Full Name " type="text" />
                  <div className="text-sky">
                    {nameerror == true && (
                      <div>Name must be at least 4 characters</div>
                    )}
                  </div>
                  <Custom_Textfield setInput={setEmail} labelText="Email" placeholder="Enter your Email " type="email" />
                  <p className="text-[#586AEA]">
                    {emailerror == true && "Email "}
                  </p>
                  <Custom_Textfield setInput={setPassword} labelText="Passowrd" placeholder="Enter at least 8 characters " type="password" />
                  <div className="text-[#586AEA]">
                    {passworderror == true && (
                      <div>Password must be at least 8 characters</div>
                    )}
                  </div>
                  <Custom_Textfield setInput={setConfirmPass} labelText="Confirm Passowrd" placeholder="Please confirm your password " type="password" />
                  <div className="text-[#586AEA]">
                    {confirmpassmsg == true && (
                      <div>Confirm Password Not Matched</div>
                    )}
                  </div>
                  <Custrom_Button div_className="py-6" type="submit" buttonText="Continue" className={`w-[100%] py-4 bg-[#586AEA] text-white font-medium rounded-[6px]`} />
                </form>
                <div className="font-semibold text-center">
                  <p className="text-secondary">
                    Already have an account?
                    <span className="text-[#586AEA] ml-2">
                      <Link href="/login">
                        <a className="underline">Login</a>
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>











          ) : (
            <EmailVerify
              message={msg}
              email={email}
              password={password}
              Name={Name}
              confirmpass={confirmpass}
              setpassworderror={setpassworderror}
              inviteemail={inviteemail}
              inviteteam_id={inviteteam_id}
            // inviteproject_id={inviteproject_id}
            />
          )}
          {/* form ends */}

          {/*orange logo start*/}
          {/* <div className="md:w-60 w-44 absolute bottom-0 right-0 overflow-hidden rotate">
            <div className="relative md:-bottom-[45px] md:-right-[70px] -bottom-[50px] -right-[70px]">
              <img
                src="https://i.postimg.cc/pXtsNwd4/sider-orange.png"
                alt="loading"
              />
            </div>
          </div> */}
          {/*orange logo end*/}
        </div>
      )}
    </section>
  );
};

export default SignupFormUI;
