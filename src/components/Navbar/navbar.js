import React from 'react'
import logo from '../../logo.svg';
import './navbar.css';

export default function navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo"/>

            <ul className="nav-link">
                <li>
                    <a href="/" className="nav-item">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-item">About</a>
                </li>
                <li>
                    <a href="/" className=" nav-item active">Tours</a>
                </li>
            </ul>
        </nav>
    )
}
