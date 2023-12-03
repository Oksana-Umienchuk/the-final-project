import { useNavigate } from "react-router-dom";
import Header from '../components/Header';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="p-5 rounded-md bg-gray-900/80">
                <img src="./assets/errorimg.jpg" alt="" />
                <h1 className="text-white text-4xl font-bold">Error 404: Not Found</h1>
                <button className="bg-amber-400 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded "
                    onClick={() => {
                        navigate(-2);
                    }}>Go Back</button>
                <button className="hover:bg-amber-600 text-amber-600 hover:text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        navigate('/');
                    }}>Go Home</button>
            </div>
        </div>
    );
}

export { ErrorPage as Component };
export default ErrorPage;
