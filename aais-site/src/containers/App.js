import React from 'react';
import Navbar from '../components/Navbar.js';
import Main from './Main.js';
const App = () => (
    <div>
        <Navbar navSettings={"navbar navbar-expand-lg navbar-dark bg-dark"}/>
        <Main />
    </div>
)

export default App;
