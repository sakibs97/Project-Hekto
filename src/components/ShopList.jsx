import Container from "./Container"
import PageSortBy from "./PageSortBy"
import Bannerreusable from "./reusable/Bannerreusable"
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import PageCategorie from "./PageCategorie";
import ListIconreusable from "./reusable/ListIconreusable"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { ApiData } from "./ContextApi";

const ShopList = () => {
    let data = useContext(ApiData)

    return (
        <section>
            <Bannerreusable headline='Shop List' pname='Shop List' home='Home' page='Pages' />
            <Container>
                <PageSortBy />
                <div className="my-7 flex justify-between">
                    <PageCategorie />
                    <div className="w-[75%]">
                        {data.map((item) => (
                            <>
                                <div className="items-center flex justify-between my-5">
                                    <Link to='/Product-Details' className=" w-[20%]">
                                        <img src={item.images} alt={item.title} className="mx-5 my-5 w-[315px] h-[250px]" />
                                    </Link>
                                    <div className="w-[70%]">
                                        <div className="">
                                            <div className="flex items-center">
                                                <h3 className="font-jose font-bold text-[20px] text-[#111C85]">{item.title}</h3>
                                                <GoDotFill className="text-[#DE9034]" />
                                                <GoDotFill className="text-[#EC42A2]" />
                                                <GoDotFill className="text-[#8568FF]" />
                                            </div>
                                            <div className="flex items-center py-3">
                                                <p className="font-jose font-normal text-[14px] text-[#111C85]">${item.price}.00</p>
                                                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through px-3">${item.price}.00</p>
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
                                            <p className="font-lato font-normal text-[18px] text-[#9295AA]">{item.description}</p>
                                        </div>
                                        <ListIconreusable />
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShopList