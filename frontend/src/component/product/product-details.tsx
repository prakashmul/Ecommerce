import { useCallback, useEffect, useState } from 'react'
import { IProduct } from '../../interface/product';
import useSWR from 'swr';
import { getProductById } from '../../API/productApi';
import { displayImage, errorMessage } from '../../utils/helper';
import RelatedProducts from './related-products';
import Button from '../reusable/button/button';
import { toast } from 'sonner';
import { addProductToCart } from '../../redux/slice/order-slice';
import { useAppDispatch } from '../../hooks/redux';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

interface Props {
    id: string
}

const ProductDetail = ({ id }: Props) => {
    const {data: product} = useSWR(`getproduct/${id}`, getProductById)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { accessToken } = useAuth(); 

    const handleAddToCart = useCallback(async () => {
      const product = {
        productId: id,
        totalOrder: 1
      }

      if (accessToken){
        dispatch(addProductToCart(product))
        toast.message("Added to cart")
      } else {
        toast.error('Please login')
        navigate('/signin')
      }
    }, [accessToken, dispatch, id, navigate])

    return (
      <div>
        <div className="border p-5 rounded-xl shadow-xl space-y-5 max-w-screen-sm mx-auto">
            <div className="flex items-center justify-center">
              <img src={displayImage(product?.productImage)} alt={product?.productName} className="h-[410px] w-full object-contain" />
            </div>
            <div className="border-t mt-2">
              <p className="font-bold capitalize">{product?.productCategory.categoryName}</p>
              <p className="line-clamp-1">{product?.productName}</p>
              <div><span className="font-bold">Rating:</span> {product?.productRating}</div>
              <p><span className="font-bold">Price:</span> {product?.productPrice}</p>
              <p className="">{product?.productDescription}</p>
            </div> 
            <Button 
            buttonType='button' 
            buttonColor={{primary: true}}
            onClick={handleAddToCart}
            >
            Add to cart
            </Button>  
          </div>
          <RelatedProducts id = {id} />
      </div>
    )
}

export default ProductDetail