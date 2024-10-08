import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCart = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Este es el carito de compras</h1>
        <FaShoppingCart size={200}/>
        
    </div>
  )
}

export default ShoppingCart