"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { chartData, chartConfig } from "@/data/data"

// export const description = "A multiple line chart"

export function LineChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fish Pond Readings</CardTitle>
        <CardDescription>October 10 - October 21 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="temperature"
              type="monotone"
              stroke="var(--color-temperature)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="humidity"
              type="monotone"
              stroke="var(--color-humidity)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="dissolved_oxygen"
              type="monotone"
              stroke="var(--color-dissolved_oxygen)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="H2O_level"
              type="monotone"
              stroke="var(--color-H2O_level)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="pH_level"
              type="monotone"
              stroke="var(--color-pH_level)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing results for the past 11 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
