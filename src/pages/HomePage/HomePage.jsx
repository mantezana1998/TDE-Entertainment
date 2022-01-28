import React from 'react';
import './HomePage.css'

export default function HomePage(){
    return(
        <div className='row'>
            <div className='column'>
                <img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA" height='300px' width='500px'/>
                <img src="https://i.imgur.com/UX6tVOl.jpg" alt="Isaiah Rashad" height='300px' width='500px'/>
            </div>
            <div className='column'>
                <img src="https://i.imgur.com/Xdaojjg.jpg" alt="Ab-Soul" height='300px' width='500px'/>
                <img src="https://i.imgur.com/tcAr2eS.jpg" alt="Kendrick Lamar" height='200px' width='500px'/>
            </div>
            <div className="column">
                <img src="https://i.imgur.com/6Cn0f0r.jpg" alt="Schoolboy Q" height='300px' width='500px'/>
                <img src="https://i.imgur.com/EDlDYwH.jpg" alt="Lance Skiiwalker" height='400px' width='500px'/>
            </div>
            <div className="column">
                <img src="https://i.imgur.com/tqNwdKR.jpg" alt="Zacari" height='350px' width='500px'/>
                <img src="https://i.imgur.com/vTsNt9d.jpg" alt="SiR" height='300px' width='500px'/>
                <img src="https://i.imgur.com/lCjUbRL.jpg" alt="Reason" height='400px' width='500px'/>
            </div>
        </div>
    )
}