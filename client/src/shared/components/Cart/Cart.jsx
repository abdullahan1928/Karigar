import React from 'react';
import './Cart.css'

export default function Cart({ cartItems }) {

    return (
        <>
            <h2>Cart Items</h2>
            <div>
                <div> {cartItems.length === 0 && <div>Cart is empty</div>}</div>
                {cartItems.map((item, index) =>
                    <div key={index} className="row">
                        {item.id}
                        <div className="col-2">{item.title}</div>
                        {/* <div className="col-2">{item.description}</div> */}
                    </div>
                )}
            </div>
        </>
    );

}