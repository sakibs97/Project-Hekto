import { useState } from 'react';
import Container from "./Container";
import discount from "../assets/discount/Discount.png"
import discount2 from "../assets/discount/Discount2.png"
import discount3 from "../assets/discount/Discount3.png"
import { IoMdCheckmark } from "react-icons/io";

const DiscountItem = () => {
    const [activeTab, setActiveTab] = useState('WoodChair');

    return (
        <section>
            <Container className='lg:my-10 my-5'>
                <div className="text-center">
                    <h2 className='font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]'>Leatest Products</h2>
                </div>
                <div className="mt-5">
                    <div className="mb-4">
                        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal tet-[15px] lg:text-[18px] ${activeTab === 'WoodChair' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="WoodChair-tab" onClick={() => setActiveTab('WoodChair')} type="button" role="tab" aria-controls="WoodChair" aria-selected={activeTab === 'WoodChair'}>Wood Chair</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal tet-[15px] lg:text-[18px] ${activeTab === 'PlasticChair' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="PlasticChair-tab" onClick={() => setActiveTab('PlasticChair')} type="button" role="tab" aria-controls="PlasticChair" aria-selected={activeTab === 'PlasticChair'}>Plastic Chair</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block lg:p-4 p-2 border-b-4 font-lato font-normal tet-[15px] lg:text-[18px] ${activeTab === 'Sofa' ? 'border-[#FB4997] text-[#FB4997]' : 'border-transparent text-[#151875]'}`} id="Sofa-tab" onClick={() => setActiveTab('Sofa')} type="button" role="tab" aria-controls="Sofa" aria-selected={activeTab === 'Sofa'}>Sofa Colletion</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className={`${activeTab === 'WoodChair' ? 'block' : 'hidden'}`} id="WoodChair" role="tabpanel" aria-labelledby="WoodChair-tab">
                            <div className="flex flex-wrap items-center justify-around mx-[10px] lg:mx-0">
                                <div className="lg:w-[40%] mt-5 lg:mt-0">
                                    <h3 className='font-jose font-bold text-[25px] lg:text-[35px] text-[#151875]'>20% Discount Of All Products</h3>
                                    <h4 className='font-jose font-normal text-[18px] lg:text-[21px] text-[#FB2E86] my-5'>Eams Sofa Compact</h4>
                                    <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex flex-wrap justify-between pt-5 pb-7">
                                        <div className="">
                                            <div className="flex items-center pb-[10px]">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Material expose like metals</p>
                                            </div>
                                            <div className="flex items-center">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Simple neutral colours.</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="flex items-center pb-[10px]">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Clear lines and geomatric figures</p>
                                            </div>
                                            <div className="flex items-center">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='font-jose font-normal text-[17px] text-[#fff] px-[48px] py-[20px] bg-[#FB2E86]'>Shop Now</button>
                                </div>
                                <div className="order-first lg:order-last">
                                    <img src={discount} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'PlasticChair' ? 'block' : 'hidden'}`} id="PlasticChair" role="tabpanel" aria-labelledby="PlasticChair-tab">
                            <div className="flex flex-wrap items-center justify-around mx-[10px] lg:mx-0">
                                <div className="lg:w-[40%] mt-5 lg:mt-0">
                                    <h3 className='font-jose font-bold text-[25px] lg:text-[35px] text-[#151875]'>40% Discount Of All Products</h3>
                                    <h4 className='font-jose font-normal text-[18px] lg:text-[21px] text-[#FB2E86] my-5'>Eams Sofa Compact</h4>
                                    <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex flex-wrap justify-between pt-5 pb-7">
                                        <div className="">
                                            <div className="flex items-center pb-[10px]">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Material expose like metals</p>
                                            </div>
                                            <div className="flex items-center">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Simple neutral colours.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='font-jose font-normal text-[17px] text-[#fff] px-[48px] py-[20px] bg-[#FB2E86]'>Shop Now</button>
                                </div>
                                <div className="order-first lg:order-last">
                                    <img src={discount3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'Sofa' ? 'block' : 'hidden'}`} id="Sofa" role="tabpanel" aria-labelledby="Sofa-tab">
                            <div className="flex flex-wrap items-center justify-around mx-[10px] lg:mx-0">
                                <div className="lg:w-[40%] mt-5 lg:mt-0">
                                    <h3 className='font-jose font-bold text-[25px] lg:text-[35px] text-[#151875]'>50% Discount Of All Products</h3>
                                    <h4 className='font-jose font-normal text-[18px] lg:text-[21px] text-[#FB2E86] my-5'>Eams Sofa Compact</h4>
                                    <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                    <div className="flex flex-wrap justify-between pt-5 pb-7">
                                        <div className="">
                                            <div className="flex items-center pb-[10px]">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Material expose like metals</p>
                                            </div>
                                            <div className="flex items-center">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Simple neutral colours.</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="flex items-center pb-[10px]">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Clear lines and geomatric figures</p>
                                            </div>
                                            <div className="flex items-center">
                                                <IoMdCheckmark className='text-[#7569B2]' />
                                                <p className='font-lato font-normal text-[14px] lg:text-[17px] text-[#B7BACB] pl-3'>Material expose like metals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='font-jose font-normal text-[17px] text-[#fff] px-[48px] py-[20px] bg-[#FB2E86]'>Shop Now</button>
                                </div>
                                <div className="order-first lg:order-last">
                                    <img src={discount2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DiscountItem