import React from 'react'
import { getProducts } from '../../../API/productApi'
import useSWR from 'swr'

const GetProduct = () => {
  const {data} = useSWR('viewproduct', getProducts)

  console.log(data)
  
  return (
    <div>
        Product
    </div>
  )
}

export default GetProduct