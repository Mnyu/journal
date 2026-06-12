import { DataTable } from '../ui/data-table';
import { trades } from '../../config/trades';
import { columns } from './trades-table-columns';

const TradesTable = () => {
  return (
    <section className='w-full mx-auto'>
      <DataTable columns={columns} data={trades} />
    </section>
  );
};
export default TradesTable;
