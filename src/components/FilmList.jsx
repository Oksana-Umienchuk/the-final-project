import { Link } from "react-router-dom";
import { useState } from "react";

import RatingFilm from "./RatingFilm";
import Favourites from "./Favourites";

import noimage from "../assets/noimage.jpg";

import PropTypes from 'prop-types';

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

function FilmList({ filmList }) {

    const [favoritesList, setFavoritesList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem('FavouritesList')
            );

            return data ? data : [];
        }
    );

    function toggleFavor() {

    }
    return (
        <div className="flex flex-wrap items-start relative">
            {filmList.map(
                (film) => {
                    const isFavourite = favoritesList.find(
                        (item) => item.id === film.id
                    );
                    const imagePath = film.poster_path ? `${imagesUrl}${film.poster_path}` : noimage;
                    return (
                        <div key={film.id} className="px-3 py-2 w-1/5 h-full">
                            <Link to={`/films/${film.id}`}
                                className="flex flex-col h-full relative ">
                                <div className="">
                                    <img src={imagePath} alt="Poster"
                                        className="mb-2 shadow-slate-600 shadow-lg" />
                                    <div className="absolute top-0 right-0">
                                        <Favourites isFavourite={isFavourite} />
                                    </div>
                                </div>
                                <RatingFilm rating={film.vote_average}
                                    className="my-2 flex justify-start" />
                                <p className="text-white left-0">Rating: {film.vote_average}</p>
                            </Link>
                        </div>
                    );
                }
            )}
        </div >
    );
}

FilmList.propTypes = { filmList: PropTypes.array };

export default FilmList;
