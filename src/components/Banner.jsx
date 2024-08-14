import banner from '../assets/banner.png'
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section>
            <div className="slider-container lg:my-10 my-5 z-100">
                <Slider {...settings}>
                    <div className="">
                        <img src={banner} className='w-full z-0' alt="banner" />
                    </div>
                    <div className="">
                        <img src={banner} className='w-full z-0' alt="banner" />
                    </div>
                    <div className="">
                        <img src={banner} className='w-full z-0' alt="bann" />
                    </div>
                </Slider>
            </div>

        </section>
    )
}

export default Banner