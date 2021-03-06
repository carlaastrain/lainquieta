import React, { useState, useEffect } from 'react'
import './App.css'
import { getProducts } from './ApiService'
import HomePage from './Components/HomePage/HomePage'

export default function App () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(products => setProducts(products))
  }, [])

  return (
  <HomePage/>
  )

  // return (
  //   <div className = 'App'>
  //     <nav>Products</nav>
  //     <main>
  //     {/* {products[0] && products[0].name} */}
  //     {products.map(product =>
  //     <div key = {product.id}>
  //     {product.price}
  //     <img src={product.imageUrl} className="productImage"/>
  //     </div>)

  //     }
  //     </main>
  //   </div>
  // )
}
