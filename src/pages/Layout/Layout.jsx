import React from 'react';

export default function Layout (){
    return(
        <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr"}}>
                <div 
                style={{
                    borderRight: '2px solid black', 
                    height: '100vh', 
                    margin: 0
                    }}>
                        <img src="https://i.imgur.com/2by6cBW.jpg" height='200px' width='400px' />
                </div>
                <div>Column 2</div>
            </div>
        </>
    )
}