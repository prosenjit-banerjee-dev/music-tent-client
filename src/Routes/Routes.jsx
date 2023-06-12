import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import InstructorsSection from "../Page/InstructorsSection/InstructorsSection";
import AdminDashboard from "../Page/Dasahboard/AdminDashboard/AdminDashboard";
import AboutUs from "../Page/AboutUs/AboutUs";
import Private from "../providers/Private";
import AddClasses from "../Page/Dasahboard/AddClasses/AddClasses";

import ManageClasses from "../Page/Dasahboard/Manage Classes/ManageClasses";
import MyClassesIns from "../Page/Dasahboard/Instructor Classes/MyClassesIns";
import ManageUsers from "../Page/Dasahboard/Manage Users/ManageUsers";
import ApprovedClasses from "../Page/Approved Classes/ApprovedClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructors",
        element: <InstructorsSection></InstructorsSection>,
      },

      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "dashboard",
        element: (
          <Private>
            <AdminDashboard></AdminDashboard>
          </Private>
        ),
      },
      { path: "addclasses", element: <AddClasses></AddClasses> },
      { path: "myclasses", element: <MyClassesIns></MyClassesIns> },
      { path: "manageclasses", element: <ManageClasses></ManageClasses> },
      { path: "manageusers", element: <ManageUsers></ManageUsers> },
      {  
        path: "/classes",
        element: <ApprovedClasses></ApprovedClasses>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
