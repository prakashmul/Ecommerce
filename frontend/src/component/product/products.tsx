import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppConfig } from "../../config/app.config"
import useSWR from "swr"
import { getProducts } from "../../API/productApi"
import StarRating from "../ratings/rating"

const Products = () => {
  // const [products, setProducts] = useState<IProduct[]>([])

  // useEffect(() => {

  //   const getProducts = async () => {
  //     try {
  //       const res = await fetch(`${AppConfig.API_URL}/products`);
  //       const products = await res.json();
  //       setProducts(products)
  //     } catch (error: any) {
  //       console.log(error)
  //     }
  //   }

  //   getProducts();

  // }, [])

  // console.log(products)

  const {data: products} = useSWR('viewproduct', getProducts)


  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      {
        products?.map((product) => (
          <div key={product._id} className="border p-5 rounded-lg space-y-5">
            <div className="flex items-center justify-center">
              {/* <img src={`${AppConfig.IMAGE_URL}/${product?.productImage}`}  */}
              <img src={`${product?.productImage}`} 
              alt={product.productName} 
              className="h-32 w-32" />
            </div>
            <div className="border-t mt-2">
              <p className="font-bold capitalize">{product?.productCategory?.categoryName}</p>
              <p className="line-clamp-1">{product.productName}</p>
              <div>
              <span className="font-bold">Rating:</span> {product?.productRating}
              <StarRating
                count={product?.productRating || 0}
                edit
                productId={product._id}
              />
            </div>
              <p><span className="font-bold">Price:</span> {product.productPrice}</p>
              <p className="line-clamp-2">{product.productDescription}</p>
            </div>
            <div>
              <Link className="bg-blue-700 text-white px-4 py-2 rounded-lg " to={`/products/${product._id}`}>
                View Details
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products