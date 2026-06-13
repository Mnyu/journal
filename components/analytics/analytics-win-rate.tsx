'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer } from '../ui/chart';
import { winPercents } from '@/config/winRate';

const chartConfig = {
  winPercent: {
    label: 'Win %',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

const AnalyticsWinRate = () => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Win Rate</CardTitle>
        <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
      </CardHeader>
      <CardContent className='pl-0'>
        <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
          <BarChart accessibilityLayer data={winPercents}>
            <CartesianGrid vertical={false} />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel hideIndicator />} /> */}
            <XAxis dataKey='month' />
            <YAxis dataKey='winPercent' domain={[0, 100]} />
            <Bar dataKey='winPercent' shape={<CustomBar />}>
              <LabelList dataKey='winPercent' position='top' formatter={(value) => `${value}%`} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const barWidth = width * 0.6;
  return <rect x={x + (width - barWidth) / 2} y={y} width={barWidth} height={height} fill='var(--primary)' rx={4} />;
};

export default AnalyticsWinRate;
