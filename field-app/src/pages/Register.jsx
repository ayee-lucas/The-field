import React from "react";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterPageModules/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen w-screen register-bg bg-cover bg-fixed">

      <Navbar />

      <div className="
       flex justify-center 
      items-center w-full
      h-full">

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
        <div className="w-full h-full flex justify-center items-center py-9             
          ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
