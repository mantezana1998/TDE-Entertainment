import React from 'react';
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Flexbox from 'flexbox-react';
import Buttons from '../../components/Buttons/Buttons'

export default function Layout (){
    return(
        <Flexbox flexDirection="row" minHeight="100vh">

            <Flexbox className="side" width="30%" flexDirection="column">
                <img src="https://i.imgur.com/2by6cBW.jpg" alt="TDE Logo"/>
                <br />
                <Buttons />
            </Flexbox>

            <Flexbox width="70%" className="main">
                <Outlet />
            </Flexbox>

        </Flexbox>
    )
}
