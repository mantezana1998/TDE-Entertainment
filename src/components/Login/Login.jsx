import React from 'react';

const auth = "https://accounts.spotify.com/authorize?client_id=d7423ecd24e8451eaefc590f564bb033&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-follow-modify%20user-follow-read%20user-library-modify%20user-read-email"

export default function Login(){
    return(
        <div>
            <a href={auth}>Login Authentication</a>
        </div>
    )
}