import React from 'react';
import './Login.css'

const auth = "https://accounts.spotify.com/authorize?client_id=d7423ecd24e8451eaefc590f564bb033&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-follow-modify%20user-follow-read%20user-library-modify%20user-read-email"

export default function Login(){
    return(
        <>
            <div>
                <img src="https://i.imgur.com/SKOOcFi.png" id="spotify-logo" alt="Spotify Logo" width='50%' height='70%'/>
            </div>
            <div className='oauth'>
                <a href={auth}>Connect with Spotify to continue</a>
            </div>
        </>
    )
}