import Container from "./Container"
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiArrowDropDownLine, RiShoppingCartFill } from "react-icons/ri";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    let data = useSelector((state) => state.product.cartItem)




    return (
        <section className="bg-[#7E33E0] py-[14px] px-[10px] lg:px-0">
            <Container>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="lg:w-[25%] w-[80%] flex items-center justify-between">
                        <div className="flex items-center">
                            <MdOutlineMail className="text-[#F1F1F1] text-[16px] lg:mr-[10px] mr-1" />
                            <p className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">mhhasanul@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <IoCall className="text-[#F1F1F1] text-[14px] lg:text-[16px] lg:mr-[10px] mr-1" />
                            <p className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">(12345)67890</p>
                        </div>
                    </div>
                    <div className="lg:w-[25%] w-full flex items-center justify-between">
                        <div className="flex items-center ">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">English</h6>
                            <RiArrowDropDownLine className="text-[#F1F1F1] h-[20px] w-[20px]" />
                        </div>
                        <div className="flex items-center ">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">UDS</h6>
                            <RiArrowDropDownLine className="text-[#F1F1F1] h-[20px] w-[20px]" />
                        </div>
                        <div className="">
                            <Link to="/login" className="flex items-center"><h6 className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">Login</h6>
                                <FaRegUser className="text-[#F1F1F1] h-[14px] w-[14px] ml-[5px]" /></Link>
                        </div>
                        <div className="flex items-center">
                            <h6 className="font-jose font-semibold text-[#F1F1F1] text-[14px] lg:text-[16px]">Wishlist</h6>
                            <FaHeart className="text-[#F1F1F1] ml-[5px]" />
                        </div>
                        <div className="relative group">
                            <Link to='/cart'><RiShoppingCartFill className="text-[#F1F1F1] h-[20px] w-[20px] group-hover:text-[#FB2E86]" /></Link>
                            <div className="absolute top-[-8px] -right-[2px] text-[#FB2E86] group-hover:text-[#fff] font-jose text-[15px] font-bold">{data.length}</div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Header