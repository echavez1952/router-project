import React from 'react'

export const ProductCard = ({src, price, alt}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
        <img src={src} alt={alt} style={{width : '100%'}}/>
        <h3>{alt}</h3>
        <p>${price}</p>
    </div>
  )
}
