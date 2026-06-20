'use server';

import { tradeListFiltersSchema } from '@/schemas/trade.schema';
import * as tradeService from '@/services/trade.service';
import { PageResponse, TradeDTO } from '@/types/dto';

export const getTrades = async (input: unknown): Promise<PageResponse<TradeDTO>> => {
  const filters = tradeListFiltersSchema.parse(input);
  return await tradeService.listTrades(filters);
};
