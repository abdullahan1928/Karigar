import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar'
import Sidebar from '../../shared/components/Sidebar/Sidebar'
import { Link } from "react-router-dom";
import './Dashboard.css'
import DashboardTitle from '../../shared/components/DashboardTitle/DashboardTitle';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashContainer">
                <Navbar />
                <DashboardTitle title='Dashboard' />
            </div>
        </div>
    )
}

export default Dashboard