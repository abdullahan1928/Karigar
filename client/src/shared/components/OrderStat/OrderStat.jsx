import React from 'react'
import './OrderStat.css'

const OrderStat = () => {
    return (
        <div className="orders">
            <div className="order">
                <div className="row-1">
                    <p className="order-id">
                        Order-Id : 343344
                    </p>
                    <p className="order-date">
                        21 March, 2022
                    </p>
                </div>
                <p className="order-title">
                    AC Service
                </p>
                <div className="sub-ser">
                    <p className="order-sub-service">
                        AC Installation
                    </p>
                    <p className="payment">
                        Rs. 1000
                    </p>
                </div>
                <p className="address">
                    Address : Street 39, G-11/2, Islamabad
                </p>
            </div>
        </div>
    )
}

export default OrderStat