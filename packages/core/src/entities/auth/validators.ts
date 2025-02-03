import { z } from 'zod';

export const AuthRegisterValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  username: z.string().optional(), // If empty use email
  phone: z.string().optional(),
});

export const AuthLoginValidator = z.object({
  username: z.string(), // username or email or phone
  password: z.string(),
});


