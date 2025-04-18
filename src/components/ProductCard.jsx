import React from 'react'

export const ProductCard = ({img, price, desc}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
        <img src={img} alt={desc} style={{width : '100%'}}/>
        <h3>{desc}</h3>
        <p>${price}</p>
    </div>
  )
}
