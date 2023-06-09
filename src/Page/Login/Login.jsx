import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bg from "../../assets/bg.webp";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (data) => {
    console.log(data.email, data.password);
  };
  return (
    <>
      <div className="hero shadow-2xl">
        <img src={bg} alt="" />
        <div className="flex flex-col lg:flex-row gap-x-40 items-center">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Login Your Account</h1>
              <p>Login using Social Network</p>
              <div className="mt-6 flex flex-col items-center">
                <button className=" btn btn-outline btn-wide btn-primary mb-4 flex justify-center items-center">
                  <FaGoogle className="text-red-500 me-4"></FaGoogle>
                  SignIn With google
                </button>
                <p className="btn btn-outline btn-wide mb-4 flex justify-center items-center p-2">
                  <FaGithub className="me-4"></FaGithub>
                  SignIn With github
                </p>
              </div>
            </div>
            <div className="divider">OR</div>
            <form onSubmit={handleSubmit(onSubmit)} className="card">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered bg-base-200"
                />
                {errors.email && (
                  <span className="text-red-900">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern: /((?=.*?[A-Z])(?=.*?[#?!@$%^&*-/]))/,
                    })}
                    placeholder="password"
                    className="input input-bordered bg-base-200 w-full"
                  />
                  <button
                    className="btn btn-square"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </button>
                </div>
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must be one uppercase letter
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must be one special character
                  </span>
                )}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="card-body rounded-xl">
            <h1 className="text-3xl font-bold mb-4 ">New Here?</h1>
            <span>SignUp and discover a great amount of new opportunities</span>
            <Link to="/signup" className="btn btn-outline btn-primary mt-4">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
