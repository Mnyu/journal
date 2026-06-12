import DateRangePicker from '../date-picker-with-range';

const DashBoardHeader = () => {
  return (
    <section className='pt-3 flex items-center justify-between px-2'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl leading-none font-semibold'>Dashboard</h1>
        <p className='text-sm text-muted-foreground'>Overview of your trading performance</p>
      </div>
      <div>
        <DateRangePicker />
      </div>
    </section>
  );
};
export default DashBoardHeader;
