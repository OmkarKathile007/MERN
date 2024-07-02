import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>

          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignUp/>}></Route>



        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App

