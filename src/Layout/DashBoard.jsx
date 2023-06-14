import React from "react";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";
import { HiChartPie, HiUser } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Footer from "../Page/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
import UseAdminStatus from "../hooks/UseAdminStatus";
import UseInstructorStatus from "../hooks/useInstructorStatus";

const DashBoard = () => {
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("https://music-tent-server.vercel.app/users");
    return res.json();
  });
  const [isAdmin] = UseAdminStatus();
  const [isInstructor] = UseInstructorStatus();

  // const isAdmin = true;
  // const isInstructor = false;
  // const isStudent = false;
  return (
    <div>
      <Helmet>
        <title>Music Tent | Dashboard</title>
      </Helmet>
      <NavigationBar></NavigationBar>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 h-screen bg-sky-900">
          {/* Sidebar Content */}
          <div className="p-4 text-white">
            {isAdmin && (
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            )}
            {isInstructor && (
              <h1 className="text-xl font-semibold">Instructor Dashboard</h1>
            )}
            {isAdmin || isInstructor || (
              <h1 className="text-xl font-semibold">Student Dashboard</h1>
            )}
          </div>

          <nav className="mt-8">
            {isAdmin && (
              <>
                <Link
                  to="/dashboard/manageclasses"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
                  Manage Classes
                </Link>
                <Link
                  to="/dashboard/manageusers"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <HiUser className="fas fa-users mr-2"></HiUser>
                  Manage Users
                </Link>
              </>
            )}
            {isInstructor && (
              <>
                <Link
                  to="/dashboard/addclasses"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
                  Add a Class
                </Link>
                <Link
                  to="/dashboard/myclasses"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
                  My Classes
                </Link>
              </>
            )}
            {isAdmin || isInstructor || (
              <>
                <Link
                  to="/dashboard/myselectedclasses"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
                  My Selected Classes
                </Link>
                <Link
                  to="/dashboard/myenrolledclasses"
                  className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
                >
                  <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
                  My Enrolled Classes
                </Link>
              </>
            )}
            {/* <Link
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiViewBoards className="fas fa-cog mr-2"></HiViewBoards>
            Settings
          </Link> */}
          </nav>
        </div>
        {/* content */}
        {/* <DashBoard></DashBoard> */}
        <div>
          <div className="max-w-lg mx-auto mt-5 text-center">
            <p className="text-orange-400 uppercase mb-2 font-semibold">
              Explore
            </p>
            <h1 className="text-5xl font-bold ">Dashboard</h1>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
