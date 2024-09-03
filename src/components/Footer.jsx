import Container from "./Container";
import logo from "../assets/Hekto.png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="bg-[#EEEFFB] py-10 px-[10px] lg:px-0">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-[30%] mb-10 lg:mb-0">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className="w-full lg:w-[377px] my-7">
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-[70%] lg:w-[238px] border-none rounded-l-md placeholder:font-lato placeholder:font-normal placeholder:text-[16px] placeholder:text-[#8A8FB9] focus:ring-[#FB2E86]"
                                />
                                <button className="font-lato font-medium text-[16px] text-[#fff] py-[8px] px-[20px] lg:px-[40px] bg-[#FB2E86] rounded-r-md">
                                    Sign Up
                                </button>
                            </div>
                            <div className="">
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">Contact Info</p>
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9] w-full lg:w-[238px] pt-3 pb-5 lg:pb-0">
                                    17 Princess Road, London, Greater London NW1 8JR, UK
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[60%] flex flex-wrap justify-between lg:justify-around">
                            <div className="w-[45%] lg:w-auto mb-5 lg:mb-0">
                                <h6 className="pb-[10px] lg:pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">
                                    Catagories
                                </h6>
                                <ul>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Laptops & Computers
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Cameras & Photography
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Smart Phones & Tablets
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Video Games & Consoles
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Waterproof Headphones
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[45%] lg:w-auto mb-5 lg:mb-0">
                                <h6 className="pb-[10px] lg:pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">
                                    Customer Care
                                </h6>
                                <ul>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        My Account
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Discount
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Returns
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Orders History
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Order Tracking
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-auto">
                                <h6 className="pb-[10px] lg:pb-[20px] font-jose font-semibold text-[22px] text-[#000000]">
                                    Pages
                                </h6>
                                <ul>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9] hover:text-[#FB2E86] ease-in-out duration-500">
                                        <Link to="/About-Us">About Us</Link>
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9] hover:text-[#FB2E86] ease-in-out duration-500">
                                        <Link to="/faq">FAQ</Link>
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Browse the Shop
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Category
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Pre-Built Pages
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        Visual Composer Elements
                                    </li>
                                    <li className="py-[5px] lg:py-[10px] font-lato font-normal text-[14px] lg:text-[16px] text-[#8A8FB9]">
                                        WooCommerce Pages
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="bg-[#E7E4F8] py-[17px] px-[10px] lg:px-0">
                <Container className="flex flex-wrap lg:justify-around justify-between text-center items-center">
                    <p className="font-lato font-semibold text-[16px] text-[#9DA0AE]">© Webecy - All Rights Reserved</p>
                    <div className="flex items-center justify-between w-[30%] lg:w-[8%]">
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaFacebookF className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaInstagram className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                        <div className="p-1 bg-[#151875] rounded-full">
                            <FaTwitter className="text-[#fff] w-[15px] h-[15px]" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Footer;
