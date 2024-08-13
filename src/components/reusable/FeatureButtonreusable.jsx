import { MdOutlineRemove } from "react-icons/md";

const FeatureButtonreusable = () => {
    return (
        <div className="text-center w-[270px] py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
            <h6 className="font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-[#fff]">Cantilever chair</h6>
            <span className="flex items-center justify-center ">
                <MdOutlineRemove className="text-[#05E6B7] h-10 w-10" />
                <MdOutlineRemove className="text-[#F701A8] h-10 w-10" />
                <MdOutlineRemove className="text-[#00009D] h-10 w-10 group-hover:text-[#fff]" />
            </span>
            <p className="font-jose font-normal text-[14px] text-[#151875] group-hover:text-[#fff]">Code - Y523201</p>
            <p className="font-lato font-normal text-[14px] text-[#151875] group-hover:text-[#fff]">$42.00</p>
        </div>
    )
}

export default FeatureButtonreusable