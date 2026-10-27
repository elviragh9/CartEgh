import React from 'react'
import { useState } from 'react'
import { Catalog } from './Catalog'
import { Cart } from './Cart'
import foto1 from '../assets/camara.jpg'
import foto2 from '../assets/tripie.jpg'
import foto3 from '../assets/lente.jpg'
import foto4 from '../assets/micro.jpg'
import { AddItem } from './AddItem'
export const CatCar = () => {
    const [products, setProducts]= useState([
        {name: "cámara", id:1, quantity: 3, src:foto1, description:"cámara ultima generación"},
        {name: "tripie", id:2, quantity: 5, src:foto2, description:"tripie para cámara profecional"},
        {name: "lente", id:3, quantity: 7,  src:foto3, description:"lente alta resolución"},
        {name: "microfono", id:4, quantity: 2, src:foto4, description:"microfono inalambrico"},
    ]) 
    const [productCart, setProductsCart]=useState([]); 

    const addToCart = (id) =>{
      console.log(id);
       
      const product = products.find((product)=>(product.id==id));
      console.log(product);

      if(product.quantity==0)
        return;

      if(productCart.find((product)=>(product.id==id)))
      {
       
        const copyProducts = products.map((product)=>{
          if(product.id==id)
          {
            product.quantity= product.quantity-1;
           return product;
          }
          else
            return product;
        })
        setProducts(copyProducts);

        const copyProductCart = productCart.map((product)=>{
          if(product.id==id)
          {
            product.quantity= product.quantity+1;
           return product;
          }
          else
            return product;
        })
        setProductsCart(copyProductCart);

      }
      else
      {

        const copyProducts = products.map((product)=>{
          if(product.id==id)
          {
            product.quantity= product.quantity-1;
           return product;
          }
          else
            return product;
        })
        setProducts(copyProducts);

        const copyProduct = {...product, quantity:1};
        
        const copyProductCart = [ ...productCart,copyProduct ];
        setProductsCart(copyProductCart);
      }
      
    }

    const removeFromCart  = (id, quantity)=>{

      const product = productCart.find((product)=>(product.id==id));
     

      const copyProducts = products.map((product)=>{
          if(product.id==id)
          {
            product.quantity= product.quantity + quantity;
           return product;
          }
          else
            return product;
        })
        setProducts(copyProducts);

        const copyProductCart = productCart.filter((product)=>product.id!=id);

        setProductsCart(copyProductCart);

      console.log(product);

    }

  return (
    <div >
        <AddItem products={products} setProducts={setProducts} />
        <Catalog products={products} addToCart={addToCart}></Catalog>
        <Cart productsCart={productCart} removeFromCart={removeFromCart}></Cart>
    </div>
  )
}
