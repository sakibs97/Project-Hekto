import { useState } from 'react';
import Container from "./Container";
import latest2 from "../assets/latestpro/latest2.png"
import latest3 from "../assets/latestpro/latest3.png"
import latest4 from "../assets/latestpro/latest4.png"
import latest5 from "../assets/latestpro/latest5.png"
import { IoCartOutline } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const LatestProduct = () => {
    const [activeTab, setActiveTab] = useState('NewArrival');
    let [activeIcon, setActiveIcon] = useState('')

    return (
        <section>
            <Container className='lg:my-10 my-5'>
                <div className="text-center">
                    <h2 className='font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]'>Leatest Products</h2>
                </div>
                <div className="">
                    <div className="mb-4">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal text-[15px] lg:text-[18px] ${activeTab === 'NewArrival' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="NewArrival-tab" onClick={() => setActiveTab('NewArrival')} type="button" role="tab" aria-controls="NewArrival" aria-selected={activeTab === 'NewArrival'}>New Arrival</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal text-[15px] lg:text-[18px] ${activeTab === 'BestSeller' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="BestSeller-tab" onClick={() => setActiveTab('BestSeller')} type="button" role="tab" aria-controls="BestSeller" aria-selected={activeTab === 'BestSeller'}>Best Seller</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal text-[15px] lg:text-[18px] ${activeTab === 'Featured' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="Featured-tab" onClick={() => setActiveTab('Featured')} type="button" role="tab" aria-controls="Featured" aria-selected={activeTab === 'Featured'}>Featured</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal text-[15px] lg:text-[18px] ${activeTab === 'SpecialOffer' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="SpecialOffer-tab" onClick={() => setActiveTab('SpecialOffer')} type="button" role="tab" aria-controls="SpecialOffer" aria-selected={activeTab === 'SpecialOffer'}>Special Offer</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content" className='mx-[10px] lg:mx-0'>
                        <div className={`${activeTab === 'NewArrival' ? 'block' : 'hidden'}  rounded-lg bg-gray-50 dark:bg-gray-800`} id="NewArrival" role="tabpanel" aria-labelledby="NewArrival-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest3} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest4} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest5} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'BestSeller' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="BestSeller" role="tabpanel" aria-labelledby="BestSeller-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'Featured' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="Featured" role="tabpanel" aria-labelledby="Featured-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'SpecialOffer' ? 'block' : 'hidden'} rounded-lg bg-gray-50 dark:bg-gray-800`} id="SpecialOffer" role="tabpanel" aria-labelledby="SpecialOffer-tab">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group mb-[20px] w-[49%] sm:w-[32%] md:w-[32%] lg:w-[24%]">
                                    <div className="relative pt-5 pb-2 pr-14 pl-16 bg-[#FFF] group-hover:bg-[#F7F7F7] ease-in-out duration-500">
                                        <img src={latest2} className="lg:w-[245px] h-[100px] lg:h-[245px]" alt="" />
                                        <div className="">
                                            <div className="absolute bottom-[-10px] left-[20px] opacity-0 group-hover:overflow-hidden group-hover:bottom-[30px] group-hover:opacity-100 ease-in-out duration-700">
                                                <div onClick={() => setActiveIcon('IoCartOutline')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'IoCartOutline' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'IoCartOutline'}>
                                                    <IoCartOutline />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaHeart')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaHeart' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaHeart'}>
                                                    <IoMdHeartEmpty />
                                                </div>
                                                <div onClick={() => setActiveIcon('FaSearchPlus')} className={`border-[1px] p-[7px] rounded-full ${activeIcon === 'FaSearchPlus' ? ' text-[#2F1AC4] bg-[#EEEFFB]' : 'bg-none border-none text-[#1389FF]'}`} aria-selected={activeIcon === 'FaSearchPlus'}>
                                                    <FaSearchPlus />
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <h5 className="font-jose font-normal text-[14px] lg:text-[16px] text-[#151875] border-b-[2px] border-[#EEEFFB]">Comfort Handy Craft</h5>
                                        <div className="flex flex-wrap items-center">
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#151875] pr-3">$42.00</p>
                                            <p className="font-jose font-normal text-[12px] lg:text-[14px] text-[#FB2448] line-through">$65.00</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default LatestProduct;
