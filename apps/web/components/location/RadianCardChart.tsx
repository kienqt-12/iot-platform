'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';

import { Card } from '@repo/ui/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@repo/ui/components/ui/chart';

export default function Component({
  chartConfig,
  title,
  value,
}: {
  chartConfig: any;
  title: string;
  value: number;
}) {
  return (
    <Card className="py-4 px-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <ChartContainer config={chartConfig} className="w-full">
        <RadialBarChart
          data={[{ value }]}
          startAngle={180}
          endAngle={180 - (value / 100) * 360}
          innerRadius={60}
          outerRadius={100}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="last:fill-background first:fill-muted"
            // polarAngles={[0, 90, 180, 270]}
            polarRadius={[70, 50]}
          />
          <PolarRadiusAxis tick={false} tickLine={true} axisLine={true}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy || 0}
                        className="fill-foreground text-lg font-semibold"
                      >
                        {value.toLocaleString() + '%'}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="value"
            stackId="a"
            cornerRadius={5}
            fill="hsl(var(--chart-1))"
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </Card>
  );
}
