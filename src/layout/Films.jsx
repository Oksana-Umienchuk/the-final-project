import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const imagesUrl = 'https://image.tmdb.org/t/p/w500'; //шлях до картинки

function Films() {

    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    console.log(url, page);
    const [filmList, setFilmList] = useState(
        () => {
            //перевіряємо чи є щось у localStorage. Якщо є, то дістаємо, якщо немає - кладемо пустий масив
            const data = JSON.parse(
                window
                    .localStorage
                    .getItem(url)
            );

            console.log(data)
            setTotalPages(data ? data.total_pages : 1);
            return data ? data.results : [];
        }
    );

    //запит на сервер
    useEffect(() => {

        // асинхронна ф-цiя для вiдправки запиту на сервер
        async function getFilms() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTg2ZmIzZmQ3YzQyMjI0ZWQ0OTJhZjU5YzE5YmM1NyIsInN1YiI6IjY1NGJkOWExMjg2NmZhMDBjNDI2NTU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7_oL62CSIuSYXlzKhEK8WnK1EQFT-u1zlMeXXqeMvE'
                }
            };

            //треба дочекатися відповіді
            const response = await fetch(url, options);
            const data = await response.json(); //масив з об'єктами з сервера збережені у змінній data

            //зберігаємо дані у localStorage
            window.localStorage.setItem(url, JSON.stringify(data));
            setFilmList(data.results); //робимо запит на data.results
            setTotalPages(data.total_pages);
        }
        console.log(filmList.length);
        if (!filmList.length || page !== currentPage) {
            getFilms();
            setCurrentPage(page);
        }
        //якщо в в змінній filmList вже є дані, то нічого не робимо, якщо дані =0, то робимо запит на сервер
    }, [page, currentPage]);

    console.log(filmList);

    return (
        <>
            <h1 className="text-5xl text-zinc-950 py-4">Films</h1>
            <div className="flex flex-wrap">
                {filmList.map(
                    (film) => {
                        return (
                            <div key={film.id} className="p-5 w-1/3">
                                <Link to={`/films/${film.id}`}>
                                    <h2 className="text-3xl p-3">{film.title}</h2>
                                    <img src={`${imagesUrl}${film.poster_path}`} alt="Poster" />
                                    <p className="text-2xl p-2">{film.vote_average}</p>
                                </Link>
                            </div>
                        );
                    }
                )}

            </div >
            <div>
                <Pagination count={totalPages} shape="rounded" onChange={(e, newPage) => {
                    setPage(newPage);
                }} />
            </div>
        </>
    );
}

export { Films as Component };
export default Films;
