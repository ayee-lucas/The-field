import React from "react";
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterPageModules/RegisterForm";

const Register = () => {
  return (
    <div className="relative h-screen w-full register-bg bg-cover bg-fixed min-h-[800px] ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />

      <Navbar />

      <div
        className="
       flex justify-center 
      items-center w-full
      min-h-[720px]"
      >
        <div
          className="w-full h-full flex justify-center items-center py-9             
          "
        >
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
