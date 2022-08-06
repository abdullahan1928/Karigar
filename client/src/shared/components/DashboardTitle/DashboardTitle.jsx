import React from 'react'
import './DashboardTitle.css'

const DashboardTitle = ({ title }) => {
    return (
        <div className="dash-top">
            <h1 className="dash-title">{title}</h1>
        </div>
    )
}

export default DashboardTitle