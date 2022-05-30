import React, { useState } from 'react';
import './Cart.css'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import emptyCart from '../../../images/empty.png'

export default function Cart({ cartItems }) {
    const [total, setTotal] = useState();

    // let [countItems, setCountItems] = useState(1);

    // console.log(countItems)

    // const increaseItems = () => {
    //     countItems += 1
    //     setCountItems(countItems);
    // }

    // const decreaseItems = () => {
    //     countItems -= 1
    //     setCountItems(countItems);
    // }


    return (
        <>
            <h2 className='cartTitle'>Your Cart</h2>
            <SimpleBar
                style={{ maxHeight: 550 }}
            >
                <div>
                    <div>
                        {cartItems.length === 0 &&
                            <div className='emptyCart'>
                                Cart is empty
                                <img src={emptyCart} alt="" className='emptyIcon' />
                            </div>
                        }
                    </div>
                    {cartItems.map((item, index) =>
                        <div key={index} className="row-order">
                            <div className="itemTitle">
                                {item.title}
                            </div>
                            {/* <div class="counter">
                                <button className="countBtn" onClick={decreaseItems}>
                                    -
                                </button>
                                <div className="countItem">
                                    {countItems}
                                </div>
                                <button className="countBtn" onClick={increaseItems}>
                                    +
                                </button>
                            </div> */}
                            <span className="priceLabel">
                                Price
                            </span>
                            <div className="itemPrice">
                                {item.price}
                            </div>
                        </div >
                    )
                    }
                </div >
            </SimpleBar >
        </>
    );

}
