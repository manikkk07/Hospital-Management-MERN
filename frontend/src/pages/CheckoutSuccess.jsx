import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";

const CheckoutSuccess = () => {
    const { dispatch } = useContext(authContext);

    useEffect(() => {
        // Restore authentication state from localStorage after payment redirect
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (user && token && role) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    user: JSON.parse(user),
                    token: token,
                    role: role,
                },
            });
        }
    }, [dispatch]);
    return (
        <div className="bg-gray-100 h-screen">
            <div className="bg-white p-6 md:mx-auto">
                <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                    <path fill="currentColor" d="M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z"></path>
                </svg>
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                        Payment Done!
                    </h3>
                    <p className="text-gray-600 my-2">
                        Thank you for completing your secure online payment.
                    </p>
                        <p> Have a great day! </p>
                        <div className="py-10 text-center">
                            <Link
                                to="/home"
                                className="px-12 bg-buttonBgColor text-black font-semibold py-3">
                                Go Back To Home
                            </Link>
                </div>
            </div>
         </div>
        </div>
    );
};
export default CheckoutSuccess;



