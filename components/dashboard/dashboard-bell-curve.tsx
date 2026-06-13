'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, XAxis, YAxis } from 'recharts';

const chartData = [
  { returnPercent: -5, '2023': 2, '2024': null, '2025': null },
  { returnPercent: -3, '2023': null, '2024': 5, '2025': null },
  { returnPercent: -1, '2023': null, '2024': null, '2025': 8 },
  { returnPercent: 1, '2023': 15, '2024': 18, '2025': 22 },
  { returnPercent: 5, '2023': 10, '2024': 8, '2025': 14 },
  { returnPercent: 10, '2023': 5, '2024': 7, '2025': 9 },
  { returnPercent: 15, '2023': 0, '2024': 3, '2025': 4 },
];

const chartConfig = {
  trades: {
    label: 'Trades',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

const DashboardBellCurve = () => {
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Bell Curve</CardTitle>
          <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
            <LineChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={true} />
              <XAxis
                type='number'
                dataKey='returnPercent'
                label={{
                  value: 'Return %',
                  position: 'insideBottom',
                  offset: 0,
                }}
              />
              <YAxis
                label={{
                  value: 'Trade Frequency (%)',
                  angle: -90,
                }}
              />
              <Line
                type='monotone'
                dataKey='2025'
                connectNulls={true}
                strokeWidth={2}
                stroke='var(--color-trades)'
                dot={{
                  fill: 'var(--color-trades)',
                }}
                activeDot={{
                  r: 5,
                }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend verticalAlign='top' align='right' />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
};
export default DashboardBellCurve;
