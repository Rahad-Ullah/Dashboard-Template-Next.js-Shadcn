import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: "blue" | "green" | "purple" | "amber" | "red";
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  color,
}) => {
  // Map color string to Tailwind classes
  const colorMap = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-800",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-800",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-800",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-800",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-800",
    },
  };

  const colorClasses = colorMap[color];

  return (
    <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div
          className={`p-3 rounded-full ${colorClasses.bg} ${colorClasses.text} mr-4`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div
          className={`flex items-center text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 mr-1" />
          )}
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
