import React, { createContext, useState } from 'react'

export const CartCont = createContext()

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    return (
        <CartCont.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartCont.Provider>
    )
}

export default CartContext