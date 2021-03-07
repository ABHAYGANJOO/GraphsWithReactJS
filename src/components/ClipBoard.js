import React, { useEffect, useState } from 'react'

function ClipBoard() {

    const [queryvalue, setqueryvalue] = useState('');

    const copyToClipboard = () => {
        const el = document.getElementById("copyme");
        el.select();
        // console.log(el)
        document.execCommand("copy");
    }

    useEffect(() => {
        for (let i = 0; i < window.location.search.length; i++) {
            if ((window.location.search[i] === '?' && window.location.search[i + 1] === 'q' && window.location.search[i + 2] === '=')
                || (window.location.search[i] === '&' && window.location.search[i + 1] === 'q' && window.location.search[i + 2] === '=')) {
                let idx = window.location.search.indexOf("&", i + 1);
                setqueryvalue(window.location.search.substring(i + 3, idx === -1 ? 10000 : idx));
            }
        }
    }, [])
    return (
        <div>
            <h3>Instructions:</h3>
            <h3>Please change the URL of the page to something like this:</h3>
            <h3>http://localhost:3000/clipboard?q=A1B2C3</h3>
            <h3>OR</h3>
            <h3>http://localhost:3000/clipboard?w=home&q=A1B2C3D4</h3>
            <div style={{ margin: '40px' }}>
                <input id="copyme" value={queryvalue} 
                style={{ "textAlign": "center", height: '50px', backgroundColor : '#CCFFCC' , border: '1px solid #CCFFCC'}}></input>
            </div>
            <button className="ui primary button" onClick={(e) => { copyToClipboard(e) }}>Copy Clipboard</button>

        </div>
    )
}

export default ClipBoard


// http://localhost:3000/clipboard?q=9000&Q=98 op= 9000
//http://localhost:3000/clipboard?x=9000&q=98 op 98