"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ActiveUsersCard: React.FC = () => {
  const [period, setPeriod] = useState("week");

  // Mock data for active users
  const userData = {
    total: 18432,
    loggedIn: 16210,
    listed: 8945,
    sold: 5632,
    bought: 7854,
  };

  // Calculate percentages for the chart
  const totalActiveUsers = userData.total;
  const calculatePercentage = (value: number) =>
    Math.round((value / totalActiveUsers) * 100);

  const loggedInPercentage = calculatePercentage(userData.loggedIn);
  const listedPercentage = calculatePercentage(userData.listed);
  const soldPercentage = calculatePercentage(userData.sold);
  const boughtPercentage = calculatePercentage(userData.bought);

  return (
    <div className="bg-white p-6 rounded-lg border transition duration-200 hover:shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Active Users</h2>
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-white border rounded-md pr-8 pl-3 py-1 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="text-3xl font-bold text-gray-900">
          {userData.total.toLocaleString()}
        </div>
        <div className="text-sm font-medium text-green-600 bg-green-100 rounded-full px-3 py-1">
          +8.2% from last {period}
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Logged In</span>
            <span className="font-medium">
              {userData.loggedIn.toLocaleString()} ({loggedInPercentage}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${loggedInPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Listed Items</span>
            <span className="font-medium">
              {userData.listed.toLocaleString()} ({listedPercentage}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${listedPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Sold Items</span>
            <span className="font-medium">
              {userData.sold.toLocaleString()} ({soldPercentage}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${soldPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Bought Items</span>
            <span className="font-medium">
              {userData.bought.toLocaleString()} ({boughtPercentage}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${boughtPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
