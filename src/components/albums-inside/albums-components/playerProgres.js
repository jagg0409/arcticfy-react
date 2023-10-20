const PlayerProgress = () =>{
    return(
        
        <div class="player-progress">
        <div class="progress-values">
            <span id="player-current-time">--:--</span>
            <span id="player-duration">--:--</span>
        </div>
        <input type="range" id="player-progress" value="50" />
    </div>
        
    )
}
export default PlayerProgress