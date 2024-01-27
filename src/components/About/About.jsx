import React, { useState } from 'react'
import './About.scss'
import '../../App.scss'
import { experiencesData } from '../../data/experiences'

const About = () => {

    const [expContent, setExpContent] = useState(0);

    return (
        <div>
            <div className="about" id='about'>
                <h1 className="title">About Me</h1>

                <div className="divider">
                    <div className='divider-line-b'></div>
                    <div className="triangle-down-b"></div>
                    <div className='divider-line-b'></div>
                </div>

                <div className="about-content">
                    <div className="about-left">
                        <div className="about-me">
                            <span><i className="fa-solid fa-quote-left"></i></span>
                            <div className="about-me-text">
                                <h2>I'm a <span>full stack developer</span> with a focus on the <span>React</span> and <span>Python</span>,
                                    but still <span>exploring other technologies and frameworks</span> that catch my interest!</h2>
                                <h2>If you're looking for a developer to <span>add to your team</span>, I'd love to hear from you!"</h2>
                            </div>
                            <span><i className="fa-solid fa-quote-right"></i></span>
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="exp-list">
                            {experiencesData.map((experience, i) => (
                                <div
                                    key={i}
                                    onClick={() => { setExpContent(i) }}
                                    className={i === expContent ? 'selected exp-item' : 'exp-item'}
                                >{experience.title}</div>
                            ))}
                        </div>

                        <div className="exp-details" key={expContent}>
                            <div className="position">
                                {experiencesData[expContent].position}
                            </div>
                            <div className="company">
                                {experiencesData[expContent].company}
                            </div>
                            <div className="duration">
                                {experiencesData[expContent].duration}
                            </div>
                            <div className="roles">
                                <ul>
                                    {experiencesData[expContent].roles.map((role, i) => (
                                        <li key={i}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
