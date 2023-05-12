import React from 'react';
import '../index.css';
import { useLoaderData } from "react-router-dom";


export const ProductDetails = () => {
  const product = useLoaderData()
  return (
        <div className='product-details-wrapper'>
          <div className='product-card'>
            <img src={product.image} alt='#'/>
            <div className="product-details">
              <p>Name: {product.title}</p>
              <p>Details: {product.description}</p>
              <p>Price: $ {product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          </div>
        </div>
  );
};

export default ProductDetails;

export const productDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('https://fakestoreapi.com/products/' + id)
     return res.json();
}
