import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import getData from '../../api/getData';

function VideoPlayer({ videoId }) {

    const urlVideo = `/movie/${videoId}/videos?language=en-US`;

    const [videosList, setVideosList] = useState([]);

    useEffect(() => {

        async function getFilmVideo() {
            const data = await getData(urlVideo);

            if (data && data.results.length) {
                setVideosList(data.results);
            }

        }
        getFilmVideo();

    }, [videoId, urlVideo]);

    const trailerKey = videosList.find(
        (video) => video.type.toLocaleLowerCase() === 'trailer'
    );

    // console.log(videosList, trailerKey);

    if (!trailerKey) return null;

    return (
        <>
            <h2 className="text-3xl py-3 my-2 font-bold text-amber-600 text-center">Trailer</h2>
            <div className='aspect-video w-full'>
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailerKey.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </>
    );
}

VideoPlayer.propTypes = {
    videoId: PropTypes.number
};
export default VideoPlayer;
