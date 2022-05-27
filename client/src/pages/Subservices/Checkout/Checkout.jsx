import React, { useContext } from 'react'
import Navbar from "../../../shared/components/Navbar/Navbar";
import './Checkout.css';
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import { CartCont } from '../../../Context/CartContext';

export const Checkout = ({ }) => {

    const { cartItems, setCartItems } = useContext(CartCont);
    console.log(useContext(CartCont))

    return (
        <>
            <Navbar />
            <h1 className='checkoutTitle'>Order Confirmation</h1>
            <p className='checkoutDescription'>
                You are one step away from easiness <br /> Give us your details and hit Confirm button to get your work done from comfort of your phone.
            </p>

            <div className='formContainer'>

                <div className="formInput">
                    <label>Where should we provide you these services?</label>
                    <input type="text" placeholder="Type your address here for this order" />
                </div>


                <form className='checkout-changes'>
                    <button className='save'>Confirm Order</button>
                </form>

            </div>

            <div className="checkoutContainer">

                <div className='yourCartItems'>
                    <h2>
                        You're ordering following services
                    </h2>
                </div>

                <div className='cartTable'>
                    <div className='tableHeading'>
                        Service
                        <div>
                            {cartItems.map((item, index) =>
                                <div key={index} className="row">
                                    <hr />
                                    <div className="col-2">{item.title}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <hr />
                    <div className='tableHeading'>
                        Price
                        <div>
                            {cartItems.map((item, index) =>
                                <div key={index} className="row">
                                    <hr />
                                    <div className="col-2">{item.price}</div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <div className='tableData'>

                </div>
            </div>

        </>

    );
};

export default Checkout;