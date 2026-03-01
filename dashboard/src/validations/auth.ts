import z from "zod";

export const loginShema= z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().min(6, "enter at least 6 characters"),
    rememberMe: z.boolean().optional()
})