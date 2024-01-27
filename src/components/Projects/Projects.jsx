import React from 'react'
import './Projects.scss'

const Projects = () => {
    return (
        <div>
            <div className="projects" id='projects'>
                <h1 className="title">Projects</h1>

                <div className="divider">
                    <div className='divider-line-b'></div>
                    <div className="triangle-down-b"></div>
                    <div className='divider-line-b'></div>
                </div>

                <div className="projects-wrapper">
                    <div className="project">
                        <div className="front">
                            <p className="project-type">FullStack Project</p>
                            <div className="front-bottom">
                                <p className="project-title">Movie Recommendation WebApp</p>
                                <p className="project-skills">HTML, CSS, JavaScript, Python, Flask, TensorFlow, SQLite</p>
                            </div>
                        </div>

                        <div className="back">
                            <p className='project-description'>Developed a movie recommendation web app with HTML, JavaScript, CSS, Python, and Flask.
                                Implemented a machine learning-based recommendation engine and used SQLite for user data management,
                                enabling personalized suggestions and a favorites feature.</p>
                            <div className="external-links">
                                <a href="https://github.com/ge1118/movie-recommendation-web-app" target="_blank">GitHub</a>
                                <a href="" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="front">
                            <p className="project-type">Frontend Project</p>
                            <div className="front-bottom">
                                <p className="project-title">Portfolio Website</p>
                                <p className="project-skills">HTML, SASS, JavaScript, React</p>
                            </div>
                        </div>

                        <div className="back">
                            <p className='project-description'>Design a portfolio website using HTML, JavaScript, SASS, and React,
                                integrated with email.js, TagCloud.js, and Framer Motion for enhanced interactivity.
                                The site provides a comprehensive view of my professional journey and accomplishments.</p>
                            <div className="external-links">
                                <a href="https://github.com/ge1118/portfolio-website" target="_blank">GitHub</a>
                                <a href="" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="front">
                            <p className="project-type">Frontend Project</p>
                            <div className="front-bottom">
                                <p className="project-title">FitClub Website</p>
                                <p className="project-skills">HTML, CSS, JavaScript, React</p>
                            </div>
                        </div>

                        <div className="back">
                            <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt molestiae labore ducimus! Fugit, dignissimos? Magni iste nam ratione? Maiores,
                                praesentium inventore. Dignissimos error veritatis ea incidunt eius itaque omnis odio!</p>
                            <div className="external-links">
                                <a href="https://github.com/ge1118/fitclub-gym-website" target="_blank">GitHub</a>
                                <a href="https://fitclub-gym-webapp.netlify.app/" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
