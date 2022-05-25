import React from 'react'
import './OrdersInQueue.css'
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import Navbar from "../../../shared/components/Navbar/Navbar";
import DashboardTitle from '../../../shared/components/DashboardTitle/DashboardTitle';
import OrderStat from '../../../shared/components/OrderStat/OrderStat';

const OrdersInQueue = () => {
    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                <DashboardTitle title='Orders in Queue' />
                <OrderStat />
            </div>
        </div>
    )
}

export default OrdersInQueue