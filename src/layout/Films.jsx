import { useEffect, useState } from "react";

import getData from "../api/getData";

import PaginationList from "../components/PaginationList";
import FilmList from "../components/FilmList";

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
        }

        if (!filmList.length || page !== currentPage) {
            getFilms();
            setCurrentPage(page);
        }

    }, [page, currentPage]);

    return (
        <>
            <h1 className="text-5xl text-cyan-950 py-4">Films</h1>
            <FilmList
                filmList={filmList} />
            <div>
                <PaginationList totalPages={totalPages} setPage={setPage} />
            </div>
        </>
    );
}

export { Films as Component };
export default Films;
