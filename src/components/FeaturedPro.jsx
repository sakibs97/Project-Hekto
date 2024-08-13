import Container from "./Container"
import chair from "../assets/Feature/chair.png"
import chair2 from "../assets/Feature/chair2.png"
import chair3 from "../assets/Feature/chair3.png"
import chair4 from "../assets/Feature/chair4.png"
import Slider from "react-slick";
import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineRemove } from "react-icons/md";

const FeaturedPro = () => {
    let [activeIcon, setActiveIcon] = useState('')

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section className="lg:my-8">
            <Container className='text-center'>
                <div className="text-center lg:my-10 mb-5">
                    <h2 className="font-jose font-bold lg:text-[40px] text-[30px] text-[#1A0B5B]">Featured Products</h2>
                </div>
                <Slider {...settings}>
                    <div className="mb-3">
                        <div className="group lg:w-[270px] w-full drop-shadow-lg">
                            <div className="relative">
                                <img src={chair} className="lg:w-[270px] w-[170px] h-[170px] lg:h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <div className="">
                                    <Link to='/Product-Details'><button className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] lg:py-[10px] py-[5px] px-[8px] lg:px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:bottom-[10px] ease-in-out duration-500">View Details</button></Link>
                                </div>
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
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
                                </div>
                            </div>
                            <div className="text-center lg:w-[270px] w-[170px] py-2 lg:py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
                                <h6 className="font-lato font-bold text-[15px] lg:text-[18px] text-[#FB2E86] group-hover:text-[#fff]">Cantilever chair</h6>
                                <span className="flex items-center justify-center ">
                                    <MdOutlineRemove className="text-[#05E6B7] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#F701A8] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#00009D] lg:h-10 lg:w-10 rounded-full group-hover:text-[#fff]" />
                                </span>
                                <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">Code - Y523201</p>
                                <p className="font-lato font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">$42.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="group lg:w-[270px] w-full drop-shadow-lg">
                            <div className="relative">
                                <img src={chair2} className="lg:w-[270px] w-[170px] h-[170px] lg:h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <div className="">
                                    <Link to='/Product-Details'><button className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] lg:py-[10px] py-[5px] px-[8px] lg:px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:bottom-[10px] ease-in-out duration-500">View Details</button></Link>
                                </div>
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
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
                                </div>
                            </div>
                            <div className="text-center lg:w-[270px] w-[170px] py-2 lg:py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
                                <h6 className="font-lato font-bold text-[15px] lg:text-[18px] text-[#FB2E86] group-hover:text-[#fff]">Cantilever chair</h6>
                                <span className="flex items-center justify-center ">
                                    <MdOutlineRemove className="text-[#05E6B7] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#F701A8] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#00009D] lg:h-10 lg:w-10 rounded-full group-hover:text-[#fff]" />
                                </span>
                                <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">Code - Y523201</p>
                                <p className="font-lato font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">$42.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="group lg:w-[270px] w-full drop-shadow-lg">
                            <div className="relative">
                                <img src={chair3} className="lg:w-[270px] w-[170px] h-[170px] lg:h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <div className="">
                                    <Link to='/Product-Details'><button className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] lg:py-[10px] py-[5px] px-[8px] lg:px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:bottom-[10px] ease-in-out duration-500">View Details</button></Link>
                                </div>
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
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
                                </div>
                            </div>
                            <div className="text-center lg:w-[270px] w-[170px] py-2 lg:py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
                                <h6 className="font-lato font-bold text-[15px] lg:text-[18px] text-[#FB2E86] group-hover:text-[#fff]">Cantilever chair</h6>
                                <span className="flex items-center justify-center ">
                                    <MdOutlineRemove className="text-[#05E6B7] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#F701A8] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#00009D] lg:h-10 lg:w-10 rounded-full group-hover:text-[#fff]" />
                                </span>
                                <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">Code - Y523201</p>
                                <p className="font-lato font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">$42.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="group lg:w-[270px] w-full drop-shadow-lg">
                            <div className="relative">
                                <img src={chair4} className="lg:w-[270px] w-[170px] h-[170px] lg:h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <div className="">
                                    <Link to='/Product-Details'><button className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] lg:py-[10px] py-[5px] px-[8px] lg:px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:bottom-[10px] ease-in-out duration-500">View Details</button></Link>
                                </div>
                                <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
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
                                </div>
                            </div>
                            <div className="text-center lg:w-[270px] w-[170px] py-2 lg:py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
                                <h6 className="font-lato font-bold text-[15px] lg:text-[18px] text-[#FB2E86] group-hover:text-[#fff]">Cantilever chair</h6>
                                <span className="flex items-center justify-center ">
                                    <MdOutlineRemove className="text-[#05E6B7] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#F701A8] lg:h-10 lg:w-10 rounded-full" />
                                    <MdOutlineRemove className="text-[#00009D] lg:h-10 lg:w-10 rounded-full group-hover:text-[#fff]" />
                                </span>
                                <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">Code - Y523201</p>
                                <p className="font-lato font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">$42.00</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default FeaturedPro