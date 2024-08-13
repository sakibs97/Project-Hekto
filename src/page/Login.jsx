import { Link } from "react-router-dom"
import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import Sponser from "../components/Sponser"

const Login = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='My Account' pname='My Account' home='Home' page='Page' />
            <Container>
                <div className="mx-auto w-[430px] mb-10">
                    <h4 className="font-jose font-bold text-[32px] text-[#000] text-center">Login</h4>
                    <p className="font-lato font-normal text-[17px] text-[#9096B2] text-center mb-3">Please login using account detail bellow.</p>
                    <div className="w-[430px]">
                        <input type="email" name="" id="" placeholder="Email Address" className="my-6 w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-[#C2C5E1] placeholder:font-lato placeholder:font-normal placeholder:text-[16px] placeholder:text-[#9096B2] font-lato font-normal text-[16px] text-[#000]" />
                        <input type="password" name="" id="" placeholder="Password" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-[#C2C5E1] placeholder:font-lato placeholder:font-normal placeholder:text-[16px] placeholder:text-[#9096B2] font-lato font-normal text-[16px] text-[#000]" />
                    </div>
                    <p className="font-lato font-normal text-[17px] text-[#9096B2] pt-[15px]">Forgot your password?</p>
                    <Link to='hh'><button className="my-5 font-lato font-bold text-[17px] text-[#fff] py-[10px] w-full border-[1px] border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">Sign In</button></Link>
                    <div className="flex items-center">
                        <p className="font-lato font-normal text-[17px] text-[#9096B2]">Don’t have an Account?</p>
                        <Link to="/Shipping-Details" className="font-lato font-normal text-[17px] text-[#9096B2] hover:text-[#FB2E86] ease-in-out duration-500">Create account</Link>
                    </div>
                </div>
            </Container>
            <Sponser />
        </section>
    )
}

export default Login