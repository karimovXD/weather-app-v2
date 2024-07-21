"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartSkeleton from "./chartSkeleton";
import { humidityLevels } from "@/constant";

const chartConfig = {
  humidity: {
    label: "humidity",
    color: "#32CD32",
  },
} satisfies ChartConfig;

type Props = {
  currentHumidity: number;
  humidityChartData: {
    date: string;
    humidity: number;
  }[];
  loading: true | false;
};

const HumidityChart = ({
  currentHumidity,
  humidityChartData,
  loading,
}: Props) => {
  if (loading) {
    return <ChartSkeleton height={44} maxHeight={80} />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Humidity Levels</CardTitle>
        <CardDescription>
          <span className="block mt-2 w-fit px-3 py-1 rounded-xl text-black text-sm font-medium bg-[#32CD32]/30">
            {
              humidityLevels.find((level) => currentHumidity <= level.max)
                ?.message
            }
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-32 lg:h-52 w-full">
          <AreaChart
            accessibilityLayer
            data={humidityChartData}
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
              tickFormatter={(date) => {
                const d = new Date(date);
                return d.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    });
                  }}
                />
              }
            />
            <defs>
              <linearGradient id="fillHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-humidity)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-humidity)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="humidity"
              type="natural"
              fill="url(#fillHumidity)"
              fillOpacity={0.4}
              stroke="var(--color-humidity)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HumidityChart;
