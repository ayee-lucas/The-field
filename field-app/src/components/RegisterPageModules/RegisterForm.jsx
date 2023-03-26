import React from "react";
import RegisterDropdown from "./RegisterDropdown";
import RegisterFormFields from "./RegisterFormField";
import { SPORTS_DATA } from "@/components/Data/DropDownData";
import RegisterFormHeader from "./RegisterFormHeader";
import RegisterFormPassword from "./REgisterFormPassword";

const RegisterForm = () => {
  return (
    <form
      action=""
      className="bg-white py-4 px-4 backdrop-blur-2xl w-full h-full mt-[4rem]
      max-w-[1000px] max-h-[720px]  min-w-[400px] md:grid md:grid-cols-2"
    >

      <div className="login-bg px-3 w-full h-full sm:hidden md:flex md:relative max-sm:hidden 
        bg-cover bg-center">
        <div className="absolute bg-black/50 w-full top-0 left-0 right-0 bottom-0  z-[2]" />
        <p className="text-[90px] px-4 font-bold text-white z-10"
        >R<br />E<br />A<br />D<br />
          <span className="text-green-600">Y?</span>
        </p>
      </div>

      <div className="pl-4">
        <div className="md:hidden">
          <RegisterFormHeader />

        </div>

        <div className="sm:hidden max-sm:hidden md:flex px-2">
          <h1 className="font-bold text-4xl py-10" j>
            SING <span className="text-green-700">UP </span>
          </h1>

        </div>

        {/** Name Fields */}

        <div className="transition-all hover:shadow-2xl shadow-black/20  px-2 mt-3" >
          <h1 className="font-bold text-[18px]">
            NAME
          </h1>
          <div className="grid grid-cols-2 gap-3 h-[100px]">
            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="First Name" />
            </label>

            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="Last Name" />
            </label>
          </div>
        </div>

        {/** Username - Sport */}

        <div className="transition-all hover:shadow-2xl shadow-black/40  w-full px-2 mt-2" >
          <h1 className="text-[18px] font-bold">
            ACCOUNT INFORMATION
          </h1>

          <div className="grid grid-cols-2 gap-3 h-[100px]">

            <label htmlFor="" className="relative flex">
              {/** <TiUser className="absolute left-3 top-8" />
           */}
              <RegisterFormFields content="Username" />

            </label>

            <RegisterDropdown sports={SPORTS_DATA} />
          </div>


          {/** Email Field */}

          <label htmlFor="" className="relative flex">
            {/** <TiUser className="absolute left-3 top-8" /> */}
            <RegisterFormFields content="Email" />
          </label>

          {/**Password Fields*/}
            <RegisterFormPassword />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
