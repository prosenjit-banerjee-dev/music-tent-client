import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import InstructorsSection from "../Page/InstructorsSection/InstructorsSection";


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
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  
]);
