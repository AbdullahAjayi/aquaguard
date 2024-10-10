import { ref, onValue } from "firebase/database"

import { database } from "@/data/firebase"
import { useEffect, useRef } from "react"
import { chartData } from "@/data/data"

export const useSensorReadings = () => {
    const readingsRef = useRef<any[]>([])
    const sensorReadingsRef = database ? ref(database, "Sensor") : null // Reference to the "Sensor" path

    useEffect(() => {
        if (!sensorReadingsRef) return

        const unsubscribe = onValue(sensorReadingsRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val()

                const formattedData = {
                    // timestamp: Date.now(),
                    Temperature: parseFloat(data.Temperature) || null,
                    Turbidity: parseFloat(data.Turbidity) || null,
                    DO_value: parseFloat(data.DO_value) || null,
                    Fish_tank_level: parseFloat(data.Fish_tank_level) || null,
                    pH_value: parseFloat(data.pH_value) || null,
                    Reservoir_level: parseFloat(data.Reservoir_level) || null,
                }

                readingsRef.current = [...readingsRef.current, formattedData].slice(-11)
                // console.log(readingsRef.current)
            } else {
                console.log("No data available")
            }
        })

        // Cleanup the listener on component unmount
        return () => unsubscribe()
    }, [sensorReadingsRef])

    if (readingsRef.current.length == 0)
        return chartData
    else { return readingsRef.current }
}