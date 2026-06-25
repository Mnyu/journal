'use server';
import { requireSession } from '@/lib/auth-session';
import * as yearlyStatsService from '@/services/yearly-stats.service';

export const getCurrentAnalytics = async () => {
  const { user } = await requireSession();
  return await yearlyStatsService.getCurrentAnalytics(user.id);
};
