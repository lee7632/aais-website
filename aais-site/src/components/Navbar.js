import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Navbar extends Component {

    constructor(props){
        super(props);
        this.activeVal = "Home";
        this.navDark = false;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(actVal){
        this.activeVal = actVal;
        if (actVal === "Home"){
            this.navDark = false;
        }
        else{
            this.navDark = true;
        }
    }

    render() {
        
    //set navbar link style
    const active = "nav-item active";
    const notActive = "nav-item";

    //toggle navbar style
    const navDark = "navbar navbar-expand-lg navbar-dark bg-dark";
    const navTransparent = "navbar navbar-expand-lg navbar-dark";

      return (
        <div className="Navbar">
            <nav className={(this.navDark === true)? navDark : navTransparent}>
                <Link className={"navbar-brand"} to='/' onClick={()=>this.handleClick("Home")}>Aggie AI Society</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className={(this.activeVal === "Home")? active : notActive}>
                            <Link className={"nav-link"} to='/' onClick={()=>this.handleClick("Home")}>Home</Link>
                        </li>
                        <li className={(this.activeVal === "Cal")? active : notActive}>
                            <Link className={"nav-link"} to='/calendar' onClick={()=>this.handleClick("Cal")}>Calendar</Link>
                        </li>
                        <li className={(this.activeVal === "About")? active : notActive}>
                            <Link className={"nav-link"} to='/about' onClick={()=>this.handleClick("About")}>About Us</Link>
                        </li>
                        <li className={(this.activeVal === "Contact")? active : notActive}>
                            <Link className={"nav-link"} to='/contact' onClick={()=>this.handleClick("Contact")}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      );
    }
  }
  
  export default Navbar;