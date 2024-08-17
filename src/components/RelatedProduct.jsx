import { FaStar } from "react-icons/fa";
import related4 from "../assets/related/related4.png"
import Container from "./Container"
import LatestProreusable from "./reusable/LatestProreusable"



const RelatedProduct = () => {
    return (
        <section>
            <Container className='my-10'>
                <div className="">
                    <h2 className="font-jose font-bold text-[36px] text-[#101750]">Related Products</h2>
                </div>
                <div className="mt-10 flex justify-between">
                    <div className="">
                        <div className="relative group">
                            <img src={related4} alt="related" />
                            <LatestProreusable />
                        </div>
                        <div className="flex justify-between items-baseline">
                            <div className="">
                                <h4 className="font-jose font-semibold text-[16px] text-[#151875] my-[15px]">{ }</h4>
                                <p className="font-jose font-normal text-[13px] text-[#151875]">{ }</p>
                            </div>
                            <span className="flex items-center">
                                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                                <FaStar className="mx-[2px] text-[#FFCC2E]" />
                            </span>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default RelatedProduct