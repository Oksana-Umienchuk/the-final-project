import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import img404 from '../assets/img404.jpg';

function ErrorPage() {
    // const navigate = useNavigate();

    return (
        <div className="bg-cover relative" style={{ backgroundImage: `url(${img404})` }}>
            <Header />
            <div className="p-5 rounded-md">
                <img src={img404}
                    alt={'404 Error'}
                    className="bg-cover absolute z-0 object-contain object-center top-0 right-0" />

                {/* <div className="absolute z-10 top-1/2 right-1/4 ">
                    <button className="hover:text-amber-600 text-black hover:underline font-bold p-4 rounded "
                        onClick={() => {
                            navigate(-2);
                        }}>Go Back</button>
                    <button className="hover:text-amber-600 text-black hover:underline font-bold py-2 px-4 rounded"
                        onClick={() => {
                            navigate('/');
                        }}>Go Home</button>
                </div> */}
            </div>
        </div >
    );
}

export { ErrorPage as Component };
export default ErrorPage;
