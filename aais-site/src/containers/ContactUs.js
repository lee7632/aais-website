import React, { Component } from 'react';
import './ContactUs.css';
import instagram from '../images/IG_brand.png';
import twitter from '../images/Twitter_brand.png';
import slack from '../images/slack.png';
import github from '../images/github.png';
import email from '../images/email.png';
class ContactUs extends Component {
    render() {
      return (
        <div className="ContactUs">
            <div className="Contact">
                <h2 className="Contact-title"> Join Us Today</h2>
                <div className="Resources">
                    <div className="Resource">
                        <h4 className="Resource-hdr">email</h4>
                        <a href="mailto:aais@tamu.edu">
                            <img src={email} alt="Email"></img>
                        </a>
                        <h5 className="Resource-ftr">aais@tamu.edu</h5>
                    </div>
                    <div className="Resource">
                        <h4 className="Resource-hdr">slack</h4>
                        <a href="https://aggieaisociety.slack.com/signup" target="_blank" rel="noopener noreferrer">
                            <img src={slack} alt="slack"></img>
                        </a>
                        <h5 className="Resource-ftr">aggieaisociety.slack.com</h5>
                    </div>
                    <div className="Resource">
                        <h4 className="Resource-hdr">github</h4>
                        <a href="https://github.com/aggieaisociety" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Github"></img>
                        </a>
                        <h5 className="Resource-ftr">github.com/aggieaisociety</h5>
                    </div>
                </div>
            </div>
            <h2 className="Social-title">Follow us on Instagram and Twitter</h2>
            <div className="Social">
                <div className="Social-icon">
                    <a href="https://www.instagram.com/aggieaisociety/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram"></img>
                    </a>
                    <h5 className="Social-handle">@aggieaisociety</h5>
                </div>
                <div className="Social-icon">
                    <a href="https://twitter.com/aggieaisociety" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter"></img>
                    </a>
                    <h5 className="Social-handle">@aggieaisociety</h5>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default ContactUs;