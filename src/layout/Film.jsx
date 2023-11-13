import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from '@mui/material';

import RatingFilm from "../components/RatingFilm";
import VideoPlayer from "../components/VideoPlayer";

const imageUrl = 'https://image.tmdb.org/t/p/original';

function Film() {
    const params = useParams();
    const navigate = useNavigate();
    const [isShowVideo, setIsShowVideo] = useState(false);

    console.log(params);
    const [film, setFilm] = useState(
        () => {
            return JSON.parse(
                window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`)
            ) || null;
        }
    );

    const [videoKey, setVideoKey] = useState(

        () => {
            return JSON.parse(
                window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`)
            ) || '';
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

            fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`, options)

                .then(response => response.json())
                .then(
                    (response) => {
                        if (response.results.length > 0) {
                            setVideoKey(response.results[0].key);
                        } else {
                            return;
                        }

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
            <div className="">

                <img src={`${imageUrl}${film.backdrop_path}`} alt="Poster" className="p-3" />
                <div className="p-2 text-1xl text-left">
                    <h1 className="text-4xl text-zinc-950 py-4 font-bold">{film.original_title}</h1>
                    <div className="flex p-1">
                        <p className="mr-2">Rating:</p>
                        <RatingFilm rating={film.vote_average} />
                        <p className="ml-2">{film.vote_average}</p>
                    </div>
                    <p className="my-3">{film.overview}</p>
                    <p className="my-3">Release Date: {film.release_date}</p>
                    <p className="my-3">ID: {params.id}</p>
                    <Button variant="contained" className='p-2 m-3 bg-blue-800' onClick={() => { setIsShowVideo(!isShowVideo); }}>Watch Trailer On YouTube</Button>
                    {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {isShowVideo && <VideoPlayer videoKey={videoKey} />}
                </div>
            </div>
        </>
    );
}

export { Film as Component };
export default Film;
