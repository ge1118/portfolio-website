import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.png'


const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to='home' smooth={true}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <ul className="menu">
                    <li className="nav-menu">
                        <Link to='home' className='menu-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='about' className='menu-links'>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='skills' className='menu-links'>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='projects' className='menu-links'>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='contact' className='menu-links'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
