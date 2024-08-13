import { FaSearch } from "react-icons/fa";
import recent from "../assets/recent-post/recent.png"
import recent2 from "../assets/recent-post/recent2.png"
import recent3 from "../assets/recent-post/recent3.png"
import recent4 from "../assets/recent-post/recent4.png"
import sale from "../assets/recent-post/sale.png"
import sale2 from "../assets/recent-post/sale2.png"
import sale3 from "../assets/recent-post/sale3.png"
import Mask from "../assets/recent-post/Mask.png"
import Mask2 from "../assets/recent-post/Mask2.png"
import Mask3 from "../assets/recent-post/Mask3.png"
import Mask4 from "../assets/recent-post/Mask4.png"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const BlogPost = () => {
    return (
        <section>
            <div className="">
                <div className="">
                    <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Search</h4>
                    <div className="">
                        <div className="relative">
                            <input type="search" className='border-[1px] border-[#BDBDD8] outline-none w-[260px] h-[38px] p-2 placeholder:font-lato placeholder:font-normal placeholder:text-[14px] placeholder:text-[rgb(21,24,117,14%)] font-lato font-normal text-[16px] text[#151875]' placeholder="Search For Posts" />
                            <div className="">
                                <FaSearch className="absolute top-[50%] text-[#BDBDD8] translate-y-[-50%] right-[25px]" />
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Categories</h4>
                        <div className="w-[255px]">
                            <ul className="flex flex-wrap justify-between">
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Hobbies (14)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Women (21)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Women (21)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Women (21)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Women (21)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700 my-[6px]">Women (21)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Recent Post</h4>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={recent} alt="" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={recent2} alt="" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={recent3} alt="" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={recent4} alt="" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Sale Product</h4>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={sale} alt="sale" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Elit ornare in enim mauris.</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={sale2} alt="sale" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Viverra pulvinar et enim.</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                        <div className="flex justify-between w-[250px] items-center mb-[20px]">
                            <img src={sale3} alt="sale" />
                            <div className="">
                                <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Mattis varius donec fdsfd</h5>
                                <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px]">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[15px]">Offer product</h4>
                        <div className="flex flex-wrap justify-between">
                            <div className="py-[15px]">
                                <img src={Mask} alt="" />
                                <div className="text-center py-[10px]">
                                    <h5 className="font-lato font-semibold text-[14px] text-[#151875]">Duis lectus est.</h5>
                                    <p className="font-lato font-semibold text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div className="py-[15px]">
                                <img src={Mask2} alt="" />
                                <div className="text-center py-[10px]">
                                    <h5 className="font-lato font-semibold text-[14px] text-[#151875]">Duis lectus est.</h5>
                                    <p className="font-lato font-semibold text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div className="py-[15px]">
                                <img src={Mask3} alt="" />
                                <div className="text-center py-[10px]">
                                    <h5 className="font-lato font-semibold text-[14px] text-[#151875]">Duis lectus est.</h5>
                                    <p className="font-lato font-semibold text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
                                </div>
                            </div>
                            <div className="py-[15px]">
                                <img src={Mask4} alt="" />
                                <div className="text-center py-[10px]">
                                    <h5 className="font-lato font-semibold text-[14px] text-[#151875]">Duis lectus est.</h5>
                                    <p className="font-lato font-semibold text-[12px] text-[#8A8FB9]">$12.00 - $15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[15px]">Follow</h4>
                        <div className="flex items-center w-[130px] justify-between">
                            <div className="p-1 bg-[#5625DF] rounded-full">
                                <FaFacebookF className="text-[#fff] w-[25px] h-[25px]" />
                            </div>
                            <div className="p-1 bg-[#FF27B7] rounded-full">
                                <FaInstagram className="text-[#fff] w-[25px] h-[25px]" />
                            </div>
                            <div className="p-1 bg-[#37DAF3] rounded-full">
                                <FaTwitter className="text-[#fff] w-[25px] h-[25px]" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-[15px]">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[15px]">Tags</h4>
                        <div className="flex flex-wrap justify-between">
                            <h6 className="font-lato font-normal text-[16px] text-[#151875] underline decoration hover:text-[#FB2E86] ease-in-out duration-500">General</h6>
                            <h6 className="font-lato font-normal text-[16px] text-[#151875] underline decoration hover:text-[#FB2E86] ease-in-out duration-500">Atsanil</h6>
                            <h6 className="font-lato font-normal text-[16px] text-[#151875] underline decoration hover:text-[#FB2E86] ease-in-out duration-500">Insas.</h6>
                            <h6 className="font-lato font-normal text-[16px] text-[#151875] underline decoration hover:text-[#FB2E86] ease-in-out duration-500">Bibsaas</h6>
                            <h6 className="font-lato font-normal text-[16px] text-[#151875] underline decoration hover:text-[#FB2E86] ease-in-out duration-500">Nulla.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost