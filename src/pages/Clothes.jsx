import React from 'react'
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../helpers/getProducts';

export const Clothes = () => {

  const productos = getProducts('clothes');

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      {productos.map( (p, i ) => (
        <ProductCard key={i} {...p}/>
      ))}
    </div>
  )
}
