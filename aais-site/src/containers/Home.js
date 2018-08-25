import React, { Component } from 'react';
import './Home.css';
import '../components/Navbar.js';
import Navbar from '../components/Navbar.js';

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <Navbar />
        </div>
      );
    }
  }
  
  export default Home;
