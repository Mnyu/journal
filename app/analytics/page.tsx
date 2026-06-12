import AnalyticsHeader from '@/components/analytics/analytics-header';
import AnalyticsKPIs from '@/components/analytics/analytics-kpis';
import BellCurveLast3Years from '@/components/analytics/analytics-bell-last-3-years';
import EdgeTrend from '@/components/analytics/analytics-edge-trend';
import AnalyticsTrajectoryTable from '@/components/analytics/analytics-tragetory-table';
import AnalyticsWinRate from '@/components/analytics/analytics-win-rate';

const Analytics = () => {
  return (
    <section className='w-full flex flex-col gap-3 p-1 overflow-auto'>
      <AnalyticsHeader />
      <AnalyticsKPIs />
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-1'>
        <EdgeTrend />
        <BellCurveLast3Years />
      </section>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-1'>
        <AnalyticsWinRate />
        <AnalyticsTrajectoryTable />
      </section>
    </section>
  );
};
export default Analytics;
