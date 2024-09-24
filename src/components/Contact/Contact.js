import React, { useRef } from 'react';
import './contact.css'
import Phone from '../../assets/phone.png'
import send from '../../assets/send.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact() {
    const [done, setDone] = useState(null);
    const [error, setError] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_2axtla4', 'template_96xy20k', formRef.current, 'user_fMFmo0Pq5XWulI0RAHMaD')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
    };

    return (
        <div className='c'>
            <div className="c-big"></div>
            <div className="c-form">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">
                            Let's discuss your project <img src={send} alt="" />
                        </h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                +91 ------------
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                code.pirates.cpp@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                India
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What’s your story?</b> Get in touch. Always available for
                            freelancing if the right project comes along. me.
                        </p>
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea placeholder='Message' name="message" cols="30" rows="15"></textarea>
                            <button className='c-submit'>Submit</button>
                        </form>
                        {done ? <div class="success-msg">
                            <i class="fa fa-check"></i>
                            <p>Successfully Send</p>
                        </div>
                            : <div class="error-msg" style={{ display: !error ? 'none' : 'block' }}>
                                <i class="fa fa-times-circle"></i>
                                <p>Something went wrong</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
