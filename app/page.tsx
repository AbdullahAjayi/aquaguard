import dynamic from 'next/dynamic'

import ControlPanel from "@/components/ControlPanel";
import Header from "@/components/Header";
import LiveFeed from '@/components/LiveFeed';

const AreaChartComponent = dynamic(() => import('@/components/Charts').then(mod => mod.AreaChartComponent), { ssr: false })
const DataComponent = dynamic(() => import('@/components/Charts').then(mod => mod.DataComponent), { ssr: false })

export default function Home() {

  return (
    <div className="z-10 px-2 md:px-32 lg:px-10 py-4 pt-5 mx-auto max-w-[1200px] font-sans text-black">
      <Header />
      <div className="lg:grid grid-cols-12 grid-row-8 gap-4">
        <div className="mb-4 lg:mb-0 lg:h-auto col-span-6 row-span-4 bg-white/40 rounded-xl p-4">
          <LiveFeed />
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
