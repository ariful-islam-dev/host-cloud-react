import { Router } from '@reach/router';
import React from 'react'
import NotFound from '../Pages/404';
import About from '../Pages/About';
import Home from '../Pages/Home';

function AppRoute() {
    return (
        <Router>

        <Home path="/" />
        <About path="/about" />
        <NotFound default />
      </Router>
    )
}

export default AppRoute;
