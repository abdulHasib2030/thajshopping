import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBackHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
            <TbError404 className="text-9xl text-red-500"/>
            <h1 className="text-5xl font-bold text-pink-600 mb-4">Oops! Page Not Found</h1>
            
            <button
                onClick={handleGoBackHome}
                className="bg-gradient-to-r from-teal-400 to-blue-500 font-bold text-white py-2 px-6 rounded-lg shadow-md "
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default ErrorPage;