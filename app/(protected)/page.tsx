import { getMonthlyStat, getMonthlyStatForCurrentMonth } from '@/actions/monthly-stats.actions';
import { getOpenTrades } from '@/actions/trade.actions';
import DashboardBellCurve from '@/components/dashboard/dashboard-bell-curve';
import DashBoardHeader from '@/components/dashboard/dashboard-header';
import DashboardKPIs from '@/components/dashboard/dashboard-kpis';
import OpenTrades from '@/components/dashboard/dashboard-open-trades';
import Trajectory from '@/components/trajectory-table';
import { getCurrentMonth } from '@/lib/months';

interface DashboardProps {
  searchParams: Promise<{
    month?: string;
  }>;
}

const Dashboard = async ({ searchParams }: DashboardProps) => {
  const { month } = await searchParams;
  const currentMonth = getCurrentMonth();
  const stat = month && month !== currentMonth ? await getMonthlyStat(month) : await getMonthlyStatForCurrentMonth();

  const openTradesData = await getOpenTrades({
    pageSize: 4,
  });

  return (
    <section className='w-full flex flex-col gap-4 p-1 overflow-auto focus-visible:outline-none'>
      <DashBoardHeader selectedMonth={month} />
      <DashboardKPIs stat={stat} />
      <section className='h-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-1'>
        <OpenTrades data={openTradesData} />
        <Trajectory pagination={true} />
      </section>
      <DashboardBellCurve distribution={stat.distribution} />
    </section>
  );
};

export default Dashboard;
