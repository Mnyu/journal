'use server';
import * as yearlyStatsService from '@/services/yearly-stats.service';

export const getCurrentAnalytics = async () => {
  return await yearlyStatsService.getCurrentAnalytics();
};
