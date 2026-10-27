import React from 'react'
import { useState } from 'react'
import foto1 from '../assets/camara.jpg'

export const AddItem = ({products, setProducts}) => {
    const [item, setItem] = useState( {name: "cámara new", id:5, quantity: 6, src:foto1, description:"nueva camara"});
    const addItem = () => {
        const newProducts = [...products, item];
        setProducts(newProducts);
    }

  return (
    <div>
        <input type="text" placeholder='nombre' value={item.name} onChange={(e)=>setItem({...item, name:e.target.value})} className=' border border-gray-400 rounded-md p-2 m-2' />
        <input type="number" placeholder='cantidad' value={item.quantity} onChange={(e)=>setItem({...item, quantity:e.target.value})} className=' border border-gray-400 rounded-md p-2 m-2' />
        <input type="text" placeholder='descripcion' value={item.description} onChange={(e)=>setItem({...item, description:e.target.value})} className=' border border-gray-400 rounded-md p-2 m-2' />
        <input type="text" placeholder='link de la imagen' value={item.src} onChange={(e)=>setItem({...item, src:e.target.value})} className=' border border-gray-400 rounded-md p-2 m-2'/>
        <button onClick={()=>addItem()} className= 'bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-r-2xl'>Agregar Item</button>
        
    </div>
  )
}
