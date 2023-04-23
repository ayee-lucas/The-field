import Navbar from "@/components/Navbar";
import React from "react";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-full">
        <Navbar />
      <div className=" bg-black flex h-screen w-full ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
