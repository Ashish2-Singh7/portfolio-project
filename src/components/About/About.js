import React from 'react';
import './about.css'

import developerAbout from '../../assets/developer about.png'

function About() {
    return (
        <div>
            <div className='a'>
                <div className="a-left">
                        <img src={developerAbout} alt="" className="a-img" />
                </div>
                <div className="a-right">
                    <div className="text">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-sub">
                    Hey! I am Ashish.
                    </p>
                    <p className="a-desc">
                        As a Full-stack web developer with 1 year of experience in HTML, CSS, JavaScript, Node Js, and other mentioned technologies. Can build a website according to the latest web standards. I am also good at designing Front-End by custom CSS. I will give you great customer service as a Full-stack Developer, which I used to make sure to give the best experience to my clients. My goal is to do my best work and satisfy your needs. 
                    </p>
                    </div>
                    <div className="AboutContainer">
                <h2>Skills</h2>
                <div className="skills">
                    <span className="Name">HTML,CSS</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "85%" }}></div>
                    </div>
                    <span className="Value">85%</span>
                </div>

                <div className="skills">
                    <span className="Name">React</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "90%" }}></div>
                    </div>
                    <span className="Value">90%</span>
                </div>

                <div className="skills">
                    <span className="Name">Javascript</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "95%" }}></div>
                    </div>
                    <span className="Value">95%</span>
                </div>

                <div className="skills">
                    <span className="Name">Express</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "75%" }}></div>
                    </div>
                    <span className="Value">75%</span>
                </div>

                <div className="skills">
                    <span className="Name">Node js</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "85%" }}></div>
                    </div>
                    <span className="Value">85%</span>
                </div>

                <div className="skills">
                    <span className="Name">MongoDB</span>
                    <div className="percent">
                        <div className="progress" style={{ width: "75%" }}></div>
                    </div>
                    <span className="Value">75%</span>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default About;
