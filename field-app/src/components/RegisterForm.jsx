import React from "react";
import RegisterDropdown from "./RegisterDropdown";
import {SPORTS_DATA} from "./DropDownData";

const RegisterForm = () => {
  return (
    <form
      action=""
      className="bg-black/70 px-4 backdrop-blur-2xl w-full h-full mt-[5rem] max-w-[1000px] max-h-[640px]  min-w-[400px]"
    >
      <div className="flex relative login-bg w-full h-[200px] bg-center bg-cover">
        <div className="absolute bg-black/70 w-full top-0 left-0 right-0 bottom-0  z-[2]" />
        <div className="flex justify-center w-full h-full items-center z-[3]">
          <h1 className="font-bold text-3xl text-white">
            Read<span className=" text-green-600">y</span>?
          </h1>
        </div>
      </div>
      <label htmlFor="" className="relative flex">
        {/** <TiUser className="absolute left-3 top-8" />
         */}
        <input
          type="text"
          class=" placeholder:text-slate-400 my-3 py-3 cursor-pointer  block text-center text-white bg-black w-full border border-green-600 rounded-md  pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
          placeholder="Email"
        />
      </label>
      <div className="grid grid-cols-2 gap-3 h-[100px]">
        <label htmlFor="" className="relative flex">
          {/** <TiUser className="absolute left-3 top-8" />
           */}
          <input
            type="text"
            class=" placeholder:text-slate-400 my-5 cursor-pointer py-3  block text-center text-white bg-black w-full border border-green-600 rounded-md  pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
            placeholder="Username"
          />
        </label>

        <RegisterDropdown sports={SPORTS_DATA} />
      </div>
      <div className="grid grid-cols-2 gap-3 h-[90px]">
        <label htmlFor="" className="relative flex">
          {/** <TiUser className="absolute left-3 top-8" />
           */}
          <input
            type="text"
            class=" placeholder:text-slate-400 my-5 py-3 cursor-pointer  block text-center text-white bg-black w-full border border-green-600 rounded-md  pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
            placeholder="Password"
          />
        </label>

        <label htmlFor="" className="relative flex">
          {/** <TiUser className="absolute left-3 top-8" />
           */}
          <input
            type="password"
            class=" placeholder:text-slate-400 my-5 cursor-pointer  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
            placeholder="Confirm Password"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3 h-[100px]">
        <label htmlFor="" className="relative flex">
          {/** <TiUser className="absolute left-3 top-8" />
           */}
          <input
            type="text"
            class=" placeholder:text-slate-400 my-5 cursor-pointer  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
            placeholder="Name"
          />
        </label>

        <label htmlFor="" className="relative flex">
          {/** <TiUser className="absolute left-3 top-8" />
           */}
          <input
            type="text"
            class=" placeholder:text-slate-400 my-5 cursor-pointer  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
            placeholder="Last Name"
          />
        </label>
      </div>

    </form>
  );
};

export default RegisterForm;
