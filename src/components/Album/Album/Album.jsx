import React from 'react';
import './Album.css';
import Flexbox from 'flexbox-react';


export default function Album(){
    return(
        <>
        <Flexbox flexDirection="column" minHeight="100vh" width="150vh">
            <Flexbox element="header" height="45%" id="header">
                <h1>guat?</h1>
            </Flexbox>

            <Flexbox element="main" height="40%" id="main" flexDirection='column'>
                <h1>Main</h1>
            </Flexbox>
            
            <Flexbox element="footer" height="40%" id="footer" flexDirection='column'>
                <h1>Bottom</h1>
            </Flexbox>
        </Flexbox>
    </>
    )
}