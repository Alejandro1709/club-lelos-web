import { z } from 'zod'

export const authSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  role: z.string(),
})

export type Auth = z.infer<typeof authSchema>

export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
    role: true,
  })
  .extend({
    _id: z.string(),
  })

export type User = z.infer<typeof userSchema>
