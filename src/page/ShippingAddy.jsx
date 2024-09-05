import { Link, useNavigate } from "react-router-dom"
import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set } from "firebase/database";


const ShippingAddy = ({ headline, pname, home, page }) => {
    const db = getDatabase();
    const auth = getAuth();
    let navigate = useNavigate();

    // State variables for form inputs
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("")
    let [address, setAddress] = useState("");
    let [city, setCity] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [division, setDivision] = useState("");
    let [district, setDistrict] = useState("");

    // State variables for error messages
    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");

    // Validation functions
    const validateName = (name) => {
        const regex = /^[A-Z]+[a-z]{2,}$/;
        return regex.test(name);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex.test(password);
    };

    // Handlers for form input changes
    let handleFirstName = (e) => {
        const newName = e.target.value;
        setFirstName(newName);

        if (!validateName(newName)) {
            setNameError("Name must be at least 3 characters long.");
        } else {
            setNameError("");
        }
    };

    let handleLastName = (e) => {
        setLastName(e.target.value);
    };
    let handleAddress = (e) => {
        setAddress(e.target.value)
    };
    let handleCity = (e) => {
        setCity(e.target.value)
    };
    let handlePostalCode = (e) => {
        setPostalCode(e.target.value)
    };
    let handleDivision = (e) => {
        setDivision(e.target.value)
    };
    let handleDistrict = (e) => {
        setDistrict(e.target.value)
    };

    let handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    let handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!validateEmail(newEmail)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    let handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (!validatePassword(newPassword)) {
            setPasswordError("Password must be at least 8 characters long, include at least one number (0-9) and one special character.");
        } else {
            setPasswordError("");
        }
    };
    let handelConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    // Signup handler
    let handelSave = () => {

        if (!firstName || !lastName || !address || !city || !postalCode || !division || !district || !phoneNumber || !email || !password) {
            toast.error("Please fill out all fields.");
            return;
        }

        if (passwordError || nameError || emailError) {
            toast.error("Please fix the errors before proceeding.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: `${firstName} ${lastName}`,
                })
                    .then(() => {
                        // Store user information in Realtime Database
                        set(ref(db, 'users/' + user.uid), {
                            firstName: firstName,
                            lastName: lastName,
                            address: address,
                            city: city,
                            postalCode: postalCode,
                            division: division,
                            phoneNumber: phoneNumber,
                            email: email,
                            district: district,
                        });
                        setTimeout(() => {
                            navigate("/userDetails");
                        });
                    })
                    .catch((error) => {
                        toast.error("Error during profile update: " + error.message);
                    });
            })
            .catch((error) => {
                toast.error("Save failed: " + error.message);
            });
    };

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
                            <div className="w-full lg:w-[48%] mb-5 lg:mb-0">
                                <div className="relative">
                                    <input
                                        onChange={handleFirstName}
                                        type="text"
                                        placeholder="First Name"
                                        aria-label="First Name"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86] "
                                        value={firstName}
                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        First Name
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-[48%]">
                                <div className="relative">
                                    <input
                                        onChange={handleLastName}
                                        type="text"
                                        placeholder="Last Name"
                                        aria-label="Last Name"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86] "

                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        Last Name
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <input
                                onChange={handleAddress}
                                type="text"
                                placeholder="Mirpur, Dhaka, 1250"
                                aria-label="address"
                                className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86] "
                                value={address}
                            />
                            <label
                                className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                            >
                                Address
                            </label>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="relative w-full lg:w-[48%] mb-5 lg:mb-0">
                                <input
                                    onChange={handleCity}
                                    type="text"
                                    placeholder="Enter your city"
                                    aria-label="city"
                                    className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                    value={city}
                                />
                                <label
                                    className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                >
                                    City
                                </label>
                            </div>
                            <div className="relative w-full lg:w-[48%]">
                                <input
                                    onChange={handlePostalCode}
                                    type="number"
                                    placeholder="Postal Code"
                                    aria-label="Postal Code"
                                    className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86] "
                                    value={postalCode}
                                />
                                <label
                                    className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                >
                                    Postal Code
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="w-full lg:w-[48%] mb-5 lg:mb-0">
                                <div className="relative">
                                    <form
                                        onChange={handleDivision}
                                        value={division}
                                        className="max-w-sm mx-auto">
                                        <select id="Division" className="bg-[#F8F8FD] border-[#BFC6E0] border-[2px] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-full my-3 px-2 pt-3 py-2 text-[#000] font-lato font-medium text-[14px] rounded-md">
                                            <option selected>Please select</option>
                                            <option value="Barisal"><p >Barisal</p></option>
                                            <option value="Chittagong">Chittagong</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Khulna">Khulna</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                            <option value="Rajshahi">Rajshahi</option>
                                            <option value="Rangpur">Rangpur</option>
                                            <option value="Sylhet">Sylhet</option>
                                        </select>
                                    </form>
                                    <label
                                        className="absolute left-[20px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:block peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] px-1 rounded-b-md opacity-100 px-[2px]">
                                        Division
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-[48%]">
                                <div className="relative">
                                    <form
                                        onChange={handleDistrict}
                                        value={district}
                                        className="max-w-sm mx-auto">
                                        <select id="District" className="bg-[#F8F8FD] border-[#BFC6E0] border-[2px] focus:ring-[#FB2E86] focus:border-[#FB2E86] w-full my-3 px-2 pt-3 py-2 text-[#000] font-lato font-medium text-[14px] rounded-md">
                                            <option selected>Please select</option>
                                            <option value="Barisal"><p >Barisal</p></option>
                                            <option value="Chittagong">Chittagong</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Khulna">Khulna</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                            <option value="Rajshahi">Rajshahi</option>
                                            <option value="Rangpur">Rangpur</option>
                                            <option value="Sylhet">Sylhet</option>
                                        </select>
                                    </form>
                                    <label
                                        className="absolute left-[20px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:block peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] px-1 rounded-b-md opacity-100 px-[2px]">
                                        District
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="w-full lg:w-[48%] mb-5 lg:mb-0">
                                <div className="relative">
                                    <input
                                        onChange={handleEmail}
                                        type="text"
                                        placeholder="Enter your Email"
                                        aria-label="email"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86] "
                                        value={email}
                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-[48%]">
                                <div className="relative">
                                    <input
                                        onChange={handlePhoneNumber}
                                        type="number"
                                        placeholder="Enter your Phone Number"
                                        aria-label="Phone Number"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                        value={phoneNumber}
                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        Phone Number
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between my-5">
                            <div className="w-full lg:w-[48%] mb-5 lg:mb-0">
                                <div className="relative">
                                    <input
                                        onChange={handlePassword}
                                        type="Password"
                                        placeholder="Enter your Password"
                                        aria-label="Password"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                        value={password}
                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        Password
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-[48%]">
                                <div className="relative">
                                    <input
                                        onChange={handelConfirmPassword}
                                        type="Password"
                                        placeholder="Confirm Password"
                                        aria-label="Confirm Password"
                                        className="peer w-full my-3 p-2 text-[#000] bg-[#F8F8FD] border-[#BFC6E0] border-[2px] placeholder:text-[#000] placeholder:text-[14px] placeholder:font-lato placeholder:font-medium font-lato font-medium text-[14px] rounded-md focus:ring-[#FB2E86] focus:border-[#FB2E86]"
                                        value={confirmPassword}
                                    />
                                    <label
                                        className="absolute left-[15px] top-[-2px] font-lato font-medium text-[14px] text-[#000] transition-all duration-300 transform origin-[0] peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:left-[10px] peer-placeholder-shown:scale-100 peer-placeholder-shown:px-0 peer-placeholder-shown:opacity-0 pointer-events-none bg-[#F8F8FD] rounded-b-md opacity-100 px-[2px]"
                                    >
                                        Password
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handelSave} className="font-jose font-semibold text-[16px] text-[#fff] py-[12px] px-[24px] border-[1px] border-[#FB2E86] bg-[#FB2E86] rounded-md ">Save</button>
                </div>
                <div className="lg:w-[25%] mt-10 lg:mt-0 mx-[10px] lg:mx-0">
                    <div className="p-[20px] lg:p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Subtotals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">${ }</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[16px] md:text-[18px] text-[#1D3178]">Total Quntity:</h6>
                            <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#15245E]">{ }</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Totals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£325.00</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" className="checked:bg-[#19D16F] checked:border-[#19D16F] border-[#19D16F]" />
                            <p className="font-lato font-normal text-[12px] text-[#8A91AB] pl-[10px]">Shipping & taxes calculated at checkout</p>
                        </div>
                        <button disabled className='font-lato font-bold text-[14px] text-[#fff] py-[10px] border border-[#19D16F] bg-[#19D16F] w-full text-center rounded-md mt-10 opacity-50 cursor-not-allowed'>
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </section>
    )
}

export default ShippingAddy;
