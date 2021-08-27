import {useState,React, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = () => {

    const [active, setActive] = useState('About ')

    useEffect ( () => {
        let currentURL = window.location.href;

        if(currentURL.endsWith('/')){
            setActive('About')
        }
        else if (currentURL.endsWith('/projects')){
            setActive('Projects')
        }
        else if (currentURL.endsWith('/resume')){
            setActive('Resume')
        }
    }, [active])

    const navbar_variants = {
        hidden: {
            y: '-30vh',
            opacity:0
        },
        visible: {
            y: 1,
            opacity:1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div variants={navbar_variants} initial="hidden" animate="visible">
            <nav>
                <div className="main_heading active">
                    <h2>{active}</h2>
                </div>
                <ul className="menu" >
                    { active !=='About' &&
                    <Link to="/">
                     <div onClick={ () => setActive('About')}> <h6>About</h6> </div>
                    </Link>
                    }
                    {
                    active !== 'Resume' ?
                    <Link to="/resume">
                    <div onClick={ () => setActive('Resume')}> <h6>Resume</h6> </div>
                    </Link>:null    
                    }
                    {
                        active !== 'Projects' && 
                        <Link to="projects">
                        <div onClick={ () => setActive('Projects')}> <h6>Projects</h6> </div>

                        </Link>
                    }    

                    {/* {
                        active !== 'Blogs' && 
                        <Link to="Blogs">
                        <div onClick={ () => setActive('Blogs')}> <h6>Blogs</h6> </div>

                        </Link>
                    }  */}

                    {
                        active !== 'Contact' && 
                        <Link to="Contact">
                        <div onClick={ () => setActive('Contact')}> <h6>Contact</h6> </div>

                        </Link>
                    } 

                  
               </ul>
            </nav>
        </motion.div>
    )
}

export default Navbar
