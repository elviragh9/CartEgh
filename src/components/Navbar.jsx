import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import {useNavigate} from "react-router"

export const Navbar = () => {
  const navigate = useNavigate();

  const { products } = useContext(CartContext);
  
  return (
    <div className=' flex justify-center w-screen bg-blue-800 text-white'>
        <ul className=' list-none flex gap-4 font-bold cursor-pointer'>

            <li> <a onClick={()=> navigate("/")}>catalogo</a></li>
            <li><a onClick={() => navigate("/cart")}> carrito</a></li>
            <li><a onClick={() => navigate("/add")}> agregar equipo</a></li>

        </ul>
    </div>
  )
}
