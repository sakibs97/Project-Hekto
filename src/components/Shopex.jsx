import Container from "./Container"
import hours from "../assets/shopex/24hours.png"
import cashback from "../assets/shopex/cashback.png"
import delivery from "../assets/shopex/free-delivery.png"
import premium from "../assets/shopex/premium.png"

const Shopex = () => {
    return (
        <section>
            <Container className=''>
                <div className="text-center">
                    <h2 className="font-jose font-bold text-[30px] lg:text-[40px] text-[#1A0B5B]">What Shopex Offer!</h2>
                </div>
                <div className="flex flex-wrap justify-evenly items-center lg:my-10 my-5">
                    <div className="my-3 text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                        <div className="flex justify-center">
                            <img src={delivery} alt="delivery" />
                        </div>
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                        <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="my-3 text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                        <div className="flex justify-center">
                            <img src={cashback} alt="cashback" />
                        </div>
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                        <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="my-3 text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                        <div className="flex justify-center">
                            <img src={premium} alt="premium" />
                        </div>
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                        <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="my-3 text-center border-[2px] w-[270px] border-[#fff] py-[45px] px-[25px] drop-shadow-lg">
                        <div className="flex justify-center">
                            <img src={hours} alt="hours" />
                        </div>
                        <h4 className="font-jose font-semibold text-[22px] text-[#151875] py-[20px]">24/7 Support</h4>
                        <p className="font-lato font-bold text-[16px] text-[rgb(26,11,91,30%)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Shopex