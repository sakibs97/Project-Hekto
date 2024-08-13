import Container from "./Container"
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Prodescription = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <section className="bg-[#F9F8FE] py-10">
            <Container>
                <div className="">
                    <div className="mb-4">
                        <ul className="flex justify-between flex-wrap -mb-px font-medium text-center w-[50%]" id="default-tab" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-1 border-b-2 font-jose font-semibold text-[24px] text-[#151875] ${activeTab === 'description' ? 'border-[#151875]' : 'border-transparent'}`} id="description-tab" onClick={() => setActiveTab('description')} type="button" role="tab" aria-controls="description" aria-selected={activeTab === 'description'}>Description</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-1 border-b-2 font-jose font-semibold text-[24px] text-[#151875] ${activeTab === 'additional' ? 'border-[#151875] ' : 'border-transparent'}`} id="additional-tab" onClick={() => setActiveTab('additional')} type="button" role="tab" aria-controls="additional" aria-selected={activeTab === 'additional'}>Additional Info</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-1 border-b-2 font-jose font-semibold text-[24px] text-[#151875] ${activeTab === 'reviews' ? 'border-[#151875] ' : 'border-transparent'}`} id="reviews-tab" onClick={() => setActiveTab('reviews')} type="button" role="tab" aria-controls="reviews" aria-selected={activeTab === 'reviews'}>Reviews</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className={`inline-block p-1 border-b-2 font-jose font-semibold text-[24px] text-[#151875] ${activeTab === 'video' ? 'border-[#151875]' : 'border-transparent'}`} id="video-tab" onClick={() => setActiveTab('video')} type="button" role="tab" aria-controls="video" aria-selected={activeTab === 'video'}>Video</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content">
                        <div className={`${activeTab === 'description' ? 'block' : 'hidden'}`} id="description" role="tabpanel" aria-labelledby="description-tab">
                            <div className="mt-10">
                                <h5 className="font-jose font-semibold text-[22px] text-[#151875]">Varius tempor.</h5>
                                <p className="font-jose font-semibold text-[16px] text-[#A9ACC6] mt-4 mb-7">
                                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                                </p>
                                <h5 className="font-jose font-semibold text-[22px] text-[#151875] ">More details</h5>
                                <div className="flex items-center mt-4 mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-jose font-semibold text-[16px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-jose font-semibold text-[16px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-jose font-semibold text-[16px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                                <div className="flex items-center mb-3">
                                    <FaArrowRight className="text-[#2F1AC4] mr-2" />
                                    <p className="font-jose font-semibold text-[16px] text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${activeTab === 'additional' ? 'block' : 'hidden'}`} id="additional" role="tabpanel" aria-labelledby="additional-tab">
                            <div className="mt-10">
                                <p className="font-jose font-normal text-[#FB4997]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non unde laboriosam minima cum doloremque inventore debitis quibusdam corrupti perferendis rem quae, odit laborum repudiandae harum deserunt corporis! Tenetur quae ab omnis accusantium sint. A vitae nisi ad nemo necessitatibus eius sit corrupti repudiandae ipsam alias ex reiciendis, illo vero!

                                </p>
                                <p className="font-jose font-normal text-[#2F1AC4] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non unde laboriosam minima cum doloremque inventore debitis quibusdam corrupti perferendis rem quae, odit laborum repudiandae harum deserunt corporis! Tenetur quae ab omnis accusantium sint. A vitae nisi ad nemo necessitatibus eius sit corrupti repudiandae ipsam alias ex reiciendis, illo vero!
                                </p>
                            </div>
                        </div>
                        <div className={`${activeTab === 'reviews' ? 'block' : 'hidden'}`} id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="mt-10">
                                <p className="font-lato font-normal text-[#2F1AC4]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum quas dicta, optio animi consequuntur facilis placeat sed, esse magni, aperiam laborum possimus laboriosam debitis rem alias sit. Cum laborum, omnis asperiores quasi explicabo quos eos saepe assumenda ullam reprehenderit eaque eum expedita perferendis unde pariatur molestias corrupti! Accusantium tenetur placeat fuga ad quisquam repudiandae eveniet sed fugiat nemo asperiores neque hic accusamus maxime quasi quas facilis aliquid saepe, culpa eaque doloribus reprehenderit cupiditate qui. Ullam placeat illo perspiciatis, quo maxime assumenda dicta labore tempora fugiat laborum facilis autem asperiores incidunt rem ipsa explicabo iste saepe expedita itaque voluptatum. Ipsum.</p>
                            </div>
                        </div>
                        <div className={`${activeTab === 'video' ? 'block' : 'hidden'}`} id="video" role="tabpanel" aria-labelledby="video-tab">
                            <p className="font-lato font-normal text-[18px] text-[#FB4997]">Please Wait....</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Prodescription