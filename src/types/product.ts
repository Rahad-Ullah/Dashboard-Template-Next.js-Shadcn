export interface IProduct {
  _id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  size: string;
  condition: "Like New" | "Very Good" | "Good" | "Fair";
  colors: string[];
  material: string;
  photos: string[];
  price: number;
  status: "Active" | "Blocked" | "Reported";
}
