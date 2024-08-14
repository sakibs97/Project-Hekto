import { Link } from "react-router-dom";
import Container from "../components/Container";
import Bannerreusable from "../components/reusable/Bannerreusable";
import Sponser from "../components/Sponser";

const Login = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline="My Account" pname="My Account" home="Home" page="Page" />
            <Container>
                <div className="mx-auto w-[90%] sm:w-[430px] mb-10">
                    <h4 className="font-jose font-bold text-[24px] sm:text-[32px] text-[#000] text-center">
                        Login
                    </h4>
                    <p className="font-lato font-normal text-[15px] sm:text-[17px] text-[#9096B2] text-center mb-3">
                        Please login using account detail below.
                    </p>
                    <div className="w-[100%] sm:w-[430px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="my-4 sm:my-6 w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-[#C2C5E1] placeholder:font-lato placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:text-[#9096B2] font-lato font-normal text-[14px] sm:text-[16px] text-[#000]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-[#C2C5E1] placeholder:font-lato placeholder:font-normal placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:text-[#9096B2] font-lato font-normal text-[14px] sm:text-[16px] text-[#000]"
                        />
                    </div>
                    <p className="font-lato font-normal text-[15px] sm:text-[17px] text-[#9096B2] pt-[10px] sm:pt-[15px]">
                        Forgot your password?
                    </p>
                    <Link to="hh">
                        <button className="my-4 sm:my-5 font-lato font-bold text-[15px] sm:text-[17px] text-[#fff] py-[8px] sm:py-[10px] w-full border-[1px] border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">
                            Sign In
                        </button>
                    </Link>
                    <div className="flex flex-col sm:flex-row items-center sm:justify-center">
                        <p className="font-lato font-normal text-[15px] sm:text-[17px] text-[#9096B2]">
                            Don’t have an Account?
                        </p>
                        <Link
                            to="/Shipping-Details"
                            className="font-lato font-normal text-[15px] sm:text-[17px] text-[#9096B2] hover:text-[#FB2E86] ease-in-out duration-500 ml-0 sm:ml-2 mt-2 sm:mt-0">
                            Create account
                        </Link>
                    </div>
                </div>
            </Container>
            <Sponser />
        </section>
    );
};

export default Login;
