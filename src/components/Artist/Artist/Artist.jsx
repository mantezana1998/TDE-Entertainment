import React from 'react';
import './Artist.css';
import Flexbox from 'flexbox-react';
import ArtistHeader from '../../Artist/ArtistHeader/ArtistHeader';
import Discography from '../Discography/Discography';

export default function Artist(){
    return(
        <>
        <Flexbox flexDirection="column" minHeight="100vh">
            <Flexbox element="header" width="150vh" height="45%" id="header">
                <ArtistHeader />
            </Flexbox>

            <Flexbox element="footer" height="60%" id="footer" flexDirection='column'>
                <Discography />
            </Flexbox>
        </Flexbox>
    </>
    )
}