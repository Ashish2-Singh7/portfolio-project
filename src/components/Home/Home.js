import React from 'react';
import './home.css'
import rocket from '../../assets/rocket.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>
            <div className="light">
                <img src={rocket} alt="" />
            </div>
            <div className="whole">
                <div className="containerHome">
                    <div className="left">
                        <div className="head"><p>Hey! I am Ashish.
                            <br /> <span>I build MERN applications that can run across platforms & devices</span></p></div>
                        <div className="smDesc"><p><a href='https://www.fiverr.com/codepirates?public_mode=true' target='_blank'>As I am new to Fiverr you can hire me for free by contacting me at my Gmail account.</a></p></div>
                    </div>
                </div>
                <div className="contact">
                    <div className="email">All rights reserved
                        <br /> ©2022 Ashish Singh
                    </div>
                    <div className="socialMedia">Contact me
                        <br /> code.pirates.cpp
                        @gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
