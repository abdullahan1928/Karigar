import React from 'react'
import SliderManual from '../../shared/components/Slider/Slider'
import Navbar from '../../shared/components/Navbar/Navbar';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import './service.css'
import { Typography } from '@mui/material';
import ACbox from '../../images/AClogo.png'
import AC from '../../images/AC.jpg';
import electricianLogo from '../../images/electrician.png';
import Electrician from '../../images/electric.jpg';
import Carpenter from '../../images/Carpenter.jpg';
import CarpenterLogo from '../../images/wood.png';
import plumberLogo from '../../images/plumber.png';
import Plumber from '../../images/plumber.jpg';
import painterLogo from '../../images/painterBack.png';
import Painter from '../../images/painter1.jpg';
import More from '../../images/More1.jpg';
import moreLogo from '../../images/more.png';



const Service = () => {

  return (
    <>
    <div clasName='mainContainer'>
   

    <Navbar additionalStyles={{
      backgroundColor: '#f8f9fa',
      marginTop:'-1rem',
      marginBottom:'-4rem'
    }}
    additionalLinkStyles={{
      color:'black',
      
      
      
      
      
    }}
    additionalMenuStyles={{
      
      
      marginLeft:'63rem',
      
      
    }}
    
    
/>
<Typography variant='h1' sx={{
      color:'brown',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '50px',
      margintTop:'-8rem',
      marginLeft:'42rem'
  }}>
     Karigaar
    </Typography>
    <Typography variant='p' sx={{
      color:'black',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '17px',
      margintTop:'-8rem',
      marginLeft:'40rem'
  }}>
    The Best services provider in the town
    </Typography>
  
    <div>
      
     
      <SliderManual/>
      <CustomPrimaryButton label='Book Now'
      additionalStyles={{
        marginLeft:'34rem',
        fontSize:'1.35rem',
        marginTop:'1rem',
        width:'450px',
        height:'50px',
        fontWeight:"700"
      }}/>

    </div>
    <div className='serviceSection'>

    <h1 className='serviceTitle'>
      Our Services
    </h1>
    <div className="line-5"></div>
    <p className='serviceDescription'>
    We provide to you the best choiches for you <br /> Providing the best services in the town with minimum cost Top rated services provider in the town.
    </p>
    <ul className="cards">
   
  <li>
    <a href="" className="card">
      <img src={AC} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={ACbox} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">AC Service</h3>            
            <span className="card__status">Any type of service</span>
          </div>
        </div>
        <p className="card__description">
        AC Serivices which include AC repaaring cleaning and much more
        </p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
      <img src={Electrician} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={electricianLogo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title"> Electrician Services</h3>            
            <span className="card__status">Any type of service</span>
          </div>
        </div>
        <p className="card__description">
        Electrician Services include any kind of services related to Electricity.
        </p>
      </div>
    </a>      
  </li>   
  <li>
    <a href="" className="card">
      <img src={Carpenter} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={CarpenterLogo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Carpenter Service</h3>            
            <span className="card__status">Any type of service</span>
          </div>
        </div>
        <p className="card__description">
        Any Services related to Wood. Our top qualified Carpenters are available
        </p>
      </div>
    </a>      
  </li>   
  <li>
    <a href="" className="card">
      <img src={Plumber} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={plumberLogo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Plumbing Service</h3>            
            <span className="card__status">Any type of service</span>
          </div>
        </div>
        <p className="card__description">
        Any kind of taks related to plumbing will be done with full experty.
        </p>
      </div>
    </a>      
  </li>
     
  <li>
    <a href="" className="card">
      <img src={Painter} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={painterLogo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">Painting Service</h3>            
            <span className="card__status">Any type of service</span>
          </div>
        </div>
        <p className="card__description">
        If you are looking for one of the finest painter of the town
        </p>
      </div>
    </a>      
  </li> 
  <li>
    <a href="" className="card">
      <img src={More} className="card__image" alt="" />
      <div className="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb cardImage" src={moreLogo} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">More Services</h3>            
            <span className="card__status">Many kind of services Mechanic,Washing and more...</span>
          </div>
        </div>
        <p className="card__description">
        AC Serivices which include AC repaaring cleaning and much more
        </p>
      </div>
    </a>      
  </li> 
</ul>
    </div>
      </div>
    </>
  )
}

export default Service
