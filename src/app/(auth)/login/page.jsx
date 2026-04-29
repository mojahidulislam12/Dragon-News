"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setIsShowPassword] = useState();

  const handleLogin = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (res) {
      alert("LogIn Successful");
    }
    console.log(res, error);
  };

  return (
    <div>
      <div className="max-w-285 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-xl bg-white">
          <h2 className="font-bold text-3xl text-center">Login your account</h2>
          <div className="">
            <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="input"
                  placeholder="Enter your email..."
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "password field is required",
                    })}
                    type={isShowPassword ? "text" : "password"}
                    className="input"
                    placeholder="Enter your password"
                  />
                  <span
                    className="absolute right-2 top-4"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    <FaEye></FaEye>
                  </span>
                </div>

                {errors.password && <p>{errors.password.message}</p>}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              Do not have an account?{" "}
              <Link
                className="font-bold text-red-500 border-b-2"
                href={`/register`}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
