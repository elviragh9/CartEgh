import React from 'react'
import {CartContext} from "../Context/CartContext"
import { useContext } from "react";

export const Cart = () => {
  const { productsCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
            <div className=' flex bg-blue-800 p-4 bottom-0 fixed w-full'>
        {productsCart.map((product)=>(
            <div key={product.id} className=' flex gap-1 shadow shadow-gray-700 border border-s-gray-800 w-1/3 p-2 m-2  items-center flex-col bg-white' >
                <h3 className=' font-bold'>{product.name}</h3>
                <span>en carrito: {product.quantity}</span>
                <span>{product.description}</span>
                <button onClick={()=>removeFromCart(product.id,product.quantity)}className=' bg-red-700 hover:bg-red-500 text-white font-medium px-4 py-2 rounded-md transition-colors'>quitar del carrito</button>
            </div>

        ))}
     </div>
    </div>
  )
}
