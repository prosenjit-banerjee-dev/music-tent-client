import React from "react";

const DashBoard = () => {
  return (
    <div className="flex flex-col flex-grow bg-sky-100">
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
  );
};

export default DashBoard;
