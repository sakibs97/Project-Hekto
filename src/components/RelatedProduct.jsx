import related from "../assets/related/related.png"
import related2 from "../assets/related/related2.png"
import related3 from "../assets/related/related3.png"
import related4 from "../assets/related/related4.png"
import Container from "./Container"
import LatestProreusable from "./reusable/LatestProreusable"
import RelatedNamereusable from "./reusable/RelatedNamereusable"


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
                        <RelatedNamereusable name='Mens Fashion Wear' price='$43.00' />
                    </div>
                    <div className="">
                        <div className="relative group">
                            <img src={related3} alt="related" />
                            <LatestProreusable />
                        </div>
                        <RelatedNamereusable name='Women’s Fashion' price='$69.00' />
                    </div>
                    <div className="">
                        <div className="relative group">
                            <img src={related2} alt="related" />
                            <LatestProreusable />
                        </div>
                        <RelatedNamereusable name='Wolx Dummy Fashion' price='$67.00' />
                    </div>
                    <div className="">
                        <div className="relative group">
                            <img src={related} alt="related" />
                            <LatestProreusable />
                        </div>
                        <RelatedNamereusable name='Top Wall Digital Clock' price='$51.00' />
                    </div>
                    <div className="">
                        <div className="relative group">
                            <img src={related4} alt="related" />
                            <LatestProreusable />
                        </div>
                        <RelatedNamereusable name='Mens Fashion Wear' price='$45.00' />
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default RelatedProduct