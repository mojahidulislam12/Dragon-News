"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLRegister = async (data) => {
    console.log(data);
    const { name, email, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp Successful");
    }
  };
  console.log(errors);
  return (
    <div>
      <div className="max-w-285 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
        <div className="p-4 rounded-xl bg-white">
          <h2 className="font-bold text-3xl text-center">
            Register your account
          </h2>
          <div className="">
            <form
              className="space-y-4"
              onSubmit={handleSubmit(handleLRegister)}
            >
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className="input"
                  placeholder="Enter your name..."
                />
                <label className="label">Photo url</label>
                <input
                  {...register("photo")}
                  type="text"
                  className="input"
                  placeholder="Enter your photo url..."
                />
                <label className="label">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="input"
                  placeholder="Enter your email..."
                />
                <label className="label">Password</label>
                <input
                  {...register("password", {
                    required: "password field is required",
                  })}
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
