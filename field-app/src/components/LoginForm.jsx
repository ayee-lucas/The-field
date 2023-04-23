import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbPassword } from "react-icons/tb";
import { TiUser } from "react-icons/ti";

const LoginForm = () => {
	return (
		<div className=" flex justify-center items-center  w-full h-screen">
			<div className="h-[600px] bg-white p-5 m-[3rem] w-[600px] mt-24">
				<div className="flex relative login-bg w-full h-[200px] bg-center bg-cover">
					<div className="absolute bg-black/70 w-full top-0 left-0 right-0 bottom-0  z-[2]" />
					<div className="flex justify-center w-full h-full items-center z-[3]">
						<h1 className="font-bold text-3xl text-white">
							Welcome<span className=" text-green-600">Back</span>
						</h1>
					</div>
				</div>
				<form className="flex justify-center mt-5" action="">
					<div className=" w-full">
						<label htmlFor="" className="relative flex">
							<TiUser className="absolute left-3 top-8" />
							<input
								type="text"
								class=" placeholder:text-slate-400 my-5  block text-center bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
								placeholder="Username"
							/>
						</label>

						<label htmlFor="" className="relative flex">
							<TbPassword className="absolute left-3 top-3" />
							<input
								type="password"
								class=" placeholder:text-slate-400 block text-center bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none  focus:ring-black focus:ring-1 sm:text-sm"
								placeholder="Password"
							/>
						</label>
					</div>
				</form>
				<form action="">
					<Link href="/Home">
						<button className="border w-full rounded-2xl py-2 my-5 border-black hover:bg-green-600 hover:border-white hover:text-white transition-all">
							Login
						</button>
					</Link>

					<div className="w-full bg-black h-[5px] " />

					<p className="text-center mt-1"> Don't have an account yet?</p>

					<div className="w-full h-full mt-3 px-1 rounded-xl shadow-2xl ">
						<Link href="/Register">
							<button className=" w-full  py-3 my-5  hover:bg-green-600 hover:text-white transition-all">
								<p className=" underline">Register</p>
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
