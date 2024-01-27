import React, { useEffect, useRef } from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import TagCloud from 'TagCloud';

const Hero = () => {

    const sphereMounted = useRef(false);

    useEffect(() => {
        if (sphereMounted.current === false) {
            const tags = [
                'HTML', 'CSS', 'JavaScript',
                'Node.js', 'React', 'Redux',
                'Git', 'Express.js', 'Python',
                'MongoDB', 'MySQL', 'C#',
                'Azure', 'GitHub', 'Rest API',
                'Machine Learning', 'TensorFlow', 'AWS',
            ];

            const tagCloud = TagCloud('.sphere', tags, {
                radius: 330,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 135,
                keep: true,
            });

            return () => sphereMounted.current = true
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className="hero" id='home'>
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
                    <span className="sphere"></span>
                </div>
            </div>
        </div>
    )
}

export default Hero
