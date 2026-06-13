'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { CartesianGrid, LabelList, Legend, Line, LineChart, ReferenceLine, XAxis, YAxis } from 'recharts';

export const edges = [
  { xvalue: 'January', edge: 2.98 },
  { xvalue: 'February', edge: 1.72 },
  { xvalue: 'March', edge: 2.43 },
  { xvalue: 'April', edge: 1.61 },
  { xvalue: 'May', edge: 2.12 },
  { xvalue: 'June', edge: 2.76 },
];

const chartConfig = {
  edge: {
    label: 'Edge',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

const EdgeTrend = () => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Edge Trend</CardTitle>
        <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
      </CardHeader>
      <CardContent className='pl-0'>
        <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
          <LineChart accessibilityLayer data={edges}>
            <CartesianGrid vertical={true} />
            <XAxis
              type='category'
              dataKey='xvalue'
              label={{
                value: 'Month',
                position: 'insideBottom',
                offset: 0,
              }}
            />
            <YAxis
              domain={[0, 5]}
              label={{
                value: 'Edge',
                angle: -90,
              }}
            />
            <Line
              type='monotone'
              dataKey='edge'
              connectNulls={true}
              strokeWidth={2}
              stroke='var(--color-edge)'
              dot={{
                fill: 'var(--color-edge)',
              }}
              activeDot={{
                r: 5,
              }}
            >
              <LabelList dataKey='edge' position='top' />
            </Line>
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default EdgeTrend;
