import Container from "./Container"
import { ImPen } from "react-icons/im";
import blog from "../assets/blog/blog.png"
import blog2 from "../assets/blog/blog2.png"
import blog3 from "../assets/blog/blog3.png"


const LeatestBlog = () => {
    return (
        <section>
            <Container>
                <div className="text-center my-5 lg:my-10">
                    <h2 className="font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]">Leatest Blog</h2>
                </div>
                <div className="flex flex-wrap justify-between items-center mb-10 mx-[10px]">
                    <div className="lg:w-[30%] w-full group drop-shadow-lg rounded-lg bg-[#FFFFFF] my-3">
                        <img src={blog} className="w-full" alt="" />
                        <div className="flex items-center py-5 pl-8">
                            <div className="flex items-center pr-8">
                                <ImPen className="text-[#FB2E86]" />
                                <h6 className="font-jose font-normal text-[14px] text-[#151875] pl-2">SaberAli</h6>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                </svg>
                                <span className="text-gray-900 dark:text-white text-base font-medium">23 August,2020</span>
                            </div>
                        </div>
                        <div className="pl-8 pb-8">
                            <h3 className="font-jose font-bold text-[18px] text-[#151875] group-hover:text-[#FB2E86] ease-in-out duration-500">Top esssential Trends in 2021</h3>
                            <p className="font-lato font-normal text-[16px] text-[#72718F] pr-3 py-[15px]">More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className="font-lato font-bold text-[16px] text-[#151875] underline underline-offset-4 group-hover:text-[#FB2E86] ease-in-out duration-500">Read More</button>
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full group drop-shadow-lg rounded-lg bg-[#FFFFFF] my-3">
                        <img src={blog2} className="w-full" alt="" />
                        <div className="flex items-center py-5 pl-8">
                            <div className="flex items-center pr-8">
                                <ImPen className="text-[#FB2E86]" />
                                <h6 className="font-jose font-normal text-[14px] text-[#151875] pl-2">SaberAli</h6>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                </svg>
                                <span className="text-gray-900 dark:text-white text-base font-medium">21 August,2020</span>
                            </div>
                        </div>
                        <div className="pl-8 pb-8">
                            <h3 className="font-jose font-bold text-[18px] text-[#151875] group-hover:text-[#FB2E86] ease-in-out duration-500">Top esssential Trends in 2021</h3>
                            <p className="font-lato font-normal text-[16px] text-[#72718F] pr-3 py-[15px]">More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className="font-lato font-bold text-[16px] text-[#151875] underline underline-offset-4 group-hover:text-[#FB2E86] ease-in-out duration-500">Read More</button>
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full group drop-shadow-lg rounded-lg bg-[#FFFFFF] my-3">
                        <img src={blog3} className="w-full" alt="" />
                        <div className="flex items-center py-5 pl-8">
                            <div className="flex items-center pr-8">
                                <ImPen className="text-[#FB2E86]" />
                                <h6 className="font-jose font-normal text-[14px] text-[#151875] pl-2">SaberAli</h6>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                </svg>
                                <span className="text-gray-900 dark:text-white text-base font-medium">21 August,2020</span>
                            </div>
                        </div>
                        <div className="pl-8 pb-8">
                            <h3 className="font-jose font-bold text-[18px] text-[#151875] group-hover:text-[#FB2E86] ease-in-out duration-500">Top esssential Trends in 2021</h3>
                            <p className="font-lato font-normal text-[16px] text-[#72718F] pr-3 py-[15px]">More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <button className="font-lato font-bold text-[16px] text-[#151875] underline underline-offset-4 group-hover:text-[#FB2E86] ease-in-out duration-500">Read More</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LeatestBlog