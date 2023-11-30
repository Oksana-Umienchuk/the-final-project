import { useState } from "react";
import { favouritesListKey } from "../config/config";

export default function useFavorites() {
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

    const favoritesIdList = (() => {
        const valueFilm = {};
        if (Array.isArray(favoritesList) && favoritesList.length) {
            for (const film of favoritesList) {
                valueFilm[film.id] = true;
            }
        }
        return valueFilm;
    })();

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

    return [favoritesList, favoritesIdList, addToFavorites];
}
