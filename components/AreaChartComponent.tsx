"use client"

import { TrendingDown } from "lucide-react"
import { CartesianGrid, Area, AreaChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartData, chartConfig, listenToSensorReadings } from "@/data/data"
import { useEffect, useRef, useState } from "react"

// export const description = "A multiple line chart"

export function AreaChartComponent() {
  // const [chartData, setChartData] = useState(null)
  // const [liveSensorData, setLiveSensorData] = useState(null)
  // const latestDataRef = useRef(null)

  // useEffect(() => {
  //   const unsubcribe = listenToSensorReadings((data) => {
  //     if (data) {
  //       latestDataRef.current = data
  //     } else {
  //       console.log("No data available")
  //     }
  //   })

  //   const intervalId = setInterval(() => {
  //     if (latestDataRef.current) {
  //       console.log("New sensor readings:", latestDataRef.current)
  //       setLiveSensorData(latestDataRef.current)
  //     }
  //   }, 1000)

  //   return () => {
  //     unsubcribe()
  //     clearInterval(intervalId)
  //   }
  // })


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-bold opacity-70">Readings</CardTitle>
        <CardDescription className="font-bold opacity-70">
          Showing reading of pond variables for the past 11 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            <defs>
              <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-temperature)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-temperature)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillHumidity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-humidity)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-humidity)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillDissolvedOxygen" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-dissolved_oxygen)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-dissolved_oxygen)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillH2OLevel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-H2O_level)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-H2O_level)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPHLevel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-pH_level)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-pH_level)" stopOpacity={0.1} />
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
            <Area
              dataKey="temperature"
              type="natural"
              fill="url(#fillTemperature)"
              fillOpacity={0.4}
              stroke="var(--color-temperature)"
              stackId="a"
            />
            <Area
              dataKey="dissolved_oxygen"
              type="natural"
              fill="url(#fillDissolvedOxygen)"
              fillOpacity={0.4}
              stroke="var(--color-dissolved_oxygen)"
              stackId="a"
            />
            <Area
              dataKey="H2O_level"
              type="natural"
              fill="url(#fillH2OLevel)"
              fillOpacity={0.4}
              stroke="var(--color-H2O_level)"
              stackId="a"
            />
            <Area
              dataKey="pH_level"
              type="natural"
              fill="url(#fillPHLevel)"
              fillOpacity={0.4}
              stroke="var(--color-pH_level)"
              stackId="a"
            />
            <ChartLegend
              className="area-chart-legend w-full overflow-x-scroll pl-3"
              content={<ChartLegendContent />}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Temperature reduced by 1 today <TrendingDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground font-bold opacity-70">
              October 10 - October 21
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
