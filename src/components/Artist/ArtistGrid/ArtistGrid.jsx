import React from 'react'; 
import './ArtistGrid.css';

export default function ArtistGrid (){
    return (
        <div className='row'>
            <div className='column'>
                <a href="/artist/id"><img src="https://i.imgur.com/e1LznTs.jpg" alt="SZA" height='300px' width='500px'/></a>
                <a href="/artist/id"><img src="https://i.imgur.com/lCjUbRL.jpg" alt="Reason" height='400px' width='500px'/></a>
            </div>
            <div className='column'>
                <a href="/artist/id"><img src="https://i.imgur.com/UX6tVOl.jpg" alt="Isaiah Rashad" height='300px' width='500px'/></a>
                <a href="/artist/id"><img src="https://i.imgur.com/p74Ib0Bl.jpg" alt="Kendrick Lamar" height='400px' width='500px'/></a>
            </div>
            <div className="column">
                <a href="/artist/id"><img src="https://i.imgur.com/6Cn0f0r.jpg" alt="Schoolboy Q" height='400px' width='600px'/></a>
                <a href="/artist/id"><img src="https://i.imgur.com/EDlDYwH.jpg" alt="Lance Skiiwalker" height='400px' width='500px'/></a>
            </div>
            <div className="column">
                <a href="/artist/id"><img src="https://i.imgur.com/Xdaojjg.jpg" alt="Ab-Soul" height='300px' width='500px'/></a>
                <a href="/artist/id"><img src="https://i.imgur.com/vTsNt9d.jpg" alt="SiR" height='300px' width='500px'/></a>
                <a href="/artist/id"><img src="https://i.imgur.com/2by6cBW.jpg" alt="TDE Logo"/></a>
            </div>
        </div>
    )
}