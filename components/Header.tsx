import Image from "next/image"
import { ArrowDown } from "lucide-react"

const Header = () => {
    return (
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
    )
}

export default Header