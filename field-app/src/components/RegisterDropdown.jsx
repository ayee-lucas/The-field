import React, { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { SPORTS_DATA } from "./DropDownData";

const RegisterDropdown = ({ sports }) => {
  const [dropDown, setDropDown] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const lenght = sports.lenght;
  const dropDownText = {
    if(dropDown) {},
  };

  if (!Array.isArray(sports) || sports.length <= 0) {
    return null;
  }

  return (
    <>
      <div
        onClick={handleDropDown}
        className="relative flex justify-between px-3 transition-all cursor-pointer items-center w-full my-6 rounded-md bg-green-700 hover:border hover:border-black select-none"
      >
        <h1 className="">Select your sport</h1>
        <BsArrowDownShort
          className={dropDown ? "transition-all" : "transition-all rotate-180"}
        />
        {SPORTS_DATA.map((sport, index) => {
          return (
            <div
              key={index}
              className={
                dropDown
                  ? "hidden"
                  : "visible absolute rounded-sm top-16 left-0 right-0 py-3 bg-green-700 z-50 text-center hover:border border-black border"
              }
            >
             {sport.sport} 
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RegisterDropdown;
