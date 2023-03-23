import Navbar from "@/components/Navbar";
import React from "react";
import LoginForm from "@/components/LoginForm";

const Login = () => {
	return (
		<>
            <div className="-z-50">
                <Navbar />
                </div> 
			<div className=" bg-black h-screen flex w-screen  ">
				<LoginForm />
			</div>

		</>
	);
};

export default Login;
