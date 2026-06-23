'use server';
import * as statsService from '@/services/monthly-stats.service';

export const getMonthlyStatForCurrentMonth = async () => {
  return await statsService.getMonthlyStatForCurrentMonth();
};

export const getMonthlyStat = async (month: string) => {
  return await statsService.getMonthlyStat(month);
};
