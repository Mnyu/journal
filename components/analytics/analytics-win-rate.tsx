'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer } from '../ui/chart';
import { MonthlyWinRateDTO } from '@/types/dto';

const chartConfig = {
  winPercent: {
    label: 'Win %',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

interface AnalyticsWinRateProps {
  winRates: MonthlyWinRateDTO[];
}

const AnalyticsWinRate = ({ winRates }: AnalyticsWinRateProps) => {
  winRates = winRates.slice(0, 6).reverse();

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Win Rate</CardTitle>
        <CardDescription>Monthly win rate over the last six months.</CardDescription>
      </CardHeader>
      <CardContent className='pl-0'>
        <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
          <BarChart accessibilityLayer data={winRates}>
            <CartesianGrid vertical={false} />
            {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel hideIndicator />} /> */}
            <XAxis dataKey='month' />
            <YAxis dataKey='winRate' domain={[0, 100]} />
            <Bar dataKey='winRate' shape={<CustomBar />}>
              <LabelList dataKey='winRate' position='top' formatter={(value) => `${value}%`} />
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
