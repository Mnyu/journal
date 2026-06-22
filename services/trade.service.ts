import * as repo from '@/repositories/trade.repository';
import { buildPagination } from '@/lib/pagination';
import { PageResponse, TradeDTO, TrajectoryDTO } from '@/types/dto';
import { Trade } from '@/db/schema';
import { TradeListFilters } from '@/schemas/trade.schema';
import { Trajectory } from '@/types/domain';

export const listTrades = async (filters: TradeListFilters): Promise<PageResponse<TradeDTO>> => {
  const queryResult = await repo.findTrades(filters);
  const pagination = buildPagination(filters.page, filters.pageSize, queryResult.total);
  return {
    data: buildDTOsFromTrades(queryResult.rows),
    pagination: pagination,
  };
};

export const listOpenTrades = async (filters: TradeListFilters): Promise<PageResponse<TradeDTO>> => {
  const queryResult = await repo.findOpenTrades(filters);
  const pagination = buildPagination(filters.page, filters.pageSize, queryResult.total);
  return {
    data: buildDTOsFromTrades(queryResult.rows),
    pagination: pagination,
  };
};

export const getTrajectory = async (): Promise<TrajectoryDTO[]> => {
  const trajectories = await repo.findTrajectory();
  return trajectories.map((t) => buildDTOFromTrajectory(t));
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
    createdAt: trade.createdAt ? trade.createdAt.toISOString() : '',
    updatedAt: trade.updatedAt ? trade.updatedAt.toISOString() : '',
  };
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
