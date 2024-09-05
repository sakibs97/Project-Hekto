import Container from "../components/Container"
import { useState, useEffect } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import Bannerreusable from "../components/reusable/Bannerreusable"

const UserDetails = () => {
    const [data, setData] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `users/${user.uid}`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setData(snapshot.val());
                    } else {
                        alert("No data available");
                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else {
            alert("User not logged in");
        }
    }, [user]);



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
                    <div className="">
                        {data ? (
                            <div className="flex flex-col flex-wrap lg:flex-row justify-between my-2">
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[30%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">First Name:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.firstName}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[25%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Last Name:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.lastName}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[40%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Email:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.email}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[30%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Phone Number:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.phoneNumber}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[68%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Address:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.address}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[25%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">City:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.city}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[20%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Postal Code:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.postalCode}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[25%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">Division</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.division}</p>
                                </div>
                                <div className="border-[#BFC6E0] border-[1px] p-2 flex items-center w-full  lg:w-[25%] mb-5">
                                    <h4 className="font-lato font-semibold text-[14px]">District:</h4>
                                    <p className="font-lato font-normal text-[14px] pl-2">{data.district}</p>
                                </div>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className="lg:w-[25%] mt-10 lg:mt-0 mx-[10px] lg:mx-0">
                    <div className="p-[20px] lg:p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Subtotals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£219.00</p>
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
                        <Link to='/Order-Complete'>
                            <button className="font-lato font-bold text-[14px] text-[#fff] py-[10px] border border-[#19D16F] bg-[#19D16F] w-full text-center rounded-md mt-10">
                                Proceed To Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default UserDetails