import React from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.png'
import { motion } from 'framer-motion'


const Navbar = () => {
    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        },
    }

    return (
        <div>
            <div className="navbar" id='home'>
                <div className="logo">
                    <Link to='home' smooth={true}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <motion.ul
                    variants={menuVariants}
                    initial='hidden'
                    animate='visible'
                    className="menu">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((item, i) => (
                        <motion.li
                            key={i}
                            variants={itemVariants}
                            className="nav-menu">
                            <Link to={item} className='menu-links'>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default Navbar
