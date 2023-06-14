import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, updateUserProfile, googleLogIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const watchPassword = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      return Swal.fire("The password and confirm password do not match");
    }
    createUser(data.email, data.password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              photoUrl: data.photo,
              role: "student",
            };
            fetch("https://music-tent-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  // Profile updated!
                  Swal.fire({
                    title: "Yeah!",
                    text: "Registered Successfully",
                  });
                  reset();
                  navigate(from, { replace: true });
                }
              });
          })
          .catch(() => {});
      })
      .catch(() => {});
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photoUrl: loggedInUser.photoURL,
          role: "student",
        };
        fetch("https://music-tent-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .error((error) => console.error(error.message));
  };
  return (
    <>
    <Helmet>
        <title>Music Tent | SignUp</title>
      </Helmet>
      <div className="hero shadow-2xl bg-sky-300">
        <div className="flex flex-col lg:flex-row gap-x-40 items-center">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Register Your Account</h1>
              <p>SignUp using Social Network</p>

              <div className="mt-6 flex flex-col items-center">
                <button
                  onClick={handleGoogleLogin}
                  className=" btn btn-outline btn-wide btn-primary mb-4 flex justify-center items-center"
                >
                  <FaGoogle className="text-red-500 me-4"></FaGoogle>
                  SignIn With google
                </button>
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
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
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

              <label onClick={() => setShowPassword(!showPassword)}>
                <p className="btn btn-xs btn-outline btn-primary mr-2">
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </p>
                <span className="label-text">
                  {showPassword ? "Hide" : "Show"} Password
                </span>
              </label>

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
