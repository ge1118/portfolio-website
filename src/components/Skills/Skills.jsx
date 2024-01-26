import React, { useState } from 'react'
import './Skills.scss'

const Skills = () => {

    const [isChecked, setIsChecked] = useState('c1');

    const handleRadioChecked = (e) => {
        setIsChecked(e.target.id);
    }

    return (
        <div>
            <div className="skills">
                <h1 className="title">Skills</h1>

                <div className="divider">
                    <div className='divider-line-d'></div>
                    <div className="triangle-down-d"></div>
                    <div className='divider-line-d'></div>
                </div>

                <div className="cards-wrapper">
                    <div className="cards-container">
                        <RadioInput id='c1' isChecked={isChecked} onChange={handleRadioChecked} />
                        <label htmlFor="c1" className="card">
                            <div className="row">
                                <div className="icon">1</div>
                                <div className="description">
                                    <h4>Front - End</h4>
                                </div>
                            </div>
                        </label>

                        <RadioInput id='c2' isChecked={isChecked} onChange={handleRadioChecked} />
                        <label htmlFor="c2" className="card">
                            <div className="row">
                                <div className="icon">2</div>
                                <div className="description">
                                    <h4>Back - End</h4>
                                </div>
                            </div>
                        </label>

                        <RadioInput id='c3' isChecked={isChecked} onChange={handleRadioChecked} />
                        <label htmlFor="c3" className="card">
                            <div className="row">
                                <div className="icon">3</div>
                                <div className="description">
                                    <h4>Tools</h4>
                                </div>
                            </div>
                        </label>
                    </div>
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