"use client"

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// import { chartData, chartConfig } from "@/data/data"

export const description = "A mixed bar chart"

const chartData = [
  { parameter: "temperature", value: 31, fill: "var(--color-temperature)" },
  { parameter: "humidity", value: 75, fill: "var(--color-humidity)" },
  { parameter: "dissolved_oxygen", value: 8.8, fill: "var(--color-dissolved_oxygen)" },
  { parameter: "H2O_level", value: 92, fill: "var(--color-H2O_level)" },
  { parameter: "pH_level", value: 7.5, fill: "var(--color-pH_level)" },
]

const chartConfig = {
  value: {
    label: "Value",
  },
  temperature: {
    label: "Temp",
    color: "red",
  },
  humidity: {
    label: "Humid",
    color: "#FF7EE2",
  },
  dissolved_oxygen: {
    label: "Oxygen",
    color: "green",
  },
  H2O_level: {
    label: "H2O",
    color: "blue",
  },
  pH_level: {
    label: "PH",
    color: "#FFB200",
  },
} satisfies ChartConfig

export function DataComponent() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-bold opacity-70">Live Pond Stats:</CardTitle>
        <CardDescription className="font-bold opacity-70"></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="parameter"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="value" layout="vertical" radius={5}>
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {/* Temperature reduced by 1 today <TrendingUp className="h-4 w-4" /> */}
        </div>
        <div className="leading-none text-muted-foreground font-bold">
          Showing results for 20th of October 2024
        </div>
      </CardFooter>
    </Card>
  )
}
