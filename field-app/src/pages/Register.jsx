import React from "react";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterPageModules/RegisterForm";

const Register = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="
      register-bg flex justify-center 
      items-center w-screen
      h-screen  bg-fixed bg-cover">

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
        <div className="w-full h-full flex justify-center items-center m-5 
           
          ">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Register;
