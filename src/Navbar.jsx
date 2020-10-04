import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './index1.css';


const Navbar=()=> {
  return (
    
    <div className="container-fluid nav bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <NavLink className="navbar-brand" to="/"> Sports Training </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink activeClassName="menu_active" aria-current="page" className="nav_link" to="/"><HomeIcon></HomeIcon>   Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav_link" to="/courses">   <SportsSoccerIcon></SportsSoccerIcon>   Courses  </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav_link" to="/about"> <InfoIcon></InfoIcon>   About  </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav_link" to="/contact"> <ContactMailIcon></ContactMailIcon>   Contact  </NavLink>
        </li>

        </ul>
        
    </div>
  
    
        </nav >
       
        
        </div> 
        </div> 
        </div>
    // </div>
    
  
    
  );
}

export default Navbar;
