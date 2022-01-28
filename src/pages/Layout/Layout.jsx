import React from 'react';
import { Grid, Box } from 'grommet';
import { Outlet } from 'react-router-dom'

export default function Layout (){
    return(
        <Grid
            areas={[
            { name: 'side', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [2, 0] },
            ]}
            columns={['medium', 'large']}
            rows={['large']}
            gap='xxsmall'
            >
            
            <Box gridArea='side' background='red' >
                <Outlet />
            </Box>
            <Box gridArea='main' background='blue'>
                <Outlet />
            </Box>
        </Grid>
    )
}