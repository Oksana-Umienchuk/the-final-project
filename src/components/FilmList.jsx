import { Link } from "react-router-dom";
import { useState } from "react";

import RatingFilm from "./RatingFilm";

import noimage from "../assets/noimage.jpg";

import PropTypes from 'prop-types';
import FavouritesButton from "./FavouritesButton";

const imagesUrl = 'https://image.tmdb.org/t/p/w500';
const favouritesListKey = 'favouritesList';

function FilmList({ filmList }) {

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
        //перевірити по id

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

    return (
        <div className="flex flex-wrap items-start relative">
            {filmList.map(
                (film) => {
                    const isFavourite = favoritesIdList[film.id];
                    const imagePath = film.poster_path ? `${imagesUrl}${film.poster_path}` : noimage;
                    return (
                        <div key={film.id} className=" relative px-3 py-2 w-1/2 md:w-1/3 sm:w-1/4 xs:w-1/5 xxs:w-1/2 h-full">
                            <Link to={`/films/${film.id}`}
                                className="flex flex-col">
                                <div>
                                    <img src={imagePath} alt="Poster"
                                        className="mb-2 shadow-slate-600 shadow-lg" />
                                </div>
                                <RatingFilm rating={film.vote_average}
                                    className="my-2" />
                                <p className="text-white left-0">Rating: {film.vote_average}</p>
                            </Link>
                            <div className="absolute top-0 right-0">
                                <FavouritesButton
                                    className="" isFavourite={isFavourite} onClick={() => { addToFavorites(film); }} />
                            </div>
                        </div>
                    );
                }
            )}
        </div >
    );
}

FilmList.propTypes = { filmList: PropTypes.array };

export default FilmList;
