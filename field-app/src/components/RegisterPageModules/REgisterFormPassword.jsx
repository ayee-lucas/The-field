import React, { useEffect, useState } from "react"

const RegisterFormPassword = () => {

  const [password, setPassword] = useState("");


  useEffect(() => {
    const passwordField = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (passwordField === confirmPassword){
        setPassword("green");
    } else {
        setPassword("red");
    }
  }, [password]);


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="grid grid-cols-2 gap-3 h-[100px]">
      <label htmlFor="" className="relative flex">
        {/** <TiUser className="absolute left-3 top-8" />
           */}
        <input
          id="password"
          type="password"
          class=" placeholder-gray-700 my-6 
			cursor-pointer  block text-center  bg-white w-full border 
			border-green-800 rounded-sm py-2 pr-3 focus:outline-none 
			focus:ring-black  focus:ring-1 sm:text-sm
			focus:placeholder-opacity-0"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>

      <label htmlFor="" className="relative flex">
        {/** <TiUser className="absolute left-3 top-8" />
           */}
        <input
          id="confirmPassword"
          type="password"
          
          class=" placeholder-gray-700 my-6 
			cursor-pointer  block text-center  bg-white w-full border 
			border-green-800 rounded-sm py-2 pr-3 focus:outline-none 
			focus:ring-black  focus:ring-1 sm:text-sm
			focus:placeholder-opacity-0" 
         
          placeholder="Confirm Password"
          onChange={handlePasswordChange}
          style={{color: password, borderColor: password}}
        />

      </label>
    </div>

  );
}

export default RegisterFormPassword;
