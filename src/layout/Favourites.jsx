import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";

import { favouritesListKey } from "../config/config";

function Favourites() {

    const [favoritesList, setFavoritesList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(favouritesListKey)
            );

            return data ? data : [];
        }
    );



    console.log(favoritesIdList);

    function addToFavorites(film) {

        if (film.id in favoritesIdList) {
            console.log(`ID ${film.id} є у списку улюблених`);

            const newFavouritesList = favoritesList.filter((item) => item.id !== film.id);
            window.localStorage.setItem(favouritesListKey, JSON.stringify(newFavouritesList));
            return setFavoritesList(newFavouritesList);
        } else {
            console.log(`ID ${film.id} відсутній у списку улюблених`);

            setFavoritesList(
                (currentValue) => {
                    const newFavouritesList = [
                        ...currentValue,
                        film
                    ];
                    window.localStorage.setItem(favouritesListKey, JSON.stringify(newFavouritesList));
                    return newFavouritesList;
                }
            );
        }
    }
    console.log(favoritesList);

    return (
        <>
            <h1 className="text-5xl  text-cyan-950 py-4">Favourites</h1>
            {
                favoritesList.length ? <FilmList filmList={favoritesList} addToFavorites={addToFavorites} favoritesIdList={favoritesIdList} /> : <p className="text-4xl py-3 my-2 font-bold text-amber-600">Not Favourites Films</p>
            }
        </>
    );
}

export { Favourites as Component };
export default Favourites;
