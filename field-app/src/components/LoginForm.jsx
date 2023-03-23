import React from "react";
import Image from "next/image";


const LoginForm = () => {
	return (
		<div className=" flex justify-center items-center  w-screen h-screen ">
			<div className=" w-[600px] h-[600px] bg-white p-5 m-[3rem] min-w-[410px]">
                <div className="flex relative login-bg w-full h-[200px] bg-center bg-cover">
                    <div className="absolute bg-black/70 w-full top-0 left-0 right-0 bottom-0  z-[2]" />
				<div className="flex justify-center w-full h-full items-center z-[3]">
					<h1 className="font-bold text-3xl text-white">Login</h1>
				</div>
                </div>
				<form className="flex justify-center mt-5 space-x-6" action="">
					<input type="text" className="pad-3 w-[400px] border place-content-center" placeholder="Username" />
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
