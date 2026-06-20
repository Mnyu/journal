'use client';

import { DistributionPointDTO } from '@/types/dto';
import { Area, AreaChart, Legend, ReferenceLine, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';

const chartConfig = {
  trades: {
    label: 'Trades',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

interface DashboardBellCurveProps {
  distribution: DistributionPointDTO[];
}

const DashboardBellCurve = ({ distribution }: DashboardBellCurveProps) => {
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Bell Curve</CardTitle>
          <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className='w-full max-h-[250px]'>
            <AreaChart
              data={distribution}
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
                  value: 'No of Trades',
                  angle: -90,
                }}
              />
              <Area
                type='monotone'
                dataKey='numberOfTrades'
                connectNulls={true}
                fill='var(--color-trades)'
                fillOpacity={0.05}
                stroke='var(--color-trades)'
                strokeWidth={2}
                dot={{
                  fill: 'var(--primary)',
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
    </section>
  );
};
export default DashboardBellCurve;
