import React from 'react'
import './PreviousOrders.css'
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import Navbar from "../../../shared/components/Navbar/Navbar";
import DashboardTitle from "../../../shared/components/DashboardTitle/DashboardTitle";
import OrderStat from '../../../shared/components/OrderStat/OrderStat';

const PreviousOrders = () => {
    return (
        <div className="previousOrders">
            <Sidebar />
            <div className="previousOrdersContainer">
                <Navbar />
                <DashboardTitle title='Previous Orders' />
                <OrderStat />
            </div>
        </div>
    )
}

export default PreviousOrders