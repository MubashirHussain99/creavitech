import React from "react";
import Head from "next/head";
import SignupFormUI from "../../components/signup/SignupFormUI";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Creavitech - Signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fevicon.png" />
      </Head>

      <main>
        <SignupFormUI />
      </main>
    </>
  );
};

export default Signup;
