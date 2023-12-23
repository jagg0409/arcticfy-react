import AudioPlayer from "../audio-player-master/src/audioplayer"
import { Routes, Route } from "react-router-dom"
import '../albums-inside/Albumstyle.css'
import tracks from "./all tracks"

const Playlist = () => {

    
    return (
        <Routes>

            <Route exact path={`/playlist`} element={
                <div id="barras-audio">
                            <p className="playlist-text">Crea tu playlist seleccionando las canciones abajo</p>  
                    <div class="container-music">
                        <div class="player">
                            <AudioPlayer trackList={tracks} ></AudioPlayer>
                        </div>
                    </div>
                </div>
            } />

        </Routes>
    )
}

export default Playlist