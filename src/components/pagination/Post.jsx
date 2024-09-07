/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import LatestProreusable from "../reusable/LatestProreusable"
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ListIconreusable from "../reusable/ListIconreusable"



const Post = ({ allpage, categoryFilter, multi }) => {

    let [filter, setFilter] = useState([])
    let [count, setCount] = useState(true)

    useEffect(() => {
        let showFilter = categoryFilter.slice(0, 5)
        setFilter(showFilter)
    }, [categoryFilter])

    let handelShow = () => {
        setFilter(categoryFilter)
        setCount(false)
    }

    let handelHide = () => {
        setCount(true)
        let showFilter = categoryFilter.slice(0, 5)
        setFilter(showFilter)
    }


    return (
        <div className="w-full">
            {categoryFilter.length > 0 ? (
                <div>
                    <div className="flex flex-wrap lg:gap-x-4 gap-x-2 mx-[10px]">
                        {filter.map((item) => (
                            <div className="group my-[15px] lg:w-[235px] md:w-[24%] sm:w-[32%] w-[48%]" key={item.id}>
                                <div className="relative p-[15px] bg-[#ccc9c9] group-hover:bg-[#EBF4F3] ease-in-out duration-500 h-[235px]">
                                    <Link to={`/Product/${item.id}`}>
                                        <img src={item.images} alt={item.title} className="h-[200px] w-[200px]" />
                                    </Link>
                                    <LatestProreusable />
                                </div>
                                <div className="text-center mt-[18px]">
                                    <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                                    <div className="flex justify-center items-center">
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center">
                                        <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {count && categoryFilter.length > 5 ? (
                        <h6 onClick={handelShow} className="font-jose font-normal underline text-[14px] text-[#151875] cursor-pointer">Show All</h6>
                    ) : (
                        <h6 onClick={handelHide} className="font-jose font-normal underline text-[14px] text-[#151875] cursor-pointer">Hide</h6>
                    )}
                </div>
            ) : (
                multi === "activeMulti" ? (
                    <div className="">
                        {allpage.map((item) => (
                            <>
                                <div className="flex justify-between my-5">
                                    <div className="relative lg:p-[15px] bg-[#ccc9c9] group-hover:bg-[#EBF4F3] ease-in-out duration-500 lg:h-[235px]">
                                        <Link to={`/Product/${item.id}`}>
                                            <img src={item.images} alt={item.title} className="h-[200px] lg:w-[200px]" />
                                        </Link>
                                        <LatestProreusable />
                                    </div>
                                    <div className="w-[70%]">
                                        <div className="">
                                            <div className="flex items-center">
                                                <h3 className="font-jose font-bold text-[20px] text-[#111C85]">{item.title}</h3>
                                                <GoDotFill className="text-[#DE9034]" />
                                                <GoDotFill className="text-[#EC42A2]" />
                                                <GoDotFill className="text-[#8568FF]" />
                                            </div>
                                            <div className="flex items-center py-3">
                                                <p className="font-jose font-normal text-[14px] text-[#111C85]">${item.price}</p>
                                                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">${item.price}</p>
                                                <div className="flex items-center">
                                                    <FaStar className="mx-1" />
                                                    <FaStar className="mx-1" />
                                                    <FaStar className="mx-1" />
                                                    <FaStar className="mx-1" />
                                                    <FaStar className="mx-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full pb-7">
                                            <p className="font-lato font-normal text-[18px] text-[#9295AA]">{item.description}</p>
                                        </div>
                                        <ListIconreusable />
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                ) : (
                    <div className="flex flex-wrap lg:gap-x-4 gap-x-2 mx-[10px]">
                        {allpage.map((item) => (
                            <div className="group my-[15px] lg:w-[235px] md:w-[24%] sm:w-[32%] w-[48%]" key={item.id}>
                                <div className="relative lg:p-[15px] bg-[#ccc9c9] group-hover:bg-[#EBF4F3] ease-in-out duration-500 lg:h-[235px]">
                                    <Link to={`/Product/${item.id}`}>
                                        <img src={item.images} alt={item.title} className="h-[200px] lg:w-[200px]" />
                                    </Link>
                                    <LatestProreusable />
                                </div>
                                <div className="text-center mt-[18px]">
                                    <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                                    <div className="flex justify-center items-center">
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center">
                                        <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>

    )
}

export default Post