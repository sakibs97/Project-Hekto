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
        <section className="p-4 sm:p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
                <div>
                    <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Search</h4>
                    <div>
                        <div className="relative w-full max-w-sm">
                            <input
                                type="search"
                                className='border-[1px] border-[#BDBDD8] outline-none w-full h-[38px] p-2 placeholder:font-lato placeholder:font-normal placeholder:text-[14px] placeholder:text-[rgb(21,24,117,14%)] font-lato font-normal text-[16px] text[#151875]'
                                placeholder="Search For Posts"
                            />
                            <div>
                                <FaSearch className="absolute top-[50%] text-[#BDBDD8] translate-y-[-50%] right-[10px] sm:right-[15px]" />
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Categories</h4>
                        <div className="w-full">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Hobbies (14)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Women (21)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Men (11)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Kids (15)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Tech (17)</li>
                                <li className="font-jose font-semibold text-[14px] text-[#3F509E] py-[8px] pl-[10px] pr-[30px] hover:bg-[#F939BF] hover:text-[#fff] ease-in-out duration-700">Travel (10)</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Recent Post</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <img src={recent} alt="recent post" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={recent2} alt="recent post" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={recent3} alt="recent post" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={recent4} alt="recent post" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">It is a long established fact</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Sale Product</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <img src={sale} alt="sale product" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Elit ornare in enim mauris.</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={sale2} alt="sale product" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Viverra pulvinar et enim.</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={sale3} alt="sale product" className="w-[50px] h-[50px] object-cover" />
                                <div className="ml-4 flex-1">
                                    <h5 className="font-jose font-normal text-[14px] text-[#3F509E]">Mattis varius donec fdsfd</h5>
                                    <h6 className="font-lato font-semibold text-[11px] text-[#8A8FB9]">Aug 09 2020</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 lg:w-[270px]">
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] mb-[15px]">Offer product</h4>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                            <div className="relative">
                                <img src={Mask} alt="offer product" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
                                    <h4 className="font-jose font-semibold text-[14px] text-[#3F509E]">20% Off</h4>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={Mask2} alt="offer product" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
                                    <h4 className="font-jose font-semibold text-[14px] text-[#3F509E]">20% Off</h4>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={Mask3} alt="offer product" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
                                    <h4 className="font-jose font-semibold text-[14px] text-[#3F509E]">20% Off</h4>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={Mask4} alt="offer product" className="w-full h-auto" />
                                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded">
                                    <h4 className="font-jose font-semibold text-[14px] text-[#3F509E]">20% Off</h4>
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

export default BlogPost;
