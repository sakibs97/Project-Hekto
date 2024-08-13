import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import { FaCircle } from "react-icons/fa";
import contact from "../assets/contact.png"


const ContactUs = () => {
    return (
        <section>
            <Bannerreusable headline='Contact Us' pname='Contact Us' home='Home' page='Pages' />
            <Container>
                <div className="flex justify-between">
                    <div className="">
                        <h4 className="font-jose font-bold text-[36px] text-[#151875] leading-[48px]">Information About us</h4>
                        <p className="font-lato font-semibold text-[16px] text-[#8A8FB9] leading-[25px] w-[550px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                        </p>
                        <span className="flex justify-between items-center w-[105px] pt-10">
                            <FaCircle className="text-[#5625DF] w-[25px] h-[25px]" />
                            <FaCircle className="text-[#FF27B7] w-[25px] h-[25px]" />
                            <FaCircle className="text-[#37DAF3] w-[25px] h-[25px]" />
                        </span>
                    </div>
                    <div className="">
                        <h4 className="font-jose font-bold text-[36px] text-[#151875] leading-[48px] mb-7">Contact Way</h4>
                        <div className="flex flex-wrap justify-between w-[500px]">
                            <div className="flex items-center mb-10">
                                <FaCircle className="text-[#5726DF] w-[45px] h-[45px]" />
                                <div className="pl-[10px]">
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center mb-10">
                                <FaCircle className="text-[#FB2E86] w-[45px] h-[45px]" />
                                <div className="pl-[10px]">
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center mb-10">
                                <FaCircle className="text-[#FFB265] w-[45px] h-[45px]" />
                                <div className="pl-[10px]">
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                            <div className="flex items-center mb-10">
                                <FaCircle className="text-[#1BE982] w-[45px] h-[45px]" />
                                <div className="pl-[10px]">
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">Tel: 877-67-88-99</h6>
                                    <h6 className="font-lato font-semibold text-[16px] text-[#8A8FB9]">E-Mail: shop@store.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center my-10">
                    <div className="">
                        <h4 className="font-jose font-bold text-[36px] text-[#151875] leading-[48px]">Get In Touch</h4>
                        <p className="font-lato font-semibold text-[16px] text-[#8A8FB9] leading-[25px] w-[550px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                        </p>
                        <div className="mt-10">
                            <div className="flex justify-between">
                                <input type="text" placeholder="Your Name*" className="border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-[255px] h-[45px] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                                <input type="text" placeholder="Your E-mail" className="border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-[255px] h-[45px] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                            </div>
                            <div className="my-10">
                                <input type="text" placeholder="Subject*" className="w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                            </div>
                            <div className="">
                                <textarea id="message" rows="4" className="block p-2.5 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" placeholder="Type Your Messege*"></textarea>
                            </div>
                            <button className="font-jose font-normal text-[16px] text-[#fff] py-[10px] px-10 border bg-[#FB2E86] rounded-md my-7">Send Mail</button>
                        </div>
                    </div>
                    <div className="">
                        <img src={contact} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ContactUs