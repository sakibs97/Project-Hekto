import Container from "./Container"
import blogp from "../assets/blog-page/blogp.png"
import singleV from "../assets/blog-page/singleV.png"
import singlej from "../assets/blog-page/singlej.png"
import single from "../assets/blog-page/single.png"
import single2 from "../assets/blog-page/single2.png"
import single3 from "../assets/blog-page/single3.png"
import single4 from "../assets/blog-page/single4.png"
import { ImPen } from "react-icons/im";
import Bannerreusable from "./reusable/Bannerreusable";
import BlogPost from "./BlogPost";
import Sponser from "./Sponser";
import LatestProreusable from "./reusable/LatestProreusable"
import { FaStar } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import SingleBlogPagination from "./pagination/SingleBlogPagination"
import BlogComment from "./BlogComment"

const SingleBlog = () => {
    return (
        <section>
            <Bannerreusable headline='Single Blog' pname='Single Blog' home='Home' page='Pages' />
            <Container className='flex flex-col lg:flex-row lg:justify-around'>
                <div className="w-full lg:w-[60%]">
                    <div>
                        <img src={blogp} alt="" className="w-full" />
                        <div className="px-4 sm:px-6 lg:px-0">
                            <div className="flex flex-wrap items-center py-5">
                                <div className="flex items-center pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-4 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-4 py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <h4 className="font-jose font-bold text-[24px] sm:text-[28px] lg:text-[30px] text-[#151875] mt-6 mb-5">Mauris at orci non vulputate diam tincidunt nec.</h4>
                            <p className="font-lato font-normal text-[14px] sm:text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                            <p className="font-lato font-normal text-[14px] sm:text-[16px] text-[#8A8FB9] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>
                            <p className="font-jose font-semibold text-[16px] sm:text-[18px] text-[#969CB4] p-5 border-l-[4px] border-[#FC45A0]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>
                            <div className="flex flex-wrap justify-between my-8 gap-4">
                                <img src={singleV} alt="" className="w-full sm:w-[48%]" />
                                <img src={singlej} alt="" className="w-full sm:w-[48%]" />
                            </div>
                            <p className="font-lato font-normal text-[14px] sm:text-[16px] text-[#8A8FB9] my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>
                            <div className="flex flex-wrap justify-between ">
                                <div className="w-[48%] md:w-[23%]">
                                    <div className="relative group">
                                        <img src={single} alt="related" className="w-full" />
                                        <LatestProreusable />
                                    </div>
                                    <div className="">
                                        <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[10px]">Quam sed</h4>
                                        <span className="flex items-center justify-between">
                                            <p className="font-jose font-normal text-[13px] text-[#151875]">$32.00</p>
                                            <p className="font-jose font-normal text-[13px] text-[#FF38B0] line-through">$56.00</p>
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48%] md:w-[23%]">
                                    <div className="relative group">
                                        <img src={single2} alt="related" className="w-full" />
                                        <LatestProreusable />
                                    </div>
                                    <div className="">
                                        <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[10px]">Quam sed</h4>
                                        <span className="flex items-center justify-between">
                                            <p className="font-jose font-normal text-[13px] text-[#151875]">$32.00</p>
                                            <p className="font-jose font-normal text-[13px] text-[#FF38B0] line-through">$56.00</p>
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48%] md:w-[23%]">
                                    <div className="relative group">
                                        <img src={single3} alt="related" className="w-full" />
                                        <LatestProreusable />
                                    </div>
                                    <div className="">
                                        <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[10px]">Quam sed</h4>
                                        <span className="flex items-center justify-between">
                                            <p className="font-jose font-normal text-[13px] text-[#151875]">$32.00</p>
                                            <p className="font-jose font-normal text-[13px] text-[#FF38B0] line-through">$56.00</p>
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48%] md:w-[23%]">
                                    <div className="relative group">
                                        <img src={single4} alt="related" className="w-full" />
                                        <LatestProreusable />
                                    </div>
                                    <div className="">
                                        <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[10px]">Quam sed</h4>
                                        <span className="flex items-center justify-between">
                                            <p className="font-jose font-normal text-[13px] text-[#151875]">$32.00</p>
                                            <p className="font-jose font-normal text-[13px] text-[#FF38B0] line-through">$56.00</p>
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[1px] text-[#FFCC2E]" />
                                            <FaStar className="mx-[px] text-[#FFCC2E]" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="font-lato font-normal text-[14px] sm:text-[16px] text-[#8A8FB9] my-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                            </p>
                            <p className="font-lato font-normal text-[14px] sm:text-[16px] text-[#8A8FB9] my-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
                            </p>
                            <div className="flex justify-center pt-5 mb-8">
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
                        </div>
                    </div>
                    <SingleBlogPagination />
                    <BlogComment />
                </div>
                <div className="w-full lg:w-[30%]">
                    <BlogPost />
                    <Sponser />
                </div>
            </Container>
        </section>
    )
}

export default SingleBlog
