'use server';

import { requireSession } from '@/lib/auth-session';
import { tradeReviewsSchema } from '@/schemas/trade-review.schema';
import { tradeListFiltersSchema } from '@/schemas/trade.schema';
import * as tradeService from '@/services/trade.service';
import { PageResponse, TradeDTO, TradeReviewsDTO, TrajectoryDTO } from '@/types/dto';

export const getTrades = async (input: unknown): Promise<PageResponse<TradeDTO>> => {
  const { user } = await requireSession();
  const filters = tradeListFiltersSchema.parse(input);
  return await tradeService.getTrades(user.id, filters);
};

export const getOpenTrades = async (input: unknown): Promise<PageResponse<TradeDTO>> => {
  const { user } = await requireSession();
  const filters = tradeListFiltersSchema.parse(input);
  return await tradeService.getOpenTrades(user.id, filters);
};

export const getTradeById = async (id: string): Promise<TradeDTO> => {
  const { user } = await requireSession();
  if (!id) {
    throw new Error('id is required');
  }
  return await tradeService.getTradeById(user.id, id);
};

export const getTrajectory = async (): Promise<TrajectoryDTO[]> => {
  const { user } = await requireSession();
  return await tradeService.getTrajectory(user.id);
};

export const saveReviews = async (input: unknown): Promise<TradeReviewsDTO> => {
  const { user } = await requireSession();
  const reviews = tradeReviewsSchema.parse(input);
  if (!reviews.entry && !reviews.exit) {
    throw new Error('both entry and exit reviews cannot be missing');
  }
  return await tradeService.saveReviews(user.id, reviews);
};
