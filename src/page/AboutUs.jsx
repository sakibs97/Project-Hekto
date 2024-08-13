import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import about from "../assets/about/about.png"
import hours from "../assets/shopex/24hours.png"
import cashback from "../assets/shopex/cashback.png"
import delivery from "../assets/shopex/free-delivery.png"
import premium from "../assets/shopex/premium.png"
import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <section>
            <Bannerreusable headline='About Us' pname='About Us' home='Home ' page='Pages' />
            <Container className='my-10'>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
                    <div className="relative bg-[#2B3CAB] w-full lg:w-[552px] lg:h-[380px] h-[270px] rounded-lg mb-6 lg:mb-0">
                        <div className="">
                            <div className="absolute hover:bottom-4 lg:hover:right-[-16px] ease-in-out duration-500">
                                <img src={about} alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[550px] px-4 lg:px-0">
                        <h4 className="font-jose font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-[#151875]">Know About Our Ecommerce Business, History</h4>
                        <p className="font-lato font-semibold text-[14px] sm:text-[16px] text-[#8A8FB9] pt-4 pb-10 lg:pb-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <Link to='/contact'>
                            <button className="font-lato font-semibold text-[16px] sm:text-[18px] text-[#fff] py-[8px] sm:py-[9px] px-[24px] sm:px-[30px] bg-[#FB2E86] rounded-lg">Contact us</button>
                        </Link>
                    </div>
                </div>
                <div className="my-10">
                    <h4 className="font-jose font-bold text-[30px] sm:text-[36px] md:text-[42px] text-[#000000] text-center">Our Features</h4>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10 my-10">
                        <div className="text-center border-[2px] w-full sm:w-[270px] border-[#fff] py-[30px] sm:py-[45px] px-[20px] sm:px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={delivery} alt="delivery" className="w-[50%] mx-auto" />
                            </div>
                            <h4 className="font-jose font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#151875] py-[10px] sm:py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[14px] sm:text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-full sm:w-[270px] border-[#fff] py-[30px] sm:py-[45px] px-[20px] sm:px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={cashback} alt="cashback" className="w-[50%] mx-auto" />
                            </div>
                            <h4 className="font-jose font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#151875] py-[10px] sm:py-[20px]">Cashback</h4>
                            <p className="font-lato font-bold text-[14px] sm:text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-full sm:w-[270px] border-[#fff] py-[30px] sm:py-[45px] px-[20px] sm:px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={premium} alt="premium" className="w-[50%] mx-auto" />
                            </div>
                            <h4 className="font-jose font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#151875] py-[10px] sm:py-[20px]">Premium</h4>
                            <p className="font-lato font-bold text-[14px] sm:text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-full sm:w-[270px] border-[#fff] py-[30px] sm:py-[45px] px-[20px] sm:px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={hours} alt="hours" className="w-[50%] mx-auto" />
                            </div>
                            <h4 className="font-jose font-semibold text-[18px] sm:text-[20px] md:text-[22px] text-[#151875] py-[10px] sm:py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[14px] sm:text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs
