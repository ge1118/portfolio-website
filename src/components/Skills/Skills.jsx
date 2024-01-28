import React, { useState } from 'react'
import './Skills.scss'
import html from '../../images/html.png'
import { frontendData } from '../../data/frontend'
import { backendData } from '../../data/backend'
import { toolsData } from '../../data/tools'
import { motion } from 'framer-motion'

const Skills = () => {

    const parentVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3,
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

    const [isChecked, setIsChecked] = useState('c1');

    const handleRadioChecked = (e) => {
        setIsChecked(e.target.id);
    }

    const dataWithLabels = [
        { label: "frontend", data: frontendData },
        { label: "backend", data: backendData },
        { label: "tools", data: toolsData }
    ];

    return (
        <div>
            <div className="skills" id='skills'>
                <motion.h1
                    className="title"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Skills</motion.h1>

                <div className="divider">
                    <div className='divider-line-d'></div>
                    <div className="triangle-down-d"></div>
                    <div className='divider-line-d'></div>
                </div>

                <div className="cards-wrapper">
                    <motion.div
                        className="cards-container"
                        variants={parentVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ amount: 0.5 }}>
                        {dataWithLabels.map((item, i) => (
                            <>
                                <RadioInput id={`c${i + 1}`} isChecked={isChecked} onChange={handleRadioChecked} />
                                <motion.label htmlFor={`c${i + 1}`} className="card-label" variants={childVariants}>
                                    <div className="card-items">
                                        <CardItems data={item.data} />
                                    </div>
                                    <div className="row">
                                        <div className="icon">{i + 1}</div>
                                        <div className="description">
                                            <h4>{item.label}</h4>
                                        </div>
                                    </div>
                                </motion.label>
                            </>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills

const RadioInput = ({ id, isChecked, onChange }) => (
    <input
        type="radio"
        name='slide'
        id={id}
        onChange={onChange}
        checked={isChecked === id}
    />
)

const CardItems = ({ data }) => (
    data.map((data, i) => (
        <div key={i} className='card-item'>
            <img src={data.logo} alt="" style={{ width: '4rem', height: '4rem' }} />
            <p>{data.skill}</p>
        </div>
    ))
)