import React from "react";
import { compareAsc, format } from "date-fns";

import logo from "@/assets/logo.png";
import Image from "next/image";
const Header = () => {
  // const today = new Date().toLocaleDateString("en-US", {
  //   weekday: "long", // Saturday
  //   year: "numeric", // 2026
  //   month: "long", // April
  //   day: "numeric", // 25
  // });
  return (
    <div className="text-center pt-12.5 space-y-4">
      <Image
        src={logo}
        width={300}
        height={200}
        alt="logo"
        className="mx-auto"
      />
      <p className="font-normal text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="font-medium text-[20px]">
        {format(new Date(), "EEEE, MMM dd ,yyyy")}
      </p>
    </div>
  );
};

export default Header;
