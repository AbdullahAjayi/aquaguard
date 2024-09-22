import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { AreaChartComponent, DataComponent } from "@/components/Charts"

export default function Home() {
  return (
    <div className="z-10 px-2 md:px-32 lg:px-10 py-4 pt-5 mx-auto max-w-[1200px] font-sans text-black">
      <div className=""></div>
      {/* Header */}
      <div className="mb-4 py-2 px-4 bg-white/40 rounded-xl flex items-center">
        <div className="flex justify-center gap-4 items-center w-fit">
          <Image
            src="/aquaguardLogo.svg"
            width={1}
            height={1}
            className="h-[40px] w-auto"
            alt="logo"
            priority
          />
          <p className="opacity-70 font-bold">AquaGuard</p>
        </div>
        <div className="ml-auto flex items-center justify-between gap-4 font-bold opacity-70 cursor-pointer hover:bg-green p-3 rounded-lg transition">
          <ArrowDown />
          <p>Download data</p>
        </div>
      </div>
      <div className="lg:grid grid-cols-12 grid-row-8 gap-4">
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <h1 className="font-bold opacity-70 mb-4">Live feed</h1>
          <div className="h-full">
            <video
              autoPlay
              loop
              controls
              className="w-full rounded-lg"
              width="320"
              height="240"
            >
              <source src="/live-feed.mkv" type="video/mp4"></source>
              Your browser does not support the video tag
            </video>
          </div>
          <audio src="/fish-pond-sound.mp3"></audio>
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-5 bg-white/40 rounded-xl p-4">
          <DataComponent />
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <AreaChartComponent />
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-3 bg-white/40 rounded-xl p-4">
          <h1 className="font-bold opacity-70 mb-4">Control</h1>
          <div className="h-[300px] flex flex-col gap-3 font-bold text-black/70">
            <div className="flex gap-3 items-center">
              <input className="bg-red-300" type="range" name="temperature" id="" />{" "}
              <label htmlFor="temperature">Temperature</label>
            </div>
            <div className="flex gap-3 items-center">
              <input className="bg-[#FF7EE2]" type="range" name="temperature" id="" />{" "}
              <label htmlFor="temperature">Humidity</label>
            </div>
            <div className="flex gap-3 items-center">
              <input className="bg-green" type="range" name="temperature" id="" />{" "}
              <label htmlFor="temperature">Dissolved Oxygen</label>
            </div>
            <div className="flex gap-3 items-center">
              <input className="bg-blue-300" type="range" name="temperature" id="" />{" "}
              <label htmlFor="temperature">Water Level</label>
            </div>
            <div className="flex gap-3 items-center">
              <input className="bg-[#FFB200]" type="range" name="temperature" id="" />{" "}
              <label htmlFor="temperature">PH Level</label>
            </div>
            <div className="w-full h-full bg-[#FF7EE2] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
