import { Link, useNavigate } from "react-router-dom";
import Hekto from "../assets/Hekto.png";
import Container from "./Container";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { ApiData } from "./ContextApi";

const Navbar = () => {
    let navigate = useNavigate();
    let [show, setShow] = useState(false);
    let [activeTab, setActiveTab] = useState(null);
    let info = useContext(ApiData);
    let [searchChange, setSearchChange] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    let [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const handelshow = () => {
        setShow(!show);
    };

    const handleSearch = (e) => {
        setSearchChange(e.target.value);
        if (e.target.value === "") {
            setSearchFilter([]);
        } else {
            let searchFind = info.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchFilter(searchFind);
        }
    };

    const handleKeyDown = (e) => {
        if (searchFilter.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedItemIndex((prevIndex) =>
                Math.min(prevIndex + 1, searchFilter.length - 1)
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, -1));
        } else if (e.key === "Enter" && selectedItemIndex !== -1) {
            handleSingleP(searchFilter[selectedItemIndex].id);
        }
    };

    const handleSingleP = (id) => {
        navigate(`/product/${id}`);
        setSearchChange("");
        setSearchFilter([]);
    };

    return (
        <section className="pt-[15px] mx-[10px] z-[1000]">

            <Container>
                <div className="flex justify-between items-center">
                    <div className="lg:w-[10%]">
                        <Link to="/">
                            <img src={Hekto} alt="Hekto" />
                        </Link>
                    </div>
                    <div className="flex justify-between items-center lg:w-[80%]">
                        <ul
                            className={`lg:flex justify-between lg:w-[50%] text-center lg:static z-50 lg:bg-none absolute ${show
                                ? "bg-[rgba(231,231,231,0.88)] w-full top-[145px] left-0 ease-in-out duration-700 py-2"
                                : "left-[-400px] top-[140px] ease-in-out duration-700"
                                }`}
                        >
                            <li
                                className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === "Home" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                                    }`}
                                onClick={() => setActiveTab("Home")}
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === "shop" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                                    }`}
                                onClick={() => setActiveTab("shop")}
                            >
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li
                                className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === "blog" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                                    }`}
                                onClick={() => setActiveTab("blog")}
                            >
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="font-lato font-normal text-[16px] text-[#0D0E43] hover:text-[#FB2E86]">
                                Products
                            </li>
                            <div className="relative group">
                                <li className="font-lato font-normal text-[16px] text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer">
                                    Page
                                </li>
                                <ul className="absolute top-0 lg:top-6 lg:-right-6 right-0 opacity-0 group-hover:opacity-100 ease-in-out duration-500 bg-[rgb(22,22,22,10%)] pb-1 px-5 rounded-b-xl">
                                    <Link to="/About-Us">
                                        <li className="font-lato font-normal text-[#0D0E43] py-2 text-[14px] hover:text-[#FB2E86]">
                                            About US
                                        </li>
                                    </Link>
                                    <Link to="/faq">
                                        <li className="font-lato font-normal text-[#0D0E43] text-[14px] hover:text-[#FB2E86]">
                                            FAQ
                                        </li>
                                    </Link>
                                    <Link to="/*">
                                        <li className="font-lato font-normal text-[#0D0E43] py-2 text-[14px] hover:text-[#FB2E86]">
                                            Category
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                            <li
                                className={`font-lato font-normal text-[16px] hover:text-[#FB2E86] ${activeTab === "contact" ? "text-[#FB2E86]" : "text-[#0D0E43]"
                                    }`}
                                onClick={() => setActiveTab("contact")}
                            >
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="relative">
                            <input
                                type="search"
                                value={searchChange}
                                onChange={handleSearch}
                                onKeyDown={handleKeyDown}
                                className="border-[1px] border-[#0e0c0c] outline-none w-[200px] lg:w-[260px] h-[38px] p-2 lg:mr-[38px] bg-[#D9D9D9]"
                                placeholder="Search Products"
                            />
                            <div className="absolute top-[50%] translate-y-[-50%] right-[0px] border-[1px] border-[#FB2E86] bg-[#FB2E86] p-[10px]">
                                <FaSearch />
                            </div>
                            {searchFilter.length > 0 && (
                                <div className="absolute z-[50] right-0 w-[200px] lg:w-[300px] h-[500px] overflow-y-scroll">
                                    {searchFilter.map((item, index) => (
                                        <div
                                            key={item.id}
                                            id={`item-${index}`}
                                            onClick={() => handleSingleP(item.id)}
                                            className={`flex bg-[#F5F5F3] py-[10px] px-[10px] ${index === selectedItemIndex
                                                ? "bg-[#F6F5FF] text-[#FB2E86]"
                                                : ""
                                                }`}
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <div className="lg:h-[80px] lg:w-[80px] h-[40px] w-[40px] md:h-[60px] md:w-[60px]">
                                                    <img src={item.images} alt={item.title} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[14px] text-[#262626] font-dm font-bold">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:hidden" onClick={handelshow}>
                        {show ? (
                            <RxCross2 className="h-[30px] w-[30px]" />
                        ) : (
                            <FaBars className="h-[30px] w-[30px]" />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navbar;
