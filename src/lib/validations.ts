import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  role: z.enum(['BUYER', 'VENDOR']),
});

export const vendorSchema = z.object({
  companyName: z.string().min(2),
  description: z.string().optional(),
  address: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
  services: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
});

export const rfqSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  categoryId: z.string(),
  quantity: z.number().positive().optional(),
  unit: z.string().optional(),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
});

export const quotationSchema = z.object({
  rfqId: z.string(),
  price: z.number().positive(),
  currency: z.string().default('THB'),
  leadTime: z.string().optional(),
  notes: z.string().optional(),
});

export const reviewSchema = z.object({
  vendorId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});
