"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import Modal from "../modals/Modal";
import { Textarea } from "../ui/textarea";
import { INotificationTemplate } from "@/types/notification";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { templateCategory } from "@/constants/notification";
import DeleteModal from "../modals/DeleteModal";
import { Label } from "../ui/label";

// handle delete
const handleDelete = async () => {
  // perform delete api here...
};

// table column definition
const templateTableColumns: ColumnDef<INotificationTemplate>[] = [
  {
    accessorKey: "id",
    header: "Sl. No",
    cell: ({ row }) => {
      const item = row.original as INotificationTemplate;
      return <p className="px-2"># {item?._id}</p>;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const item = row.original as INotificationTemplate;
      return <p className="px-2">{item?.name}</p>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const item = row.original as INotificationTemplate;
      return <p className="px-2">{item?.category}</p>;
    },
  },
  {
    accessorKey: "lastupdated",
    header: () => <div>Last Updated</div>,
    cell: ({ row }) => {
      const item = row.original as INotificationTemplate;
      return <p className="px-2">{item?.lastupdated?.split("T")[0]}</p>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="px-8 text-center">Action</div>,
    cell: ({ row }) => {
      const item = row.original as INotificationTemplate;
      return (
        <div className="flex items-center justify-center gap-2">
          <Modal
            dialogTrigger={
              <Button variant={"ghost"} size={"icon"}>
                <Pencil />
              </Button>
            }
            className="max-w-lg"
          >
            <div className="grid gap-3">
              <h1 className="text-lg font-semibold">Update Template</h1>
              <Label>Name</Label>
              <Input placeholder="Enter name" defaultValue={item?.name} />

              <Label>Category</Label>
              <Select defaultValue={item?.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {templateCategory?.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label>Message</Label>
              <Textarea
                rows={4}
                placeholder="Write message..."
                defaultValue={item?.message}
              />

              <div className="flex items-center gap-4 justify-end">
                <Button className="">Update</Button>
              </div>
            </div>
          </Modal>
          {/* delete */}
          <DeleteModal
            triggerBtn={
              <Button variant={"ghost"} size={"icon"} className="text-red-500">
                <Trash />
              </Button>
            }
            action={handleDelete}
            itemId={item?._id.toString()}
          />
        </div>
      );
    },
  },
];

export default templateTableColumns;
