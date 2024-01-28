import React, { useState } from 'react'
import './About.scss'
import '../../App.scss'
import { experiencesData } from '../../data/experiences'
import { motion } from 'framer-motion'

const About = () => {

    const [expContent, setExpContent] = useState(0);

    const parentVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.5,
            }
        }
    }

    const childVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            delay: 0.4,
        }
    }

    return (
        <div>
            <div className="about" id='about'>
                <div className="about-left">
                    <div className="inner-outline">
                        <h1 className="title">About Me</h1>

                        <div className="about-me">
                            <span><i className="fa-solid fa-quote-left"></i></span>
                            <div className="about-me-text">
                                <h2>I'm a <span>full stack developer</span> with a focus on the <span>React</span> and <span>Python</span>,
                                    but still <span>exploring other technologies and frameworks</span> that catch my interest!</h2>
                                <h2>If you're looking for a developer to <span>add to your team</span>, I'd love to hear from you!"</h2>
                            </div>
                            {/* <span><i className="fa-solid fa-quote-right"></i></span> */}
                        </div>
                    </div>
                </div>

                <motion.div
                    className="about-right"
                    variants={parentVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ amount: 0.5 }}>
                    <div className="exp-header">
                        <motion.h1 variants={childVariants} >Experiences</motion.h1>
                        <hr />
                    </div>

                    <motion.div variants={childVariants} className="exp-list">
                        {experiencesData.map((experience, i) => (
                            <div
                                key={i}
                                onClick={() => { setExpContent(i) }}
                                className={i === expContent ? 'selected exp-item' : 'exp-item'}
                            >{experience.title}</div>
                        ))}
                    </motion.div>

                    <motion.div variants={childVariants} className="exp-details" key={expContent}>
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
                    </motion.div>
                </motion.div>
            </div>
        </div >
    )
}

export default About
