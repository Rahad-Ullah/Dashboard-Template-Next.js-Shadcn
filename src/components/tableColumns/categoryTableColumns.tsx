"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import Modal from "../modals/Modal";
import { ICategory } from "@/types/category";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DeleteModal from "../modals/DeleteModal";
import Image from "next/image";

// handle delete item
const handleDelete = async () => {
  // perform backend api here...
};

// table column definition
const categoryTableColumns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "id",
    header: "Sl. No",
    cell: ({ row }) => {
      const item = row.original as ICategory;
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
    accessorKey: "icon",
    header: () => <span>Icon</span>,
    cell: ({ row }) => {
      const item = row.original as ICategory;
      return (
        <Image
          src={item?.icon}
          alt="icon"
          width={70}
          height={70}
          className="p-2"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const item = row.original as ICategory;
      return (
        <Button
          variant={"ghost"}
          className="capitalize w-full justify-start hover:bg-transparent"
        >
          {item?.name}
        </Button>
      );
    },
  },
  {
    accessorKey: "totalAssignedItems",
    header: "Assinged Products",
    cell: ({ row }) => {
      const item = row.original as ICategory;
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
      const item = row.original as ICategory;
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
      const item = row.original as ICategory;
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
      const item = row.original as ICategory;
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
              <h1 className="text-lg font-semibold">Edit Category</h1>
              <Label>Name</Label>
              <Input placeholder="Enter name" defaultValue={item?.name} />
              <Label>Icon</Label>
              <Input
                type="file"
                placeholder="Upload icon"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    // Handle file upload logic here
                  }
                }}
              />
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

export default categoryTableColumns;
