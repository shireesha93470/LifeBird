import React from 'react';
import Home from '../Homepage/home'
import  NavBar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import {Route, Routes} from 'react-router';

function Routers() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path = '/' exact element = {<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Routers;
