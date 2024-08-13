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
                <div className="flex justify-around">
                    <div className="relative bg-[#2B3CAB] w-[552px] h-[380px] rounded-lg">
                        <div className="absolute hover:bottom-4 hover:right-[-16px]">
                            <img src={about} alt="" className="w-full ease-in-out duration-500" />
                        </div>
                    </div>
                    <div className="w-[550px]">
                        <h4 className="font-jose font-bold text-[36px] text-[#151875]">Know About Our Ecomerce Business, History</h4>
                        <p className="font-lato font-semibold text-[16px] text-[#8A8FB9] pt-4 pb-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <Link to='/contact'><button className="font-lato font-semibold text-[18px] text-[#fff] py-[9px] px-[30px] bg-[#FB2E86] rounded-lg">Contact us</button></Link>
                    </div>
                </div>
                <div className="my-10">
                    <h4 className="font-jose font-bold text-[42px] text-[#000000] text-center">Our Features</h4>
                    <div className="flex justify-evenly items-center my-10">
                        <div className="text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={delivery} alt="delivery" />
                            </div>
                            <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={cashback} alt="cashback" />
                            </div>
                            <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={premium} alt="premium" />
                            </div>
                            <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                        <div className="text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                            <div className="flex justify-center">
                                <img src={hours} alt="hours" />
                            </div>
                            <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                            <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="font-jose font-bold text-[42px] text-[#000000] text-center">Our Client Say!</h4>

                </div>



            </Container>
        </section>
    )
}

export default AboutUs