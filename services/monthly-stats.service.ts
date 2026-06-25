import { MonthlyStat } from '@/db/schema';
import * as statsRepo from '@/repositories/monthly-stats.repository';
import { DistributionPoint } from '@/types/domain';
import { DistributionPointDTO, MonthlyStatDTO } from '@/types/dto';

export const getMonthlyStatForCurrentMonth = async (userId: string) => {
  const monthlyStat = await statsRepo.getMonthlyStatForCurrentMonth(userId);
  if (!monthlyStat) {
    //TODO : Fix this
    return buildEmptyMonthlyStatDTO();
  }
  return buildDTOFromMonthlyStat(monthlyStat);
};

export const getMonthlyStat = async (userId: string, yearMonth: string) => {
  const monthlyStat = await statsRepo.getMonthlyStat(userId, yearMonth);
  if (!monthlyStat) {
    //TODO : Fix this
    return buildEmptyMonthlyStatDTO();
  }
  return buildDTOFromMonthlyStat(monthlyStat);
};

const buildDTOFromMonthlyStat = (monthlyStat: MonthlyStat): MonthlyStatDTO => {
  const monthlyStatDTO: MonthlyStatDTO = {
    yearMonth: monthlyStat.yearMonth,
    month: monthlyStat.month,
    trades: monthlyStat.trades,
    wins: monthlyStat.wins,
    losses: monthlyStat.losses,
    avgGain: monthlyStat.avgGain,
    avgLoss: monthlyStat.avgLoss,
    winRate: monthlyStat.winRate,
    riskReward: monthlyStat.riskReward,
    edge: monthlyStat.edge,
    distribution: [],
  };
  if (monthlyStat.distribution && monthlyStat.distribution.length > 0) {
    monthlyStatDTO.distribution = monthlyStat.distribution.map((d) => buildDTOFromDistributionPoint(d));
  }
  return monthlyStatDTO;
};

const buildDTOFromDistributionPoint = (distributionPoint: DistributionPoint): DistributionPointDTO => {
  const distributionPointDTO: DistributionPointDTO = {
    returnPercent: distributionPoint.returnPercent,
    numberOfTrades: distributionPoint.numberOfTrades,
  };
  return distributionPointDTO;
};

const buildEmptyMonthlyStatDTO = () => {
  const monthlyStatDTO: MonthlyStatDTO = {
    yearMonth: '',
    month: '',
    trades: 0,
    wins: 0,
    losses: 0,
    avgGain: 0,
    avgLoss: 0,
    winRate: 0,
    riskReward: 0,
    edge: 0,
    distribution: [],
  };

  return monthlyStatDTO;
};
