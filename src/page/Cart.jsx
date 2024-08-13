import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import cart from "../assets/cart.png"
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { Link } from "react-router-dom";


const Cart = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='Shopping Curt' pname='Shopping Curt' home='Home' page='Page' />
            <Container className='my-10 flex justify-between'>
                <div className="w-[70%]">
                    <table className="w-full">
                        <TableHead>
                            <TableCell><h6 className="font-jose font-bold text-[20px] text-[#1D3178]">Product</h6></TableCell>
                            <TableCell><h6 className="font-jose font-bold text-[20px] text-[#1D3178]">Price</h6></TableCell>
                            <TableCell><h6 className="font-jose font-bold text-[20px] text-[#1D3178]">Quantity</h6></TableCell>
                            <TableCell><h6 className="font-jose font-bold text-[20px] text-[#1D3178]">Total</h6></TableCell>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center">
                                        <img src={cart} alt="" />
                                        <div className="pl-[20px]">
                                            <h6 className="font-jose font-normal text-[14px] text-[#000000]">Ut diam consequat</h6>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Color:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">Brown</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Size:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">XL</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">$32.00</h6></TableCell>
                                <TableCell><p className="border bg-[#F0EFF2] font-jose font-normal text-[12px] text-[#BEBFC2] w-[55px] flex justify-between items-center"><span className=" py-[6px] px-[6px] bg-[#E7E7EF]">-</span> 1 <span className=" py-[6px] px-[6px] bg-[#E7E7EF]">+</span></p></TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">£219.00</h6></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center">
                                        <img src={cart} alt="" />
                                        <div className="pl-[20px]">
                                            <h6 className="font-jose font-normal text-[14px] text-[#000000]">Ut diam consequat</h6>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Color:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">Brown</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Size:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">XL</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">$32.00</h6></TableCell>
                                <TableCell><p className="border bg-[#F0EFF2] font-jose font-normal text-[12px] text-[#BEBFC2] w-[55px] flex justify-between items-center"><span className=" py-[6px] px-[6px] bg-[#E7E7EF]">-</span> 1 <span className=" py-[6px] px-[6px] bg-[#E7E7EF]">+</span></p></TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">£219.00</h6></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center">
                                        <img src={cart} alt="" />
                                        <div className="pl-[20px]">
                                            <h6 className="font-jose font-normal text-[14px] text-[#000000]">Ut diam consequat</h6>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Color:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">Brown</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Size:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">XL</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">$32.00</h6></TableCell>
                                <TableCell><p className="border bg-[#F0EFF2] font-jose font-normal text-[12px] text-[#BEBFC2] w-[55px] flex justify-between items-center"><span className=" py-[6px] px-[6px] bg-[#E7E7EF]">-</span> 1 <span className=" py-[6px] px-[6px] bg-[#E7E7EF]">+</span></p></TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">£219.00</h6></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center">
                                        <img src={cart} alt="" />
                                        <div className="pl-[20px]">
                                            <h6 className="font-jose font-normal text-[14px] text-[#000000]">Ut diam consequat</h6>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Color:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">Brown</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Size:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">XL</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">$32.00</h6></TableCell>
                                <TableCell><p className="border bg-[#F0EFF2] font-jose font-normal text-[12px] text-[#BEBFC2] w-[55px] flex justify-between items-center"><span className=" py-[6px] px-[6px] bg-[#E7E7EF]">-</span> 1 <span className=" py-[6px] px-[6px] bg-[#E7E7EF]">+</span></p></TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">£219.00</h6></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center">
                                        <img src={cart} alt="" />
                                        <div className="pl-[20px]">
                                            <h6 className="font-jose font-normal text-[14px] text-[#000000]">Ut diam consequat</h6>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Color:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">Brown</p>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="font-jose font-normal text-[12px] text-[#A1A8C1]">Size:</p>
                                                <p className="font-jose font-normal text-[14px] text-[#A1A8C1]">XL</p>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">$32.00</h6></TableCell>
                                <TableCell><p className="border bg-[#F0EFF2] font-jose font-normal text-[12px] text-[#BEBFC2] w-[55px] flex justify-between items-center"><span className=" py-[6px] px-[6px] bg-[#E7E7EF]">-</span> 1 <span className=" py-[6px] px-[6px] bg-[#E7E7EF]">+</span></p></TableCell>
                                <TableCell><h6 className="font-jose font-normal text-[14px] text-[#15245E]">£219.00</h6></TableCell>
                            </TableRow>
                        </TableBody>
                    </table>

                    <div className="w-full flex justify-between items-center mt-10">
                        <button className="font-jose font-semibold text-[16px] text-[#fff] py-[10px] px-[20px] border border-[#FB2E86] bg-[#FB2E86] rounded-md">Update Curt</button>
                        <Link to='/g'><button className="font-jose font-semibold text-[16px] text-[#fff] py-[10px] px-[20px] border border-[#FB2E86] bg-[#FB2E86] rounded-md">Clear Curt</button></Link>
                    </div>
                </div>
                <div className="w-[25%]">
                    <h4 className="font-jose font-bold text-[20px] text-[#1D3178] mt-[16px] mb-10 text-center">Cart Totals</h4>
                    <div className="p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Subtotals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£219.00</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Totals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£325.00</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" className="checked:bg-[#19D16F] checked:border-[#19D16F] border-[#19D16F]" />
                            <p className="font-lato font-normal text-[12px] text-[#8A91AB] pl-[10px]">Shipping & taxes calculated at checkout</p>
                        </div>
                        {/* <button className="font-lato font-bold text-[14px] text-[#fff] py-[10px] border border-[#19D16F] bg-[#19D16F] w-full text-center rounded-md mt-10">Proceed To Checkout</button> */}
                    </div>
                    <h4 className="font-jose font-bold text-[20px] text-[#1D3178] mt-[16px] py-7 text-center">Calculate Shopping</h4>
                    <div className="p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
                        <div className="border-b-[2px] border-[#C7CEE4]">
                            <input type="text" placeholder="Bangladesh" className="font-jose font-semibold text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <div className="border-b-[2px] border-[#C7CEE4] my-[30px]">
                            <input type="text" placeholder="Mirpur Dhaka - 1200" className="font-jose font-semibold text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <div className="border-b-[2px] border-[#C7CEE4]">
                            <input type="text" placeholder="Postal Code" className="font-jose font-semibold text-[15px] text-[#000] placeholder:font-jose placeholder:font-semibold placeholder:text-[14px] placeholder:text-[#C5CBE3] border-none w-full bg-[#F4F4FC]" />
                        </div>
                        <Link to="/Shipping-Details"><button className="font-jose font-semibold text-[16px] text-[#fff] py-[12px] px-[24px] border border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">Calculate Shiping</button></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cart