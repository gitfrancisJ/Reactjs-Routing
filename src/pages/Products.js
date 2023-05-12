import React from 'react';
import {useLoaderData, Link} from "react-router-dom"
import { Card } from '../components/Card';

export const Products = () => {
  const products = useLoaderData();
  return (
    <div className='container'>
      <div className='products-container'>
        {
          products.map((item) => (
            <Link to={`/products/${item.id}`} className='product-link' key={item.id}>
              <Card key={item.id} product={item}/>
            </Link>

          ))
        }
      </div>
    </div>
  );
};
export default Products;

export const productsLoader = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=14')
     return res.json();
}
