import dynamic from 'next/dynamic'

import ControlPanel from "@/components/ControlPanel";
import Header from "@/components/Header";
import LiveFeed from '@/components/LiveFeed';

const AreaChartComponent = dynamic(() => import('@/components/Charts').then(mod => mod.AreaChartComponent), { ssr: false })
const DataComponent = dynamic(() => import('@/components/Charts').then(mod => mod.DataComponent), { ssr: false })

export default function Home() {

  return (
    <div className="z-10 px-2 md:px-32 lg:px-10 py-4 pt-5 mx-auto max-w-[1200px] font-sans text-black">
      <Header /> {/* Header component for the application */}
      <main className="lg:grid grid-cols-12 grid-row-8 gap-4"> {/* Main content area with a grid layout */}
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <LiveFeed /> {/* Live feed component for real-time video */}
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-5 bg-white/40 rounded-xl p-4">
          <DataComponent /> {/* Data component for displaying sensor readings */}
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <AreaChartComponent /> {/* Area chart component for visualizing data */}
        </div>
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-3 bg-white/40 rounded-xl p-4">
          <ControlPanel /> {/* Control panel component for user interactions */}
        </div>
      </main>
    </div>
  )
}
