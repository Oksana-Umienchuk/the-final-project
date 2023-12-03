import { Link } from "react-router-dom";

import RatingFilm from "./RatingFilm";

import noimage from "../assets/noimage.jpg";

import PropTypes from 'prop-types';
import FavouritesButton from "./buttons/FavouritesButton";
import { urlImage } from "../config/config";

function FilmList({ filmList, favoritesIdList, addToFavorites }) {

    return (
        <div className="flex flex-wrap relative justify-center items-start">
            {filmList.map(
                (film) => {
                    const isFavourite = favoritesIdList[film.id];
                    const imagePath = film.poster_path ? `${urlImage}${film.poster_path}` : noimage;

                    return (
                        <div key={film.id} className="relative flex flex-col p-5 w-1/2 md:w-1/3 lg:w-1/5">
                            <Link to={`/films/${film.id}`}
                                className="">
                                <div className="h-full w-full">
                                    <img src={imagePath}
                                        alt="Poster"
                                        className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-[2/3] object-cover object-center hover:border-white hover:border-4 h-full w-full" />
                                </div>
                                <h2 className="text-ellipsis line-clamp-2 h-10 leading-tight text-white my-2 z-50">{film.original_title}</h2>
                                <RatingFilm
                                    rating={film.vote_average}
                                    className="my-2" />
                                <p className="text-white left-0">Rating:&nbsp;
                                    <span>
                                        {Number(film.vote_average).toFixed(1)}
                                    </span>
                                </p>
                            </Link>
                            <div className="absolute top-4 right-2 border-amber-600">
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
