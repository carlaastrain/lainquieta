import React, {useEffect, useState} from 'react';
import {getProducts} from '../../ApiService';
import './ProductsPage.css';

// Importing the DEFAULT from the file './ProductItem' so I DON't need destructuring
import ProductItem from '../ProductItem/ProductItem'; 

export default function Products () {

  //setProducts set a new value for products and tells react to rerender this component and all its children 
  const [products, setProducts] = useState([]); 

  useEffect(async () => {
    const products = await getProducts();
    setProducts(products);
  }, []);

  return (
    <div >  
      <main className = 'Products'>
        {products.map(product => {  
          //product and key are attributes that I am defining here and I can access from the props in the Child            
          return (<ProductItem product={product} key={product.id} />);
        })}
      </main>
    </div>
  );

}

