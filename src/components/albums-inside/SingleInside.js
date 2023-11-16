import AudioPlayer from '../audio-player-master/src/audioplayer'
import './SingleStyle.css'

const SingleInside = (props) => {


    const tracks = [

        {
            url: `https://arcticfy-react.vercel.app/${props.name}.mp3`,
            title: `Arctic monkeys - ${props.name}`,
            tags: [props.name],
        },
    ];
    return (

        <div id="barras-audio">
            <div class="container-music">
                <div class="player-single">
                    <AudioPlayer
                        trackList={tracks}
                        includeTags={false}
                        includeSearch={false}
                        showPlaylist={false}
                        autoPlayNextTrack={false}
                        ></AudioPlayer>
                </div>
            </div>
        </div>
    )

}

export default SingleInside