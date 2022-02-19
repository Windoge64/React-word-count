import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import {
  
//   Link
// } from "react-router-dom";


export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
                                            {/* React Router */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">{props.homeText}<span className="sr-only">(current)</span></a>
             </li>                             {/* Home Page */}

            <li className="nav-item ">
              <a className="nav-link" href="/about">{props.about}<span className="sr-only">(current)</span></a>
            </li>                            {/* React Router */}

          </ul>
          <div className={`custom-control custom-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <input type="checkbox" className="custom-control-input" onClick={props.toggleMode}id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
          </div>
          <form className="htmlForm-inline my-2 my-lg-0">
            <input className="htmlForm-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        
      </nav>
  )
}

Navbar.propTypes = {
        title:PropTypes.string.isRequired,
        homeText:PropTypes.string.isRequired
}

Navbar.defaultProps = {
        title:"Title here",
        homeText:"Home Page here",
        about:"About here"
}