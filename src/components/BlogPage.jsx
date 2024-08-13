import Container from "./Container"
import Bannerreusable from "./reusable/Bannerreusable"
import blogp from "../assets/blog-page/blogp.png"
import blogp2 from "../assets/blog-page/blogp2.png"
import blogp3 from "../assets/blog-page/blogp3.png"
import { ImPen } from "react-icons/im";
import BlogPost from "./BlogPost"
import { Link } from "react-router-dom";

const BlogPage = () => {
    return (
        <section>
            <Bannerreusable headline='Blog Page' pname='Blog Page' home='Home' page='Pages' />
            <Container className='mb-10 px-[10px] flex flex-col lg:flex-row justify-between'>
                <div className="w-full lg:w-[60%]">
                    <div className="mb-8">
                        <img src={blogp} alt="Blog post" className="w-full h-auto" />
                        <div className="">
                            <div className="flex flex-col sm:flex-row items-center py-5">
                                <div className="flex items-center mb-4 sm:mb-0 sm:pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-4 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-6 py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[24px] md:text-[30px] text-[#151875] mt-6 mb-5">Mauris at orci non vulputate diam tincidunt nec.</h4>
                                <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <Link to="/single-blog"><button className="font-lato font-semibold text-[16px] md:text-[18px] text-[#151875] mt-5 mb-8 hover:text-[#FB2E86]">Read More *</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <img src={blogp2} alt="Blog post 2" className="w-full h-auto" />
                        <div className="">
                            <div className="flex flex-col sm:flex-row items-center py-5">
                                <div className="flex items-center mb-4 sm:mb-0 sm:pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-4 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-6 py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[24px] md:text-[30px] text-[#151875] mt-6 mb-5">Aenean vitae in aliquam ultrices lectus. Etiam.</h4>
                                <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <Link to="/single-blog"><button className="font-lato font-semibold text-[16px] md:text-[18px] text-[#151875] mt-5 mb-8 hover:text-[#FB2E86]">Read More *</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <img src={blogp3} alt="Blog post 3" className="w-full h-auto" />
                        <div className="">
                            <div className="flex flex-col sm:flex-row items-center py-5">
                                <div className="flex items-center mb-4 sm:mb-0 sm:pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-4 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-6 py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[24px] md:text-[30px] text-[#151875] mt-6 mb-5">Vulputate volutpat amet sed vitae.</h4>
                                <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                                <Link to="/single-blog"><button className="font-lato font-semibold text-[16px] md:text-[18px] text-[#151875] mt-5 mb-8 hover:text-[#FB2E86]">Read More *</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[25%]">
                    <BlogPost />
                </div>
            </Container>
        </section>
    )
}

export default BlogPage
