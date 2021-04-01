import { Router } from '@reach/router';
import React from 'react'
import NotFound from '../Pages/404';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Service from '../Pages/Service';

function AppRoute() {
    return (
        <Router>

        <Home path="/" />
        <About path="/about" />
        <Service path="/service"/>
        <Contact path="/contact"/>
        <NotFound default />
      </Router>
    )
}

export default AppRoute;
