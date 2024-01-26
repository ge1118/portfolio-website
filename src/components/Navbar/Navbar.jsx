import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to='/'>
                        <img src="images/logo.png" alt="" />
                    </Link>
                </div>

                <ul className="menu">
                    <li className="nav-menu">
                        <Link to='/' className='menu-links'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='/' className='menu-links'>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='/' className='menu-links'>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='/' className='menu-links'>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-menu">
                        <Link to='/' className='menu-links'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
