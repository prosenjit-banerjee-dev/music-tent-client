import {
  HiChartPie,
  HiOutlineShoppingCart,
  HiShoppingBag,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";
import AddClasses from "../AddClasses/AddClasses";
import DashBoard from "../Dashboard/DashBoard";
const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-sky-900">
        {/* Sidebar Content */}
        <div className="p-4 text-white">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </div>

        <nav className="mt-8">
          <Link
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiChartPie className="fas fa-chart-pie mr-2"></HiChartPie>
            Dashboard
          </Link>
          <Link
            to="/manageclasses"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
            Manage Classes
          </Link>
          <Link
            to="/addclasses"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
            Add a Class
          </Link>
          <Link
            to="/myclasses"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <SiGoogleclassroom className="fas fa-shopping-cart mr-2"></SiGoogleclassroom>
            My Classes
          </Link>
          <Link
            to="/manageusers"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiUser className="fas fa-users mr-2"></HiUser>
            Manage Users
          </Link>
          <Link
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiViewBoards className="fas fa-cog mr-2"></HiViewBoards>
            Settings
          </Link>
        </nav>
      </div>
      {/* content */}
      <DashBoard></DashBoard>
    </div>
  );
};

export default AdminDashboard;
