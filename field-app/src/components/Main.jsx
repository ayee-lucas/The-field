import React from "react";

const Main = ({ heading = "", title = "" }) => {
	return (
		<div className="main-bg-img flex items-center mb-12 h-screen bg-fixed bg-center bg-cover">
			<div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-[2] backdrop-blur-[3px]" />
			<div className=" p-5 text-white z-[2] mt-[-10rem] ml-[2rem]">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{title}</p>
				<button className="px-8 py-2 border hover:bg-white hover:text-black transition-all">Register</button>
			</div>
		</div>
	);
};

export default Main;
