import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div className='home-container'>
            <section><Hero /></section>
            <section><About /></section>
            <section><Skills /></section>
            <section><Projects /></section>
            <section><Contact /></section>
        </div>
    )
}

export default Home
