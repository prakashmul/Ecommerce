import React from 'react'
import { getProducts } from '../../../API/productApi'
import useSWR from 'swr'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table"
import { displayImage } from '../../../utils/helper'

const GetProduct = () => {
  const {data: products} = useSWR('viewproduct', getProducts)
  
  return (
    <div>
         <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Product Image</TableHead>
          <TableHead>Product Category</TableHead> 
          <TableHead>Product Price</TableHead> 
          <TableHead>Total Products</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product, idx) => (
          <TableRow key={product._id}>
            <TableCell className="font-medium text-center">{idx + 1}</TableCell>
            <TableCell className="font-medium">{product.productName}</TableCell>
            <TableCell className="w-[400px]">
              <img src={displayImage(product.productImage)} 
              alt={product.productName} 
              className="h-32 w-32" />
            </TableCell>
            <TableCell>{product.productCategory.categoryName}</TableCell>
            <TableCell>{product.productPrice}</TableCell>
            <TableCell>{product.totalProduct}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  )
}

export default GetProduct