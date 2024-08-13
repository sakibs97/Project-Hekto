import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";

const PageSortBy = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="w-[30%]">
                <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="w-[40%] flex justify-around items-center">
                <div className="flex items-center">
                    <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">Per Page:</p>
                    <div className="border-[1px] border-[#E7E6EF] h-[25px] w-[55px]"></div>
                </div>
                <div className="flex items-center">
                    <p className="font-lato font-normal text-[16px] text-[#3F509E]">Sort By:</p>
                    <form className=" w-[96px] pl-2 items-center">
                        <select id="" className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] pt-1 pb-1 ">
                            <option selected>Default</option>
                            <option>Best Match</option>
                        </select>
                    </form>
                </div>
                <div className="flex items-center">
                    <p className="font-lato font-normal text-[16px] text-[#3F509E] pr-2">View:</p>
                    <Link to="/shop-list"><FaList className="text-[#151875] mr-2" /></Link>
                    <Link to="/shop"><IoGridSharp className="text-[#151875] active:bg-black" /></Link>
                </div>
            </div>
        </div>
    )
}

export default PageSortBy