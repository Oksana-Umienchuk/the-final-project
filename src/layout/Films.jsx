import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RatingFilm from "../components/RatingFilm";
import getData from "../api/getData";

import { Pagination } from "@mui/material";
import Favourites from "../components/Favourites";

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

function Films() {

    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const urlFilms = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    const [filmList, setFilmList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(urlFilms)
            );

            setTotalPages(data ? data.total_pages : 1);
            return data ? data.results : [];
        }
    );

    useEffect(() => {

        async function getFilms() {

            const data = await getData(urlFilms);
            // if (!data.results) return; //

            window.localStorage.setItem(urlFilms, JSON.stringify(data));
            setFilmList(data.results);
            setTotalPages(Number(data.total_pages) > 500 ? 500 : Number(data.total_pages));
            console.log(data.total_pages);
        }

        if (!filmList.length || page !== currentPage) {
            getFilms();
            setCurrentPage(page);
        }

    }, [page, currentPage]);

    return (
        <>
            <h1 className="text-5xl text-cyan-950 py-4">Films</h1>
            <div className="flex flex-wrap items-start relative">
                {filmList.map(
                    (film) => {
                        return (
                            <div key={film.id} className="px-3 py-2 w-1/5 h-full">
                                <Link to={`/films/${film.id}`}
                                    className="flex flex-col h-full relative ">
                                    <div className="">
                                        <img src={`${imagesUrl}${film.poster_path}`} alt="Poster"
                                            className="mb-2 shadow-slate-600 shadow-lg" />
                                        <div className="absolute top-0 right-0">
                                            <Favourites />
                                        </div>
                                    </div>
                                    <RatingFilm rating={film.vote_average}
                                        className="my-2 flex justify-start" />
                                    <p className="text-white left-0">Rating: {film.vote_average}</p>
                                    {/* <div className=" bg-white w-full opacity-70 bottom-14">
                                        <h2 className="text-lg leading-6 p-3 bold absolute z-10 ">{film.title}</h2>
                                    </div> */}
                                </Link>
                            </div>
                        );
                    }
                )}
            </div >
            <div>
                <Pagination className="flex justify-center" sx={{
                    '.MuiButtonBase-root': {
                        color: 'white',
                        backgroundColor: 'rgba(251 191 36 .4)',
                    },
                    '.MuiButtonBase-root:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(251 191 36, .2)',
                    },
                    '.Mui-selected': {
                        backgroundColor: 'rgba(251 191 36, .3)',
                        // pointerEvents: 'none',
                        color: 'rgb(8 51 68)',
                    },
                    '.Mui-selected:hover': {
                        backgroundColor: 'rgb(251 191 36)',
                    },
                    '.MuiPagination-ul': {
                        gap: '10px'
                    }
                }} count={totalPages} onChange={(e, newPage) => {
                    setPage(newPage);
                }}
                />
            </div>
        </>
    );
}

export { Films as Component };
export default Films;
