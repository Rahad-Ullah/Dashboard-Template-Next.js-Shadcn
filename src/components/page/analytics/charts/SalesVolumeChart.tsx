"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SalesVolumeChart: React.FC = () => {
  const [category, setCategory] = useState("all");

  // Mock data for sales volume0.
  const salesData = [
    { month: "Jan", revenue: 68000 },
    { month: "Feb", revenue: 74500 },
    { month: "Mar", revenue: 82300 },
    { month: "Apr", revenue: 79800 },
    { month: "May", revenue: 94200 },
    { month: "Jun", revenue: 101500 },
    { month: "Jul", revenue: 116800 },
    { month: "Aug", revenue: 127000 },
    { month: "Sep", revenue: 142000 },
    { month: "Oct", revenue: 150000 },
    { month: "Nov", revenue: 160000 },
    { month: "Dec", revenue: 170000 },
  ];

  // Calculate the maximum value for scaling
  const maxRevenue = Math.max(...salesData.map((d) => d.revenue));

  // Calculate total revenue
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <div className="bg-white p-6 rounded-lg border transition duration-200 hover:shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Sales Volume</h2>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-white border rounded-md pr-8 pl-3 py-1 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports</option>
            <option value="books">Books</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-3xl font-bold text-gray-900">
            ${(totalRevenue / 1000).toFixed(1)}k
          </div>
          <div className="text-sm text-gray-500">Total Sales Volume</div>
        </div>
        <div className="text-sm font-medium text-green-600 bg-green-100 rounded-full px-3 py-1">
          +18.3% YoY
        </div>
      </div>

      <div className="h-80 flex flex-col">
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-end space-x-2">
            {salesData.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center h-full"
              >
                <div className="relative w-full flex items-end justify-center h-full">
                  <div
                    className="w-2/3 bg-primary rounded-t transition-all duration-300 ease-in-out group relative cursor-pointer hover:bg-[#757157]"
                    style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                      ${(item.revenue / 1000).toFixed(1)}k
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">{item.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="text-sm text-gray-600 w-full flex justify-between items-center gap-2">
          Average Monthly Revenue
          <span className="ml-1 font-medium text-base text-black">
            ${Math.round(totalRevenue / salesData.length / 1000)}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesVolumeChart;
