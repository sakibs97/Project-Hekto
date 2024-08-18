import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const ListIconreusable = () => {
    let [activeIcon, setActiveIcon] = useState('')

    return (
        <div className="flex w-[145px]">
            <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                <Link to='/cart'><IoCartOutline /></Link>
            </div>
            <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                <IoMdHeartEmpty />
            </div>
            <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                <FaSearchPlus />
            </div>
        </div>
    )
}

export default ListIconreusable