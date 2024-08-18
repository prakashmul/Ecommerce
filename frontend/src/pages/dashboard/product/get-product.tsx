import React, { useState } from 'react'
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
} from "../../../../src/@/components/ui/table"
import { displayImage } from '../../../utils/helper'
import Button from '../../../component/reusable/button/button'
import { Link } from 'react-router-dom'
import DeleteModal from './delete-modal'

type IModal = "update" |" delete"

const GetProduct = () => {
  const [modal, setModal] = useState<IModal | null>(null);
  const { data: products } = useSWR('viewproduct', getProducts)

  return (
    <div>
      <div className='my-2 flex justify-end'>
        <Link to={"/dashboard/add-product"}>
          <Button
            buttonType={'button'}
            buttonColor={{
              primary: true,
            }}>
            Add Product
          </Button>
        </Link>
      </div>
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
            <TableHead>Action</TableHead>
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
              <TableCell className=''>
                <div className='flex items-center gap-2'>
                  <Button
                    buttonType={'submit'}
                    buttonColor={{
                      primary: true,
                    }}>
                    Update
                  </Button>
                  <DeleteModal />
                </div>
              </TableCell>
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

      {/* Modal */}
      {/* <DeleteModal /> */}

    </div>
  )
}

export default GetProduct