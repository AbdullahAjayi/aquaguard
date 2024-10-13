"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import ControlPanel from "@/components/ControlPanel";

const AreaChartComponent = dynamic(() => import('@/components/Charts').then(mod => mod.AreaChartComponent), { ssr: false })
const DataComponent = dynamic(() => import('@/components/Charts').then(mod => mod.DataComponent), { ssr: false })

export default function Home() {

  useEffect(() => {
    const video = document.getElementById('fishVideo') as HTMLVideoElement;
    const audio = document.getElementById('fishAudio') as HTMLAudioElement;

    const handlePlay = () => {
      audio.play().catch(error => console.error("Audio playback failed:", error))
    };

    const handlePause = () => {
      audio.pause();
    };

    const handleSeeked = () => {
      audio.currentTime = video.currentTime;
    };

    const enableAudio = () => {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('seeked', handleSeeked);
      document.removeEventListener('click', enableAudio);
    };

    document.addEventListener('click', enableAudio);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('seeked', handleSeeked);
      document.removeEventListener('click', enableAudio);
    };

  }, []);


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
          <div className="h-full relative">
            <video
              autoPlay
              loop
              controls
              muted
              className="w-full rounded-lg"
              width="320"
              height="240"
              id="fishVideo"
            >
              <source src="/live-feed.mkv" type="video/mp4"></source>
              Your browser does not support the video tag
            </video>
            <audio id="fishAudio" loop>
              <source src="/fish-pond-sound.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-5 bg-white/40 rounded-xl p-4">
          <DataComponent />
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <AreaChartComponent />
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-3 bg-white/40 rounded-xl p-4">
          <ControlPanel />
        </div>
      </div>
    </div>
  )
}
