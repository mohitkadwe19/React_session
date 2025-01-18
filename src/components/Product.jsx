import React from 'react'
import { useParams } from "react-router";

const Product = () => {
    const params = useParams()
    console.log(params)
    const {id} = params;
  return (
    <div>
        <h1>Product</h1>
        <p>{id}</p>
    </div>
  )
}

export default Product