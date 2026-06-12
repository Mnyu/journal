import TradesHeader from '@/components/trades/trades-header';
import TradesTable from '@/components/trades/trades-table';

const Trades = () => {
  return (
    <section className='flex flex-col w-full gap-5'>
      <TradesHeader />
      <TradesTable />
    </section>
  );
};
export default Trades;
