import React from 'react';

const RegisterFormFields = ({ content = "", id = "", type = "" }) => {
	return (

		<input
			type={type}
			id={id}
			className=" placeholder-gray-700 my-4 
			cursor-pointer  block text-center  bg-white w-full border 
			border-green-800 rounded-sm py-2 pr-3 focus:outline-none 
			focus:ring-black  focus:ring-1 sm:text-sm
			focus:placeholder-opacity-0"
			placeholder={content}
		/>


	);

}

export default RegisterFormFields;

