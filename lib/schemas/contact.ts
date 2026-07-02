import { z } from 'zod';

export const ctaFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name'),
  businessEmail: z.string().trim().email('Please enter a valid business email'),
  companyName: z.string().trim().min(2, 'Please enter your company name'),
  phone: z.string().trim().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z
    .string()
    .trim()
    .min(20, 'Please describe your project in at least 20 characters')
    .max(1000, 'Description cannot exceed 1000 characters'),
  referral: z.string().optional(),
});

export type CTAFormValues = z.infer<typeof ctaFormSchema>;
