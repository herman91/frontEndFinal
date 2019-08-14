import React from 'react';
import './App.css';
import Nav_bar from './Components/navbar(old).js'
import HomePage from './Components/HomePage.js'
import OurMenu from './Components/OurMenu.js'
import Plans from './Components/Plans.js'
import About from './Components/About.js'

import Footer from './Components/footer.js'
import {Route,NavLink}from 'react-router-dom'
import Nav_bar1 from './Components/navbar_bootst'


function App() {
    return (
        <div className="App">


            <Nav_bar/>

            <Route path="/" exact component={HomePage} />
            <Route path="/OurMenu" component={OurMenu} />
            <Route path="/About" component={About} />
            <Route path="/Plans" component={Plans} />

            <Footer/>
        </div>

    );
}

export default App;
