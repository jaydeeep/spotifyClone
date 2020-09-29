import React from 'react';
import "../css/Player.css";
import song from '../song/khariyaat.mp3';
function Player() {
    return (
        <div className="player">
            {/* <h1>player</h1> */}
            <audio controls="controls">
                <source src={song} type="audio/mpeg"></source>
            </audio>
        </div>
    )
}

export default Player
