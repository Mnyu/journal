import AnalyticsHeader from '@/components/analytics/analytics-header';
import AnalyticsKPIs from '@/components/analytics/analytics-kpis';
import BellCurveLast3Years from '@/components/analytics/analytics-bell-last-3-years';
import EdgeTrend from '@/components/analytics/analytics-edge-trend';
import AnalyticsTrajectoryTable from '@/components/analytics/analytics-tragetory-table';
import AnalyticsWinRate from '@/components/analytics/analytics-win-rate';
import { getCurrentAnalytics } from '@/actions/yearly-stats.actions';

const Analytics = async () => {
  const analytics = await getCurrentAnalytics();
  return (
    <section className='h-full w-full flex flex-col gap-3 p-1 overflow-auto'>
      <AnalyticsHeader />
      <AnalyticsKPIs analytics={analytics} />
      <section className='h-full grid grid-cols-1 xl:grid-cols-3 gap-4 p-1'>
        <EdgeTrend edges={analytics.edges} />
        <BellCurveLast3Years last3YearsDistributions={analytics.last3YearsDistributions} />
        <AnalyticsWinRate winRates={analytics.winRates} />
      </section>
      <section className='h-full'>
        <AnalyticsTrajectoryTable />
      </section>
    </section>
  );
};
export default Analytics;
