import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './assets/components/Header/Header'
import { Footer } from './assets/components/Footer/Footer'
import './App.css'
import { ItemListContainer } from './assets/components/ItemListContainer/ItemListContainer'
import { ItemDetail } from './assets/components/ItemDetail/ItemDetail'
import { ItemDetailContainer } from "./assets/components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/cartContext/CartProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header/>
            <main>
              <Routes>
                <Route path='/' element={<ItemListContainer titulo={"Lista de cosas!"} />}/>
                <Route path={"/detail/:id"} element={<ItemDetailContainer/>} />
                

              </Routes>
            </main>
          <Footer /> 
        </CartProvider>
      </BrowserRouter>

      
    </>
  )
}

export default App
