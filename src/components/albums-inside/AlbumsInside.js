import AudioPlayer from '../audio-player-master/src/audioplayer'
import tracks from '../playlist/all tracks';
import './Albumstyle.css'

const AlbumInside = (props) => {    
    const albumToFilterBy = props.name; 
const filteredTracks = tracks.filter(track => track.album && track.album.includes(albumToFilterBy));


    return (
        
        <div id="barras-audio">
            <div class="container-music">
                <div class="player">
                    <AudioPlayer trackList={filteredTracks} id='audioplayer'></AudioPlayer>
                </div>
            </div>
        </div>
    )
    
}

export default AlbumInside