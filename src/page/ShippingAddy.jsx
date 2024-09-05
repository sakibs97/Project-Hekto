import { Link, useNavigate } from "react-router-dom"
import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set } from "firebase/database";


const ShippingAddy = ({ headline, pname, home, page }) => {
    const auth = getAuth();
    const db = getDatabase();
    let [firstName, setFirstName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [isFormValid, setIsFormValid] = useState(false)
    let navigate = useNavigate()

    let handelFirstName = (e) => {
        setFirstName(e.target.value);
        validateForm(e.target.value, email, password, confirmPassword);
    }
    let handelEmail = (e) => {
        setEmail(e.target.value);
        validateForm(firstName, e.target.value, password, confirmPassword);
    }
    let handelPassword = (e) => {
        setPassword(e.target.value);
        validateForm(firstName, email, e.target.value, confirmPassword);
    }
    let handelConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        validateForm(firstName, email, password, e.target.value);
    }

    // Form validation logic
    let validateForm = (firstName, email, password, confirmPassword) => {
        if (firstName && email && password && confirmPassword && password === confirmPassword) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }

    let handelSubmit = () => {
        if (isFormValid) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    updateProfile(auth.currentUser, {
                        displayName: firstName,
                    }).then(() => {
                        toast("Registration Successfully Done. Go to Login page")
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000)
                    }).then(() => {
                        set(ref(db, 'users/' + user.user.uid), {
                            username: firstName,
                            email: email,
                        });

                    }).catch((error) => {
                        toast.error(`Error: ${error.message}`);
                    });
                })
                .catch((error) => {
                    toast.error(`Error: ${error.message}`);
                });
        } else {
            toast.error("Please fill in all fields and ensure passwords match.");
        }
    }

    return (
        <section>
            <Bannerreusable headline='Shipping address' pname='Shipping address' home='Home' page='Page' />
            <Container className='mb-10 flex flex-col lg:flex-row justify-between'>
                <div className="lg:w-[60%] mx-[10px] lg:mx-0 py-10 px-[20px] lg:px-[30px] bg-[#F8F8FD] rounded-md drop-shadow-md">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
                        <h4 className="font-jose font-bold text-[18px] text-[#1D3178]">Contact Information</h4>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <p className="font-lato font-medium text-[14px] text-[#C1C8E1]">Already have an account?</p>
                            <Link className="ml-2 font-lato font-medium text-[14px] text-[#C1C8E1] hover:text-[#FB2E86] ease-in-out duration-500" to='/login'>Log in</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-jose font-bold text-[18px] text-[#1D3178]">Shipping address</h4>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="border-b-[2px] border-[#BFC6E0] w-full lg:w-[48%] mb-5 lg:mb-0">
                                <input onChange={handelFirstName} type="text" placeholder="First name" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                            <div className="border-b-[2px] border-[#BFC6E0] w-full lg:w-[48%]">
                                <input type="text" placeholder="Last name (optional)" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                        </div>
                        <div className="border-b-[2px] border-[#BFC6E0] my-5">
                            <input type="text" onChange={handelEmail} placeholder="Email or mobile phone number" className="border-none w-full bg-[#F8F8FD] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato placeholder:font-semibold placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-semibold text-[15px] text-[#000]" />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="border-b-[2px] border-[#BFC6E0] w-full lg:w-[48%] mb-5 lg:mb-0">
                                <input onChange={handelPassword} type="Password" placeholder="Enter your Password" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                            <div className="border-b-[2px] border-[#BFC6E0] w-full lg:w-[48%]">
                                <input onChange={handelConfirmPassword} type="Password" placeholder="Confirm Password" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                        </div>
                    </div>
                    <button onClick={handelSubmit} className="font-jose font-semibold text-[16px] text-[#fff] py-[12px] px-[24px] border-[1px] border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">Save</button>
                </div>
                <div className="lg:w-[25%] mt-10 lg:mt-0 mx-[10px] lg:mx-0">
                    <div className="p-[20px] lg:p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
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
                        <Link to='/Order-Complete'>
                            <button className={`font-lato font-bold text-[14px] text-[#fff] py-[10px] border border-[#19D16F] bg-[#19D16F] w-full text-center rounded-md mt-10 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isFormValid}>
                                Proceed To Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </section>
    )
}

export default ShippingAddy;
