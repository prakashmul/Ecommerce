import { useParams } from 'react-router-dom';
import UpdateProductForm from './update-product-form'
import useSWR from 'swr';
import { getProductById } from '../../../../API/productApi';

const UpdateProductPage = () => {
  const {id} = useParams();
  const { data: product } = useSWR(`/getproduct/${id}`, getProductById)

  return (
    <div>
        {
        product &&
        <UpdateProductForm product={product} />
        }
    </div>
  )
}

export default UpdateProductPage