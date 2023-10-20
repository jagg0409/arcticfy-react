import './infoSong.css'

const albumImg = require.context('../../img', true)

const InfoSong = (props) =>{
    return(
        <div class="info-song">
                        <img src={albumImg(`./${props.name}.jpg`)} id="album" />
                        <h2 id="song-name" class="song-name">"{props.name}"</h2>
                        <p id="song-author" class="song-author">-Arctic Monkeys-</p>
                        <div class="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
    )
}
export default InfoSong
