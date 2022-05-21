import React from 'react'
import './SubserviceCard.css'
import { Link } from "react-router-dom";


const ServiceCard = (props) => {
    return (
        <>
            <div>
                <Link to="/">
                    <div className="row2-container">
                        <div className="box orange">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <img src={props.logo} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ServiceCard