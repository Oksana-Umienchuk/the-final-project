import PropTypes from 'prop-types';

function VideoPlayer({ videoKey }) {

    return (
        <div className="relative">
            <div className="absolute w-full">
                <div className='aspect-video w-full'>
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

VideoPlayer.propTypes = { videoKey: PropTypes.string, width: PropTypes.number, height: PropTypes.number, };
export default VideoPlayer;
