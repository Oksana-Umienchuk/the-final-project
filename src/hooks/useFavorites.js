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

    function addToFavorites(film) {

        if (film.id in favoritesIdList) {

            const newFavouritesList = favoritesList.filter((item) => item.id !== film.id);
            window.localStorage.setItem(favouritesListKey, JSON.stringify(newFavouritesList));
            return setFavoritesList(newFavouritesList);
        } else {

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

    return [favoritesList, favoritesIdList, addToFavorites];
}
