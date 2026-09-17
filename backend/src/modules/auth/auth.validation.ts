/** @format */

import { z } from 'zod';

export const signupSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  firstName: z.string().trim().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().trim().min(2, 'Last name must be at least 2 characters'),
});

const signupData = {
  email: 'aman@citycentral.com',
  password: 'CityCentral@123',
  firstName: 'Aman',
  lastName: 'Sharma',
};

const result = signupSchema.safeParse(signupData);

console.log(result);
