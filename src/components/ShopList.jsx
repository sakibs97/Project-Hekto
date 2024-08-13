import Container from "./Container"
import PageSortBy from "./PageSortBy"
import Bannerreusable from "./reusable/Bannerreusable"
import list from "../assets/listview.png"
import list1 from "../assets/list/list1.png"
import list2 from "../assets/list/list2.png"
import list3 from "../assets/list/list3.png"
import list4 from "../assets/list/list4.png"
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import PageCategorie from "./PageCategorie";
import ListIconreusable from "./reusable/ListIconreusable"
import { Link } from "react-router-dom"

const ShopList = ({ headline, pname, home, page }) => {


    return (
        <section>
            <Bannerreusable headline='Shop List' pname='Shop List' home='Home' page='Pages' />
            <Container>
                <PageSortBy />
                <div className="my-7 flex justify-between">
                    <PageCategorie />
                    <div className="w-[75%]">
                        <div className="items-center flex justify-start">
                            <Link to='/Product-Details'>
                                <img src={list} alt="list" className="mx-5 my-5" />
                            </Link>
                            <div className="ml-8">
                                <div className="">
                                    <div className="flex items-center">
                                        <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center py-3">
                                        <p className="font-jose font-normal text-[14px] text-[#111C85]">$26.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">$52.00</p>
                                        <div className="flex items-center">
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[590px] pb-7">
                                    <p className="font-lato font-normal text-[18px] text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                </div>
                                <ListIconreusable />
                            </div>
                        </div>
                        <div className="items-center flex justify-start">
                            <img src={list1} alt="list1" className="mx-5 my-5" />
                            <div className="ml-8">
                                <div className="">
                                    <div className="flex items-center">
                                        <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center py-3">
                                        <p className="font-jose font-normal text-[14px] text-[#111C85]">$26.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">$52.00</p>
                                        <div className="flex items-center">
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[590px] pb-7">
                                    <p className="font-lato font-normal text-[18px] text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                </div>
                                <ListIconreusable />
                            </div>
                        </div>
                        <div className="items-center flex justify-start">
                            <img src={list2} alt="list2" className="mx-5 my-5" />
                            <div className="ml-8">
                                <div className="">
                                    <div className="flex items-center">
                                        <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center py-3">
                                        <p className="font-jose font-normal text-[14px] text-[#111C85]">$26.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">$52.00</p>
                                        <div className="flex items-center">
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[590px] pb-7">
                                    <p className="font-lato font-normal text-[18px] text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                </div>
                                <ListIconreusable />
                            </div>
                        </div>
                        <div className="items-center flex justify-start">
                            <img src={list3} alt="list3" className="mx-5 my-5" />
                            <div className="ml-8">
                                <div className="">
                                    <div className="flex items-center">
                                        <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center py-3">
                                        <p className="font-jose font-normal text-[14px] text-[#111C85]">$26.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">$52.00</p>
                                        <div className="flex items-center">
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[590px] pb-7">
                                    <p className="font-lato font-normal text-[18px] text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                </div>
                                <ListIconreusable />
                            </div>
                        </div>
                        <div className="items-center flex justify-start">
                            <img src={list4} alt="list4" className="mx-5 my-5" />
                            <div className="ml-8">
                                <div className="">
                                    <div className="flex items-center">
                                        <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center py-3">
                                        <p className="font-jose font-normal text-[14px] text-[#111C85]">$26.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">$52.00</p>
                                        <div className="flex items-center">
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                            <FaStar className="mx-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[590px] pb-7">
                                    <p className="font-lato font-normal text-[18px] text-[#9295AA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                </div>
                                <ListIconreusable />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShopList