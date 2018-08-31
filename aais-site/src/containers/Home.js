import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    
    render() {
      return (
        <div className="Home">
            <h1 className="Home-welcome">Welcome to the Aggie AI Society</h1>
            <a href="https://www.linkedin.com/in/austin-gonzalez-1616b1a3" target="_blank" rel="noopener noreferrer">
                <h5 className="Home-signature">Developed By Austin Gonzalez</h5>
            </a>
        </div>
      );
    }
  }
  
  export default Home;
