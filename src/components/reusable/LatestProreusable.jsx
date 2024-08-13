
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

const LatestProreusable = () => {
    let [activeIcon, setActiveIcon] = useState('')
    return (
        <section className="group">
            <div className="group">
                <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                    <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                        <IoCartOutline />
                    </div>
                    <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                        <IoMdHeartEmpty />
                    </div>
                    <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                        <FaSearchPlus />
                    </div>
                </div >
            </div>
        </section>
    )
}

export default LatestProreusable