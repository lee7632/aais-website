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
            <h1 className="Officers-title">Our Leadership</h1>
            <div className="Officers">
                <div className="Officer">
                    <img src={President} alt={"President"} className="President-photo"></img>
                    <h2 className="Name">Brian George</h2>
                    <h3 className="Title">President</h3>
                </div>
                <div className="Officer">
                    <img src={VP} alt={"VP"}></img>
                    <h2 className="Name">Ryan Wells</h2>
                    <h3 className="Title">Vice President</h3>
                </div>
                <div className="Officer">
                    <img src={Treasurer} alt={"Treasurer"}></img>
                    <h2 className="Name">Yamen Al Masalmeh</h2>
                    <h3 className="Title">Treasurer</h3>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default AboutUs;