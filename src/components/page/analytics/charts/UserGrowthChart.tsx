"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type TimeFrame = "daily" | "weekly" | "monthly";

const UserGrowthChart: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("monthly");

  // Mock data for the chart
  const chartData = {
    daily: [
      { date: "Mon", newUsers: 120, totalUsers: 23800 },
      { date: "Tue", newUsers: 145, totalUsers: 23945 },
      { date: "Wed", newUsers: 132, totalUsers: 24077 },
      { date: "Thu", newUsers: 158, totalUsers: 24235 },
      { date: "Fri", newUsers: 142, totalUsers: 24377 },
      { date: "Sat", newUsers: 98, totalUsers: 24475 },
      { date: "Sun", newUsers: 46, totalUsers: 24521 },
    ],
    weekly: [
      { date: "Week 1", newUsers: 520, totalUsers: 22100 },
      { date: "Week 2", newUsers: 630, totalUsers: 22730 },
      { date: "Week 3", newUsers: 542, totalUsers: 23272 },
      { date: "Week 4", newUsers: 789, totalUsers: 24061 },
      { date: "Week 5", newUsers: 460, totalUsers: 24521 },
    ],
    monthly: [
      { date: "Jan", newUsers: 1200, totalUsers: 15000 },
      { date: "Feb", newUsers: 1450, totalUsers: 16450 },
      { date: "Mar", newUsers: 1320, totalUsers: 17770 },
      { date: "Apr", newUsers: 980, totalUsers: 18750 },
      { date: "May", newUsers: 1580, totalUsers: 20330 },
      { date: "Jun", newUsers: 1150, totalUsers: 21480 },
      { date: "Jul", newUsers: 1420, totalUsers: 22900 },
      { date: "Aug", newUsers: 890, totalUsers: 23790 },
      { date: "Sep", newUsers: 731, totalUsers: 24521 },
      { date: "Oct", newUsers: 1020, totalUsers: 25541 },
      { date: "Nov", newUsers: 1100, totalUsers: 26641 },
      { date: "Dec", newUsers: 1250, totalUsers: 27891 },
    ],
  };

  const currentData = chartData[timeFrame];

  // Calculate the maximum value for scaling
  const maxNewUsers = Math.max(...currentData.map((d) => d.newUsers));

  // Helper function to calculate bar height percentage
  const calculateBarHeight = (value: number) => {
    return (value / maxNewUsers) * 100;
  };

  return (
    <div className="bg-white p-6 rounded-lg border transition duration-200 hover:shadow-md">
      {/* chart header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">User Growth</h2>
        <div className="relative">
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value as TimeFrame)}
            className="bg-white border rounded-md pr-8 pl-3 py-1 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* chart body */}
      <div className="h-64">
        <div className="flex items-end h-full space-x-2">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center h-full"
            >
              <div className="w-full flex items-end justify-center h-[calc(100%-24px)]">
                <div
                  className={`w-1/2 bg-primary hover:bg-[#757157] rounded-t cursor-pointer transition-all duration-500 ease-in-out group relative`}
                  style={{ height: `${calculateBarHeight(item.newUsers)}%` }}
                >
                  <div className="w-28 opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white border text-xs rounded px-2 py-1 transition duration-200">
                    <span>{item.newUsers} new users</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">{item.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* chart footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">New Users</span>
        </div>
        <div className="text-sm text-gray-600">
          Total Users:{" "}
          <span className="font-semibold">
            {currentData[currentData.length - 1].totalUsers.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserGrowthChart;
