import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardKPIs = () => {
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-1'>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Trend</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--green)]'>Upward</CardTitle>
          {/* <CardTitle className='flex gap-5 items-center'>
            <span className='text-2xl xl:text-3xl'>Upward</span>
            <TrendingUp size={24} />
          </CardTitle> */}
          <CardDescription>System operation is efficient</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Trades</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>46</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Win Rate</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--green)]'>38%</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Risk : Reward</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--green)]'>2.45x</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--green)]'>1.72</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Average Gain</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--green)]'>₹34,756</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Average Loss</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl text-[var(--red)]'>₹14,195</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};
export default DashboardKPIs;
