import { urlImage } from "../../../config/config";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import noimage from "../../../assets/noimage.jpg";

import RatingFilm from "../../RatingFilm";
import FavouritesButton from "../../FavouritesButton";
import FilmList from "../../FilmList";

function FilmsActors({ actorVideoList }) {

    return (
        <FilmList filmList={actorVideoList} />

        // <div className="flex flex-wrap m-2 w-full justify-center items-center">
        //     {actorVideoList.map(
        //         (film) => {
        //             const imagePath = film.poster_path ? `${urlImage}${film.poster_path}` : noimage;
        //             return (
        //                 <div key={film.id} className="relative flex flex-col p-5 w-1/2 md:w-1/3 lg:w-1/5">
        //                     <Link to={`/films/${film.id}`}
        //                         className="">
        //                         <div className="h-full w-full">
        //                             <img src={imagePath}
        //                                 alt="Poster"
        //                                 className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-[2/3] object-cover object-center hover:border-white hover:border-4 h-full w-full" />
        //                         </div>
        //                         <h3 className="truncate hover:text-clip hover:whitespace-normal text-white my-2 z-50">{film.original_title}</h3>
        //                         <RatingFilm
        //                             rating={film.vote_average}
        //                             className="my-2" />
        //                         <p className="text-white left-0">Rating:&nbsp;
        //                             <span>
        //                                 {Number(film.vote_average).toFixed(1)}
        //                             </span>
        //                         </p>
        //                         <div className="absolute top-4 right-2 border-amber-600">
        //                             <FavouritesButton
        //                                 isFavourite={isFavourite}
        //                                 onClick={() => { addToFavorites(film); }} />
        //                         </div>
        //                     </Link>
        //                 </div>
        //             );
        //         })
        //     }
        // </div>
    );
}

FilmsActors.propTypes = { actorVideoList: PropTypes.array };
export default FilmsActors;
