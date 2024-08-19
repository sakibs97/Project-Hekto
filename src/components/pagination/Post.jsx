/* eslint-disable react/prop-types */
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import LatestProreusable from ".././reusable/LatestProreusable"




const Post = ({ allpage, categoryFilter }) => {
    console.log(categoryFilter);


    return (
        <div className="w-[75%] ">
            {categoryFilter.length > 0 ?
                <div className="">
                    <div className="flex flex-wrap lg:gap-x-16 items-center">
                        {categoryFilter.map((item) => (
                            <>
                                <div className="group my-[15px] w-[235px] ">
                                    <div className="relative p-[15px] bg-[#ccc9c9] group-hover:bg-[#EBF4F3] ease-in-out duration-500 h-[235px] ">
                                        <Link to={`/Product/${item.id}`}><img src={item.images} alt={item.title} className="h-[200px] w-[200px]" /></Link>
                                        <LatestProreusable />
                                    </div>
                                    <div className="text-center mt-[18px]">
                                        <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                                        <div className="flex justify-center items-center">
                                            <GoDotFill className="text-[#DE9034]" />
                                            <GoDotFill className="text-[#EC42A2]" />
                                            <GoDotFill className="text-[#8568FF]" />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}.00</p>
                                            <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}.00</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <h6>Hello</h6>
                </div>
                :
                <div className="flex flex-wrap lg:gap-x-16 items-center">
                    {allpage.map((item) => (
                        <>
                            <div className="group my-[15px] w-[235px] ">
                                <div className="relative p-[15px] bg-[#ccc9c9] group-hover:bg-[#EBF4F3] ease-in-out duration-500 h-[235px] ">
                                    <Link to={`/Product/${item.id}`}><img src={item.images} alt={item.title} className="h-[200px] w-[200px]" /></Link>
                                    <LatestProreusable />
                                </div>
                                <div className="text-center mt-[18px]">
                                    <h5 className="font-jose font-bold text-[18px] text-[#151875]">{item.title}</h5>
                                    <div className="flex justify-center items-center">
                                        <GoDotFill className="text-[#DE9034]" />
                                        <GoDotFill className="text-[#EC42A2]" />
                                        <GoDotFill className="text-[#8568FF]" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">${item.price}.00</p>
                                        <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">${item.price}.00</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            }
        </div >
    )
}

export default Post