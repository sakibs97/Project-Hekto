import Container from "./Container";
import Bannerreusable from "./reusable/Bannerreusable";
import PageSortBy from "./PageSortBy";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ApiData } from "./ContextApi";
import Post from "./pagination/Post";
import PaginationArea from "./pagination/PaginationArea";

const ShopGridDefault = () => {
    let data = useContext(ApiData);
    let [cateShow, setCateShow] = useState(false);
    let [pageStart, setPageStart] = useState(1);
    let [perPage, setPerPage] = useState(15);
    let [category, setCategory] = useState([]);
    let [categoryFilter, setCategoryFilter] = useState([]);

    let lastPage = pageStart * perPage;
    let firstPage = lastPage - perPage;

    let allpage = data.slice(firstPage, lastPage);

    let pageNumber = [];

    for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ? categoryFilter : data.length / perPage); i++) {
        pageNumber.push(i);
    }

    let paginate = (pageNumber) => {
        setPageStart(pageNumber + 1);
    };

    let next = () => {
        if (pageStart < pageNumber.length) {
            setPageStart((state) => state + 1);
        }
    };

    let prev = () => {
        if (pageStart > 1) {
            setPageStart((state) => state - 1);
        }
    };

    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category.name))]);
    }, [data]);

    let handelCategory = (catItem) => {
        let cateFilter = data.filter((item) => item.category.name == catItem);
        setCategoryFilter(cateFilter);
    };

    let handelCateShow = () => {
        setCateShow(!cateShow);
    };

    return (
        <section>
            <Bannerreusable headline="Shop Grid Default" pname="Shop Grid Default" home="Home" page="Pages" />
            <Container>
                <PageSortBy />
                <div className="flex flex-col lg:flex-row justify-between my-7 relative">
                    <div className={`lg:w-[20%] w-full lg:static ${cateShow ? "relative" : "lg:block hidden"} flex flex-wrap justify-around items-start`}>
                        <div className="">
                            <div>
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">
                                    Categories
                                </h4>
                                <ul>
                                    {category.map((item) => (
                                        <li
                                            key={item}
                                            className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex items-center"
                                            onClick={() => handelCategory(item)}
                                        >
                                            <input
                                                type="checkbox"
                                                className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="my-8">
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">
                                    Product Brand
                                </h4>
                                <ul>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2">
                                        <input
                                            type="checkbox"
                                            className="lg:mr-[10px] mr-[5px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]"
                                        />
                                        Coaster Furniture
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Rating Item</h4>
                                <ul>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                        <span className="flex items-center">
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                        </span>
                                    </li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                        <span className="flex items-center">
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                        </span>
                                    </li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                        <span className="flex items-center">
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                        </span>
                                    </li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]" />
                                        <span className="flex items-center">
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            <FaStar className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-8">
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Price Filter</h4>
                                <ul>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$0.00 - $150.00</li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$150.00 - $350.00</li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$150.00 - $504.00</li>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />$450.00 +</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                            <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">
                                Rating Item
                            </h4>
                            <ul>
                                {[5, 4, 3].map((stars) => (
                                    <li key={stars} className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2 flex">
                                        <input
                                            type="checkbox"
                                            className="lg:mr-[10px] mr-[5px] border-[#FFF6DA] bg-[#FFF6DA] checked:bg-[#FFCC2E]"
                                        />
                                        <span className="flex items-center">
                                            {[...Array(stars)].map((_, i) => (
                                                <FaStar key={i} className="lg:mx-1 mx-[2px] text-[#FFCC2E]" />
                                            ))}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    {/* <div className="my-8">
                            <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">
                                Price Filter
                            </h4>
                            <ul>
                                {["$0.00 - $150.00", "$150.00 - $350.00", "$350.00 - $504.00", "$450.00 +"].map((priceRange) => (
                                    <li key={priceRange} className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2">
                                        <input
                                            type="checkbox"
                                            className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]"
                                        />
                                        {priceRange}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    <div className="my-3 text-center lg:hidden" onClick={handelCateShow}>
                        {cateShow ? (
                            <p className="font-jose font-bold text-[20px] text-[#FB2E86] cursor-pointer">Sort by Categories -</p>
                        ) : (
                            <p className="font-jose font-bold text-[20px] text-[#151875] hover:text-[#FB2E86] cursor-pointer">Sort by Categories +</p>
                        )}
                    </div>
                    <div className="w-full">
                        <Post allpage={allpage} categoryFilter={categoryFilter} />
                    </div>
                </div>
                <PaginationArea pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} pageStart={pageStart} />
            </Container>
        </section>
    );
};

export default ShopGridDefault;
