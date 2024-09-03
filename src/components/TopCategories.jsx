import Container from "./Container"
import top from "../assets/top/top.png"
import top2 from "../assets/top/top2.png"
import top3 from "../assets/top/top3.png"
import top4 from "../assets/top/top4.png"
import Viewreusable from "./reusable/Viewreusable"
import Slider from "react-slick";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";


const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-prev"
            onClick={onClick}
            style={{
                position: "absolute",
                bottom: "50%",
                left: "0px",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "green",
                fontSize: "24px",
                cursor: "pointer"
            }}
        >
            <IoIosArrowDropleftCircle />
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
                bottom: "50%",
                right: "0px",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "green",
                fontSize: "24px",
                cursor: "pointer"
            }}
        >
            <IoIosArrowDroprightCircle />
        </div>
    );
};



const TopCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,

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
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section className="lg:my-10 my-5">
            <Container>
                <div className="text-center lg:mb-10 mb-5">
                    <h2 className='font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]'>Top Categories</h2>
                </div>
                <Slider {...settings}>
                    <div className="">
                        <div className="mx-auto group relative bg-[#9877E7] h-[280px] w-[280px] rounded-full drop-shadow-lg">
                            <div className="rounded-full bg-[#F6F7FB] p-[60px] absolute group-hover:bottom-3 group-hover:left-3 ease-in-out duration-700">
                                <img src={top} className="" height={178} width={178} alt="" />
                                <Viewreusable />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <h6 className="font-jose font-normal text-[15px] lg:text-[20px] text-[#151875]">Mini LCW Chair</h6>
                            <p className="font-jose font-normal text-[12px] lg:text-[16px] text-[#151875]">$56.00</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-auto group relative bg-[#9877E7] h-[280px] w-[280px] rounded-full drop-shadow-lg">
                            <div className="rounded-full bg-[#F6F7FB] p-[60px] absolute group-hover:bottom-3 group-hover:left-3 ease-in-out duration-700">
                                <img src={top2} className="" height={178} width={178} alt="" />
                                <Viewreusable />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <h6 className="font-jose font-normal text-[15px] lg:text-[20px] text-[#151875]">Mini LCW Chair</h6>
                            <p className="font-jose font-normal text-[12px] lg:text-[16px] text-[#151875]">$56.00</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-auto group relative bg-[#9877E7] h-[280px] w-[280px] rounded-full drop-shadow-lg">
                            <div className="rounded-full bg-[#F6F7FB] p-[60px] absolute group-hover:bottom-3 group-hover:left-3 ease-in-out duration-700">
                                <img src={top3} className="" height={178} width={178} alt="" />
                                <Viewreusable />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <h6 className="font-jose font-normal text-[15px] lg:text-[20px] text-[#151875]">Mini LCW Chair</h6>
                            <p className="font-jose font-normal text-[12px] lg:text-[16px] text-[#151875]">$56.00</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-auto group relative bg-[#9877E7] h-[280px] w-[280px] rounded-full drop-shadow-lg">
                            <div className="rounded-full bg-[#F6F7FB] p-[60px] absolute group-hover:bottom-3 group-hover:left-3 ease-in-out duration-700">
                                <img src={top4} className="" height={178} width={178} alt="" />
                                <Viewreusable />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <h6 className="font-jose font-normal text-[15px] lg:text-[20px] text-[#151875]">Mini LCW Chair</h6>
                            <p className="font-jose font-normal text-[12px] lg:text-[16px] text-[#151875]">$56.00</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-auto group relative bg-[#9877E7] h-[280px] w-[280px] rounded-full drop-shadow-lg">
                            <div className="rounded-full bg-[#F6F7FB] p-[60px] absolute group-hover:bottom-3 group-hover:left-3 ease-in-out duration-700">
                                <img src={top} className="" height={178} width={178} alt="" />
                                <Viewreusable />
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <h6 className="font-jose font-normal text-[15px] lg:text-[20px] text-[#151875]">Mini LCW Chair</h6>
                            <p className="font-jose font-normal text-[12px] lg:text-[16px] text-[#151875]">$56.00</p>
                        </div>
                    </div>

                </Slider>
            </Container>
        </section>
    )
}

export default TopCategories