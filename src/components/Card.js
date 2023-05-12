import React from 'react';
import '../index.css'
export const Card = ({product}) => {

  let productName = product.title;
  let maxLength = 20;

  if (productName.length > maxLength) {
    productName = productName.substring(0, maxLength) + "..."; // Truncate the product name and add an ellipsis
  }
  return (
    <div className='card'>
      <img className='card-image' src={product.image} alt="#"/>
        <p>{productName}</p>
        <p className='product-price'><span>$</span>{product.price}</p>
      </div>
  );
};
