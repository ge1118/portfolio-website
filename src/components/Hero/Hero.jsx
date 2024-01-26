import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-left">
                    <div className="intro">
                        <h2>I'm a</h2>
                        <h1>Full Stack Software Developer.</h1>
                    </div>

                    <div className="buttons">
                        <button className="resume">Resume</button>
                        <button className="portfolio">Portfolio</button>
                    </div>
                </div>

                <div className="hero-right">
                    hero-right
                </div>
            </div>
        </div>
    )
}

export default Hero
