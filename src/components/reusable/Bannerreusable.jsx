import { Link } from "react-router-dom"
import Container from "../Container"

const Bannerreusable = ({ headline, pname, home, page }) => {
    return (
        <section className="bg-[#F6F5FF] lg:py-[100px] py-[50px] my-10 px-[10px] lg:px-0">
            <Container>
                <div className="">
                    <h2 className="font-jose font-bold text-[30px] lg:text-[36px] text-[#101750]">{headline}</h2>
                    <div className="">
                        <span className="font-lato font-medium text-[14px] lg:text-[16px] text-[#000000]"><Link to="/">{home}</Link> &bull; {page} <span className="font-lato font-medium text-[16px] text-[#FB2E86]">&bull; {pname}</span> </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Bannerreusable