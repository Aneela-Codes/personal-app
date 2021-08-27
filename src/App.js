import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
// import About from './components/About';
// import Resume from './components/Resume';
// import Projects from './components/Projects';
// import Navbar from './components/Navbar';
// import Blogs from './components/Blogs';
// import Contact from './components/Contact';
// import TechTalks from './components/TechTalks';
// import Certifications from './components/Certifications';
// import SocialLife from './components/SocialLife';

function App() {
  return (
    <Router>
        <div className="App">
              <div className="app_container-fluid container-fluid">
                <div className="app_row row ">
                    <div className="col-lg-3 col-md-4">
                        <Sidebar/>
                  </div>
                    <div className="col-lg-9 col-md-8">
                    <div className="app_main">
                    <Main/>
             
                    <Switch>
                    {/* <Navbar/>
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
                    </Route> */}
                    {/* <Route path="/sociallife">
                    <SocialLife/>
                    </Route> 
                    <Route path="/certifications">
                    <Certifications/>
                    </Route> 
                    <Route path="/techtalks">
                    <TechTalks/>
                    </Route>  */}

                    <Route>
                      <Redirect to='/'>
                        
                      </Redirect>
                    </Route>
                    </Switch>
                    </div>
                   
                  </div>
                </div>
              </div>
          </div>
    </Router>
  );
}

export default App;
