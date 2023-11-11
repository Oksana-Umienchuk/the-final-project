// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";
// import { Pagination } from "@mui/material";

// import RatingFilm from "../components/RatingFilm";

// const imagesUrl = 'https://image.tmdb.org/t/p/w500'; //шлях до картинки

function Search() {
    //     // const [page, setPage] = useState(1);
    //     // const [currentPage, setCurrentPage] = useState(1);
    //     // const [totalPages, setTotalPages] = useState(1);

    //     // const urlSearch = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    //     // `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}`;

    //     // const [filmList, setFilmList] = useState(
    //     //     () => {
    //     //         //перевіряємо чи є щось у localStorage. Якщо є, то дістаємо, якщо немає - кладемо пустий масив
    //     //         const data = JSON.parse(
    //     //             window
    //     //                 .localStorage
    //     //                 .getItem(urlSearch)
    //     //         );

    //     //         setTotalPages(data ? data.total_pages : 1);
    //     //         return data ? data.results : [];
    //     //     }
    //     // );

    //     // useEffect(() => {

    //     //     // асинхронна ф-цiя для вiдправки запиту на сервер
    //     //     async function getFilms() {
    //     //         const options = {
    //     //             method: 'GET',
    //     //             headers: {
    //     //                 accept: 'application/json',
    //     //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTg2ZmIzZmQ3YzQyMjI0ZWQ0OTJhZjU5YzE5YmM1NyIsInN1YiI6IjY1NGJkOWExMjg2NmZhMDBjNDI2NTU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7_oL62CSIuSYXlzKhEK8WnK1EQFT-u1zlMeXXqeMvE'
    //     //             }
    //     //         };

    //     //         //треба дочекатися відповіді
    //     //         const response = await fetch(urlSearch, options);
    //     //         const data = await response.json(); //масив з об'єктами з сервера збережені у змінній data

    //     //         //зберігаємо дані у localStorage
    //     //         window.localStorage.setItem(urlSearch, JSON.stringify(data));
    //     //         setFilmList(data.results); //робимо запит на data.results
    //     //         setTotalPages(data.total_pages);
    //     //     }
    //     //     // console.log(filmList.length);
    //     //     if (!filmList.length || page !== currentPage) {
    //     //         getFilms();
    //     //         setCurrentPage(page);
    //     //     }
    //     //     //якщо в в змінній filmList вже є дані, то нічого не робимо, якщо дані =0, то робимо запит на сервер
    //     // }, [page, currentPage]);

    //     // const [searchParams] = useSearchParams();
    //     // const search = searchParams.get('search');

    return (
        // <>
        <h1 className="text-5xl text-zinc-950 py-4">Search Results</h1>
        //             <div className="flex flex-wrap items-start">
        //                 {filmList.map(
        //                     (film) => {
        //                         return (
        //                             <div key={film.id} className="px-3 py-2 w-1/3 h-full">
        //                                 <Link to={`/search/${film.id}`} className="flex flex-col h-full ">
        //                                     <img src={`${imagesUrl}${film.poster_path}`} alt="Poster" className="mb-2 shadow-slate-600 shadow-lg" />
        //                                     <RatingFilm rating={film.vote_average} className="my-2 flex justify-center" />
        //                                     <p>Rating: {film.vote_average}</p>
        //                                     <h2 className="text-xl p-3 bold">{film.title}</h2>
        //                                 </Link>
        //                             </div>
        //                         );
        //                     }
        //                 )}
        //             </div >
        //             <div>
        //                 <Pagination className="flex justify-center" count={totalPages} color="primary" onChange={(e, newPage) => {
        //                     setPage(newPage);
        //                 }} />
        //             </div>
        //         </>
    );
}

export { Search as Component };
export default Search;
