import React from 'react'

type Props = {}

const ControlPanel = (props: Props) => {
    return (
        <>
            <h1 className="font-bold opacity-70 mb-4">Control</h1>
            <div className="h-[300px] flex flex-col gap-3 font-bold text-black/70 bg-white/80 rounded-lg p-6">
                <div className="flex gap-3 items-center">
                    <input className="bg-red-300" type="range" name="temperature" id="" />{" "}
                    <label htmlFor="temperature">Temperature</label>
                </div>
                <div className="flex gap-3 items-center">
                    <input className="bg-[#FF7EE2]" type="range" name="temperature" id="" />{" "}
                    <label htmlFor="temperature">Turbidity</label>
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
            </div></>
    )
}

export default ControlPanel