//** Dependencies
import React, { useState } from "react";
import Image from "next/image";

//** Icons
import { IoIosArrowDown } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

//** Assets
import Link from "next/link";
import Logo from "@/assets/logowhite.png";

// Dummy Profile Picture For Testing
import Dummy from "@/assets/pfp_dummy.png";

const NavBarHome = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="w-full h-20 bg-green-700 flex justify-between items-center px-4">
      <Link
        href={"/Home"}
        className="flex items-center justify-center select-none"
      >
        <h1 className="font-bold text-4xl text-white">THE FIELD</h1>
        <Image src={Logo} width={60} height={60} className="mx-2" />
        <div className="flex items-center justify-between text-white text-lg ml-5 px-2 py-3 rounded-md bg-green-800">
          <AiOutlineHome className="" />
          <h1 className="px-2">Home</h1>
          <IoIosArrowDown className="text-white" />
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-green-800 hover:bg-green-900 transition-all cursor-pointer select-none">
          <Image src={Dummy} width={40} height={40} className="rounded-xl" />
          <h1 className="text-white px-4">Juan Morales</h1>
          <IoIosArrowDown className="text-white" />
        </div>
        <div className="px-5">
          <CgMenuRightAlt className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBarHome;
