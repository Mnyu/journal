import * as tradeRepo from '@/repositories/trade.repository';
import { buildPagination } from '@/lib/pagination';
import { PageResponse, TradeDTO } from '@/types/dto';
import { Trade } from '@/db/schema';
import { TradeListFilters } from '@/schemas/trade.schema';

export const listTrades = async (filters: TradeListFilters): Promise<PageResponse<TradeDTO>> => {
  const queryResult = await tradeRepo.findTrades(filters);
  const pagination = buildPagination(filters.page, filters.pageSize, queryResult.total);
  return {
    data: buildDTOsFromTrades(queryResult.rows),
    pagination: pagination,
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
    createdAt: trade.createdAt ? trade.createdAt.toISOString() : '',
    updatedAt: trade.updatedAt ? trade.updatedAt.toISOString() : '',
  };
};
