import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

const UserDetails = () => {
  return (
    <div className="grid gap-4">
      <p className="grid grid-cols-2 gap-4 items-center">
        <span>Listed Products</span>
        <strong>20</strong>
      </p>
      <p className="grid grid-cols-2 gap-4 items-center">
        <span>Sold Products</span>
        <strong>12</strong>
      </p>
      <p className="grid grid-cols-2 gap-4 items-center">
        <span>Review</span>
        <strong className="flex items-center gap-2">
          <Star size={20} className="text-amber-500" /> 4.5
        </strong>
      </p>
      <p className="grid grid-cols-2 gap-4 items-center">
        <span>Assign Role</span>
        <Select>
          <SelectTrigger className="h-10 max-w-40">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="User">User</SelectItem>
          </SelectContent>
        </Select>
      </p>
    </div>
  );
};

export default UserDetails;
