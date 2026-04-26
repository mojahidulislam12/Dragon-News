import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBae = () => {
  return (
    <div>
      <h2 className="font-semibold text-[20px] text-[#403F3F]">Login With</h2>
      <div className="flex flex-col gap-2 mt-7.5">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle />
          Login with google
        </button>
        <button className="btn">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSideBae;
