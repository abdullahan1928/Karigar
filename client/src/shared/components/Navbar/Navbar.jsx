import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={props.additionalStyles ? props.additionalStyles : {}}>

      <ul className="nav-links" >
        <div className="menu" style={props.additionalMenuStyles ? props.additionalMenuStyles : {}}>
          <li style={props.additionalHoverStyles ? props.additionalHoverStyles : {}} className='hoverEffect'>
            <Link to="/" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>Home</p>
            </Link>
          </li>
          <li className='hoverEffect'>
            <Link to="/about" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>About</p>
            </Link>
          </li>
          <li className='hoverEffect'>
            <Link to="/service" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}>
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>Services</p>

            </Link>
          </li>
          <li className='hoverEffect'>
            <Link to="/contact" className='links' style={props.additionalLinkStyles ? props.additionalLinkStyles : {}}
            >
              <p className='hoverText' style={props.additionalHoverStyles ? props.additionalHoverStyles : {}}>
                Contact
              </p>
            </Link>
          </li>

        </div>
      </ul>
    </nav>
  )
}

export default Navbar
