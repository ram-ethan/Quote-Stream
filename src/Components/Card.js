import React, { useState } from 'react'
import img1 from "../Components/arrow.png"
import img2 from './copy.png'
import './card.css'

export default function Card() {
    const api_url = "https://api.quotable.io/random"
    const [data, setData] = useState(getUpdate);

    async function getUpdate() {
        const response = await fetch(api_url);
        console.log(response);
        const xer = await response.json();
        setData(xer);
    }



    function handleCopy() {
        if (navigator.clipboard) {

            navigator.clipboard.writeText(`${data.content} - ${data.author}`).then(() => {
                alert('Quote copied to clipboard');
            }).catch((error) => {
                alert('Failed to copy quote: ' + error);
            });
        } else {
            alert('Clipboard API is not supported in this browser');
        }

    }

    return (
        <div className='container'>
            <div className="heading">
                Quote Of The Day
            </div>
            <div className='cpy' onClick={handleCopy}>
                <img src={img2} alt="" />
            </div>
            <div className="content">
                <div className="quote">
                    " {data.content} "

                </div>
                <div className="author">
                    <button className="copy" onClick={getUpdate}><img src={img1} alt="" /></button>
                    <div className="name">~ {data.author}</div>

                </div>
            </div>
        </div>
    )
}
