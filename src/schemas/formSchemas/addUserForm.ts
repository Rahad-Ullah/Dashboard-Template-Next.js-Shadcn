import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

// zod validation schema for add user form
export const addUserFormSchema = z.object({
  image: z
    .any()
    .refine((file) => file, "Image is required.") // Required
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  firstname: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
  email: z.string().email().min(1, {
    message: "Must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Must be at least 8 digit.",
  }),
  phone: z.string().min(10).max(14, {
    message: "Must be a valid phone number.",
  }),
  address: z.string().min(3, {
    message: "Must be at least 3 characters.",
  }),
});
