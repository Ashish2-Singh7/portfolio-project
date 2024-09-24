import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FiAlignRight } from 'react-icons/fi'
import { BsCaretRightFill } from 'react-icons/bs'
import { useState } from 'react';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='NavWhole'>
            <div className="leftNav">Code-Pirates.</div>
            <div className={`rightNav ${!navbar ? '' : 'menu-burger'}`}>
                <div className="nav-item"><li onClick={() => { setNavbar(false) }}><Link to="/">Home</Link></li></div>
                <div className="nav-item"><li onClick={() => { setNavbar(false) }}><Link to="/about">About</Link></li></div>
                <div className="nav-item"><li onClick={() => { setNavbar(false) }}><Link to="/contact">Contact</Link></li></div>
                <div className="nav-item"><li onClick={() => { setNavbar(false) }}><Link to="/work">Work</Link></li></div>
            </div>
            <div className="menu">
                <div className='hamBurger' onClick={() => { setNavbar(!navbar) }}>
                    {!navbar ? <FiAlignRight /> : <BsCaretRightFill />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
