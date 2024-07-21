"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSkeleton from "./chartSkeleton";

const chartConfig = {
  precipitation: {
    label: "Precipitation",
    color: "#1E90FF",
  },
} satisfies ChartConfig;
//type
type Props = {
  precipitationSumChartData: {
    date: string;
    precipitation: string;
  }[];
  loading: true | false;
  error: string | null;
};
function PrecipitationSumChart({
  precipitationSumChartData,
  loading,
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
        <CardTitle>Precipitation Sum</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={precipitationSumChartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(date: string) => {
                const d = new Date(date);
                return d.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="precipitation"
              fill="var(--color-precipitation)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PrecipitationSumChart;
