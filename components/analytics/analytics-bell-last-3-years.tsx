'use client';

import { Area, AreaChart, Legend, ReferenceLine, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { YearDistributionDTO } from '@/types/dto';

const chartConfig = {
  trades: {
    label: 'Trades',
  },
} satisfies ChartConfig;

type ChartData = {
  returnPercent: number;
  [year: string]: number | null;
};

interface BellCurveLast3YearsProps {
  last3YearsDistributions: YearDistributionDTO[];
}

const BellCurveLast3Years = ({ last3YearsDistributions }: BellCurveLast3YearsProps) => {
  const buildChartData = (distributions: YearDistributionDTO[], years: number[]) => {
    const map = new Map<number, ChartData>();
    for (const dist of distributions) {
      let item = map.get(dist.returnPercent);
      if (!item) {
        item = { returnPercent: dist.returnPercent };
        // Initialize all years to null
        for (const year of years) {
          item[year.toString()] = null;
        }
        map.set(dist.returnPercent, item);
      }
      item[dist.year.toString()] = dist.numberOfTrades;
    }
    return [...map.values()].sort((a, b) => a.returnPercent - b.returnPercent);
  };

  const years = [...new Set(last3YearsDistributions.map((d) => d.year))].sort((a, b) => a - b);
  const chartData = buildChartData(last3YearsDistributions, years);

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
                value: 'No of Trades',
                angle: -90,
              }}
            />
            {years.map((year, index) => {
              const colorIndex = (index % 5) + 1;
              return (
                <Area
                  key={`bell-chart-year-${year}`}
                  type='monotone'
                  dataKey={year}
                  name={String(year)}
                  connectNulls={true}
                  fill={`var(--chart-${colorIndex})`}
                  fillOpacity={0.05}
                  stroke={`var(--chart-${colorIndex})`}
                  strokeWidth={2}
                  dot={{
                    fill: `var(--chart-${colorIndex})`,
                  }}
                  activeDot={{
                    r: 5,
                  }}
                />
              );
            })}
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend verticalAlign='top' align='right' />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default BellCurveLast3Years;
