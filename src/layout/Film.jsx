import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const imageUrl = 'https://image.tmdb.org/t/p/original';
function Film() {
    const params = useParams();

    console.log(params);
    //     const [film, setFilm] = useState(
    //         () => {
    //             return JSON.parse(
    //                 window.localStorage.getItem(`https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`)
    //             ) || null;
    //         }
    //     );

    //     useEffect(
    //         () => {
    //             const options = {
    //                 method: 'GET',
    //                 headers: {
    //                     accept: 'application/json',
    //                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTg2ZmIzZmQ3YzQyMjI0ZWQ0OTJhZjU5YzE5YmM1NyIsInN1YiI6IjY1NGJkOWExMjg2NmZhMDBjNDI2NTU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7_oL62CSIuSYXlzKhEK8WnK1EQFT-u1zlMeXXqeMvE'
    //                 }
    //             };

    //             fetch(`https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`, options)
    //                 .then(response => response.json())
    //                 .then(
    //                     (response) => {
    //                         setFilm(response);

    //                         window.localStorage.setItem(
    //                             `https://api.themoviedb.org/3/movie/${params.id}}?language=en-US`,
    //                             JSON.stringify(response)
    //                         );
    //                     }
    //                 )
    //                 .catch(err => console.error(err));
    //         },
    //         [params]
    //     );

    //     if (!film) return <p>Loading...</p>;

    //     return (
    //         <>
    //             <h1 className="text-5xl text-zinc-950 py-4">{film.original_title}</h1>
    //             <div className="flex">
    //                 <img src={`${imageUrl}${film.poster_path}`} alt="Poster" className="w-1/2 p-2" />
    //                 <div className="p-2 text-1xl">
    //                     <p>Rating: {film.vote_average}</p>
    //                     <p>{film.overview}</p>
    //                     <p>{params.id}</p>
    //                 </div>
    //             </div>
    //             <img src={`${imageUrl}${film.backdrop_path}`} alt="Poster" />
    //         </>
    //     );

    return (<h1 className="text-5xl text-zinc-950 py-4">Move</h1>);
}

export { Film as Component };
export default Film;
