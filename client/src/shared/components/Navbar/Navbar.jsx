import React from 'react'
import './navbar.css';
import Hunar from '../../../images/KarigarLogo.png'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={props.additionalStyles ? props.additionalStyles : {}}>
      <div className="menu" style={props.additionalMenuStyles ? props.additionalMenuStyles : {}}>
        <div className="mainNav">
          <Link to="/" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
            <div className="Logo">
              <img src={Hunar} alt="" className="log" style={props.additionalHoverStyles ? props.additionalHoverStyles : {}} />
            </div>
          </Link>
          <div className='nav-comp'>
            <Link to="/" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>Home</p>
            </Link>
          </div>
          <div className='nav-comp'>
            <Link to="/about" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>About</p>
            </Link>
          </div>
          <div className='nav-comp'>
            <Link to="/service" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>Services</p>

            </Link>
          </div>
          <div className='nav-comp'>
            <Link to="/contact" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}
            >
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className='login' style={props.additionalCSSStylesOnLogin ? props.additionalCSSStylesOnLogin : {}} >
          <div className='nav-comp'>
            <Link to="/login" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}
            >
              <p className='hoverText' style={props.additionalHoverStylesOnLogin ? props.additionalHoverStylesOnLogin : {}}>
                Login | SignUp
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
