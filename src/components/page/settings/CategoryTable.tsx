/* eslint-disable @next/next/no-img-element */
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
import DashboardTable from "@/components/shared/table";
import TablePagination from "@/components/shared/table-pagination";
import categoryTableColumns from "@/components/tableColumns/categoryTableColumns";
import { ICategory } from "@/types/category";
import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CategoryTable = ({ items = [], filters, meta }) => {
  // const updateMultiSearchParams = useUpdateMultiSearchParams();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable<ICategory>({
    data: items || [],
    columns: categoryTableColumns as ColumnDef<ICategory>[],
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

  console.log(filters);

  return (
    <div className="w-full bg-white rounded-xl h-full">
      {/* table top option bar */}
      <section className="flex flex-wrap justify-center md:justify-between gap-4 items-center pb-4">
        <div></div>
        <div>
          <Modal
            dialogTrigger={
              <Button>
                <Plus /> Add New
              </Button>
            }
            className="max-w-lg"
          >
            <div className="grid gap-3">
              <h1 className="text-lg font-semibold">Add Category</h1>
              <Label>Name</Label>
              <Input placeholder="Enter name" />
              <Label>Icon</Label>
              <Input
                type="file"
                placeholder="Upload icon"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const preview = document.getElementById(
                      "icon-preview"
                    ) as HTMLImageElement;
                    preview.src = URL.createObjectURL(file);
                    preview.style.display = "block";
                  }
                }}
              />
              <img
                id="icon-preview"
                alt="Icon Preview"
                style={{
                  display: "none",
                  marginTop: "10px",
                  maxWidth: "100px",
                  maxHeight: "100px",
                }}
              />
              <Button className="ml-auto px-6">Add</Button>
            </div>
          </Modal>
        </div>
      </section>

      {/* table and pagination*/}
      <section>
        <DashboardTable table={table} columns={categoryTableColumns} />
        <TablePagination table={table} meta={meta} />
      </section>
    </div>
  );
};

export default CategoryTable;
