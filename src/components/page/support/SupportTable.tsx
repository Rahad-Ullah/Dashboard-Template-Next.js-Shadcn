"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import DashboardTable from "@/components/shared/table";
import TablePagination from "@/components/shared/table-pagination";
import supportTableColumns from "@/components/tableColumns/supportTableColumns";
import { ISupportTicket } from "@/types/support";
import FilterTabItem from "@/components/ui/filter-tab";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ticketStatuses } from "@/constants/support";

const SupportTable = ({ tickets = [], filters, meta }) => {
  const updateMultiSearchParams = useUpdateMultiSearchParams();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable<ISupportTicket>({
    data: tickets || [],
    columns: supportTableColumns as ColumnDef<ISupportTicket>[],
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-white rounded-xl h-full">
      {/* table top option bar */}
      <section className="flex flex-wrap justify-center md:justify-between gap-4 items-center pb-4">
        {/* left side filters */}
        <div className="flex flex-wrap items-center gap-4">
          <FilterTabItem filter={{ priority: "" }}>All</FilterTabItem>
          <FilterTabItem filter={{ priority: "Urgent" }}>Urgent</FilterTabItem>
          <FilterTabItem filter={{ priority: "High" }}>High</FilterTabItem>
          <FilterTabItem filter={{ priority: "Medium" }}>Medium</FilterTabItem>
          <FilterTabItem filter={{ priority: "Low" }}>Low</FilterTabItem>
        </div>
        {/* right side filters */}
        <div className="flex flex-wrap items-center gap-4">
          <Select
            defaultValue={filters?.status}
            onValueChange={(value) =>
              updateMultiSearchParams({
                page: null,
                status: value === "All" ? null : value,
              })
            }
          >
            <SelectTrigger className="w-32 gap-2">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All Status</SelectItem>
                {ticketStatuses?.map((item, idx) => (
                  <SelectItem key={idx} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* table and pagination*/}
      <section>
        <DashboardTable table={table} columns={supportTableColumns} />
        <TablePagination table={table} meta={meta} />
      </section>
    </div>
  );
};

export default SupportTable;
