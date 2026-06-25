'use server';
import { requireSession } from '@/lib/auth-session';
import * as statsService from '@/services/monthly-stats.service';

export const getMonthlyStatForCurrentMonth = async () => {
  const { user } = await requireSession();
  return await statsService.getMonthlyStatForCurrentMonth(user.id);
};

export const getMonthlyStat = async (month: string) => {
  const { user } = await requireSession();
  return await statsService.getMonthlyStat(user.id, month);
};
