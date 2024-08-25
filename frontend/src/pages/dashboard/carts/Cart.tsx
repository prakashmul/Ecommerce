import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../../@/components/ui/table'

const Cart = () => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">S.N</TableHead>
                        <TableHead>Product name</TableHead>
                        <TableHead>Product price</TableHead>
                        <TableHead>Total amount</TableHead>
                        <TableHead>Total order</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
                </TableBody>
            </Table>
        </div>
    )
}

export default Cart