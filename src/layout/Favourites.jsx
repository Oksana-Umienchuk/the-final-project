import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";

import useFavorites from "../hooks/useFavorites";

function Favourites() {
    const [favoritesList, favoritesIdList, addToFavorites] = useFavorites();
    const [listChanged, setListChanged] = useState(false);

    useEffect(() => {
        setListChanged(true);
    }, [favoritesList]);

    console.log(listChanged);

    return (
        <>
            <h1 className="text-5xl  text-cyan-950 py-4">Favourites</h1>
            {
                listChanged ? (
                    favoritesList.length ? <FilmList filmList={favoritesList} addToFavorites={addToFavorites} favoritesIdList={favoritesIdList} /> : <p className="text-4xl py-3 my-2 font-bold text-amber-600">Not Favourites Films</p>
                ) : null
            }
        </>
    );
}

export { Favourites as Component };
export default Favourites;
