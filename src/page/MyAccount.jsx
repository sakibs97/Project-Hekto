import Container from "../components/Container"
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {
    const auth = getAuth();
    let navigate = useNavigate()

    let handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Signed Out successfully!");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <section>
            <Container>
                <div className="my-5 text-end">
                    <button onClick={handleSignOut} className="text-[#1D3178] hover:text-[#FB2E86] font-inter font-bold text-[20px]">Sign out</button>
                </div>
            </Container>
            <ToastContainer />
        </section>
    )
}

export default MyAccount