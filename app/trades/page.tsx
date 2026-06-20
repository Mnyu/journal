import { getTrades } from '@/actions/trade.actions';
import TradesHeader from '@/components/trades/trades-header';
import TradesTable from '@/components/trades/trades-table';

interface TradesProps {
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
    symbol?: string;

    sort?: string;
    direction?: string;
  }>;
}

const Trades = async ({ searchParams }: TradesProps) => {
  const params = await searchParams;
  const response = await getTrades({
    page: Number(params.page ?? 1),
    pageSize: Number(params.pageSize ?? 10),
    symbol: params.symbol,
    sort: params.sort,
    direction: params.direction,
  });
  return (
    <section className='flex flex-col w-full gap-5'>
      <TradesHeader />
      <TradesTable response={response} />
    </section>
  );
};
export default Trades;
