import React from 'react';
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Flexbox from 'flexbox-react';

export default function Layout (){
    return(

        <Flexbox flexDirection="row" minHeight="100vh">

            <Flexbox className="side" width="30%" flexDirection="column">
                <img src="https://i.imgur.com/2by6cBW.jpg" alt="TDE Logo"/>
                <button className="button" role="button">Home</button>
                <br />
                <button className="button" role="button">Artist Name</button>
            </Flexbox>

            <Flexbox width="70%" className="main">
                <Outlet />
            </Flexbox>

        </Flexbox>

    )
}
