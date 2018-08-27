import React, { Component } from 'react';
import './AboutUs.css';
import President from '../images/President.jpeg';
import VP from '../images/VP.jpeg';
import Treasurer from '../images/Treasurer.jpeg';

class AboutUs extends Component {
    render() {
      return (
        <div className="AboutUs">
            <div className="Intro">
                <h1 className="Intro-welcome">What we do</h1>
                <p className="Intro-mission"> 
                Our mission is to inspire students to further learn and explore the field of Artificial Intelligence.
                </p>
                <p className="Intro-whatwedo">
                We organize lectures, panels, and workshops on the latest AI technologies. 
                We cover current events in areas such as 
                Natural Language Processing, Computer Vision, and Self Driving Cars.
                </p>
            </div>
            <div className="Officers">
                <h1 className="Officers-title">Our Leadership</h1>
                <div className="President">
                    <img src={President} alt={"President"}></img>
                </div>
                <div className="VP">
                    <img src={VP} alt={"VP"}></img>
                </div>
                <div className="Treasurer">
                    <img src={Treasurer} alt={"Treasurer"}></img>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default AboutUs;