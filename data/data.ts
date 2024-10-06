import { ref, get, onValue } from "firebase/database"

import { database } from "./firebase"
import { ChartConfig } from "@/components/ui/chart"

const sensorReadings = database ? ref(database, "Sensor") : null

export const getSensorReadings = async () => {
  if (!sensorReadings) {
    console.log("Database not initialized")
    return Promise.resolve(null)
  }
  return get(sensorReadings)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log("data not available")
        return null
      }
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

export const listenToSensorReadings = (callback: (data: any) => void) => {
  if (!sensorReadings) {
    console.log("Database not initialized")
    return () => {}
  }
  return onValue(
    sensorReadings,
    (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val())
      } else {
        console.log("data not available")
      }
    },
    (error) => console.log("Error listening to sensor readings:", error)
  )
}

export const chartData = [
  {
    day: "10",
    temperature: 25,
    humidity: 80,
    dissolved_oxygen: 8,
    H2O_level: 100,
    pH_level: 7.2,
  },
  {
    day: "11",
    temperature: 27,
    humidity: 85,
    dissolved_oxygen: 7.8,
    H2O_level: 98,
    pH_level: 7.0,
  },
  {
    day: "12",
    temperature: 28,
    humidity: 90,
    dissolved_oxygen: 7.5,
    H2O_level: 97,
    pH_level: 6.8,
  },
  {
    day: "13",
    temperature: 29,
    humidity: 88,
    dissolved_oxygen: 7.7,
    H2O_level: 96,
    pH_level: 6.9,
  },
  {
    day: "14",
    temperature: 30,
    humidity: 85,
    dissolved_oxygen: 8.0,
    H2O_level: 95,
    pH_level: 7.0,
  },
  {
    day: "15",
    temperature: 31,
    humidity: 82,
    dissolved_oxygen: 8.3,
    H2O_level: 94,
    pH_level: 7.2,
  },
  {
    day: "16",
    temperature: 32,
    humidity: 78,
    dissolved_oxygen: 8.6,
    H2O_level: 93,
    pH_level: 7.4,
  },
  {
    day: "17",
    temperature: 31,
    humidity: 75,
    dissolved_oxygen: 8.8,
    H2O_level: 92,
    pH_level: 7.5,
  },
  {
    day: "18",
    temperature: 30,
    humidity: 72,
    dissolved_oxygen: 8.9,
    H2O_level: 91,
    pH_level: 7.6,
  },
  {
    day: "19",
    temperature: 29,
    humidity: 70,
    dissolved_oxygen: 9.0,
    H2O_level: 90,
    pH_level: 7.5,
  },
  {
    day: "20",
    temperature: 28,
    humidity: 72,
    dissolved_oxygen: 8.8,
    H2O_level: 92,
    pH_level: 7.4,
  },
  {
    day: "21",
    temperature: 27,
    humidity: 75,
    dissolved_oxygen: 8.5,
    H2O_level: 94,
    pH_level: 7.2,
  },
]

export const chartConfig = {
  temperature: {
    label: "temperature",
    color: "red",
  },
  humidity: {
    label: "humidity",
    color: "#FF7EE2",
  },
  dissolved_oxygen: {
    label: "dissolved_oxygen",
    color: "green",
  },
  H2O_level: {
    label: "H2O_level",
    color: "blue",
  },
  pH_level: {
    label: "pH_level",
    color: "#FFB200",
  },
} satisfies ChartConfig
