import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
const NavBar = () => {
  return (
    <div className="w-285 mt-5.25 mx-auto flex justify-between">
      <div></div>
      <div className="ml-45">
        <ul className="flex justify-between items-center gap-4 font-normal text-[18px] text-[#706F6F]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About</Link>
          </li>
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Image src={user} alt="user" width={41} height={41} />
        <button className="btn w-35 bg-[#403F3F] text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
