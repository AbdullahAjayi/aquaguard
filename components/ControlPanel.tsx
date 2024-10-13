const ControlPanel = () => {
    return (
        <>
            <h1 className="font-bold opacity-70 mb-4">Control</h1>
            <div className="h-[300px] flex flex-col gap-3 font-bold text-black/70 bg-white/80 rounded-lg p-6">
                {[
                    { label: "Temperature", bg: "bg-red-300" },
                    { label: "Turbidity", bg: "bg-[#FF7EE2]" },
                    { label: "Dissolved Oxygen", bg: "bg-green" },
                    { label: "Water Level", bg: "bg-blue-300" },
                    { label: "PH Level", bg: "bg-[#FFB200]" },
                ].map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                        <input className={`${item.bg}`} type="range" name="temperature" id="" />{" "}
                        <label htmlFor="temperature">{item.label}</label>
                    </div>
                ))}
                <div className="w-full h-full bg-[#FF7EE2] rounded-lg"></div>
            </div></>
    )
}

export default ControlPanel