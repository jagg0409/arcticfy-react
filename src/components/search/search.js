import AudioPlayer from "../audio-player-master/src/audioplayer"
import { Routes, Route } from "react-router-dom"
import '../albums-inside/SingleStyle.css'
import tracks from "../playlist/all tracks"

const Playlist = () => {

    
    return (
        <Routes>

            <Route exact path={`/search`} element={
                <div id="barras-audio">
                    <div class="container-music">
                        <div class="player">
                            <AudioPlayer 
                            trackList={tracks} 
                            includeTags={false}
                            autoPlayNextTrack={false}
                            ></AudioPlayer>
                        </div>
                    </div>
                </div>
            } />

        </Routes>
    )
}

export default Playlist