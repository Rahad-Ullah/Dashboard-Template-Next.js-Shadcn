"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import Modal from "../modals/Modal";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DeleteModal from "../modals/DeleteModal";
import { ISize } from "@/types/size";

// handle delete item
const handleDelete = async () => {
  // perform backend api here...
};

// table column definition
const sizeTableColumns: ColumnDef<ISize>[] = [
  {
    accessorKey: "id",
    header: "Sl. No",
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <Button
          variant={"ghost"}
          className="capitalize w-full justify-start hover:bg-transparent"
        >
          #{item._id}
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <span className="capitalize font-medium w-full justify-start px-2 hover:bg-transparent">
          {item?.name}
        </span>
      );
    },
  },
  {
    accessorKey: "totalAssignedItems",
    header: "Assinged Products",
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <Button
          variant={"ghost"}
          className="w-full justify-start hover:bg-transparent"
        >
          {item.totalAssignedItems}
        </Button>
      );
    },
  },
  {
    accessorKey: "created",
    header: () => <div>Created</div>,
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <Button
          variant={"ghost"}
          className="capitalize w-full justify-start hover:bg-transparent"
        >
          {item?.createdAt?.split("T")[0]}
        </Button>
      );
    },
  },
  {
    accessorKey: "updated",
    header: () => <div>Last Updated</div>,
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <Button
          variant={"ghost"}
          className="capitalize w-full justify-start hover:bg-transparent"
        >
          {item?.updatedAt?.split("T")[0]}
        </Button>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const item = row.original as ISize;
      return (
        <div className="flex items-center justify-center gap-2">
          {/* edit */}
          <Modal
            dialogTrigger={
              <Button variant={"ghost"} size={"icon"} className="text-primary">
                <Pencil />
              </Button>
            }
            className="max-w-lg"
          >
            <div className="grid gap-3">
              <h1 className="text-lg font-semibold">Edit Size</h1>
              <Label>Name</Label>
              <Input placeholder="Enter name" defaultValue={item?.name} />
              <Button className="ml-auto px-6">Save</Button>
            </div>
          </Modal>
          {/* delete */}
          <DeleteModal
            triggerBtn={
              <Button variant={"ghost"} size={"icon"} className="text-red-500">
                <Trash />
              </Button>
            }
            itemId={item?._id?.toString()}
            action={handleDelete}
            actionBtnText="Delete"
          />
        </div>
      );
    },
  },
];

export default sizeTableColumns;
