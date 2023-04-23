import React from "react";
import Link from "next/link";

const Main = ({ heading = "", title = "" }) => {
	return (
		<div className="main-bg-img flex items-center mb-[3rem] h-screen bg-fixed bg-center bg-cover">
			<div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0 z-[2] backdrop-blur-[3px]" />
			<div className=" p-5 text-white z-[2] mt-[-2rem] sm:ml-[2rem]">
				<div className="max-sm:grid max-sm:grid-rows-2 max-sm:justify-center max-sm:content-center">
				<h2 className="text-5xl font-bold max-sm:text-4xl max-sm:text-center">{heading}</h2>
				<p className="py-5 text-xl max-sm:text-lg max-sm:text-center">{title}</p>
</div>
				<div className="sm:mt-14 max-sm:flex max-sm:justify-center max-sm:content-center">
					<Link href="/Register">
						<button className="px-8 py-3 border hover:bg-white hover:text-black transition-all">
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Main;
