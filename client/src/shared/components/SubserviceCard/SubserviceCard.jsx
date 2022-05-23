import React from 'react'
import './SubserviceCard.css'
import Switch from "react-switch";
import { useState } from 'react';

const ServiceCard = (props) => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        props.onAdd(props.title);
        props.onAdd(props.description);
        // console.log(props.title)
    };
    
    return (
        <>
            <div>
                <div className="row2-container">
                    <div className="box orange">
                        <div className='sub-image'><img src={props.logo} alt="" /></div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <div className='status-price'>
                            <h3>{props.status}</h3>
                            <h2 className='price'>{props.price}</h2>
                        </div>


                        <div>
                            <Switch
                                onChange={handleChange}
                                checked={checked}
                                value={checked}
                                className="react-switch"
                                onColor="#FFA500"
                                onHandleColor="#c8730a"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )


}
export default ServiceCard