import './album-style.css'
import './albums-components/player.css'

import AudioPlayer from '../audio-player-master/src/audioplayer'


const AlbumInside = (props) => {   
  

  const tracks = [
      {
        url: "https://arcticfy-react.vercel.app/Arabella.mp3",
        title: `Arctic monkeys - Arabella`,
        tags: ["house"],
      },
      {
        url: "https://audioplayer.madza.dev/bodypaint.mp3",
        title: `Arctic monkeys - bodypaint`,
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