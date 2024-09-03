import Container from "./Container";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { MdOutlineRemove } from "react-icons/md";
import { ApiData } from "./ContextApi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-prev"
            onClick={onClick}
            style={{
                position: "absolute",
                top: "50%",
                left: "0px",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "green", // Green color for previous arrow
                fontSize: "24px", // Adjust size if needed
                cursor: "pointer"
            }}
        >
            <IoIosArrowBack />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-next"
            onClick={onClick}
            style={{
                position: "absolute",
                top: "50%",
                right: "0px",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "red", // Red color for next arrow
                fontSize: "24px", // Adjust size if needed
                cursor: "pointer"
            }}
        >
            <IoIosArrowForward />
        </div>
    );
};

const FeaturedPro = () => {
    let data = useContext(ApiData);

    let [activeIcon, setActiveIcon] = useState("");

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="lg:my-8">
            <Container className="text-center">
                <div className="text-center lg:my-10 mb-5">
                    <h2 className="font-jose font-bold lg:text-[40px] text-[30px] text-[#1A0B5B]">Featured Products</h2>
                </div>
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="mb-3">
                            <div className="group xl:w-[270px] lg:w-[270px] md:w-[220px] sm:w-[180px] w-[90%] drop-shadow-lg">
                                <div className="relative">
                                    <img
                                        src={item.images}
                                        className="lg:w-[270px] md:w-[220px] sm:w-[180px] lg:h-[270px] md:h-[220px] sm:h-[180px] h-[170px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]"
                                        alt={item.title}
                                    />
                                    <div className="">
                                        <Link to={`/Product/${item.id}`}>
                                            <button className="absolute bottom-[-5px] left-[50%] translate-x-[-50%] lg:py-[10px] py-[5px] px-[8px] lg:px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 group-hover:bottom-[10px] ease-in-out duration-500">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="absolute top-[-12px] left-[-12px] opacity-0 group-hover:opacity-100 group-hover:left-3 group-hover:top-3 ease-in-out duration-700">
                                        <div className="flex items-center justify-between w-[100px]">
                                            <div
                                                onClick={() => setActiveIcon('IoCartOutline')}
                                                className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? 'text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'
                                                    }`}
                                                aria-selected={activeIcon === 'IoCartOutline'}
                                            >
                                                <IoCartOutline />
                                            </div>
                                            <div
                                                onClick={() => setActiveIcon('FaHeart')}
                                                className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? 'text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'
                                                    }`}
                                                aria-selected={activeIcon === 'FaHeart'}
                                            >
                                                <FaHeart />
                                            </div>
                                            <div
                                                onClick={() => setActiveIcon('FaSearchPlus')}
                                                className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? 'text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'
                                                    }`}
                                                aria-selected={activeIcon === 'FaSearchPlus'}
                                            >
                                                <FaSearchPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center lg:w-[270px] md:w-[220px] sm:w-[180px] lg:h-[165px] py-2 lg:py-[15px] bg-[#F7F7F7] group-hover:bg-[#2F1AC4] group-hover:drop-shadow-xl ease-in-out duration-500">
                                    <h6 className="font-lato font-bold text-[15px] lg:text-[18px] text-[#FB2E86] group-hover:text-[#fff]">{item.title}</h6>
                                    <span className="flex items-center justify-center">
                                        <MdOutlineRemove className="text-[#05E6B7] lg:h-10 lg:w-10 rounded-full" />
                                        <MdOutlineRemove className="text-[#F701A8] lg:h-10 lg:w-10 rounded-full" />
                                        <MdOutlineRemove className="text-[#00009D] lg:h-10 lg:w-10 rounded-full group-hover:text-[#fff]" />
                                    </span>
                                    <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">Code - {item.id}</p>
                                    <p className="font-lato font-normal text-[12px] lg:text-[14px] text-[#151875] group-hover:text-[#fff]">${item.price}.00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default FeaturedPro;
