'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ReferenceLine, XAxis, YAxis } from 'recharts';

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
  },
} satisfies ChartConfig;

const BellCurveLast3Years = () => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Bell Curve Comparison for Last 3 years</CardTitle>
        <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
      </CardHeader>
      <CardContent className='pl-0'>
        <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
          <AreaChart
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
            className='size-fit'
          >
            <ReferenceLine x={0} label='x = 0' />
            <XAxis
              domain={[(dataMin: number) => dataMin - 5, (dataMax: number) => dataMax + 5]}
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
            <Area
              type='monotone'
              dataKey='2023'
              connectNulls={true}
              fill='var(--color-chart-1)'
              fillOpacity={0.05}
              stroke='var(--color-chart-1)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-chart-1)',
              }}
              activeDot={{
                r: 5,
              }}
            />
            <Area
              type='monotone'
              dataKey='2024'
              connectNulls={true}
              fill='var(--color-chart-2)'
              fillOpacity={0.05}
              stroke='var(--color-chart-2)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-chart-2)',
              }}
              activeDot={{
                r: 5,
              }}
            />
            <Area
              type='monotone'
              dataKey='2025'
              connectNulls={true}
              fill='var(--color-chart-3)'
              fillOpacity={0.05}
              stroke='var(--color-chart-3)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-chart-3)',
              }}
              activeDot={{
                r: 5,
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend verticalAlign='top' align='right' />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default BellCurveLast3Years;
