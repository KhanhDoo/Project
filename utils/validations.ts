import { string, z } from 'zod'


export const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: string().max(255).default('').optional()
})