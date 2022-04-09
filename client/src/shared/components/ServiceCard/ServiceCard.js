import React from 'react'
import './ServiceCard.css'

const ServiceCard = (props) => {
    return (
        <>
            <div>
                <a href="" className="card">
                    <img src={props.img} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb cardImage" src={props.logo} alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">{props.title}</h3>
                                <span className="card__status">{props.title}</span>
                            </div>
                        </div>
                        <p className="card__description">
                            {props.description}
                        </p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ServiceCard