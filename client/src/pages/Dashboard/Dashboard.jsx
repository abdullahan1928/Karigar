import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar'
import Sidebar from '../../shared/components/Sidebar/Sidebar'
import './Dashboard.css'
import DashboardTitle from '../../shared/components/DashboardTitle/DashboardTitle';
import OrderStat from '../../shared/components/OrderStat/OrderStat';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashContainer">
                <Navbar />
                <DashboardTitle title='Dashboard' />

                <div className="order">
                    <Link to='ordersinqueue'>
                        <div className='tittle'>
                            Orders In Queue
                        </div>
                    </Link>
                    <OrderStat />
                    <Link to='ordersinqueue'>
                        <div className='more'>
                            More...
                        </div>
                    </Link>
                </div>
                <div className="order">
                    <Link to='previousorders'>
                        <div className='tittle'>
                            Previous Orders
                        </div>
                    </Link>
                    <OrderStat />
                    <Link to='previousorders'>
                        <div className='more'>
                            More...
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard