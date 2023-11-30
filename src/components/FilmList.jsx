import { Link } from "react-router-dom";

import RatingFilm from "./RatingFilm";

import noimage from "../assets/noimage.jpg";

import PropTypes from 'prop-types';
import FavouritesButton from "./FavouritesButton";
import { urlImage } from "../config/config";

function FilmList({ filmList, favoritesIdList, addToFavorites }) {

    return (
        <div className="flex flex-wrap items-start relative">
            {filmList.map(
                (film) => {
                    const isFavourite = favoritesIdList[film.id];
                    const imagePath = film.poster_path ? `${urlImage}${film.poster_path}` : noimage;

                    return (
                        <div key={film.id} className="relative px-3 py-2 w-1/5">
                            <Link to={`/films/${film.id}`}
                                className="flex flex-col">
                                <div className="h-full w-full">
                                    <img src={imagePath}
                                        alt="Poster"
                                        className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-[2/3] object-cover object-center hover:border-white hover:border-4 h-full w-full" />
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

FilmList.propTypes = {
    filmList: PropTypes.array,
    favoritesIdList: PropTypes.object,
    addToFavorites: PropTypes.func
};

export default FilmList;
