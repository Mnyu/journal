'use server';

import { tradeReviewsSchema } from '@/schemas/trade-review.schema';
import { tradeListFiltersSchema } from '@/schemas/trade.schema';
import * as tradeService from '@/services/trade.service';
import { PageResponse, TradeDTO, TradeReviewsDTO, TrajectoryDTO } from '@/types/dto';

export const getTrades = async (input: unknown): Promise<PageResponse<TradeDTO>> => {
  const filters = tradeListFiltersSchema.parse(input);
  return await tradeService.getTrades(filters);
};

export const getOpenTrades = async (input: unknown): Promise<PageResponse<TradeDTO>> => {
  const filters = tradeListFiltersSchema.parse(input);
  return await tradeService.getOpenTrades(filters);
};

export const getTradeById = async (id: string): Promise<TradeDTO> => {
  if (!id) {
    throw new Error('id is required');
  }
  return await tradeService.getTradeById(id);
};

export const getTrajectory = async (): Promise<TrajectoryDTO[]> => {
  return await tradeService.getTrajectory();
};

export const saveReviews = async (input: unknown): Promise<TradeReviewsDTO> => {
  const reviews = tradeReviewsSchema.parse(input);
  if (!reviews.entry && !reviews.exit) {
    throw new Error('both entry and exit reviews cannot be missing');
  }
  return await tradeService.saveReviews(reviews);
};
