import dotenv from "dotenv";

// Load environment variables from .env.local file
dotenv.config();

export const config = {
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5003",
  baseURL: process.env.BASE_URL || "http://localhost:5003/api/v1",
};

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const BASE_URL = process.env.BASE_URL;