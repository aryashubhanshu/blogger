import z from "zod";

// Signup
export const signupInputs = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export type SignupInputs = z.infer<typeof signupInputs>;

// Signin
export const signinInputs = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigninInputs = z.infer<typeof signinInputs>;

// Create Blog
export const createBlogInputs = z.object({
  title: z.string(),
  content: z.string(),
});

export type CreateBlogInputs = z.infer<typeof createBlogInputs>;

// Update Blog
export const updateBlogInputs = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type UpdateBlogInputs = z.infer<typeof updateBlogInputs>;
