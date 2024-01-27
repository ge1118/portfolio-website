import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Footer from '../Footer/Footer'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t1jvpck', 'template_63vbd9h', form.current, 'WTJd8eCZYGJyVwxql')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="contact" id="contact">
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <p>Say Hi to Me</p>
                    </div>

                    <div className="contact-mid">
                        <h1 className='title'>CONTACT</h1>

                        <hr />

                        <div className="info-list">
                            <div className="info">
                                <p>Name</p>
                                <p>Leah K.</p>
                            </div>
                            <div className="info">
                                <p>Email</p>
                                <p>greean246@gmail.com</p>
                            </div>
                            <div className="info">
                                <p>Phone</p>
                                <p>+1 4168962757</p>
                            </div>
                            <div className="info">
                                <p>
                                    <a href="https://github.com/ge1118" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </p>
                            </div>
                            <div className="info">
                                <p>
                                    <a href="https://www.linkedin.com/in/gaeun-kim-660990205/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="contact-right">
                        <h4>Feel free to contact and I will get back to you as soon as I can.</h4>

                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder='name' />
                            <input type="email" name="user_email" placeholder='email' />
                            <textarea name="message" placeholder='write your message' />
                            <input type="submit" value="Send" className='send' />
                        </form>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
