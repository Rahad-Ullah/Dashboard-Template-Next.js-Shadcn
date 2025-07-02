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
import { IUser } from "@/types/user";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import DashboardTable from "@/components/shared/table";
import TablePagination from "@/components/shared/table-pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import notificationTableColumns from "@/components/tableColumns/notificationTableColumns";

const NotificationTable = ({ users = [], filters, meta }) => {
  const updateMultiSearchParams = useUpdateMultiSearchParams();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable<IUser>({
    data: users || [],
    columns: notificationTableColumns as ColumnDef<IUser>[],
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
      // pagination: { pageIndex: 0, pageSize: 10 },
    },
  });

  return (
    <div className="w-full bg-white rounded-xl h-full">
      {/* table top option bar */}
      <section className="flex flex-wrap justify-center md:justify-between gap-4 items-center pb-4">
        {/* left side filters */}
        <ToggleGroup
          size={"lg"}
          variant={"outline"}
          type="single"
          defaultValue="All"
          value={filters?.userType}
          className="gap-4"
        >
          <ToggleGroupItem
            value="All"
            onClick={() => updateMultiSearchParams({ userType: null })}
          >
            All
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Seller"
            onClick={() => updateMultiSearchParams({ userType: "Seller" })}
          >
            Top Sellers
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Buyer"
            onClick={() => updateMultiSearchParams({ userType: "Buyer" })}
          >
            Top Buyers
          </ToggleGroupItem>
        </ToggleGroup>

        {/* right side filters */}
        <div className="flex flex-wrap items-center gap-4"></div>
      </section>

      {/* table and pagination*/}
      <section>
        <DashboardTable table={table} columns={notificationTableColumns} />
        <TablePagination table={table} meta={meta} />
      </section>
    </div>
  );
};

export default NotificationTable;
