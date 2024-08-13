import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { useState } from "react";

const Featurereusable = () => {
    let [activeIcon, setActiveIcon] = useState('')

    return (
        <div className="flex items-center justify-between w-[100px]">
            <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                <IoCartOutline />
            </div>
            <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                <FaHeart />
            </div>
            <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                <FaSearchPlus />
            </div>
        </div >
    )
}

export default Featurereusable