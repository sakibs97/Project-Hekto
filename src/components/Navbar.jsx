import { Link } from "react-router-dom";
import Hekto from "../assets/Hekto.png"
import Container from "./Container"
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false)
    // let [pshow, setPShow] = useState(false)
    let [activeTab, setActiveTab] = useState();

    let handelshow = () => {
        (
            setShow(!show)
        )
    }
    // let pagemenu = useRef()
    // useEffect(() => {
    //     document.addEventListener("click", (e) => {
    //         setPShow(!pshow)
    //     })
    // })

    return (
        <section className="my-[15px] mx-[10px] lg:mx-0">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="lg:w-[10%]">
                        <Link to="/"><img src={Hekto} alt="Hekto" /></Link>
                    </div>
                    <div className="flex justify-between items-center lg:w-[80%]" >
                        <ul className={`lg:flex justify-between w-[50%] text-center lg:static z-50 lg:bg-none absolute ${show == true ? 'bg-[rgb(22,22,22,10%)] top-[140px]  w-full left-0 ease-in-out duration-700' : 'left-[-400px] top-[140px] ease-in-out duration-700'}`}>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'Home' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} id="Home-tab" onClick={() => setActiveTab('Home')}><Link to="/">Home</Link></li>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'shop' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} onClick={() => setActiveTab('shop')}><Link to="/shop">Shop</Link></li>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'blog' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} onClick={() => setActiveTab('blog')}><Link to="/blog">Blog</Link></li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:text-[#FB2E86]">Products</li>
                            <div className="relative group">
                                <li className="font-lato font-normal text-[16px] text-[#0D0E43] hover:text-[#FB2E86] after:hover:text-[#FB2E86]" >
                                    <Link>Page</Link>
                                </li>

                                <ul className="absolute top-4 left-0 z-50 lg:left-[-10px] opacity-0 hover:opacity-100 lg:group-hover:left-[50%] lg:translate-x-[-50%] group-hover:top-7 ease-in-out duration-500 w-[200%] bg-[rgb(22,22,22,10%)] pb-1 px-1 overflow-hidden">
                                    <Link to='/About-Us'><li className="font-lato font-normal text-[#0D0E43] py-2 text-[14px] hover:text-[#FB2E86]">About US</li></Link>
                                    <Link to='/faq'><li className="font-lato font-normal text-[#0D0E43] text-[14px] hover:text-[#FB2E86]">FAQ</li></Link>
                                    <Link to='/*'><li className="font-lato font-normal text-[#0D0E43] py-2 text-[14px] hover:text-[#FB2E86]">Category</li></Link>
                                </ul>

                            </div>
                            <li className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === 'contact' ? 'text-[#FB2E86]' : 'text-[#0D0E43]'}`} onClick={() => setActiveTab('contact')}><Link to="/contact">Contact</Link></li>
                        </ul>

                        <div className="">
                            <div className="relative">
                                <input type="search" className='border-[1px] border-[#0e0c0c] outline-none w-[200px] lg:w-[260px] h-[38px] p-2 lg:mr-[38px] bg-[#D9D9D9]' placeholder="Search Products" />
                                <div className="absolute top-[50%] translate-y-[-50%] right-[0px] border-[1px] border-[#FB2E86] bg-[#FB2E86] p-[10px]">
                                    <FaSearch className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden" onClick={handelshow}>
                        {show ? <RxCross2 className="h-[30px] w-[30px]" /> : <FaBars className="h-[30px] w-[30px]" />}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar