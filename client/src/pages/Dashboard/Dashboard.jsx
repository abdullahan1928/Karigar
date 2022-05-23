import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar'
import Sidebar from '../../shared/components/Sidebar/Sidebar'
import { Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
    return (
        // <Link to=":_id/dashboard" style={{ textDecoration: "none" }}>
        <div className="dashboard">
            <Sidebar />
            <div className="dashContainer">
                <Navbar />
                Hello
            </div>
        </div>
        // </Link>
    )
}

export default Dashboard