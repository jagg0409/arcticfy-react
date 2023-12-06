import AudioPlayer from '../audio-player-master/src/audioplayer'
import tracks from '../playlist/all tracks';
import './SingleStyle.css'


const SingleInside = (props) => {
const albumImg = require.context('../img', true)
const albumToFilterBy = props.name; 
const filteredTracks = tracks.filter(track => track.tags && track.tags.includes(albumToFilterBy));

console.log(filteredTracks)
return (

        <div id="barras-audio">
            <div class="container-music">
                <div class="player-single">
                    <img src={albumImg(`./${props.name}.jpg`)} alt="" className='portada'/>
                    <AudioPlayer
                        trackList={filteredTracks}
                        includeTags={false}
                        includeSearch={false}
                        showPlaylist={false}
                        autoPlayNextTrack={false}
                        title={albumToFilterBy}
                        >
                            
                        </AudioPlayer>
                </div>
            </div>
        </div>
    )

}

export default SingleInside