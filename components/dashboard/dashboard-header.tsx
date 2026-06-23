import DateRangePicker from '../date-picker-with-range';

const DashBoardHeader = () => {
  return (
    <section className='pt-3 px-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl leading-none font-semibold'>Overview</h1>
        <p className='text-sm text-muted-foreground'>Your trading performance at a glance</p>
      </div>
      <div className='md:flex items-center justify-end'>
        <DateRangePicker />
      </div>
    </section>
  );
};
export default DashBoardHeader;
