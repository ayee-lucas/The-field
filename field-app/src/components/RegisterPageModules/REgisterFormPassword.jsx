import { RiLockPasswordFill } from "react-icons/ri"


const RegisterFormPassword = ({password, handlePasswordChange}) => {

  return (
    <div className="grid grid-cols-2 gap-3 h-[85px]">
      <label htmlFor="" className="relative flex">
        {/** <TiUser className="absolute left-3 top-8" />
           */}
        <input
          id="password"
          type="password"
          className=" placeholder-gray-700 my-4 
			cursor-pointer  block text-center  bg-white w-full border 
			border-green-800 rounded-sm py-2 pr-3 focus:outline-none 
			focus:ring-black  focus:ring-1 sm:text-sm
			focus:placeholder-opacity-0"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>

      <label htmlFor="" className="relative flex">
        <RiLockPasswordFill className= {
            password == "red" ? 
            "absolute left-0 top-20 text-red-600 text-[13px]"
            :
            "absolute left-0 top-20 opacity-0"
        } />
        <h1 className={
          password == "red" ?
          "absolute top-20 left-0 right-0 text-[11px] transition-all text-red-600 text-center"
          :
          "absolute top-[-20%] opacity-0 left-0 right-0 transition-all text-[13px] text-red-600 text-center"
        }>
            Passwords do not match
        </h1>
        <input
          id="confirmPassword"
          type="password"

          className=" placeholder-gray-700 my-4 
			cursor-pointer  block text-center  bg-white w-full border 
			border-green-800 rounded-sm py-2  focus:outline-none 
			focus:ring-black  focus:ring-1 sm:text-sm
			focus:placeholder-opacity-0"

          placeholder="Confirm Password"
          onChange={handlePasswordChange}
          style={{ color: password, borderColor: password }}
        />

      </label>
    </div>

  );
}

export default RegisterFormPassword;
