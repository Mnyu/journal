import DashBoardHeader from '@/components/dashboard/dashboard-header';
import KPI from '@/components/dashboard/kpi';

const Home = () => {
  return (
    <section className='flex flex-col w-full gap-5'>
      <DashBoardHeader />
      <KPI />
    </section>
  );
};

export default Home;
