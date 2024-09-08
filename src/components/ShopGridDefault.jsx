import Container from "./Container";
import Bannerreusable from "./reusable/Bannerreusable";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
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
    let [multi, setMulti] = useState("")
    let [priceShow, setPriceShow] = useState(false)
    let [priceLow, setPriceLow] = useState()
    let [priceHigh, setPriceHigh] = useState()
    let [priceDisplay, setPriceDisplay] = useState()


    let lastPage = pageStart * perPage;
    let firstPage = lastPage - perPage;

    let allpage;
    if (priceDisplay && priceDisplay.length > 0) {
        allpage = priceDisplay.slice(firstPage, lastPage);
    } else if (categoryFilter.length > 0) {
        allpage = categoryFilter.slice(firstPage, lastPage);
    } else {
        allpage = data.slice(firstPage, lastPage);
    }



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

    let handelList = () => {
        setMulti("activeMulti")
    }

    let handleShowPage = (e) => {
        setPerPage(e.target.value)
    }
    let handleOneToTen = (value) => {
        let priceFilter = data.filter((item) => item.price > value.low && item.price < value.high)
        setPriceDisplay(priceFilter);

    }

    return (
        <section>
            <Bannerreusable headline="Shop Grid Default" pname="Shop Grid Default" home="Home" page="Pages" />
            <Container>
                <div className="px-2.5 flex flex-wrap justify-between items-center">
                    <div className="lg:w-[40%] md:w-[40%] w-full">
                        <h4 className="font-jose font-bold text-[22px] text-[#151875]">Ecommerce Acceories & Fashion item </h4>
                        <p className="font-lato font-normal text-[12px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="lg:w-[45%] md:w-[50%] w-full flex lg:justify-around justify-between items-center">
                        <div className="flex items-center">
                            <label htmlFor="" className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E] lg:pr-2 pr-[5px]">Per Page:</label>
                            <select name="" onChange={handleShowPage} className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] py-1">
                                <option value="6">6</option>
                                <option value="10">10</option>
                                <option selected value="15">15</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        <div className="flex items-center">
                            <p className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E]">Sort By:</p>
                            <form className="lg:pl-2 pl-[5px] items-center">
                                <select id="" className="border-[1px] border-[#E7E6EF] font-lato font-normal text-[#8A8FB9] text-[12px] pt-1 pb-1">
                                    <option selected>Default</option>
                                    <option>Best Match</option>
                                </select>
                            </form>
                        </div>
                        <div className="flex items-center">
                            <p className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#3F509E] pr-2">View:</p>
                            <div className="" onClick={handelList}>
                                <FaList className="text-[#151875] mr-2 active:bg-black cursor-pointer" />
                            </div>
                            <div className="" onClick={() => setMulti("")}>
                                <IoGridSharp className="text-[#151875] active:bg-black cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
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

                                <div className="">
                                    <h2 onClick={() => setPriceShow(!priceShow)} className='text-[18px] text-[#292929] font-dm font-bold '>Show Price</h2>
                                    {priceShow &&
                                        <ul>
                                            <li onClick={() => handleOneToTen({ low: 0, high: 36 })}>$0-$9.99</li>

                                            <li onClick={() => handleOneToTen({ low: 40, high: 810 })}>$10-$19.99</li>

                                        </ul>
                                    }
                                </div>
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
                    <div className="my-3 text-center lg:hidden" onClick={handelCateShow}>
                        {cateShow ? (
                            <div className="flex items-center justify-center group">
                                <p className="font-jose font-bold text-[20px] text-[#FB2E86] group-hover:text-[#151875] duration-300 cursor-pointer">Categories</p>
                                <MdKeyboardArrowUp className="group-hover:text-[#151875] text-[#FB2E86] duration-700 h-7 w-7" />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center group">
                                <p className="font-jose font-bold text-[20px] text-[#151875] group-hover:text-[#FB2E86] duration-300 cursor-pointer">Categories</p>
                                <MdKeyboardArrowDown className="group-hover:text-[#FB2E86] duration-700 h-7 w-7" />
                            </div>
                        )}
                    </div>
                    <div className="w-full">
                        <Post allpage={allpage} categoryFilter={categoryFilter} multi={multi} />
                    </div>
                </div>
                <PaginationArea pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} pageStart={pageStart} />
            </Container>
        </section>
    );
};

export default ShopGridDefault;
