import { z } from 'zod';

export const tradeListFiltersSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(1000).default(10),
  symbol: z.string().trim().optional(),
  sort: z.enum(['createdAt', 'symbol', 'entryDate', 'exitDate']).default('createdAt'),
  direction: z.enum(['asc', 'desc']).default('desc'),
});

export type TradeListFilters = z.infer<typeof tradeListFiltersSchema>;
