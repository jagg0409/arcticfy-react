
import AudioPlayer from '../audio-player-master/src/audioplayer'

import './Albumstyle.css'

const AlbumInside = (props) => {   
  
  const noSpace = (name) =>  name.split(" ").join("");
  const tracks = [
      {
        url: `https://arcticfy-react.vercel.app/${props.song1}.mp3`,
        title: `${props.name} - ${props.song1}`,
        tags: [props.song1],
      },
      {
        url: `https://arcticfy-react.vercel.app/${props.song2}.mp3`,
        title: `${props.name} - ${props.song2}`,
        tags: [props.song2],
      },
      {
        url: `https://arcticfy-react.vercel.app/${props.song3}.mp3`,
        title: `${props.name} - ${props.song3}`,
        tags: [props.song3],
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