import AnalyticsHeader from '@/components/analytics/analytics-header';
import AnalyticsKPIs from '@/components/analytics/analytics-kpis';
import BellCurveLast3Years from '@/components/analytics/analytics-bell-last-3-years';

const Analytics = () => {
  return (
    <section className='w-full flex flex-col gap-5 overflow-auto'>
      <AnalyticsHeader />
      <AnalyticsKPIs />
      <BellCurveLast3Years />
    </section>
  );
};
export default Analytics;
