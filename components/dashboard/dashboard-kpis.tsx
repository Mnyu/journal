import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardKPIs = () => {
  return (
    <section className='flex items-center gap-5'>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Trades</CardDescription>
          <CardTitle className='text-3xl'>46</CardTitle>
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
          <CardDescription>Risk : Reward</CardDescription>
          <CardTitle className='text-3xl'>2.45x</CardTitle>
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
    </section>
  );
};
export default DashboardKPIs;
