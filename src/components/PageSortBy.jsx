import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const PageSortBy = () => {
    return (
        <div className="px-2.5 flex flex-wrap justify-between items-center">
            <div className="lg:w-[40%] md:w-[40%] w-full">
                <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="lg:w-[45%] md:w-[50%] w-full flex lg:justify-around justify-between items-center">
                <div className="flex items-center">
                    <p className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E] lg:pr-2 pr-[5px]">Per Page:</p>
                    <div className="border-[1px] border-[#E7E6EF] h-[25px] lg:w-[50px] w-[40px]"></div>
                </div>
                <div className="flex items-center">
                    <p className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E]">Sort By:</p>
                    <form className="lg:pl-2 pl-[5px] items-center">
                        <select id="" className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] pt-1 pb-1">
                            <option selected>Default</option>
                            <option>Best Match</option>
                        </select>
                    </form>
                </div>
                <div className="flex items-center">
                    <p className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E] pr-2">View:</p>
                    <Link to="/shop-list"><FaList className="text-[#151875] mr-2" /></Link>
                    <Link to="/shop"><IoGridSharp className="text-[#151875] active:bg-black" /></Link>
                </div>
            </div>
        </div>
    )
}

export default PageSortBy