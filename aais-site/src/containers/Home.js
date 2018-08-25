import React, { Component } from 'react';
import './Home.css';
import '../components/Navbar.js';
import Navbar from '../components/Navbar.js';

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <Navbar />
            <h1 className="Home-welcome">Welcome to the Aggie AI Society</h1>
        </div>
      );
    }
  }
  
  export default Home;
