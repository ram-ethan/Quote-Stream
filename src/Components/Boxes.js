import React from 'react'
import './boxes.css'
export default function Boxes({ key, valw, name }) {
    console.log(valw);
    return (
        <div className='malik'>
            <div className="search_quote">
                {valw}
            </div>
            <div className="author_name">
                {name}
            </div>
        </div>
    )
}
