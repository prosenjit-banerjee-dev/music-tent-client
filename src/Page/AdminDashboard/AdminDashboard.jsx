import { HiChartPie, HiOutlineShoppingCart, HiShoppingBag,  HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';
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
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiOutlineShoppingCart className="fas fa-shopping-cart mr-2"></HiOutlineShoppingCart>
            Orders
          </Link>
          <Link
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiShoppingBag className="fas fa-box mr-2"></HiShoppingBag>
            Products
          </Link>
          <Link
            to="#"
            className="flex items-center p-4 text-gray-300 hover:bg-gray-700"
          >
            <HiUser className="fas fa-users mr-2"></HiUser>
            Customers
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

      {/* Content */}
      <div className="flex flex-col flex-grow bg-gray-100">
        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Total Orders</h2>
              <span className="text-sm text-gray-500">Last 30 days</span>
              <div className="text-3xl font-bold">286</div>
            </div>

            {/* Card 2 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">Total Revenue</h2>
              <span className="text-sm text-gray-500">Last 30 days</span>
              <div className="text-3xl font-bold">$15,678</div>
            </div>

            {/* Card 3 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">New Customers</h2>
              <span className="text-sm text-gray-500">Last 30 days</span>
              <div className="text-3xl font-bold">72</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
