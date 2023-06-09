import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const watchPassword = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("password not match");
      return;
    }
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            // Profile updated!
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Registered",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="hero shadow-2xl bg-sky-300">
        <div className="flex flex-col lg:flex-row gap-x-40 items-center">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Register Your Account</h1>
              <p>SignUp using Social Network</p>

              <div className="mt-6 flex flex-col items-center">
                <button className=" btn btn-outline btn-wide btn-primary mb-4 flex justify-center items-center">
                  <FaGoogle className="text-red-500 me-4"></FaGoogle>
                  SignUp With google
                </button>
                <p className="btn btn-outline btn-wide mb-4 flex justify-center items-center p-2">
                  <FaGithub className="me-4"></FaGithub>
                  SignUp With github
                </p>
              </div>
            </div>
            <div className="divider">OR</div>
            <form onSubmit={handleSubmit(onSubmit)} className="card">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true, maxLength: 80 })}
                  placeholder="name"
                  className="input input-bordered bg-base-200"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="photo Url"
                  className="input input-bordered bg-base-200"
                />
              </div>
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
                      pattern: /((?=.*?[A-Z])(?=.*?[#?!@$%^&*-]))/,
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    {...register("confirmPassword", {
                      required: true,
                      maxLength: 20,
                      minLength: 6,
                      pattern: /((?=.*?[A-Z])(?=.*?[#?!@$%^&*-]))/,
                      validate: (value) =>
                        value === watchPassword || "Passwords not match",
                    })}
                    placeholder="confirm password"
                    className="input input-bordered bg-base-200 w-full"
                  />
                  <button
                    className="btn btn-square"
                    onClick={handleToggleConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <FaEye></FaEye>
                    ) : (
                      <FaEyeSlash></FaEyeSlash>
                    )}
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
                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
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
                  value="SignUp"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="card-body rounded-xl">
            <h1 className="text-3xl font-bold mb-4 ">
              Already have an account?
            </h1>
            <span>Login and discover a great amount of new opportunities</span>
            <Link to="/login" className="btn btn-outline btn-primary mt-4">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
