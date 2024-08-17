import Container from "./Container"
import Bannerreusable from "./reusable/Bannerreusable";
import PageSortBy from "./PageSortBy";
import PageCategorie from "./PageCategorie";
import { useContext, useState } from "react";
import { ApiData } from "./ContextApi";
import Post from "./pagination/Post";
import PaginationArea from "./pagination/PaginationArea";

const ShopGridDefault = () => {
    let data = useContext(ApiData)
    let [pageStart, setPageStart] = useState(1)
    let [perPage, setPerPage] = useState(12)

    let lastPage = pageStart * perPage
    let firstPage = lastPage - perPage

    let allpage = data.slice(firstPage, lastPage)

    let pageNumber = []

    for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
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





    return (
        <section>
            <Bannerreusable headline='Shop Grid Default' pname='Shop Grid Default' home='Home' page='Pages' />
            <Container className=''>
                <PageSortBy />
                <div className="flex justify-between my-7">
                    <PageCategorie />
                    <Post allpage={allpage} />
                </div >
                <PaginationArea pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} />

            </Container>
        </section>
    )
}

export default ShopGridDefault