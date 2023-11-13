import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (

        <>
            <h1>404 </h1>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    navigate('/films'); //адреса, на яку буде повертатися при натисканны на кнопку Go Home
                }}>Go Home</button>
        </>

    );
}

export { ErrorPage as Component };
export default ErrorPage;
