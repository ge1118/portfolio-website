import React, { useEffect, useRef } from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import TagCloud from 'TagCloud';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

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

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const childVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hoverButton: {
            scale: 1.1,
            color: '#296A78',
            fontWeight: 600,
            borderColor: '#296A78',
        },
        hoverText: {
            color: '#296A78',
        }
    }

    return (
        <div>
            <Navbar />
            <div className="hero">
                <motion.div
                    variants={parentVariants}
                    initial='hidden'
                    animate='visible'
                    className="hero-left">
                    <div className="intro">
                        <motion.h2 variants={childVariants} >
                            {["I'm ", 'a'].map((word, i) => (
                                <motion.span
                                    variants={childVariants}
                                    whileHover='hoverText'
                                    key={i}>{word}</motion.span>
                            ))}
                        </motion.h2>
                        <motion.h1 variants={childVariants} >
                            {['Full ', 'Stack ', 'Software ', 'Developer.'].map((word, i) => (
                                <motion.span variants={childVariants}
                                    whileHover='hoverText'
                                    key={i}>{word}</motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <motion.div
                        className="buttons"
                        variants={childVariants}>
                        <motion.a
                            className='btn'
                            variants={childVariants}
                            whileHover='hoverButton'
                            href="/Resume.pdf"
                            download='Resume.pdf'>
                            Resume
                        </motion.a>
                        <motion.div className='btn' variants={childVariants} whileHover='hoverButton'>
                            <Link to='projects'>
                                Projects
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="hero-right">
                    <span className="sphere"></span>
                </motion.div>
            </div >
        </div >
    )
}

export default Hero
