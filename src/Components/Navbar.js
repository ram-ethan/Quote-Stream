import React from 'react'
import './navbar.css'

import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='containeras'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="/">Quotee</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" href="/">Pricing</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
