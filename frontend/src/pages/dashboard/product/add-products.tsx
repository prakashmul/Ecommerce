import { useCallback } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import axios from "axios";

import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from "sonner";

import Button from "../../../component/reusable/button/button";
import { AppConfig } from "../../../config/app.config";
import { errorMessage } from "../../../utils/helper";


interface IProductForm {
    product_name : string,
    product_price : number,
    product_description : string,
    product_rating : number,
    product_category : string,
    total_product : number
}

const AddProductForm = () => {

  const productValidation = yup.object().shape({
    product_name: yup.string().required("Name is required"),
    product_price : yup.number().required("Price is required"),
    product_description : yup.string().required("Description is required"),
    product_rating : yup.number().required("Rating is required"),
    product_category : yup.string().required("Category is required"),
    total_product : yup.number().required("Product is required")
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(productValidation),
  });


  const onRegister = useCallback(async (values: IProductForm) => {
    try {
      const { data } = await axios.post(`${AppConfig.API_URL}/addproduct`,
        {
            productName: values.product_name,
            productPrice : values.product_price,
            productDescription : values.product_description,
            productRating : values.product_rating,
            productCategory : values.product_category,
            totalProduct : values.total_product
        })
      console.log(data)
      toast.success(data.response?.message || "Added successfully")
    } catch (error: unknown) {
      toast.error(errorMessage(error))
    }
  }, [])

  return (
    <div>
      <form className="max-w-sm mx-auto border rounded-lg" onSubmit={handleSubmit(onRegister)}>
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
       
          
          <Button
            buttonType={'submit'}
            buttonColor={{
              primary: true,
            }}>
            Add
          </Button>

          
        </div>
      </form>

    </div>
  )
}

export default AddProductForm