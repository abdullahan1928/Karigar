import React from 'react'
import SliderManual from '../shared/components/Slider/Slider'
import Navbar from '../shared/components/Navbar/Navbar';
import CustomPrimaryButton from '../shared/components/CustomPrimaryButton';
import './service.css'
import { Typography } from '@mui/material';
import ACbox from '../images/AClogo.png'
import AC from '../images/AC.jpg';
import electricianLogo from '../images/electrician.png';
import Electrician from '../images/electric.jpg';
import Carpenter from '../images/Carpenter.jpg';
import CarpenterLogo from '../images/wood.png';
import plumberLogo from '../images/plumber.png';
import Plumber from '../images/plumber.jpg';
import painterLogo from '../images/painterBack.png';
import Painter from '../images/painter1.jpg';
import More from '../images/More1.jpg';
import moreLogo from '../images/more.png';
import ServiceCard from '../shared/components/ServiceCard/ServiceCard';

const Service = () => {

  return (
    <>
      <div clasName='mainContainer'>
        <Navbar additionalStyles={{
          backgroundColor: '#f8f9fa',
          marginTop: '-1rem',
          marginBottom: '-4rem'
        }}
          additionalLinkStyles={{
            color: 'black',
          }}
          additionalMenuStyles={{
            marginLeft: '63rem',
          }}
        />

        <Typography variant='h1' sx={{
          color: 'brown',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '50px',
          margintTop: '-8rem',
          marginLeft: '42rem'
        }}>
          Karigaar
        </Typography>
        <Typography variant='p' sx={{
          color: 'black',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '17px',
          margintTop: '-8rem',
          marginLeft: '40rem'
        }}>
          The Best services provider in the town
        </Typography>

        <div>
          <SliderManual />
          <CustomPrimaryButton label='Book Now'
            additionalStyles={{
              marginLeft: '34rem',
              fontSize: '1.35rem',
              marginTop: '1rem',
              width: '450px',
              height: '50px',
              fontWeight: "700"
            }} />

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
              <ServiceCard
                title="AC Service"
                status="Any type of service"
                description="AC Serivices which include AC repaaring cleaning and much more"
                img={AC}
                logo={ACbox}
              />
            </li>
            <li>
              <ServiceCard
                title="Electrician Services"
                status="Any type of service"
                description="Electrician Services include any kind of services related to Electricity"
                img={Electrician}
                logo={electricianLogo}
              />
            </li>
            <li>
              <ServiceCard
                title="Carpenter Service"
                status="Any type of service"
                description="Any Services related to Wood. Our top qualified Carpenters are available"
                img={Carpenter}
                logo={CarpenterLogo}
              />
            </li>
            <li>
              <ServiceCard
                title="Plumbing Service"
                status="Any type of service"
                description="Any kind of taks related to plumbing will be done with full experty."
                img={Plumber}
                logo={plumberLogo}
              />
            </li>
            <li>
              <ServiceCard
                title="Painting Service"
                status="Any type of service"
                description="If you are looking for one of the finest painter of the town"
                img={Painter}
                logo={painterLogo}
              />
            </li>
            <li>
              <ServiceCard
                title="More Services"
                status="Many kind of services Mechanic,Washing and more..."
                description="AC Serivices which include AC repaaring cleaning and much more"
                img={More}
                logo={moreLogo}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Service
