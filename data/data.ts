import { ChartConfig } from "@/components/ui/chart"

// dummy chart data
export const chartData = [
  {
    // day: "10",
    Temperature: 25,
    Turbidity: 80,
    DO_value: 8,
    Fish_tank_level: 100,
    pH_value: 7.2,
  },
  {
    // day: "11",
    Temperature: 27,
    Turbidity: 85,
    DO_value: 7.8,
    Fish_tank_level: 98,
    pH_value: 7.0,
  },
  {
    // day: "12",
    Temperature: 28,
    Turbidity: 90,
    DO_value: 7.5,
    Fish_tank_level: 97,
    pH_value: 6.8,
  },
  {
    // day: "13",
    Temperature: 29,
    Turbidity: 88,
    DO_value: 7.7,
    Fish_tank_level: 96,
    pH_value: 6.9,
  },
  {
    // day: "14",
    Temperature: 30,
    Turbidity: 85,
    DO_value: 8.0,
    Fish_tank_level: 95,
    pH_value: 7.0,
  },
  {
    // day: "15",
    Temperature: 31,
    Turbidity: 82,
    DO_value: 8.3,
    Fish_tank_level: 94,
    pH_value: 7.2,
  },
  {
    // day: "16",
    Temperature: 32,
    Turbidity: 78,
    DO_value: 8.6,
    Fish_tank_level: 93,
    pH_value: 7.4,
  },
  {
    // day: "17",
    Temperature: 31,
    Turbidity: 75,
    DO_value: 8.8,
    Fish_tank_level: 92,
    pH_value: 7.5,
  },
  {
    // day: "18",
    Temperature: 30,
    Turbidity: 72,
    DO_value: 8.9,
    Fish_tank_level: 91,
    pH_value: 7.6,
  },
  {
    // day: "19",
    Temperature: 29,
    Turbidity: 70,
    DO_value: 9.0,
    Fish_tank_level: 90,
    pH_value: 7.5,
  },
  {
    // day: "20",
    Temperature: 28,
    Turbidity: 72,
    DO_value: 8.8,
    Fish_tank_level: 92,
    pH_value: 7.4,
  },
  {
    // day: "21",
    Temperature: 27,
    Turbidity: 75,
    DO_value: 8.5,
    Fish_tank_level: 94,
    pH_value: 7.2,
  },
]

export const chartConfig = {
  DO_value: {
    label: "Dis Oxygen",
    color: "green",
  },
  Fish_tank_level: {
    label: "Tank Level",
    color: "blue",
  },
  Reservoir_level: {
    label: "Rsvr Level",
    color: "#4B0082", // Indigo
  },
  Temperature: {
    label: "Temp",
    color: "red",
  },
  Turbidity: {
    label: "Turbidity",
    color: "#8B4513", // Saddle Brown
  },
  pH_value: {
    label: "pH",
    color: "#FFB200",
  },
} satisfies ChartConfig
