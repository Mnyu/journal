import { getMonthlyStatForCurrentMonth } from '@/actions/monthly-stats.actions';
import DashboardBellCurve from '@/components/dashboard/dashboard-bell-curve';
import DashBoardHeader from '@/components/dashboard/dashboard-header';
import DashboardKPIs from '@/components/dashboard/dashboard-kpis';
import DashboardTrajectoryTable from '@/components/dashboard/dashboard-tragetory-table';

const Dashboard = async () => {
  const stat = await getMonthlyStatForCurrentMonth();
  return (
    <section className='w-full flex flex-col gap-4 p-1 overflow-auto'>
      <DashBoardHeader />
      <DashboardKPIs stat={stat} />
      <DashboardBellCurve distribution={stat.distribution} />
      <DashboardTrajectoryTable />
    </section>
  );
};

export default Dashboard;
