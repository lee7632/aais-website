import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Calendar from './Calendar.js';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/about' component={AboutUs}/>
            <Route path='/contact'component={ContactUs}/>
        </Switch>
    </main>
)

export default Main;