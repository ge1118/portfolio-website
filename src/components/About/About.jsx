import React from 'react'
import './About.scss'
import '../../App.scss'

const About = () => {
    return (
        <div>
            <div className="about" >
                <h1 className="title">About Me</h1>

                <div className="divider">
                    <div className='divider-line-b'></div>
                    <div className="triangle-down-b"></div>
                    <div className='divider-line-b'></div>
                </div>

                <div className="about-me">
                    <span><i className="fa-solid fa-quote-left"></i></span>
                    <div className="about-me-text">
                        <h2>I'm a full stack developer with a focus on the React and Python,
                            but still exploring other technologies and frameworks that catch my interest!</h2>
                        <h2>If you're looking for a developer to add to your team, I'd love to hear from you!"</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
