import React from "react";


const RegisterFormHeader = () => {
  return (
    <div className=" flex relative login-bg w-full h-[200px] bg-center bg-cover max-sm:h-[100px]">
      <div className="absolute bg-black/70 w-full top-0 left-0 right-0 bottom-0  z-[2]" />
      <div className="flex justify-center w-full h-full items-center z-[3]">
        <h1 className="font-bold text-[50px] text-white max-sm:text-[30px]">
          READ<span className="text-green-600">Y</span>?
        </h1>
      </div>
    </div>
  );
}

export default RegisterFormHeader
