import { z } from "zod";

export const EditUserProfileSchema = z.object({
    name: z.string().email('Required'),
    email: z.string().min(1, 'Required'),
})