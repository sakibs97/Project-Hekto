import { GoDotFill } from "react-icons/go";

const ShopProNamereusable = ({ name, less, off }) => {
    return (
        <div className="text-center mt-[18px]">
            <h5 className="font-jose font-bold text-[18px] text-[#151875]">{name}</h5>
            <div className="flex justify-center items-center">
                <GoDotFill className="text-[#DE9034]" />
                <GoDotFill className="text-[#EC42A2]" />
                <GoDotFill className="text-[#8568FF]" />
            </div>
            <div className="flex items-center justify-center">
                <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">{less}</p>
                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">{off}</p>
            </div>
        </div>
    )
}

export default ShopProNamereusable