
const PlayerButtons = () =>{
    
    return(
        <div class="player-buttons">
                        <button id="btn-repeat" class="btn btn-repeat" >
                            <i class="bi bi-repeat"></i>
                        </button>
                       
                        <button id="btn-play" class="btn btn-play" >
                            <i id="btn-play-icon" class="bi bi-play-fill"></i>
                        </button>
                        
                        <div class="dropdown">
                            <button id="btn-volume" class="btn btn-volume">
                                <i class="bi bi-volume-up-fill"></i>
                            </button>

                            <div class="dropdown-content">
                                <input type="range" id="player-volume" value="1" min="0" max="1" step="0.01" />
                            </div>
                        </div>
                    </div>
    )
    
    
}



export default PlayerButtons