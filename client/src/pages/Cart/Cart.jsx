import React from 'react';
export default function Cart(props) {
    const { cartItems } = props;
    return (
        <>
        <h2>Cart Items</h2>
        <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}

        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>

          </div>
        ))}
        </div>
        
        </>
    );

}