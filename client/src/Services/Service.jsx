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
      <div>
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
            {
              Servic.map((obj) => {
                return (
                  <li>
                    <ServiceCard
                      title={obj.title}
                      status={obj.status}
                      description={obj.description}
                      image={obj.image}
                      logo={obj.logo}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Service
