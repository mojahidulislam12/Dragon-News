"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBae = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data);
  };

  return (
    <div>
      <h2 className="font-semibold text-[20px] text-[#403F3F]">Login With</h2>
      <div className="flex flex-col gap-2 mt-7.5">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSignin}
        >
          <FaGoogle />
          Login with google
        </button>
        <button className="btn" onClick={handleGithubSignin}>
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSideBae;
