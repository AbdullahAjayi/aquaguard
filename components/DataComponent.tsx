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

import { getSensorReadings, listenToSensorReadings } from "@/data/data"
import { useEffect, useRef, useState } from "react"
// import { chartData, chartConfig } from "@/data/data"

export const description = "A mixed bar chart"

const chartConfig = {
  value: {
    label: "value",
  },
  "DO_value": {
    label: "DO",
    color: "red",
  },
  "Fish_tank_level": {
    label: "TL",
    color: "#FF7EE2",
  },
  "Reservoir_level": {
    label: "RL",
    color: "green",
  },
  "Temperature": {
    label: "Temp",
    color: "blue",
  },
  "Turbidity": {
    label: "Turb",
    color: "lightgreen",
  },
  "pH_value": {
    label: "pH",
    color: "#FFB200",
  },
} satisfies ChartConfig

export function DataComponent() {
  const [sensorData, setSensorData] = useState(null);
  const [liveSensorData, setLiveSensorData] = useState(null)
  const latestDataRef = useRef(null)


  useEffect(() => {
    const unsubcribe = listenToSensorReadings((data) => {
      if (data) {
        latestDataRef.current = data
      } else {
        console.log("No data available")
      }
    })

    const intervalId = setInterval(() => {
      if (latestDataRef.current) {
        console.log("New sensor readings:", latestDataRef.current)
        setLiveSensorData(latestDataRef.current)
      }
    }, 1000)

    return () => {
      unsubcribe()
      clearInterval(intervalId)
    }
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSensorReadings();
        setSensorData(data);
      } catch (error) {
        console.error("Error fetching sensor readings:", error);
      }
    };

    fetchData();
  }, []);



  if (!liveSensorData) {
    return <div>Loading...</div>;
  }

  const chartData = [
    { parameter: "DO_value", value: liveSensorData["DO_value"], fill: "var(--color-DO_value)" },
    { parameter: "Fish_tank_level", value: liveSensorData["Fish_tank_level"], fill: "var(--color-Fish_tank_level)" },
    { parameter: "Reservoir_level", value: liveSensorData["Reservoir_level"], fill: "var(--color-Reservoir_level)" },
    { parameter: "Temperature", value: liveSensorData["Temperature"], fill: "var(--color-Temperature)" },
    { parameter: "Turbidity", value: liveSensorData["Turbidity"], fill: "var(--color-Turbidity)" },
    { parameter: "pH_value", value: liveSensorData["pH_value"], fill: "var(--color-pH_value)" },
  ]

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
          Showing results for 1st of October
        </div>
      </CardFooter>
    </Card>
  )
}
