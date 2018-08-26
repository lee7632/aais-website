import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = { home: "nav-item active", cal: "nav-item", about: "nav-item", contact: "nav-item" }
        this.homeClicked = this.homeClicked.bind(this);
        this.calendarClicked = this.calendarClicked.bind(this);
        this.aboutClicked = this.aboutClicked.bind(this);
        this.contactClicked = this.contactClicked.bind(this);
    }

    homeClicked(){
        
        this.setState(prevState => ({
            home : "nav-item active",
            cal : "nav-item",
            about : "nav-item",
            contact : "nav-item"
        }));
    }

    calendarClicked(){
        
        this.setState(prevState => ({
            home : "nav-item",
            cal : "nav-item active",
            about : "nav-item",
            contact : "nav-item"
        }));
    }

    aboutClicked(){
        
        this.setState(prevState => ({
            home : "nav-item",
            cal : "nav-item",
            about : "nav-item active",
            contact : "nav-item"
        }));
    }

    contactClicked(){
        
        this.setState(prevState => ({
            home : "nav-item",
            cal : "nav-item",
            about : "nav-item",
            contact : "nav-item active"
        }));
    }

    render() {
      return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className={"navbar-brand"} to='/' onClick={this.homeClicked}>Aggie AI Society</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className={this.state.home}>
                            <Link className={"nav-link"} to='/' onClick={this.homeClicked}>Home</Link>
                        </li>
                        <li className={this.state.cal}>
                            <Link className={"nav-link"} to='/calendar' onClick={this.calendarClicked}>Calendar</Link>
                        </li>
                        <li className={this.state.about}>
                            <Link className={"nav-link"} to='/about' onClick={this.aboutClicked}>About Us</Link>
                        </li>
                        <li className={this.state.contact}>
                            <Link className={"nav-link"} to='/contact' onClick={this.contactClicked}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default Navbar;