import './album-style.css'
import './albums-components/player.css'

import AudioPlayer from '../audio-player-master/src/audioplayer'


const AlbumInside = (props) => {   
  

  const tracks = [
      {
        url: "https://arcticfy-react.vercel.app/audio/Arabella.mp3",
        title: `Arctic monkeys - Chords of Life`,
        tags: ["house"],
      },
      {
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        title: `Arctic monkeys - Late Night Drive`,
        tags: ["dnb"],
      },
      {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: `Arctic monkeys -ñañ`,
        tags: ["dubstep"],
      }, 
    ];
    

    return (
        
        <div id="barras-audio">
            <div class="container-music">
                <div class="player">
                    <AudioPlayer trackList={tracks} ></AudioPlayer>
                </div>
            </div>
        </div>
    )
    
}

export default AlbumInside