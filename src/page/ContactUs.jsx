import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import { FaCircle } from "react-icons/fa";
import contact from "../assets/contact.png"

const ContactUs = () => {
    return (
        <section>
            <Bannerreusable headline='Contact Us' pname='Contact Us' home='Home' page='Pages' />
            <Container className='px-[10px] lg:px-0'>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h4 className="font-jose font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#151875] leading-[36px] sm:leading-[42px] lg:leading-[48px]">Information About us</h4>
                        <p className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9] leading-[22px] sm:leading-[25px] lg:leading-[25px] mt-4 lg:w-[550px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <span className="flex flex-wrap gap-2 lg:gap-4 items-center w-auto pt-8">
                            <FaCircle className="text-[#5625DF] w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
                            <FaCircle className="text-[#FF27B7] w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
                            <FaCircle className="text-[#37DAF3] w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
                        </span>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="font-jose font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#151875] leading-[36px] sm:leading-[42px] lg:leading-[48px] mb-6 lg:mb-7">Contact Way</h4>
                        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-8 lg:gap-6">
                            <div className="flex items-center">
                                <FaCircle className="text-[#5726DF] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]" />
                                <div className="pl-4 sm:pl-6">
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaCircle className="text-[#FB2E86] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]" />
                                <div className="pl-4 sm:pl-6">
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaCircle className="text-[#FFB265] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]" />
                                <div className="pl-4 sm:pl-6">
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaCircle className="text-[#1BE982] w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px]" />
                                <div className="pl-4 sm:pl-6">
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:my-10">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h4 className="font-jose font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#151875] leading-[36px] sm:leading-[42px] lg:leading-[48px]">Get In Touch</h4>
                        <p className="font-lato font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-[#8A8FB9] leading-[22px] sm:leading-[25px] lg:leading-[25px] mt-4 lg:w-[550px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>
                        <div className="mt-8 lg:mt-10 lg:w-[550px]">
                            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6">
                                <input type="text" placeholder="Your Name*" className="border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-full lg:w-[255px] h-[45px] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[15px] lg:placeholder:text-[15px] text-[14px] sm:text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                                <input type="text" placeholder="Your E-mail" className="border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-full lg:w-[255px] h-[45px] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[15px] lg:placeholder:text-[15px] text-[14px] sm:text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                            </div>
                            <div className="my-8 lg:my-10">
                                <input type="text" placeholder="Subject*" className="w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[15px] lg:placeholder:text-[15px] text-[14px] sm:text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                            </div>
                            <div className="">
                                <textarea id="message" rows="4" className="block p-2.5 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[15px] lg:placeholder:text-[15px] text-[14px] sm:text-[16px] placeholder:text-[#8A8FB9] text-[#000]" placeholder="Type Your Message*"></textarea>
                            </div>
                            <button className="font-jose font-normal text-[14px] sm:text-[16px] lg:text-[16px] text-[#fff] py-[10px] px-6 sm:px-8 lg:px-10 border bg-[#FB2E86] rounded-md my-6 lg:my-7">Send Mail</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-first lg:order-last my-5 lg:my-0">
                        <img src={contact} alt="" className="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactUs
