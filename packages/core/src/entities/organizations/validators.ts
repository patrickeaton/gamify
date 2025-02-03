import { z } from 'zod';

export const OrganizationUpdateValidator = z.object({
  name: z.string().min(1).max(255),
  timezone: z.string().min(1).max(255),
});
