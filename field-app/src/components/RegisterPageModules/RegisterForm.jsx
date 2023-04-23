import React, { useState, useEffect } from "react";
import RegisterDropdown from "./RegisterDropdown";
import RegisterFormFields from "./RegisterFormField";
import { SPORTS_DATA } from "@/components/Data/DropDownData";
import RegisterFormHeader from "./RegisterFormHeader";
import RegisterFormPassword from "./REgisterFormPassword";
import RegisterButton from "./RegisterButton";

const RegisterForm = () => {

  /** Password Validation */

  const [password, setPassword] = useState("");
  const [contentPass, setContentPass] = useState(false);


  useEffect(() => {
    const passwordField = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (passwordField !== "") {
      setContentPass(true)
      if (passwordField === confirmPassword) {
        setPassword("green");
      } else if (confirmPassword === "") {
        setPassword("#166534");
        setContentPass(false);
      } else {
        setPassword("red");
      }
    } else {
      setContentPass(false);
    }
  }, [password]);


  const isSubmitButtonDisabled = password === "red" || !contentPass;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <form
      action=""
      className="bg-white py-9 px-4 backdrop-blur-2xl w-full  
      max-w-[1000px]  h-[720px] min-w-[100px] mt-24 md:grid md:grid-cols-2 md:gap-4 max-sm:m-4 max-2xl:mt-[2rem] max-2xl:h-[700px] max-sm:mt-[5rem] max-sm:h-[630px]"
    >
      {/** Big Header */}

      <div className="login-bg px-3 w-full h-full flex relative justify-center
        sm:hidden md:flex md:relative max-sm:hidden 
        bg-cover bg-center max-2xl:h-[660px]">
        <div className="absolute bg-black/50 w-full top-0 left-0 right-0 bottom-0 z-[2]" />
        <p className="text-[90px] px-4 font-bold text-white z-10"
        >R<br />E<br />A<br />D<br />
          <span className="text-green-600">Y?</span>
        </p>
      </div>

      {/** Mobile Header */}

      <div className="">
        <div className="md:hidden">
          <RegisterFormHeader />
        </div>

        {/** Form Content */}

        <div className="sm:hidden max-sm:hidden md:flex">

          {/** "Sing Up" Title Desktop Form */}

          <h1 className="font-bold text-4xl py-10 lg:py5" >
            SING <span className="text-green-700">UP </span>
          </h1>

        </div>

        {/** Name Fields */}

        <div className="transition-all hover:shadow-2xl shadow-black/20 
                        mt-3">
          <h1 className="font-bold text-[18px]">
            NAME
          </h1>

          {/** Input Fields */}

          <div className="grid grid-cols-2 gap-3 h-[85px]">
            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="First Name" id="firstName" type="text" />
            </label>

            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="Last Name" id="lastName" type="text" />
            </label>
          </div>
        </div>

        {/**Account Infomation  */}

        <div className="transition-all hover:shadow-2xl shadow-black/40  w-full  mt-2" >
          <h1 className="text-[18px] font-bold">
            ACCOUNT INFORMATION
          </h1>

          {/** Input Fields */}

          <div className="grid grid-cols-2 gap-3 h-[85px]">

            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="Username" id="username" type="text" />

            </label>

            <RegisterDropdown sports={SPORTS_DATA} />
          </div>


          {/** Email Field */}

          <label htmlFor="" className="relative flex h-[85px]">
            {/** <TiUser className="absolute left-3 top-8" /> */}
            <RegisterFormFields id="Email" content="Email" type="email" />
          </label>

          {/**Password Fields*/}
          <RegisterFormPassword password={password} handlePasswordChange={handlePasswordChange} />

          <div className="flex justify-center items-center pb-1 mt-3">
            <input className="py-3 w-full border border-green-600 enabled:hover:bg-green-600 enabled:hover:text-white focus:bg-green-600 focus:text-white transition-all disabled:select-none"
              type="submit"
              disabled={isSubmitButtonDisabled}
              value="FINISH"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
