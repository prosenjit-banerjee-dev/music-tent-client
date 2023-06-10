import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import InstructorsSection from "../Page/InstructorsSection/InstructorsSection";
import AdminDashboard from "../Page/AdminDashboard/AdminDashboard";
import AboutUs from "../Page/AboutUs/AboutUs";
import Private from "../providers/Private";

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
    ],
  },
  {
    path: "dashboard",
    element: (
      <Private>
        <AdminDashboard></AdminDashboard>
      </Private>
    ),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
