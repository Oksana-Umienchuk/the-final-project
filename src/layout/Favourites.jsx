import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";
import getData from "../api/getData";

function Favourites() {

    const [filmList, setFilmList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem('FavouritesList')
            );

            return data ? data : [];
        }
    );


    return (
        <>
            <h1 className="text-5xl  text-cyan-950 py-4">Favourites</h1>
            <FilmList
                filmList={filmList} />
        </>
    );
}

export { Favourites as Component };
export default Favourites;
