import Container from "./Container"
import Bannerreusable from "./reusable/Bannerreusable";
import PageSortBy from "./PageSortBy";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ApiData } from "./ContextApi";
import Post from "./pagination/Post";
import PaginationArea from "./pagination/PaginationArea";

const ShopGridDefault = () => {
    let data = useContext(ApiData)
    let [cateShow, setCateShow] = useState(false)
    let [pageStart, setPageStart] = useState(1)
    let [perPage, setPerPage] = useState(12)
    let [category, setCategory] = useState([])
    let [categoryFilter, setCategoryFilter] = useState([])

    let lastPage = pageStart * perPage
    let firstPage = lastPage - perPage

    let allpage = data.slice(firstPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(categoryFilter.length > 0 ? categoryFilter : data.length / perPage); i++) {
        pageNumber.push(i)
    }
    let paginate = (pageNumber) => {
        setPageStart(pageNumber + 1)
    }
    let next = () => {
        if (pageStart < pageNumber.length) {
            setPageStart((state) => state + 1)
        }
    }

    let prev = () => {
        if (pageStart > 1) {
            setPageStart((state) => state - 1)
        }
    }

    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category.name))])
    }, [data])

    let handelCategory = (catItem) => {
        let cateFilter = data.filter((item) => item.category.name == catItem)
        setCategoryFilter(cateFilter)
    }

    let handelCateShow = () => {
        (setCateShow(!cateShow))
    }




    return (
        <section>
            <Bannerreusable headline='Shop Grid Default' pname='Shop Grid Default' home='Home' page='Pages' />
            <Container className=''>
                <PageSortBy />

                <div className="flex justify-between my-7 relative">
                    <div className='lg:w-[20%] '>
                        <div className={` absolute ${cateShow == true ? 'top-[0px] left-0' : 'left-[-400px] top-[0px]'}`}>
                            <div className="">
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Categories</h4>
                                <ul>
                                    {category.map((item) => (
                                        <>
                                            <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2" onClick={() => handelCategory(item)}><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#FFDBF1] bg-[#FFDBF1] checked:bg-[#FF3EB2]" />{item}</li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                            <div className="my-8">
                                <h4 className="font-jose font-bold lg:text-[20px] md:text-[18px] text-[15px] text-[#151875] underline decoration-[#000] decoration-2 underline-offset-[5px]">Product Brand</h4>
                                <ul>
                                    <li className="font-lato font-normal lg:text-[16px] md:text-[14px] text-[12px] text-[#7E81A2] my-2"><input type="checkbox" name="" id="" className="lg:mr-[10px] mr-[5px] border-[#E5E0FC] bg-[#E5E0FC] checked:bg-[#603EFF]" />Coaster Furniture</li>
                                </ul>
                            </div>
                            <div className="">
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
                    <div className="my-3 lg:hidden" onClick={handelCateShow}>
                        {cateShow ? <p className="font-jose font-bold text-[20px] text-[#E248FF] cursor-pointer">Sort by Categories</p> : <p className="font-jose font-bold text-[20px] text-[#151875] cursor-pointer">Sort by Categories</p>}
                    </div>
                    <Post allpage={allpage} categoryFilter={categoryFilter} />
                </div >
                <PaginationArea pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} />

            </Container>
        </section >
    )
}

export default ShopGridDefault