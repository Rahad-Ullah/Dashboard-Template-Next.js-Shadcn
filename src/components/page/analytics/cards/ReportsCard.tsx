"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ReportsCard: React.FC = () => {
  const [reportType, setReportType] = useState("sales");
  const [exportFormat, setExportFormat] = useState("csv");
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-09-30");

  // Mock data for available reports
  // const reports = [
  //   {
  //     id: 1,
  //     name: "Q3 Sales Report",
  //     description: "Complete sales breakdown by category and region",
  //     date: "2023-10-01",
  //     downloads: 42,
  //   },
  //   {
  //     id: 2,
  //     name: "User Acquisition Analysis",
  //     description: "Channel performance and conversion rates",
  //     date: "2023-09-15",
  //     downloads: 38,
  //   },
  //   {
  //     id: 3,
  //     name: "Product Category Report",
  //     description: "Performance metrics for all product categories",
  //     date: "2023-09-01",
  //     downloads: 56,
  //   },
  // ];

  return (
    <div className="bg-white p-6 rounded-lg border transition duration-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Custom Reports</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Report Type
          </label>
          <div className="relative">
            <Select
              value={reportType}
              onValueChange={(value) => setReportType(value)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select Report Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Report</SelectItem>
                <SelectItem value="users">User Growth</SelectItem>
                <SelectItem value="products">Product Listings</SelectItem>
                <SelectItem value="categories">Category Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <div className="flex flex-col md:flex-row items-center space-x-2">
            <div className="relative flex-1">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="block"
              />
            </div>
            <span className="text-gray-500">to</span>
            <div className="relative flex-1">
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Export Format
          </label>
          <RadioGroup
            value={exportFormat}
            defaultValue="pdf"
            onValueChange={(value) => setExportFormat(value)}
            className="flex items-center gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="size-6" value="pdf" id="pdf" />
              <Label htmlFor="pdf">PDF</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem className="size-6" value="csv" id="csv" />
              <Label htmlFor="csv">aCSV</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="grid justify-start mt-4">
        <Button>
          <Download size={20} />
          Generate Report
        </Button>
      </div>

      {/* <section>
        <h3 className="text-md font-medium text-gray-800 mb-4">
          Recent Reports
        </h3>

        <div className="overflow-hidden border rounded-lg divide-y divide-gray-200">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white hover:bg-gray-50 transition-colors duration-150 px-4 py-3 sm:px-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-sm font-medium text-purple-700 truncate">
                      {report.name}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 truncate">
                    {report.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-4">
                    {report.date} · {report.downloads} downloads
                  </span>
                  <button className="p-1 rounded-full text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default ReportsCard;
