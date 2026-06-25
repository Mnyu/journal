import { Trade, TradeReview } from '@/db/schema';
import { buildPagination } from '@/lib/pagination';
import * as reviewRepo from '@/repositories/trade-review.repository';
import * as repo from '@/repositories/trade.repository';
import { TradeReviews } from '@/schemas/trade-review.schema';
import { TradeListFilters } from '@/schemas/trade.schema';
import { Trajectory } from '@/types/domain';
import { PageResponse, TradeDTO, TradeReviewDTO, TradeReviewsDTO, TrajectoryDTO } from '@/types/dto';

export const getTrades = async (userId: string, filters: TradeListFilters): Promise<PageResponse<TradeDTO>> => {
  const queryResult = await repo.findTrades(userId, filters);
  const pagination = buildPagination(filters.page, filters.pageSize, queryResult.total);
  return {
    data: buildDTOsFromTrades(queryResult.rows),
    pagination: pagination,
  };
};

export const getOpenTrades = async (userId: string, filters: TradeListFilters): Promise<PageResponse<TradeDTO>> => {
  const queryResult = await repo.findOpenTrades(userId, filters);
  const pagination = buildPagination(filters.page, filters.pageSize, queryResult.total);
  return {
    data: buildDTOsFromTrades(queryResult.rows),
    pagination: pagination,
  };
};

export const getTradeById = async (userId: string, id: string): Promise<TradeDTO> => {
  const trade = await repo.findTrade(userId, id);
  if (!trade) {
    throw new Error('trade not found');
  }
  return buildDTOFromTradeWithReviews(trade);
};

export const getTrajectory = async (userId: string): Promise<TrajectoryDTO[]> => {
  const trajectories = await repo.findTrajectory(userId);
  return trajectories.map((t) => buildDTOFromTrajectory(t));
};

export const saveReviews = async (userId: string, reviews: TradeReviews): Promise<TradeReviewsDTO> => {
  const tradeId = reviews.tradeId;
  getTradeById(userId, tradeId);

  let entryReviewDTO = null;
  let exitReviewDTO = null;
  if (reviews.entry) {
    const entryReview = await reviewRepo.upsertTradeReview({
      type: 'ENTRY',
      tradeId: tradeId,
      score: reviews.entry.score,
      comments: reviews.entry.comments,
    });
    entryReviewDTO = buildDTOFromReview(entryReview);
  }
  if (reviews.exit) {
    const exitReview = await reviewRepo.upsertTradeReview({
      type: 'EXIT',
      tradeId: tradeId,
      score: reviews.exit.score,
      comments: reviews.exit.comments,
    });
    exitReviewDTO = buildDTOFromReview(exitReview);
  }
  return {
    tradeId: tradeId,
    entry: entryReviewDTO,
    exit: exitReviewDTO,
  };
};

const buildDTOsFromTrades = (trades: Trade[]): TradeDTO[] => {
  return trades.map((t) => buildDTOFromTrade(t));
};

const buildDTOFromTrade = (trade: Trade): TradeDTO => {
  return {
    id: trade.id,
    userId: trade.userId,
    orderId: trade.orderId,
    symbol: trade.symbol,
    strategy: trade.strategy ?? '',
    entry: trade.entry,
    quantity: trade.quantity,
    risk: trade.risk,
    exit: trade.exit ?? null,
    entryDate: trade.entryDate,
    exitDate: trade.exitDate ? trade.exitDate : '',
    return: trade.return ?? null,
    returnPercent: trade.returnPercent ?? null,
    rMultiple: trade.rMultiple ?? null,
    reviews: null,
    createdAt: trade.createdAt ? trade.createdAt.toISOString() : '',
    updatedAt: trade.updatedAt ? trade.updatedAt.toISOString() : '',
  };
};

const buildDTOFromTradeWithReviews = (trade: repo.TradeWithReviews): TradeDTO => {
  const tradeDTO = buildDTOFromTrade(trade);
  if (trade.reviews) {
    let entryReviewDTO = null;
    let exitReviewDTO = null;
    trade.reviews.map((review) => {
      const reviewDTO = buildDTOFromReview(review);
      if (review.type === 'ENTRY') {
        entryReviewDTO = reviewDTO;
      } else if (review.type === 'EXIT') {
        exitReviewDTO = reviewDTO;
      }
    });
    tradeDTO.reviews = {
      tradeId: trade.id,
      entry: entryReviewDTO,
      exit: exitReviewDTO,
    };
  }
  return tradeDTO;
};

const buildDTOFromTrajectory = (trajectory: Trajectory): TrajectoryDTO => {
  return {
    period: trajectory.period,
    noOfTrades: trajectory.noOfTrades,
    wins: trajectory.wins,
    losses: trajectory.losses,
    avgGain: trajectory.avgGain,
    avgLoss: trajectory.avgLoss,
    winRate: trajectory.winRate,
    riskReward: trajectory.riskReward,
    edge: trajectory.edge,
  };
};

const buildDTOFromReview = (review: TradeReview): TradeReviewDTO => {
  return {
    id: review.id,
    type: review.type,
    score: review.score,
    comments: review.comments ? review.comments : '',
    aiInsights: review.aiInsights ? review.aiInsights : '',
    createdAt: review.createdAt ? review.createdAt.toISOString() : '',
    updatedAt: review.updatedAt ? review.updatedAt.toISOString() : '',
  };
};
