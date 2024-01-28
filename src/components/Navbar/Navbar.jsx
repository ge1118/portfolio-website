import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-scroll'
import Logo from '../../images/logo.png'
import { motion } from 'framer-motion'


const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false)
    const [isBlack, setIsBlack] = useState(true)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 800);
        }
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile)

        return () => window.removeEventListener('resize', checkIfMobile);
    }, [])


    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2
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

                {
                    isMobile &&
                    <div className="nav-icon" onClick={() => { setIsMenuShown((prev => !prev)); setIsBlack((prev => !prev)); }}>
                        <i className="fa-solid fa-bars" style={{ color: isBlack ? 'black' : 'white' }}></i>
                    </div>
                }

                {
                    (isMenuShown || !isMobile) ?
                        <motion.ul
                            variants={menuVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.5 }}
                            className="menu">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="nav-menu">
                                    <Link
                                        to={item}
                                        className='menu-links'
                                        onClick={() => setIsMenuShown((prev => !prev))}>
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul> : ''
                }
            </div>
        </div>
    )
}

export default Navbar
