"use client";

import { TrendingUp, TrendingDown, ChevronDown } from "lucide-react";

const CategoryChart = () => {
  // Mock data for categories
  const categories = [
    {
      name: "Clothing",
      count: 2345,
      percentage: 28,
      trending: true,
      growth: "+12%",
    },
    {
      name: "Cosmetics",
      count: 1890,
      percentage: 22,
      trending: true,
      growth: "+8%",
    },
    {
      name: "Shoes",
      count: 1024,
      percentage: 12,
      trending: true,
      growth: "+5%",
    },
    {
      name: "Jewelry",
      count: 936,
      percentage: 11,
      trending: true,
      growth: "+4%",
    },
    {
      name: "Toys",
      count: 752,
      percentage: 9,
      trending: true,
      growth: "+3%",
    },
  ];

  // Filter categories based on trending
  const displayedCategories = categories?.slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-lg border transition duration-200 hover:shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Trending Categories
        </h2>
        <div className="relative">
          <select className="bg-white border rounded-md pr-8 pl-3 py-1 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="min-h-[300px] overflow-y-auto">
        <div className="space-y-2">
          {displayedCategories.map((category, index) => (
            <div key={index} className="px-4 py-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-medium text-gray-800">{category.name}</h3>
                <div className="flex items-center">
                  <span
                    className={`text-sm font-medium ${
                      category.trending ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {category.growth}
                  </span>
                  {category.trending ? (
                    <TrendingUp className="h-4 w-4 ml-1 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 ml-1 text-red-600" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-full">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        category.trending ? "bg-primary" : "bg-gray-400"
                      }`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="min-w-[80px] text-right">
                  <span className="text-sm font-medium text-gray-700">
                    {category.count.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({category.percentage}%)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Total Items</span>
          <span className="font-medium">
            {categories
              .reduce((sum, cat) => sum + cat.count, 0)
              .toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;
