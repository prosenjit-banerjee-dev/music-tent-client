import { Outlet } from "react-router-dom";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";


const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;