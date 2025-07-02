export interface ICategory {
  _id: number;
  name: string;
  icon: string; // Could be an icon name, emoji, or image path
  totalAssignedItems: number;
  createdAt: string;
  updatedAt: string;
}
