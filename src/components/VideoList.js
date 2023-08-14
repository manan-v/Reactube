import Video from "./video";
import PlayButton from './playButton';
import { useContext } from "react";
import VideosContext from "../context/VideosContext";


function VideoList({ editVideo }) {
    const videos = useContext(VideosContext);
    return (
        <>
            {videos.map((video) => (<Video
                key={video.id}
                title={video.title}
                views={video.views}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
                id={video.id}
                //dispatch={dispatch}
                editVideo={editVideo}
            >
                <PlayButton onPlay={() => console.log("playing..", video.title)} onPause={() => console.log("paused..", video.title)}>
                    {video.title}
                </PlayButton>
            </Video>))}

        </>
    )
}

export default VideoList;