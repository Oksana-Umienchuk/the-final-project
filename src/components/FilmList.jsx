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

        if (film.id in favoritesIdList) {
            console.log(`ID ${film.id} є у списку улюблених`);

            // delete favoritesIdList.film.id;
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
        <div className="flex flex-wrap items-start relative">
            {filmList.map(
                (film) => {
                    const isFavourite = favoritesIdList[film.id];
                    const imagePath = film.poster_path ? `${imagesUrl}${film.poster_path}` : noimage;

                    return (
                        <div key={film.id} className="relative px-3 py-2 w-1/5 h-full">
                            <Link to={`/films/${film.id}`}
                                className="flex flex-col">
                                <div>
                                    <img src={imagePath}
                                        alt="Poster"
                                        className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-auto object-cover object-center hover:border-white hover:border-4" />
                                </div>
                                <RatingFilm
                                    rating={film.vote_average}
                                    className="my-2" />
                                <p className="text-white left-0">Rating:&nbsp;
                                    <span>
                                        {Number(film.vote_average).toFixed(1)}
                                    </span>
                                </p>
                            </Link>
                            <div className="absolute top-2 right-1 border-amber-600">
                                <FavouritesButton
                                    isFavourite={isFavourite}
                                    onClick={() => { addToFavorites(film); }} />
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
