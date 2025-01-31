import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreFront from './pages/StoreFront'
import ProductDetails from './pages/ProductDetails'
import Nav from './pages/Nav'
import About from './pages/About'
import Home from './pages/Home'
import ProductDelivery  from "./pages/ProductDelivery"
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<StoreFront />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/products/:id/delivery' element={<> <ProductDetails/><ProductDelivery/> </>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
