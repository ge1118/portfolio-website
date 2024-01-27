import React from 'react'
import './Footer.scss'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <p>© 2024 Leah All rights reserved</p>
            </div>
            <div>
                <Link to='home' className='back-to-top'>
                    <p>BACK TO TOP</p>
                    <i className="fa-solid fa-angle-up"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer
