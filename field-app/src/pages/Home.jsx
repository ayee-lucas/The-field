import React from "react";
import NavBarHome from "@/components/Home/NavbarHome";
import SideBar from "@/components/Home/SideBar";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <NavBarHome />
      <SideBar />
    </div>
  );
};

export default Home;
