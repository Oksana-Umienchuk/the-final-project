import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import img404 from '../assets/img404.jpg';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-cover relative" style={{ backgroundImage: `url(${img404})` }}>
                <Header />
                <div className="p-5 rounded-md">
                    <img src={img404}
                        alt={'404 Error'}
                        className="bg-cover absolute z-0 object-contain object-center top-0 right-0" />

                </div >
                {/* <button className="bg-amber-400 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded "
                    onClick={() => {
                        navigate(-1);
                    }}>Go Back</button> */}
            </div>
        </>
    );
}

export default NotFoundPage;
