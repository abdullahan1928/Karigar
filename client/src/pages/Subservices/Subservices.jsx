import React, { useContext } from 'react'
import Navbar from '../../shared/components/Navbar/Navbar';
import './Subservices.css'
import SubserviceCard from '../../shared/components/SubserviceCard/SubserviceCard';
import SubServic from './allSubServices'
import Cart from '../../shared/components/Cart/Cart';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { CartCont } from '../../Context/CartContext';

const SubServices = () => {
  let servId = localStorage.getItem('service')

  const { cartItems, setCartItems } = useContext(CartCont);

  const navigate = useNavigate();


  const onAdd = (product) => {
    let exist = cartItems.find((x) => x.id === product.id);
    if (!exist) {
      setCartItems([...cartItems, product])
    }
  };

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
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
                        onRemove={onRemove}
                      />
                    </li>
                  )
                }
              })
            }
          </ul>

        </div>
        <div className='cart-btn-container'>
          <div className='cartSection'>
            <Cart
              key={cartItems.id}
              cartItems={cartItems}
            />
          </div>


          {localStorage.setItem('subServices', cartItems[0])}

          <div >{cartItems.length !== 0 &&
            <Link to="checkout">
              <div className='btn proceed'>
                <button
                  className='text proceed-btn'
                >
                  Proceed to Order
                </button>
              </div>
            </Link>
          }</div>

        </div>
      </div>
    </>
  )
}

export default SubServices