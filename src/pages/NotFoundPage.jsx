import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <img src="./assets/error.jpg" alt="" />
            <h1>404 Not Found Page</h1>
            <button className="bg-amber-400 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded "
                onClick={() => {
                    navigate(-1); //адреса, на яку буде повертатися при натисканны на кнопку Go Home
                }}>Go Back</button>
        </>
    );
}

export default NotFoundPage;
