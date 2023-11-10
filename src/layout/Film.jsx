import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingFilm from "../components/RatingFilm";

const imageUrl = 'https://image.tmdb.org/t/p/original';
function Film() {
    const params = useParams();

    console.log(params);
    const [film, setFilm] = useState(
        () => {
            return JSON.parse(
                window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`)
            ) || null;
        }
    );

    const [videoKey, setVideoKey] = useState('');

    useEffect(
        () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTg2ZmIzZmQ3YzQyMjI0ZWQ0OTJhZjU5YzE5YmM1NyIsInN1YiI6IjY1NGJkOWExMjg2NmZhMDBjNDI2NTU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7_oL62CSIuSYXlzKhEK8WnK1EQFT-u1zlMeXXqeMvE'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`, options)
                .then(response => response.json())
                .then(
                    (response) => {
                        setFilm(response);

                        window.localStorage.setItem(
                            `https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`,
                            JSON.stringify(response)
                        );
                    }
                )
                .catch(err => console.error(err));

            fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`, options)

                .then(response => response.json())
                .then(
                    (response) => {
                        if (response.results.length > 0) {
                            setVideoKey(response.results[0].key);
                        } else {
                            return;
                        }

                        console.log(response.results);

                        window.localStorage.setItem(
                            `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
                            JSON.stringify(response)
                        );
                    }
                )
                .catch(err => console.error(err));
        },
        [params]

    );

    if (!film) return <p>Loading...</p>;

    return (
        <>
            <div className="flex">
                <img src={`${imageUrl}${film.poster_path}`} alt="Poster" className="w-1/2 p-2" />
                <div className="p-2 text-1xl text-left">
                    <h1 className="text-4xl text-zinc-950 py-4 font-bold">{film.original_title}</h1>
                    <div className="flex p-1">
                        <p className="mr-2">Rating:</p>
                        <RatingFilm rating={film.vote_average} />
                        <p className="ml-2">{film.vote_average}</p>
                    </div>
                    <p className="my-3">{film.overview}</p>
                    <p className="my-3">ID: {params.id}</p>
                    {videoKey && <a href={`https://www.youtube.com/watch?v=${videoKey}`}>Trailer</a>}
                </div>

            </div>
            <img src={`${imageUrl}${film.backdrop_path}`} alt="Poster" className="p-3" />
        </>
    );
}

export { Film as Component };
export default Film;
