import React from 'react';
import {NavLink}from 'react-router-dom'
import '../css/navbar_b.css'

function Nav_bar1() {
    return (

        <nav>
            <ul >
                <li>
                    <NavLink to="/" >StarFood</NavLink>
                </li>
                <li>
                    <NavLink to="/OurMenu">OurMenu</NavLink>
                </li>
                <li>
                    <NavLink to="/Plans">Plans</NavLink>
                </li>
                <li>
                    <NavLink to="/homepage">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav_bar1;
