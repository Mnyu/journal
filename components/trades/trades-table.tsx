import { DataTable } from '../table/data-table';
import { columns } from './trades-table-columns';
import { PageResponse, TradeDTO } from '@/types/dto';

interface TradesTableProps {
  response: PageResponse<TradeDTO>;
}

const TradesTable = ({ response }: TradesTableProps) => {
  return (
    <section className='w-full mx-auto'>
      <DataTable
        columns={columns}
        data={response.data}
        pagination={true}
        page={response.pagination.page}
        pageSize={response.pagination.pageSize}
        totalPages={response.pagination.totalPages}
        totalRecords={response.pagination.totalRecords}
      />
    </section>
  );
};
export default TradesTable;
