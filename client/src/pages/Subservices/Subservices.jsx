import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar';
import './Subservices.css'
import SubserviceCard from '../../shared/components/SubserviceCard/SubserviceCard';
import SubServic from './allSubServices'
import Cart from '../Cart/Cart';
import { useState } from 'react';


const SubServices = () => {
  let servId = localStorage.getItem('service')
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div>
        <Navbar />
        <h1 className='serviceTitle'>Our Services</h1>
          <div className="line-5"></div>
          <p className='serviceDescription'>
            We provide to you the best choiches for you <br /> Providing the best services in the town with minimum cost Top rated services provider in the town.
          </p>
        <div className='subServiceSection'>



          <ul className="cards">
            {
              SubServic.map((obj) => {
                if (servId === obj.id) {
                  return (
                    <li>
                      <SubserviceCard
                        title={obj.title}
                        description={obj.description}
                        logo={obj.logo}
                        status={obj.status}
                        price={obj.price}
                      />
                    </li>

                  )
                }
              })
            }
          </ul>

          </div>
          <div className='cartSection'>
            <Cart
              cartItems={cartItems}
            />
          </div>
      </div>
    </>
  )
}

export default SubServices
