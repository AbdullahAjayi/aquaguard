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
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { chartConfig } from "@/data/data"
import { useSensorReadings } from "@/hooks/useSensorReadings"
import { useEffect, useState } from "react"

import { ref, onValue } from "firebase/database"

import { database } from "@/data/firebase"

// export const description = "A multiple line chart"
const sensorReadings = database ? ref(database, "Sensor") : null


export function AreaChartComponent() {
  const readings = useSensorReadings()
  const [chartData, setChartData] = useState<any[]>([]);

  // useEffect(() => {
  //   if (!sensorReadings) {
  //     console.warn("sensorReadings is null. Firebase database might not be initialized.");
  //     return;
  //   }

  //   console.log("Setting up Firebase listener...");
  //   const unsubscribe = onValue(sensorReadings, async (snapshot) => {
  //     console.clear()
  //     try {
  //       console.log("Firebase data updated. Fetching formatted data...");
  //       const formattedData = await getFormattedData();

  //       if (Array.isArray(formattedData) && formattedData.length > 0) {
  //         setChartData(formattedData as []);
  //         console.log("Chart data updated:", formattedData);
  //       } else {
  //         console.warn("Formatted data is empty or not an array:", formattedData);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   });

  //   // Clean up the listener on component unmount
  //   return () => {
  //     console.log("Cleaning up Firebase listener...");
  //     unsubscribe();
  //   };
  // }, []);

  setInterval(() => {
    setChartData(readings)
  }, 1000 * 5)

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
              <linearGradient id="fillDO" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-DO)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-DO)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillFishTank" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Fish_tank_level)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Fish_tank_level)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillReservoir" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Reservoir_level)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Reservoir_level)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Temperature)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Temperature)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillTurbidity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Turbidity)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Turbidity)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPH" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-pH_value)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-pH_value)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="DO_value"
              type="natural"
              fill="url(#fillDO)"
              fillOpacity={0.4}
              stroke="var(--color-DO_value)"
              stackId="a"
            />
            <Area
              dataKey="Fish_tank_level"
              type="natural"
              fill="url(#fillFishTank)"
              fillOpacity={0.4}
              stroke="var(--color-Fish_tank_level)"
              stackId="a"
            />
            <Area
              dataKey="Reservoir_level"
              type="natural"
              fill="url(#fillReservoir)"
              fillOpacity={0.4}
              stroke="var(--color-Reservoir_level)"
              stackId="a"
            />
            <Area
              dataKey="Temperature"
              type="natural"
              fill="url(#fillTemperature)"
              fillOpacity={0.4}
              stroke="var(--color-Temperature)"
              stackId="a"
            />
            <Area
              dataKey="Turbidity"
              type="natural"
              fill="url(#fillTurbidity)"
              fillOpacity={0.4}
              stroke="var(--color-Turbidity)"
              stackId="a"
            />
            <Area
              dataKey="pH_value"
              type="natural"
              fill="url(#fillPH)"
              fillOpacity={0.4}
              stroke="var(--color-pH_value)"
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
            {/* <div className="flex items-center gap-2 font-medium leading-none">
              Temperature reduced by 1 today <TrendingDown className="h-4 w-4" />
            </div> */}
            <div className="flex items-center gap-2 leading-none text-muted-foreground font-bold opacity-70">
              {`Showing readings for ${new Date().toLocaleString()}`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}