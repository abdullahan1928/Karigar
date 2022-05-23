import React from 'react';
import './Cart.css'

export default function Cart({ cartItems }) {

    return (
        <>
            <h2>Cart Items</h2>
            <div>
                <div> {cartItems.length === 0 && <div>Cart is empty</div>}</div>
                {cartItems.map((item) =>
                    <li key={item.id} className="row">
                        {item.id}
                        <div className="col-2">{item.title}</div>
                        <div className="col-2">{item.description}</div>
                    </li>
                )}
            </div>
        </>
    );

}