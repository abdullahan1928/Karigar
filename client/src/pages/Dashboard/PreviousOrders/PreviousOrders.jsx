import React from 'react'
import './PreviousOrders.css'
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import Navbar from "../../../shared/components/Navbar/Navbar";
import DashboardTitle from "../../../shared/components/DashboardTitle/DashboardTitle";

const PreviousOrders = () => {
    return (
        <div className="previousOrders">
            <Sidebar />
            <div className="previousOrdersContainer">
                <Navbar />
                {/* <div className="order-top">
                    <h1 className="order-title">Previous Orders</h1>
                </div> */}
                <DashboardTitle title='Previous Orders' />
                <div className="orders">
                    <div className="order">
                        <div className="row1">
                            <p className="order-id">
                                Order-Id : 343344
                            </p>
                            <p className="order-title">
                                AC Service
                            </p>
                            <p className="order-sub-service">
                                AC Installation
                            </p>
                            <p className="address">
                                Address : Street 39, G-11/2, Islamabad
                            </p>
                        </div>
                        <div className="row2">
                            <p className="order-date">
                                21 March, 2022
                            </p>
                            <p className="blank">

                            </p>
                            <p className="payment">
                                Rs. 1000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviousOrders