import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import InstructorsSection from "../Page/InstructorsSection/InstructorsSection";
import AboutUs from "../Page/AboutUs/AboutUs";
import Private from "../providers/Private";
import AddClasses from "../Page/Dasahboard/AddClasses/AddClasses";

import ManageClasses from "../Page/Dasahboard/Manage Classes/ManageClasses";
import MyClassesIns from "../Page/Dasahboard/Instructor Classes/MyClassesIns";
import ManageUsers from "../Page/Dasahboard/Manage Users/ManageUsers";
import ApprovedClasses from "../Page/Approved Classes/ApprovedClasses";
import MySelectedClass from "../Page/Dasahboard/MySelectedClass/MySelectedClass";
import Payment from "../Page/Dasahboard/Payment/Payment";
import DashboardCheck from "../providers/DashboardCheck";
import DashBoard from "../Layout/DashBoard";
import MyEnrolledClasses from "../Page/Dasahboard/MyEnrolledClasses/MyEnrolledClasses";


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
        path: "classes",
        element: <ApprovedClasses></ApprovedClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Private>
        <DashBoard></DashBoard>
      </Private>
    ),
    children: [
      // instructor
      { path: "addclasses", element: <AddClasses></AddClasses> },
      { path: "myclasses", element: <MyClassesIns></MyClassesIns> },
      // Students
      {
        path: "myselectedclasses",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "myenrolledclasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      // ADMIN
      { path: "manageclasses", element: <ManageClasses></ManageClasses> },
      { path: "manageusers", element: <ManageUsers></ManageUsers> },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
