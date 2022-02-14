import React from 'react';
import './MusicPlayer.css'

export default function MusicPlayer(){
    return(
        <>
            <div className="music-player-card">

                <div className="top-bar">Now Playing</div>
                <div className="song-image">
                    <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA" height='200px' width='200px'/>
                </div>

                <div className="song-info">
                    <p className="name">Broken Clocks</p>
                    <p className="artist">SZA</p>
                </div>

                <div className="progress-area">
                    <div className="progress-bar">
                        <audio src="" id="main-audio"></audio>
                    </div>
                    <div className="song-timer">
                        <span className="current-timer">0:00</span>
                        <span className="max-duration">0:00</span>
                    </div>
                </div>
            
                <div className="controls">
                    <i id="forward" className="material-icons prev">fast_forward</i>
                    <i id="previous" className="material-icons">fast_rewind</i>
                    <i id="play-pause" className="material-icons">play_circled_full</i>
                </div>

            </div>
        </>
    )
}