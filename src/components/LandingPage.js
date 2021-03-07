import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/Capture.PNG'

function LandingPage() {
    return (
        <div>
            <div className="ui stackable large inverted menu" style={{height : '60px'}}>
                <div className="item">
                    <img src={`${img}`} />
                </div>
                <Link to= '/third_party' className="item">Third Party API</Link>
                <Link to= '/clipboard'  className="item">ClipBoard</Link>
                <Link to= '/optional'  className="item">Optional Assignment</Link>
            </div>
        </div>
    )
}

export default LandingPage;
