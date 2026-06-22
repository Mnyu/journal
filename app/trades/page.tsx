import { getTrades } from '@/actions/trade.actions';
import TradesHeader from '@/components/trades/trades-header';
import TradesTable from '@/components/trades/trades-table';
import { tradeColumnsMap } from '@/components/trades/trades-table-columns';
import { TradeListFilters } from '@/schemas/trade.schema';

interface TradesProps {
  searchParams: Promise<TradeListFilters>;
}

const Trades = async ({ searchParams }: TradesProps) => {
  const params = await searchParams;
  const data = await getTrades(params);

  return (
    <section className='flex flex-col w-full gap-5'>
      <TradesHeader />
      <TradesTable data={data} />
    </section>
  );
};
export default Trades;
