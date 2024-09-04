import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { productIncrement, productDecrement, removeProduct } from "../components/slice/productSlice";


const Cart = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => state.product.cartItem)


    const { totalPrice, totalQuantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity += item.qun
        return acc
    }, { totalPrice: 0, totalQuantity: 0 })


    return (
        <section>
            <Bannerreusable headline='Shopping Cart' pname='Shopping Cart' home='Home' page='Page' />
            <Container className='my-10 flex flex-col lg:flex-row justify-between'>
                <div className="lg:w-[70%] w-full overflow-x-auto px-[10px]">
                    <table className="w-full">
                        <TableHead>
                            <TableCell padding="none"><h6 className="p-[10px] font-jose font-bold text-[16px] md:text-[20px] text-[#1D3178]">Product</h6></TableCell>
                            <TableCell padding="none"><h6 className="p-[10px] font-jose font-bold text-[16px] md:text-[20px] text-[#1D3178]">Price</h6></TableCell>
                            <TableCell padding="none"><h6 className="p-[10px] font-jose font-bold text-[16px] md:text-[20px] text-[#1D3178]">Quantity</h6></TableCell>
                            <TableCell padding="none"><h6 className="p-[10px] font-jose font-bold text-[16px] md:text-[20px] text-[#1D3178]">Total</h6></TableCell>
                        </TableHead>
                        {data.map((item, index) => (
                            <>
                                <TableBody>
                                    <TableRow>
                                        <TableCell padding="none" >
                                            <div className="flex items-center p-2 ">
                                                <div className="relative">
                                                    <img src={item.images} alt="" className="w-[40px] h-[40px] lg:w-[100px] lg:h-[100px]" />
                                                    <div className="absolute top-[-6px] right-[-7px]" onClick={() => dispatch(removeProduct(index))}>
                                                        <GoXCircleFill className="hover:text-[#FB2E86]" />
                                                    </div>
                                                </div>
                                                <div className="pl-[10px] md:pl-[20px]">
                                                    <h6 className="font-jose font-normal text-[12px] md:text-[14px] text-left text-[#000000] lg:w-[200px] w-[100px]">{item.title}</h6>
                                                    <div className="flex items-center">
                                                        <p className="font-jose font-normal text-[10px] md:text-[12px] text-[#A1A8C1]">Color:</p>
                                                        <p className="font-jose font-normal text-[12px] md:text-[14px] text-[#A1A8C1]">Brown</p>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <p className="font-jose font-normal text-[10px] md:text-[12px] text-[#A1A8C1]">Size:</p>
                                                        <p className="font-jose font-normal text-[12px] md:text-[14px] text-[#A1A8C1]">XL</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell padding="none" text-align="center">
                                            <h6 className="p-2 font-jose font-normal text-[12px] md:text-[14px] text-[#15245E]">${item.price}</h6>
                                        </TableCell>
                                        <TableCell padding="none" text-align="center">
                                            <p className="m-2 border bg-[#F0EFF2] text-center font-jose font-bold text-[10px] md:text-[12px] lg:text-[14px] text-[#FB2E86] w-[50px] md:w-[55px] lg:w-[70px] flex justify-between items-center ">
                                                <span className="py-[5px] px-[4px] bg-[#df6198] text-[#fff] cursor-pointer" onClick={() => dispatch(productDecrement(index))}><FaMinus />
                                                </span>{item.qun}
                                                <span className="py-[5px] px-[4px] bg-[#df6198] text-[#fff] cursor-pointer" onClick={() => dispatch(productIncrement(index))}><FaPlus />
                                                </span>
                                            </p>
                                        </TableCell>
                                        <TableCell className="lg:w-[150px]" padding="none">
                                            <h6 className="p-2 font-jose font-normal text-[12px] md:text-[14px] text-[#15245E]">${item.price * item.qun}</h6>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </>
                        ))}
                    </table>
                    <div className="w-full flex md:flex-row justify-between items-center mt-10">
                        <Link to='/shop' className="font-jose font-semibold text-[14px] md:text-[16px] text-[#fff] py-[10px] px-[20px] border border-[#FB2E86] bg-[#FB2E86] rounded-md mb-4 md:mb-0">Buy More</Link>
                        <Link to='/g'><button className="font-jose font-semibold text-[14px] md:text-[16px] text-[#fff] py-[10px] px-[20px] border border-[#FB2E86] bg-[#FB2E86] rounded-md">Clear Cart</button></Link>
                    </div>
                </div>
                <div className="lg:w-[25%] w-full mt-10 lg:mt-0">
                    <h4 className="font-jose font-bold text-[18px] md:text-[20px] text-[#1D3178] mt-[16px] mb-10 text-center">Cart Totals</h4>
                    <div className="p-[20px] md:p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md mx-[10px] lg:mx-0">
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[16px] md:text-[18px] text-[#1D3178]">Subtotals:</h6>
                            <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#15245E]">${totalPrice}</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[16px] md:text-[18px] text-[#1D3178]">Total Quntity:</h6>
                            <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#15245E]">{totalQuantity}</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[16px] md:text-[18px] text-[#1D3178]">Totals:</h6>
                            <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#15245E]">${totalPrice}</p>
                        </div>

                    </div>
                    <h4 className="font-jose font-bold text-[18px] md:text-[20px] text-[#1D3178] mt-[16px] py-7 text-center">Calculate Shipping</h4>
                    <div className="p-[20px] md:p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md mx-[10px] lg:mx-0">
                        <div className="border-b-[2px] border-[#C7CEE4]">
                            <input type="text" placeholder="Bangladesh" className="font-jose font-semibold text-[14px] md:text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <div className="border-b-[2px] border-[#C7CEE4] my-[20px] md:my-[30px]">
                            <input type="text" placeholder="Mirpur Dhaka - 1200" className="font-jose font-semibold text-[14px] md:text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <div className="border-b-[2px] border-[#C7CEE4]">
                            <input type="text" placeholder="Postal Code" className="font-jose font-semibold text-[14px] md:text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[12px] md:placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <Link to="/shipping"><button className="font-jose font-semibold text-[14px] md:text-[16px] text-[#fff] py-[10px] md:py-[12px] px-[20px] md:px-[24px] border border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">Calculate Shipping</button></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cart
