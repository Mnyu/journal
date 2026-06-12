import { TrendingUp } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const AnalyticsKPIs = () => {
  return (
    <section className='flex items-center gap-4 p-1'>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Win Rate</CardDescription>
          <CardTitle className='flex gap-5 items-center'>
            <span className='text-3xl'>38%</span>
            <TrendingUp size={32} />
          </CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Average Gain %</CardDescription>
          <CardTitle className='text-3xl'>7%</CardTitle>
          <CardDescription>20.1% from last month</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Average Loss %</CardDescription>
          <CardTitle className='text-3xl'>-2%</CardTitle>
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
export default AnalyticsKPIs;
