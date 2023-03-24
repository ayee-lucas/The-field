import React from "react";

const RegisterForm = () => {
	return (
			<form
				action=""
				className="bg-black/40 px-4 backdrop-blur-2xl w-full h-full mt-[5rem] max-w-[1000px] max-h-[700px]  min-w-[400px]"
			>
				<div className="grid grid-cols-2 gap-3 h-[100px]">
					<label htmlFor="" className="relative flex">
						{/** <TiUser className="absolute left-3 top-8" />
						 */}
						<input
							type="text"
							class=" placeholder:text-slate-400 my-5  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
							placeholder="Name"
						/>
					</label>

					<label htmlFor="" className="relative flex">
						{/** <TiUser className="absolute left-3 top-8" />
						 */}
						<input
							type="text"
							class=" placeholder:text-slate-400 my-5  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
							placeholder="Last Name"
						/>
					</label>
				</div>

				<label htmlFor="" className="relative flex">
					{/** <TiUser className="absolute left-3 top-8" />
					 */}
					<input
						type="text"
						class=" placeholder:text-slate-400 my-5 py-5  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
						placeholder="Email"
					/>
				</label>

				<div className="grid grid-cols-2 gap-3 h-[90px]">
					<label htmlFor="" className="relative flex">
						{/** <TiUser className="absolute left-3 top-8" />
						 */}
						<input
							type="text"
							class=" placeholder:text-slate-400 my-5  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
							placeholder="Username"
						/>
					</label>

					<label htmlFor="" className="relative flex">
						{/** <TiUser className="absolute left-3 top-8" />
						 */}
						<input
							type="text"
							class=" placeholder:text-slate-400 my-5  block text-center text-white bg-black w-full border border-green-600 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:ring-black  focus:ring-1 sm:text-sm"
							placeholder="Password"
						/>
					</label>
				</div>
			</form>

	);
};

export default RegisterForm;
