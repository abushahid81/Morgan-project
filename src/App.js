import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import "./Assets";
import Header from './Component/Header.js';
// import Footer from './Component/Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Blog from './Pages/Blog.js';
import Contact from './Pages/Contact.js';
import Service from './Pages/Service.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
     <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blogs">
                    <Blog />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/Service">
                    <Service />
                </Route>
            </Switch>
        </Router> 
  );
}

export default App;
