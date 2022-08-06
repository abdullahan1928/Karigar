import React, { useContext } from 'react'
import Navbar from "../../../shared/components/Navbar/Navbar";
import './Checkout.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { CartCont } from '../../../Context/CartContext';

export const Checkout = ({ }) => {


    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartCont);

    const [address, setAddress] = useState("");
    const [instructions, setInstructions] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    let subserviceId = [];
    const setSubserviceId = () => cartItems.map((item) => {
        subserviceId.push(item.id)
    })

    const handleInputsAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleInputsInstructions = (e) => {
        setInstructions(e.target.value);

    }

    const handleInputsDate = (e) => {
        setDate(e.target.value);

    }

    const handleInputsTime = (e) => {
        setTime(e.target.value);

    }


    const orderNow = async (e) => {
        e.preventDefault();
        try {
            setSubserviceId();
            await axios.post("http://localhost:5002/api/order/checkout", {
                address: address, instructions: instructions, subserviceId: subserviceId,
                date: date, time: time
            })
            window.alert("Order Placed Successfully");
            navigate('/service');



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <h1 className='checkoutTitle'>Order Confirmation</h1>
            <p className='checkoutDescription'>
                You are one step away from easiness <br /> Give us your details and hit Confirm button to get your work done from comfort of your phone.
            </p>

            <form method='POST' className='checkout-changes'>
                <div className='formContainer'>

                    <div className="formInput">
                        <label>Give us  your order instructions to avoid inconvenience</label>
                        <textarea name="comment" rows="5" cols="50" value={instructions} onChange={handleInputsInstructions} type="text" placeholder="Type your order instructions" />
                    </div>

                    <div className="formInput">
                        <label>Where should we provide you these services?</label>
                        <textarea name="comment" rows="5" cols="50" value={address} onChange={handleInputsAddress} type="text" placeholder="Type your address here for this order" />
                    </div>

                    <div className="formInput">
                        <label>Select date for your service: </label>
                        <input type="date" value={date} onChange={handleInputsDate} />
                    </div>

                    <div className="formInput">
                        <label>Select time for your service: </label>
                        <input type="time" value={time} onChange={handleInputsTime} />
                    </div>


                    <button name='confirmOrder' onClick={orderNow} className='save'>Confirm Order</button>
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
                </div>
            </form>

        </>

    );
};

export default Checkout;