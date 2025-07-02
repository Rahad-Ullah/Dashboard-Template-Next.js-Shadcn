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
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitalizeSentence } from "@/utils/capitalizeSentence";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import DashboardTable from "@/components/shared/table";
import TablePagination from "@/components/shared/table-pagination";
import productTableColumns from "@/components/tableColumns/productTableColumns";
import { IProduct } from "@/types/product";
import {
  productCategories,
  productConditions,
  productStatuses,
} from "@/constants/product";
import { Input } from "@/components/ui/input";

const ProductsTable = ({ products = [], meta, filters }) => {
  const updateMultiSearchParams = useUpdateMultiSearchParams();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Table Pagination, Sorting, Filtering, Column Visibility, Row Selection
  const table = useReactTable<IProduct>({
    data: products || [],
    columns: productTableColumns as ColumnDef<IProduct>[],
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
    <div className="w-full bg-white p-4 rounded-xl h-full">
      {/* table top option bar */}
      <section className="flex flex-wrap justify-center md:justify-end gap-4 items-center pb-4">
        {/* price filter */}
        <Input
          type="number"
          placeholder="Min price"
          className="w-36 placeholder:text-body font-medium"
          onChange={(e) =>
            updateMultiSearchParams({
              minPrice: e.currentTarget.value || null,
              page: null,
            })
          }
        />
        <Input
          type="number"
          placeholder="Max price"
          className="w-36 placeholder:text-body font-medium"
          onChange={(e) =>
            updateMultiSearchParams({
              maxPrice: e.currentTarget.value || null,
              page: null,
            })
          }
        />

        {/* Category Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="capitalize shadow text-body">
              {filters?.category ? `${filters?.category}` : "Category"}{" "}
              <ChevronDown className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() =>
                updateMultiSearchParams({ category: null, page: null })
              }
            >
              All Categories
            </DropdownMenuItem>
            {productCategories.map((item, idx) => (
              <DropdownMenuItem
                key={idx}
                onClick={() =>
                  updateMultiSearchParams({
                    category: item,
                    page: null,
                  })
                }
              >
                {capitalizeSentence(item as string)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Condition Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="capitalize shadow text-[#929292]"
            >
              {filters?.condition ? `${filters?.condition}` : "Condition"}{" "}
              <ChevronDown className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() =>
                updateMultiSearchParams({ condition: null, page: null })
              }
            >
              All Conditions
            </DropdownMenuItem>
            {productConditions.map((item, idx) => (
              <DropdownMenuItem
                key={idx}
                onClick={() =>
                  updateMultiSearchParams({
                    condition: item,
                    page: null,
                  })
                }
              >
                {capitalizeSentence(item as string)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* status Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="capitalize shadow text-[#929292]"
            >
              {filters?.status ? `${filters?.status}` : "Status"}
              <ChevronDown className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() =>
                updateMultiSearchParams({ status: null, page: null })
              }
            >
              All Statuses
            </DropdownMenuItem>
            {productStatuses.map((item, idx) => (
              <DropdownMenuItem
                key={idx}
                onClick={() =>
                  updateMultiSearchParams({
                    status: item,
                    page: null,
                  })
                }
              >
                {capitalizeSentence(item as string)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* table and pagination*/}
      <section>
        <DashboardTable table={table} columns={productTableColumns} />
        <TablePagination table={table} meta={meta} />
      </section>
    </div>
  );
};

export default ProductsTable;
