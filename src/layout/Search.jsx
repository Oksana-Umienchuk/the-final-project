import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import getData from "../api/getData";

import RatingFilm from "../components/RatingFilm";
import noimage from "../assets/noimage.jpg";
import PaginationList from "../components/PaginationList";
import FilmList from "../components/FilmList";

const imagesUrl = 'https://image.tmdb.org/t/p/w500';

function Search() {

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('search');
    console.log(searchValue);

    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const urlSearch = `/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}`;


    const [filmList, setFilmList] = useState(
        () => {
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(urlSearch)
            );

            setTotalPages(data ? data.total_pages : 1);
            return data ? data.results : [];
        }
    );

    useEffect(() => {

        async function getSearch() {

            const data = await getData(urlSearch);
            console.log(data);

            window.localStorage.setItem(urlSearch, JSON.stringify(data));
            setFilmList(data.results);
            setTotalPages(data.total_pages);
        }
        // console.log(filmList.length);
        // if (!filmList.length || page !== currentPage) {
        getSearch();
        setCurrentPage(page);
        // }

    }, [page, currentPage, urlSearch]);

    return (
        <>
            <h1 className="text-5xl text-cyan-950 py-4">Search Results</h1>
            <FilmList
                filmList={filmList} />
            <div>
                <PaginationList totalPages={totalPages} setPage={setPage} />
            </div>
        </>
    );
}

export { Search as Component };
export default Search;