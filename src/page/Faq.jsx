import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import Sponser from "../components/Sponser"

const Faq = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='FAQ' pname='Faq' home='Home' page='Page' />
            <Container className='my-10 flex justify-between'>
                <div className="">
                    <h4 className="font-jose font-bold text-[36px] text-[#1D3178] leading-[30px]">Generel Information</h4>
                    <div className="w-[500px] mt-14">
                        <h5 className="font-jose font-bold text-[17px] text-[#1D3178] leading-[30px]">Eu dictumst cum at sed euismood condimentum?</h5>
                        <p className="font-jose font-normal text-[16px] text-[#A1ABCC] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div className="w-[500px] my-10">
                        <h5 className="font-jose font-bold text-[17px] text-[#1D3178] leading-[30px]">Magna bibendum est fermentum eros.</h5>
                        <p className="font-jose font-normal text-[16px] text-[#A1ABCC] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div className="w-[500px]">
                        <h5 className="font-jose font-bold text-[17px] text-[#1D3178] leading-[30px]">Odio muskana hak eris conseekin sceleton?</h5>
                        <p className="font-jose font-normal text-[16px] text-[#A1ABCC] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div className="w-[500px] mt-10">
                        <h5 className="font-jose font-bold text-[17px] text-[#1D3178] leading-[30px]">Elit id blandit sabara boi velit gua mara?</h5>
                        <p className="font-jose font-normal text-[16px] text-[#A1ABCC] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                </div>
                <div className="w-[566px] bg-[#F8F8FD] p-[46px]">
                    <h4 className="font-jose font-bold text-[24px] text-[#1D3178] leading-[30px] mb-20">Ask a Question</h4>
                    <div className="mt-10">
                        <div className="flex justify-between">
                            <input type="text" placeholder="Your Name*" className="w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                        </div>
                        <div className="my-10">
                            <input type="text" placeholder="Subject*" className="w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" />
                        </div>
                        <div className="">
                            <textarea id="message" rows="4" className="block p-2.5 w-full border-[2px] border-[#8A8FB9] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato font-lato font-normal placeholder:font-normal placeholder:text-[15px] text-[16px] placeholder:text-[#8A8FB9] text-[#000]" placeholder="Type Your Messege*"></textarea>
                        </div>
                        <button className="font-jose font-normal text-[16px] text-[#fff] py-[10px] px-10 border bg-[#FB2E86] rounded-md mt-7">Send Mail</button>
                    </div>
                </div>
            </Container>
            <Sponser />
        </section>
    )
}

export default Faq