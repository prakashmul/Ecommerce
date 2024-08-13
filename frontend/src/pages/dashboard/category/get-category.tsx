
import useSWR from 'swr'
import { getCategory } from '../../../API/categoryApi'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../../@/components/ui/table'


const GetCategory = () => {
  const {data: categories} = useSWR('viewcategory', getCategory)

  return (
    <div>
         <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N</TableHead>
          <TableHead>Category Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((category, idx) => (
          <TableRow key={category._id}>
            <TableCell className="font-medium text-center">{idx + 1}</TableCell>
            <TableCell className="font-medium">{category.categoryName}</TableCell>
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

export default GetCategory