import {
  ACCEPTED_IMAGE_MIME_TYPES,
  MAX_FILE_SIZE,
} from "@/constants/constants";
import * as z from "zod";

export const SignUpFormSchema = z.object({
  email: z.string().email(),
  displayName: z.string().min(3),
  password: z.string().min(8, { message: "Password must be 8 character" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm Password must be 8 character" }),
  profilePic: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
