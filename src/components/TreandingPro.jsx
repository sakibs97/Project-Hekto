import Container from "./Container"
import tren1 from "../assets/trending/tren1.png"
import tren2 from "../assets/trending/tren2.png"
import tren3 from "../assets/trending/tren3.png"
import tren4 from "../assets/trending/tren4.png"
import offone from "../assets/trending/off/offone.png"
import offtwo from "../assets/trending/off/offtwo.png"
import seat from "../assets/trending/seat/seat.png"
import seat2 from "../assets/trending/seat/seat2.png"
import seat3 from "../assets/trending/seat/seat3.png"
import LatestProreusable from "./reusable/LatestProreusable"
import uniqsofa from "../assets/shopex/uniqsofa.png"
import { GoDotFill } from "react-icons/go";


const TreandingPro = ({ name, price, pricex }) => {
    return (
        <section>
            <section className="bg-[#F1F0FF] pt-10 px-[10px] lg:px-0 pb-2 lg:pb-0">
                <Container>
                    <div className="flex flex-wrap justify-around items-center mb-10">
                        <img src={uniqsofa} alt="uniqsofa" />
                        <div className="lg:w-[40%]">
                            <h2 className="font-jose font-bold text-[30px] lg:text-[40px] text-[#151875]">Unique Features Of leatest & Treanding Poducts</h2>
                            <div className="py-10">
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#DE9034] w-[25px] h-[25px]" />
                                    <p className="font-lato font-medium text-[14px] text-[#8A91AB] pl-3">All frames contstructed with hardwood solids and laminates</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#EC42A2] w-[25px] h-[25px]" />
                                    <p className="font-lato font-medium text-[14px] text-[#8A91AB] pl-3 py-5">All frames contstructed with hardwood solids and laminates</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill className="text-[#8568FF] w-[25px] h-[25px]" />
                                    <p className="font-lato font-medium text-[14px] text-[#8A91AB] pl-3">Arms, back and seats are structurally reinforced</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="font-jose font-normal text-[17px] text-[#fff] px-[48px] py-[20px] bg-[#FB2E86]">Add to Cart</button>
                                <div className="pl-5">
                                    <h5 className="font-jose font-normal text-[16px] text-[#151875]">B & B Italian Sofa</h5>
                                    <h6 className="font-jose font-normal text-[14px] text-[#151875]">$32.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Container>
                <div className="text-center lg:my-10 my-5">
                    <h2 className="font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]">Trending Products</h2>
                </div>
                <div className="flex flex-wrap justify-around items-center mb-10">
                    <div className="w-[49%] my-2 lg:my-0 lg:w-[19%] sm:w-[32%] md:w-[32%]">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren1} className="w-[200px] h-[100px] lg:h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <div className="pt-4 text-center">
                                <h5 className="font-jose font-normal text-[16px] text-[#151875]">Cantilever chair</h5>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[12px] text-[#151875] pr-3">$26.00</p>
                                    <p className="font-jose font-normal text-[12px] text-[rgb(21,24,117,30%)] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49%] my-2 lg:my-0 lg:w-[19%] sm:w-[32%] md:w-[32%]">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren2} className="w-[200px] h-[100px] lg:h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <div className="pt-4 text-center">
                                <h5 className="font-jose font-normal text-[16px] text-[#151875]">Cantilever chair</h5>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[12px] text-[#151875] pr-3">$26.00</p>
                                    <p className="font-jose font-normal text-[12px] text-[rgb(21,24,117,30%)] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49%] my-2 lg:my-0 lg:w-[19%] sm:w-[32%] md:w-[32%]">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren3} className="w-[200px] h-[100px] lg:h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <div className="pt-4 text-center">
                                <h5 className="font-jose font-normal text-[16px] text-[#151875]">Cantilever chair</h5>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[12px] text-[#151875] pr-3">$26.00</p>
                                    <p className="font-jose font-normal text-[12px] text-[rgb(21,24,117,30%)] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[49%] my-2 lg:my-0 lg:w-[19%] sm:w-[32%] md:w-[32%]">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren4} className="w-[200px] h-[100px] lg:h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <div className="pt-4 text-center">
                                <h5 className="font-jose font-normal text-[16px] text-[#151875]">Cantilever chair</h5>
                                <div className="flex items-center justify-center">
                                    <p className="font-jose font-normal text-[12px] text-[#151875] pr-3">$26.00</p>
                                    <p className="font-jose font-normal text-[12px] text-[rgb(21,24,117,30%)] line-through">$42.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 flex flex-wrap justify-between items-center">
                    <div className="lg:w-[30%] w-full">
                        <div className="relative border-[1px] border-[#FFF6FB] bg-[#FFF6FB] p-[25px] pb-[190px]">
                            <h6 className="font-jose font-semibold text-[26px] text-[#151875]">23% off in all products</h6>
                            <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">Shop Now</button>
                            <div className="absolute bottom-0 right-0">
                                <img src={offtwo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[35%] w-full">
                        <div className="relative border-[1px] border-[#EEEFFB] bg-[#EEEFFB] p-[25px] pb-[190px]">
                            <h6 className="font-jose font-semibold text-[26px] text-[#151875]">23% off in all products</h6>
                            <button className="font-lato font-semibold text-[16px] text-[#FB2E86] border-b-[2px] border-[#FB2E86]">View Collection</button>
                            <div className="absolute bottom-0 right-0">
                                <img src={offone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[25%] w-full mt-5 lg:mt-0">
                        <div className="flex justify-evenly items-center">
                            <img src={seat} className="px-[20px] py-[5px] bg-[#F5F6F8]" alt="seat" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center my-5">
                            <img src={seat2} className="px-[20px] py-[5px] bg-[#F5F6F8]" alt="seat2" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={seat3} className="px-[20px] py-[4px] bg-[#F5F6F8]" alt="seat3" />
                            <div className="">
                                <h5 className="font-jose font-semibold text-[16px] text-[#151875]">Executive Seat chair</h5>
                                <h6 className="font-jose font-normal text-[12px] text-[#151875] line-through">$32.00</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default TreandingPro