import React from 'react'
import Navbar from '../Navbar/Navbar'
import Resume from '../Resume/Resume'

const ResumePage = () => {
    return (
        <div className='resume-container'>
            <Navbar navType='GoToHome' />
            <Resume />
        </div>
    )
}

export default ResumePage
