import DashBoardHeader from '@/components/dashboard/dashboard-header';
import DashboardKPIs from '@/components/dashboard/dashboard-kpis';

const Home = () => {
  return (
    <section className='flex flex-col w-full gap-5'>
      <DashBoardHeader />
      <DashboardKPIs />
    </section>
  );
};

export default Home;
