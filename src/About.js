import React, { useState } from 'react'
import './about.css'
import Boxes from './Components/Boxes'
import gif from './Components/loading-splash.gif'
export default function About() {
    const [obj, setObj] = useState("");
    const [loading, setLoading] = useState(false); // New state variable for loading

    async function handleIt() {
        const x = srch;
        const apii = "https://api.quotable.io/search/quotes?query=" + x;
        // const response = await fetch(apii);
        // const xer = await response.json();
        // setObj(xer.results);
        setLoading(true); // Set loading state to true before fetching
        try {
            const response = await fetch(apii);
            const xer = await response.json();
            setObj(xer.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false); // Set loading state to false after fetching
    }
    const [srch, setSrch] = useState([]);
    function handleChange(e) {
        const x = e.target.value;
        setSrch(x);

    }
    return (
        <div className='aboutfeature' >
            <div className="searchbar">
                <input className='inputs' placeholder='Search Here' value={srch} onChange={handleChange} type="text" />
                <button className="srchbtn" onClick={handleIt}>Search</button>
            </div>

            <div className='search-content'>

                {/* {obj && obj.map((item, index) => (
                    <Boxes key={index} valw={item.content} name={item.author} />
                ))} */}
                {loading ? (
                    <div ><img style={{ borderRadius: "50%" }} src={gif} alt="" /></div> // Display loading symbol when loading is true
                ) : (
                    <div className='search-content'>
                        {obj && obj.map((item, index) => (
                            <Boxes key={index} valw={item.content} name={item.author} />
                        ))}
                    </div>
                )}


            </div>

        </div>
    )
}
