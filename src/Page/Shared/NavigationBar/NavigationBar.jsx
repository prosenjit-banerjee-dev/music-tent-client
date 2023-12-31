import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from '../../../assets/logo.png'
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "btn-info" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "btn-info" : "")}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "btn-info" : "")}
        >
          Instructors
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "btn-info" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "btn-info" : "")}
          to="/aboutus"
        >
          About us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-sky-900 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-info btn-sm lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-sky-100">
       <img src={logo} className="w-12 h-12 rounded-full" />Music Tent
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-white">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4 dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-sky-100 rounded-box w-52 "
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  {/* Todo identify users role */}
                  <span className="badge"></span>
                </a>
              </li>
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            </ul>
            <button onClick={handleLogOut} className="btn btn-sm btn-info">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-info">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
