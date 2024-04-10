import React from 'react';
import Header from './Component/Header.js';
// import Footer from './Component/Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Blog from './Pages/Blog.js';
import Contact from './Pages/Contact.js';
import Service from './Pages/Service.js';
import {BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Router>
   <Route path='/home' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/blog' element={<Blog/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/service' element={<Service/>}></Route>
   </Router>
   </BrowserRouter>
  );
}

export default App;
