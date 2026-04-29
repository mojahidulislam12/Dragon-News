"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import user1 from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(user);
  return (
    <div>
      <div className="max-w-285 mt-5.25 mx-auto flex justify-between items-center">
        <div></div>
        <div className="ml-45">
          <ul className="flex justify-between items-center gap-4 font-normal text-[18px] text-[#706F6F]">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/about-us"}>About</NavLink>
            </li>
            <li>
              <NavLink href={"/career"}>Career</NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="flex justify-between items-center gap-4">
            <h2>Hello, {user.name}</h2>
            <Image
              src={user?.image}
              alt="user1"
              width={41}
              height={41}
              className="rounded-full"
            />

            <button
              className="btn w-35 bg-[#403F3F] text-white"
              onClick={async () => await authClient.signOut()}
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-4">
            <Image
              src={user1}
              alt="user1"
              width={41}
              height={41}
              className="rounded-full"
            />
            <button className="btn w-35 bg-[#403F3F] text-white">
              <Link href={"/login"}>Login</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
