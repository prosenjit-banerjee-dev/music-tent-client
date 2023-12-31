import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../assets/bg.webp";
import { FaGoogle, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    // Email Login
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire("Yah!", "You Login Successfully!", "success");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Wrong password/username");
      });
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
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
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <>
    <Helmet>
        <title>Music Tent | Login</title>
      </Helmet>
      <div className="hero shadow-2xl">
        <img src={bg} alt="" />
        <div className="flex flex-col lg:flex-row gap-x-40 items-center">
          <div className="card-body">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Login Your Account</h1>
              <p>Login using Social Network</p>
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
                  <p
                    className="btn btn-square"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </p>
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
