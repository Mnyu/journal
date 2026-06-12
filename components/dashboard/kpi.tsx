import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const KPI = () => {
  return (
    <section className='flex items-center gap-5'>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Net P&L</CardDescription>
          <CardTitle className='text-3xl'>₹ 15,231.89</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Win Rate</CardDescription>
          <CardTitle className='text-3xl'>38%</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Edge</CardDescription>
          <CardTitle className='text-3xl'>1.72</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Trades</CardDescription>
          <CardTitle className='text-3xl'>46</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};
export default KPI;
