import './SingleStyle.css'
import InfoSong from './albums-components/infoSongs'
import PlayerButtons from './albums-components/playerButtons-single'
import PlayerProgress from './albums-components/playerProgres'



const SingleInside = (props) => {        
    
    
    return (
        
        <div id="barras-audio">
          
            <div class="container-music">
                <div class="player">
                    <InfoSong name={props.name} ></InfoSong>
                    <PlayerProgress></PlayerProgress>
                    <PlayerButtons></PlayerButtons>
                </div>
            </div>
        </div>
    )
    
}

export default SingleInside