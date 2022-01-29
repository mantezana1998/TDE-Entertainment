import React from 'react';
import { Grid, Box } from 'grommet';
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout (){
    return(
        <Grid
            areas={[
            { name: 'side', start: [0, 0], end: [1, 0] },
            { name: 'main', start: [1, 0], end: [3, 0] },
            ]}
            columns={['medium', 'large']}
            rows={['xxxsmall']}
            gap='xxsmall'
            >
            
            <Box gridArea='side' className='side'>
                <img src="https://i.imgur.com/2by6cBW.jpg" alt="TDE Logo"/>
            </Box>
            <Box gridArea='main' className='main'>
                <Outlet />
            </Box>
        </Grid>
    )
}