import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
// import SimpleReactLightBox from "simple-react-lightbox";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                <Route exact path="/">
                      <About/>
                    </Route>

                    <Route path="/resume">
                      <Resume/>
                    </Route>

                    <Route path="/projects">
                       <Projects/>
                    </Route>
                    <Route path="/blogs">
                    <Blogs/>
                    </Route>
                    <Route path="/contact">
                    <Contact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
