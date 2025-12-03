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
import { Cart } from "./assets/components/Cart/Cart"
import { ProductFormContainer } from './AdminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layout/mainLayout'
import { AdminLayout } from './layout/AdminLayout'
import { RutaProtegida } from './assets/components/RutaProtegida/RutaProtegida'
import { Login } from './assets/components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          {/* <Header/> */}
            <main>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path='/' element={<ItemListContainer titulo={"Lista de cosas!"} />}/>
                  <Route path={"/categories/:category"} element={<ItemListContainer titulo={"Lista de cosas!"} />}/>
                  <Route path={"/detail/:id"} element={<ItemDetailContainer/>} />
                  <Route path={"/carrito"} element={<Cart/>} />
                </Route>

                <Route path='/admin' element={<AdminLayout/>}>
                  <Route index element={<Login/>}/>
                  <Route path='alta-productos' element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>}/>
                </Route>
                {/* <Route path={"/admin"} element={<ProductFormContainer/>} /> */}

              </Routes>
            </main>
          <Footer /> 
        </CartProvider>
      </BrowserRouter>

      
    </>
  )
}

export default App
