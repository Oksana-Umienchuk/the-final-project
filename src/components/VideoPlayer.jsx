import { useState } from 'react';
import YouTube from 'react-youtube';

function VideoPlayer({ videoKey }) {
    // const [opts] = useState({
    //     height: '390',
    //     width: '640',
    //     playerVars: {

    //         autoplay: 1,
    //     },
    // });
    // function onReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }

    return (
        // <YouTube videoId={videoKey} opts={opts} onReady={onReady} />
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    );
}

export default VideoPlayer;
