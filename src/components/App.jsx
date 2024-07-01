import listOfProducts from '../mocks/products.json'
import { IS_DEVELOPMENT } from '../config.js'
import useFilters from '../hooks/useFilters.js'

import Cart from './Cart.jsx'
import Products from './Products.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import {CartProvider} from './context/CartContext.jsx'

function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(listOfProducts)
  
  return (
    <CartProvider>
      <Header/>
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer/>}
    </CartProvider>
  )
}

export default App


