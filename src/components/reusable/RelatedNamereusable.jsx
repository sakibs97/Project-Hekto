import { FaStar } from "react-icons/fa";

const RelatedNamereusable = ({ name, price }) => {
    return (
        <div className="flex justify-between items-baseline">
            <div className="">
                <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[15px]">{name}</h4>
                <p className="font-jose font-normal text-[13px] text-[#151875]">{price}</p>
            </div>
            <span className="flex items-center">
                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                <FaStar className="mx-[2px] text-[#FFCC2E]" />
            </span>
        </div>
    )
}

export default RelatedNamereusable