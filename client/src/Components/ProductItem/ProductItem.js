import React from 'react';
import './ProductItem.css';

//A React Component is a function that accepts properties from its parent and render JSX 
//The first argument to a React component is always the props object 
export default function ProductItem (props) {        
  return (
    
    <div key = {props.product.id} className= "productItem">
      <div className="productNameUnits">{props.product.name} </div>
      <div className="productPrice"> $ {props.product.price} {props.product.units} </div>
      <img src={props.product.imageUrl} className="productImage"/>
    </div>
    
  );
}