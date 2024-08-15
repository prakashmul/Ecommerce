import { useCallback, useState } from "react";
import { useForm } from "react-hook-form"

import axios from "axios";

import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from "sonner";

import Button from "../../../component/reusable/button/button";
import { AppConfig } from "../../../config/app.config";
import { errorMessage } from "../../../utils/helper";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../@/components/ui/select";
import useSWR from "swr";
import { getCategory } from "../../../API/categoryApi";


interface IProductForm {
  product_name: string,
  product_price: number,
  product_description: string,
  product_rating: number,
  product_category: string,
  total_product: number
}

const AddProductForm = () => {
  const { data: categories } = useSWR("/viewcategory", getCategory)
  const[image, setImage] = useState();
  console.log(image)

  const productValidation = yup.object().shape({
    product_name: yup.string().required("Name is required"),
    product_price: yup.number().required("Price is required"),
    product_description: yup.string().required("Description is required"),
    product_rating: yup.number().required("Rating is required"),
    product_category: yup.string().required("Category is required"),
    total_product: yup.number().required("Product is required")
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(productValidation),
  });


  const onAddProduct = useCallback(async (values: IProductForm) => {
    const productData = new FormData();

    productData.append('productName', values.product_name);
    productData.append('productPrice', String(values.product_price));
    productData.append('productDescription', String(values.product_description));
    productData.append('productRating', String(values.product_rating));
    productData.append('productCategory', String(values.product_category));
    productData.append('totalProduct', String(values.total_product));
    productData.append('productImage', image);
    try {
      const { data } = await axios.post(`${AppConfig.API_URL}/addproduct`,
        productData
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      console.log(data)
      toast.success(data.response?.message || "Added successfully")
    } catch (error: unknown) {
      toast.error(errorMessage(error))
    }
  }, [image])

  return (
    <div>
      <form className="max-w-sm mx-auto border rounded-lg" onSubmit={handleSubmit(onAddProduct)}>
        <div className="m-5">
          <div className="mb-5">
            <label htmlFor="productname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
            <input type="productname"
              id="productname"
              {...register("product_name")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.product_name &&
              <span className="text-red-600">{errors.product_name.message}</span>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="productprice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
            <input type="productprice"
              id="productprice"
              {...register("product_price")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.product_price &&
              <span className="text-red-600">{errors.product_price.message}</span>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="productdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
            <input type="productdescription"
              id="productdescription"
              {...register("product_description")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.product_description &&
              <span className="text-red-600">{errors.product_description.message}</span>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="productrating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Rating</label>
            <input type="productrating"
              id="productrating"
              {...register("product_rating")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.product_rating &&
              <span className="text-red-600">{errors.product_rating.message}</span>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="productcategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category</label>
            <input type="productcategory"
              id="productcategory"
              {...register("product_category")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.product_category &&
              <span className="text-red-600">{errors.product_category.message}</span>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="totalproduct" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Product</label>
            <input type="totalproduct"
              id="totalproduct"
              {...register("total_product")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.total_product &&
              <span className="text-red-600">{errors.total_product.message}</span>
            }
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  {
                    categories?.map((category) => (
                      <SelectItem value={category._id}>{category.categoryName}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-5">
            <input
              type="file"
              accept="image/*"
              onChange={(e:any) => setImage(e)}
            />
          </div>
          <div className="mt-8">
            <Button
              buttonType={'submit'}
              buttonColor={{
                primary: true,
              }}>
              Add Product
            </Button>

          </div>
        </div>
      </form>

    </div>
  )
}

export default AddProductForm