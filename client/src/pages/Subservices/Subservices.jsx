import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar';
import './Subservices.css'
import SubserviceCard from '../../shared/components/SubserviceCard/SubserviceCard';
import SubServic from './allSubServices'
import Cart from '../../shared/components/Cart/Cart';
import { useState } from 'react';


const SubServices = () => {
  let servId = localStorage.getItem('service')

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x === product);
    if (!exist) {
      cartItems.push(product)
      setCartItems(cartItems);
      console.log(cartItems)
    }
    else {
      let ind = cartItems.indexOf(product);
      cartItems.splice(ind, 1)
      setCartItems(cartItems);
      console.log(cartItems)
    }
  };


  return (
    <>
      <div>
        <Navbar />
        <h1 className='subServiceTitle'>Our Services</h1>
        <div className="line-6"></div>
        <p className='subServiceDescription'>
          We provide to you the best choiches for you <br /> Providing the best services in the town with minimum cost Top rated services provider in the town.
        </p>
        <div className='subServiceSection'>

          <ul className="sub-cards">
            {
              SubServic.map((obj) => {
                if (servId === obj.id) {
                  return (
                    <li key={obj.subId}>
                      <SubserviceCard
                        id={obj.subId}
                        title={obj.title}
                        description={obj.description}
                        logo={obj.logo}
                        status={obj.status}
                        price={obj.price}
                        onAdd={onAdd}
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
            key={cartItems.id}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  )
}

export default SubServices