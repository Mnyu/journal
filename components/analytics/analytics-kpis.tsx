import { TrendingUp } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const AnalyticsKPIs = () => {
  return (
    <section className='flex items-center gap-4 p-1'>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Current Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>2.72</CardTitle>
          <CardDescription>MTD</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Avg Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>2.72</CardTitle>
          <CardDescription>Last 12 months</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Best Monthly Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>2.72</CardTitle>
          <CardDescription>Feb 2026</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Worst Monthly Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>0.72</CardTitle>
          <CardDescription>Jan 2026</CardDescription>
        </CardHeader>
      </Card>
      <Card className='w-full'>
        <CardHeader>
          <CardDescription>Months with Positive Edge</CardDescription>
          <CardTitle className='text-2xl xl:text-3xl'>6/12</CardTitle>
          <CardDescription>50%</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};
export default AnalyticsKPIs;
