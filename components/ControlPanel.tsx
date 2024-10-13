const ControlPanel = () => {
    return (
        <>
            <h1 className="font-bold text-2xl mb-4">Control</h1>
            <div className="h-[300px] flex flex-col gap-4 font-bold text-black/70 bg-white/80 rounded-lg p-8">
                {[
                    { label: "Temperature", bg: "bg-red-300", id: "temperature" },
                    { label: "Turbidity", bg: "bg-[#FF7EE2]", id: "turbidity" },
                    { label: "Dissolved Oxygen", bg: "bg-green", id: "dissolved-oxygen" },
                    { label: "Water Level", bg: "bg-blue-300", id: "water-level" },
                    { label: "PH Level", bg: "bg-[#FFB200]", id: "ph-level" },
                ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <input className={`${item.bg} w-1/2`} type="range" name={item.id} id={item.id} />{" "}
                        <label htmlFor={item.id} className="w-1/2">{item.label}</label>
                    </div>
                ))}
                <div className="w-full h-full bg-[#FF7EE2] rounded-lg"></div>
            </div>
        </>
    )
}

export default ControlPanel