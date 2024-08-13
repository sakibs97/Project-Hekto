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
            <Container className='mb-10 flex justify-around'>
                <div className="w-[60%]">
                    <div className="">
                        <img src={blogp} alt="" />
                        <div className="">
                            <div className="flex items-center py-5">
                                <div className="flex items-center pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-10 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-[23px] py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[30px] text-[#151875] mt-6 mb-5">Mauris at orci non vulputate diam tincidunt nec.</h4>
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                                </p>
                                <Link to="/single-blog"><button className="font-lato font-semibold text-[18px] text-[#151875] mt-5 mb-8 hover:text-[#FB2E86]">Read More *</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={blogp2} alt="" />
                        <div className="">
                            <div className="flex items-center py-5">
                                <div className="flex items-center pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-10 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-[23px] py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[30px] text-[#151875] mt-6 mb-5">Aenean vitae in aliquam ultrices lectus. Etiam.</h4>
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                                </p>
                                <button className="font-lato font-semibold text-[18px] text-[#151875] mt-5 mb-8">Read More </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={blogp3} alt="" />
                        <div className="">
                            <div className="flex items-center py-5">
                                <div className="flex items-center pr-8">
                                    <ImPen className="text-[#FB2E86]" />
                                    <h6 className="font-lato font-normal text-[14px] text-[#151875] ml-2 px-10 py-1 bg-[#FFE7F9]">Surf Auxion</h6>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-[#FFA454] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                    </svg>
                                    <span className="font-lato font-semibold text-[14px] text-[#151875] px-[23px] py-1 bg-[#FFECE2]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="">
                                <h4 className="font-jose font-bold text-[30px] text-[#151875] mt-6 mb-5">Sit nam congue feugiat nisl, mauris amet nisi.</h4>
                                <p className="font-lato font-normal text-[16px] text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                                </p>
                                <button className="font-lato font-semibold text-[18px] text-[#151875] mt-5 mb-8">Read More </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <BlogPost />
                </div>
            </Container>
        </section>
    )
}

export default BlogPage