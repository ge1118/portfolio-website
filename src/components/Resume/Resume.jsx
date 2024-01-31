import React from 'react'
import './Resume.scss'

const Resume = () => {
    return (
        <div className="resume">
            <a href="/Resume.pdf" download="Leah K. - Resume.pdf" className="download-btn">
                Download My Resume
            </a>
            <iframe src="/Resume.pdf" height='fit-content' />
        </div>
    )
}

export default Resume
