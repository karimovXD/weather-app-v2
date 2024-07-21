"use client";

import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSkeleton from "./chartSkeleton";

const chartConfig = {
  precipitationProbability: {
    label: "Precipitation Probability (%)",
    color: "#1E90FF",
    icon: Activity,
  },
} satisfies ChartConfig;

type Props = {
  loading: true | false;
  precipitationProbabilityChartData: {
    date: string;
    precipitationProbability: number;
  }[];
  error: string | null;
};

function PrecipitationProbabilityChart({
  loading,
  precipitationProbabilityChartData,
  error,
}: Props) {
  if (loading) {
    return <ChartSkeleton />;
  } else {
    if (error) {
      console.log(error);
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Precipitation Probability</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={precipitationProbabilityChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(date: string) => {
                const d = new Date(date);
                return d.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="precipitationProbability"
              type="step"
              fill="var(--color-precipitationProbability)"
              fillOpacity={0.4}
              stroke="var(--color-precipitationProbability)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PrecipitationProbabilityChart;
