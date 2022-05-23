import React from 'react'
import './OrdersInQueue.css'
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import Navbar from "../../../shared/components/Navbar/Navbar";

const OrdersInQueue = () => {
    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                OrdersInQueue
            </div>
        </div>
    )
}

export default OrdersInQueue