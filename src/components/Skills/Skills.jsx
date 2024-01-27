import React, { useState } from 'react'
import './Skills.scss'
import html from '../../images/html.png'
import { frontendData } from '../../data/frontend'
import { backendData } from '../../data/backend'
import { toolsData } from '../../data/tools'

const Skills = () => {

    const [isChecked, setIsChecked] = useState('c1');

    const handleRadioChecked = (e) => {
        setIsChecked(e.target.id);
    }

    return (
        <div>
            <div className="skills" id='skills'>
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
                            <div className="card-items">
                                <CardItems data={frontendData} />
                            </div>
                            <div className="row">
                                <div className="icon">1</div>
                                <div className="description">
                                    <h4>Front - End</h4>
                                </div>
                            </div>
                        </label>

                        <RadioInput id='c2' isChecked={isChecked} onChange={handleRadioChecked} />
                        <label htmlFor="c2" className="card">
                            <div className="card-items">
                                <CardItems data={backendData} />
                            </div>
                            <div className="row">
                                <div className="icon">2</div>
                                <div className="description">
                                    <h4>Back - End</h4>
                                </div>
                            </div>
                        </label>

                        <RadioInput id='c3' isChecked={isChecked} onChange={handleRadioChecked} />
                        <label htmlFor="c3" className="card">
                            <div className="card-items">
                                <CardItems data={toolsData} />
                            </div>
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

const CardItems = ({ data }) => (
    data.map((data, i) => (
        <div key={i} className='card-item'>
            <img src={data.logo} alt="" style={{ width: '4rem', height: '4rem' }} />
            <p>{data.skill}</p>
        </div>
    ))
)