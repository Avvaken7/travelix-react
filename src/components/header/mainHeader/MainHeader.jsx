import React from 'react';

import './mainHeader.css';


const MainHeader = () => {
    return (
        <main className='container'>
            <div className="square"></div>
            <div className="main_text">
                <h1 className="main_text-title">Happiness Is <span>Travelling</span></h1>
                <h2 className="main_text-subtitle">No matter where in the world you want to go, we can help get you there</h2>
                <p className="descr-text main_text-description">Travel Agency Threats and Opportunities. The Perspective of Successful OwnersJoin the leader in small-ship cruising on the Great Lakes, and enjoy fabulous inclusions such as a pre-voyage hotel.</p>
            </div>
            <div className="main_img">
                <img src="../images/sun_center.png" alt="sun" />
            </div>
        </main>

    )
}

export default MainHeader;