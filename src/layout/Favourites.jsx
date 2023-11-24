import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";

const favouritesListKey = 'favouritesList';

function Favourites() {

    const [filmList, setFilmList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(favouritesListKey)
            );

            return data ? data : [];
        }
    );

    useEffect(() => {
        async function getFilms() {

        }
        getFilms()
    }, [filmList]);

    return (
        <>
            <h1 className="text-5xl  text-cyan-950 py-4">Favourites</h1>
            {
                filmList.length ? <FilmList filmList={filmList} /> : <p className="text-4xl py-3 my-2 font-bold text-amber-600">Not Favourites Films</p>
            }
        </>
    );
}

export { Favourites as Component };
export default Favourites;
