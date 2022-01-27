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
                        <img src="https://i.imgur.com/2by6cBW.jpg" height='200px' width='400px' style={{marginTop: '40%'}}/>
                </div>
                <div>
                    <img src="https://i.imgur.com/UX6tVOl.jpg" alt="Isaiah Rashad" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/Xdaojjg.jpg" alt="Ab-Soul" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/lCjUbRL.jpg" alt="Reason" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/tcAr2eS.jpg" alt="Kendrick Lamar" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/6Cn0f0r.jpg" alt="Schoolboy Q" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/EDlDYwH.jpg" alt="Lance Skiiwalker" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/tqNwdKR.jpg" alt="Zacari" height='300px' width='500px'/>
                    <img src="https://i.imgur.com/vTsNt9d.jpg" alt="SiR" height='300px' width='500px'/>
                </div>
            </div>
        </>
    )
}