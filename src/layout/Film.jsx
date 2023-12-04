import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import RatingFilm from "../components/RatingFilm";
import VideoPlayer from "../components/video/VideoPlayer";
import ActorsList from "../components/actors/ActorsList";

import { urlImageOriginal } from '../config/config';

function Film() {
    const params = useParams();
    const navigate = useNavigate();

    const [film, setFilm] = useState(
        () => {
            return JSON.parse(
                window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`)
            ) || null;
        }
    );

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
                        if (response.title) {
                            setFilm(response);
                        } else if (!response.success) {
                            navigate('/404');
                        }

                        window.localStorage.setItem(
                            `https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`,
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
        <div className="pb-5 max-w-[1100px] mx-auto pt-16 sm:pt-0">
            <div className="relative">
                <img src={`${urlImageOriginal}${film.backdrop_path}`} alt="Poster" className="object-cover" />
                <div className="p-4 mt-4 text-xl text-left text-white bg-gray-900/80 rounded-md">
                    <h2 className="text-4xl py-3 my-2 font-bold text-amber-600">{film.original_title}</h2>
                    <div className="flex item-center">
                        <p className="mr-2 font-bold">Rating:</p>
                        <div className="">
                            <RatingFilm rating={film.vote_average} />
                        </div>
                        <p className="ml-2">{
                            Number(film.vote_average).toFixed(1)
                        }</p>
                    </div>
                    <p className="my-3 text-base">{film.overview}</p>
                    <p className="my-3">{'Release Date:' + ' '}
                        <span>{film.release_date}</span>
                    </p>
                    <p className="my-3">ID: {params.id}</p>
                    <VideoPlayer videoId={film.id}
                        className="video-container" />
                    <ActorsList filmId={film.id} />
                </div>
            </div>
        </div>
    );
}

export { Film as Component };
export default Film;
