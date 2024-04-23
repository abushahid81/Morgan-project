import React from 'react';
import "./App.css";
// import "./Assets";
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
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
                <Route exact path="/"><Home /></Route>
                <Route path="/About"><About /></Route>
                <Route path="/Blog"><Blog /></Route>
                <Route path="/Contact"><Contact /></Route>
                <Route path="/Service"><Service /></Route>
            </Switch>
            <Footer/>

        </Router> 
  );
}

export default App;
