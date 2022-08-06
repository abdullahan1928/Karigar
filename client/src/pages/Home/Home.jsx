import React from 'react'
import './home.css';
import logo from '../../images/logooo.png';
import Hunar from '../../images/KarigarLogo.png'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar/Navbar';
import StarRating from '../../shared/components/StarRating/StarRating';
import Review from '../../shared/components/Reviews/Review';

function Dashboard() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/login')
  }

  return (

    <>
      <div className="mainContainer">

        <div className="Logo">
          <img src={Hunar} alt="" className="logo" />
          <h1 className='LogoText'>Karigar</h1>
        </div>

        <div className="rectangleDesign">
          <Navbar
            additionalHoverStylesOnLogin={{ display: 'none' }}
            additionalCSSStylesOnLogin={{ border: 'none' }}
            additionalImgLinkStyles={{ display: 'none' }}
          />
          <img src={logo} alt="Logo Picture" className='imageContainer' />
        </div>

        <div className="textContainer">
          <div id="header">
            Making Your life
            <br /> easier
          </div>

          <div className="headingText">
            Will provide you home services which you never will be imagining at your home. AC services, Mechanic, Electrician and much more.All at your home.
          </div>

          <button className='btn' onClick={handleClick}>
            <div className="text">
              Login
            </div>
          </button>

        </div>
      </div>
      <StarRating />
      <Review />
    </>

  )
}

export default Dashboard
