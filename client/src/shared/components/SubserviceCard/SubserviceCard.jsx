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
                            <div className='sub-image'><img src={props.logo} alt="" /></div>
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                            <h3>{props.status}</h3>
                            <h2>{props.price}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ServiceCard