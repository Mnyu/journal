'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { tradeColumnsMap } from '../trades/trades-table-columns';
import { PageResponse, TradeDTO } from '@/types/dto';
import { DataTable } from '../table/data-table';

interface OpenTradesTableProps {
  data: PageResponse<TradeDTO>;
}

const OpenTradesTable = ({ data }: OpenTradesTableProps) => {
  const columns = [
    tradeColumnsMap.symbol,
    tradeColumnsMap.entry,
    tradeColumnsMap.quantity,
    tradeColumnsMap.risk,
    tradeColumnsMap.entryDate,
  ];
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Open Trades</CardTitle>
          <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data.data}
            pagination={true}
            page={data.pagination.page}
            pageSize={data.pagination.pageSize}
            totalPages={data.pagination.totalPages}
            totalRecords={data.pagination.totalRecords}
          />
        </CardContent>
      </Card>
    </section>
  );
};
export default OpenTradesTable;
