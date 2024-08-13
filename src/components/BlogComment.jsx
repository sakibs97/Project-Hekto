import blogcm1 from "../assets/blog-page/blog-ac.png"
import blogcm2 from "../assets/blog-page/blog-ac2.png"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BlogComment = () => {
    return (
        <section className="my-10 mx-[10px]">
            <div className="w-full lg:w-[70%] pt-[30px]">
                <div className="flex flex-col lg:flex-row justify-between p-[15px] border-[1px] border-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6">
                    <img src={blogcm2} alt="blogcm1" className="w-[104px] h-[108px]" />
                    <div className="w-full lg:w-[80%] lg:pl-[15px]">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center">
                            <h4 className="font-jose font-semibold text-[16px] sm:text-[19px] lg:text-[19px] text-[#363385]">Sapien ac</h4>
                            <p className="font-lato font-normal text-[12px] sm:text-[13px] text-[#A3A2B6] lg:pl-[30px]">Jan 09 2020</p>
                        </div>
                        <p className="font-lato font-normal text-[12px] sm:text-[13px] text-[#A3A2B6] leading-6 lg:leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between p-[15px] border-[1px] border-[#fff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-[30px]">
                    <img src={blogcm1} alt="blogcm1" className="w-[104px] h-[108px]" />
                    <div className="w-full lg:w-[80%] lg:pl-[15px]">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center">
                            <h4 className="font-jose font-semibold text-[16px] sm:text-[19px] lg:text-[19px] text-[#363385]">Augue conva</h4>
                            <p className="font-lato font-normal text-[12px] sm:text-[13px] text-[#A3A2B6] lg:pl-[30px]">Aug 18 2020</p>
                        </div>
                        <p className="font-lato font-normal text-[12px] sm:text-[13px] text-[#A3A2B6] leading-6 lg:leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                    </div>
                </div>

            </div>
            <div className="w-full lg:w-[80%]">
                <div className="mt-8 lg:mt-24">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative w-full lg:w-[49%]">
                            <input type="text" className="pl-10 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86]" placeholder="Your Name*" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="text-[#8A8FB9]" />
                            </div>
                        </div>
                        <div className="relative w-full lg:w-[49%]">
                            <input type="text" className="pl-10 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86]" placeholder="Write Your Email*" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MdEmail className="text-[#8A8FB9]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-8">
                        <textarea id="message" rows="4" className="block p-2.5 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86]" placeholder="Write your comment*"></textarea>
                    </div>
                    <div className="flex items-center mt-4 lg:mt-5 mb-8 lg:mb-11">
                        <input type="checkbox" name="" id="" className="border-[#8A91AB] focus:ring-[#FB2E86] focus:border-[#FB2E86]" />
                        <p className="font-lato font-medium text-[12px] sm:text-[14px] text-[#8A91AB] pl-[10px]">Save my name, email, and website in this browser for the next time I comment.</p>
                    </div>
                    <div className="text-center">
                        <button className="font-jose font-semibold text-[15px] sm:text-[17px] text-[#fff] py-4 w-full bg-[#FB2E86]">Continue Shipping</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogComment
