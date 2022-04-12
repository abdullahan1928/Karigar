import React from 'react'
import SliderManual from '../shared/components/Slider/Slider'
import Navbar from '../shared/components/Navbar/Navbar';
import CustomPrimaryButton from '../shared/components/CustomPrimaryButton';
import './service.css'
import { Typography } from '@mui/material';
import ServiceCard from '../shared/components/ServiceCard/ServiceCard';
import Servic from './allServices'

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

          <h1 className='serviceTitle'>Our Services</h1>
          <div className="line-5"></div>
          <p className='serviceDescription'>
            We provide to you the best choiches for you <br /> Providing the best services in the town with minimum cost Top rated services provider in the town.
          </p>

          <ul className="cards">
            <li>
              <ServiceCard
                title={Servic[0].title}
                status={Servic[0].status}
                description={Servic[0].description}
                img={Servic[0].image}
                logo={Servic[0].logo}
              />
            </li>
            <li>
              <ServiceCard
                title={Servic[1].title}
                status={Servic[1].status}
                description={Servic[1].description}
                img={Servic[1].image}
                logo={Servic[1].logo}
              />
            </li>
            <li>
              <ServiceCard
                title={Servic[2].title}
                status={Servic[2].status}
                description={Servic[2].description}
                img={Servic[2].image}
                logo={Servic[2].logo}
              />
            </li>
            <li>
              <ServiceCard
                title={Servic[3].title}
                status={Servic[3].status}
                description={Servic[3].description}
                img={Servic[3].image}
                logo={Servic[3].logo}
              />
            </li>
            <li>
              <ServiceCard
                title={Servic[4].title}
                status={Servic[4].status}
                description={Servic[4].description}
                img={Servic[4].image}
                logo={Servic[4].logo}
              />
            </li>
            <li>
              <ServiceCard
                title={Servic[5].title}
                status={Servic[5].status}
                description={Servic[5].description}
                img={Servic[5].image}
                logo={Servic[5].logo}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Service
