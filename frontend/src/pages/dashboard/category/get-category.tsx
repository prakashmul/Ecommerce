
import useSWR from 'swr'
import { getCategory } from '../../../API/categoryApi'


const GetCategory = () => {
  const {data} = useSWR('viewcategory', getCategory)

  console.log(data)

  return (
    <div>GetCategoryPage</div>
  )
}

export default GetCategory