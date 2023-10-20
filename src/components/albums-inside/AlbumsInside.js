import './album-style.css'
import './albums-components/player.css'
import InfoSong from './albums-components/infoSongs'
import PlayerButtons from './albums-components/playerButons'
import PlayerProgress from './albums-components/playerProgres'
import bodypaint from '../audio/bodypaint.mp3'
import reproducer from './reproducer'
import { Helmet } from 'react-helmet'


const AlbumInside = (props) => {        
    
    
        return (
            
            <div id="barras-audio">
            {/*  
             <Helmet>
                <script src={reproducer} />
            </Helmet>
             */}
            <div class="container-music">
                <div class="player">
                    <InfoSong name={props.name} ></InfoSong>
                    <audio src={bodypaint}></audio>
                    <PlayerProgress></PlayerProgress>
                    <PlayerButtons></PlayerButtons>
                </div>
            </div>
        </div>
    )
    
}

export default AlbumInside

