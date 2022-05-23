import React from 'react'
import SliderManual from '../../shared/components/Slider/Slider'
import Navbar from '../../shared/components/Navbar/Navbar';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import './Service.css'
import { Typography } from '@mui/material';
import ServiceCard from '../../shared/components/ServiceCard/ServiceCard';
import Servic from './allServices'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <div>
        <Navbar />
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
          <ul className="serviceCards">
            {
              Servic.map((obj) => {
                return (
                  <li>
                    <Link to={{ pathname: `/service/${obj.title}` }}
                      onClick={(() => {
                        localStorage.setItem('service', obj.id)
                      })}
                      >
                      <ServiceCard
                        title={obj.title}
                        status={obj.status}
                        description={obj.description}
                        image={obj.image}
                        logo={obj.logo}
                      />
                    </Link>
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
