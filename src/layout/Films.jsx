import { useEffect, useState } from "react";

const imagesUrl = 'https://image.tmdb.org/t/p/w500'; //шлях до картинки

function Films() {
    const [filmList, setFilmList] = useState(
        () => {
            //перевіряємо чи є щось у localStorage. Якщо є, то дістаємо, якщо немає - кладемо пустий масив
            return JSON.parse(
                window
                    .localStorage
                    .getItem(
                        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
            ) || [];
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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUxYTc3Yzk1MDI5NzRjZGIxODM4OTQ4YzExOTVlYSIsInN1YiI6IjY1M2NjOGI0YzhhNWFjMDEzYTg2OWU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AXS4fpT0tdFSBM23WTTqV00Z-JJ60BAkUUhtrWWENWo'
                }
            };

            //треба дочекатися відповіді
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
            const data = await response.json(); //масив з об'єктами з сервера збережені у змінній data

            //зберігаємо дані у localStorage
            window.localStorage.setItem('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', JSON.stringify(data));
            setFilmList(data.results); //робимо запит на data.results
        }

        console.log(filmList);
        filmList.lenght || getFilms(); //якщо в в змінній filmList вже є дані, то нічого не робимо, якщо дані =0, то робимо запит на сервер
    }, []);

    return (
        <>
            <h1 className="text-5xl text-zinc-950 py-4">Films</h1>
            <div>

            </div>
        </>
    );
}

export { Films as Component };
export default Films;
