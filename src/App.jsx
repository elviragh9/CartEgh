
import { Navbar } from "./components/Navbar"
import { CatCar } from "./components/CatCar"
import {CartProvider} from "./Context/CartProvider"
import {BrowserRouter, Routes, Route} from "react-router"
import { Catalog } from "./components/Catalog"
import { Cart } from "./components/Cart"
function App() {
  
  return (

    <>
    
      <CartProvider>
        <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
