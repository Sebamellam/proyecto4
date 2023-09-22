import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'

export const ProductDetail = () => {
    const { sku } = useParams() 
    const productSelected = data.products.filter(product => product.sku == sku)
  return (
    <>
    <h1>{productSelected[0].name}</h1>
    <h1>{productSelected[0].price}</h1>
    <p>{productSelected[0].description}</p>
    </>
  )
}
