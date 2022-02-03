import React from 'react';
import './Artist.css';
import Flexbox from 'flexbox-react';
import ArtistHeader from '../../Artist/ArtistHeader/ArtistHeader'

export default function Artist(){
    return(
        <>
        <Flexbox flexDirection="column" minHeight="100vh">
            <Flexbox element="header" width="150vh" height="45%" id="header">
                <ArtistHeader />
            </Flexbox>

            <Flexbox element="footer" height="60%" id="footer" flexDirection='column'>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA"   class="album-pic" height='200px' width='200px'/>
            </Flexbox>
        </Flexbox>
    </>
    )
}