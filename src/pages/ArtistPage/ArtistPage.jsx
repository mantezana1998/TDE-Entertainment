import React from 'react';
import './ArtistPage.css';
import Flexbox from 'flexbox-react';

export default function ArtistPage (){
    return(
    <>
        <Flexbox flexDirection="column" minHeight="100vh">
            <Flexbox element="header" width="150vh" height="45%" id="header">
                <img id='artist-picture' src="https://i.imgur.com/e1LznTs.jpg" alt="SZA" height='200px' width='200px'/>
                <h1 id="artist-name">SZA</h1>
            </Flexbox>

            <Flexbox element="footer" height="60%" id="footer">
                Footer
            </Flexbox>
        </Flexbox>
    </>
    )
}