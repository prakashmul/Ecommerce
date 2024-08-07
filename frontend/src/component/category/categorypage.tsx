import { useCallback } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Button from "../reusable/button/button";
import axios from "axios";

import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { AppConfig } from "../../config/app.config";
import { toast } from "sonner";
import { errorMessage } from "../../utils/helper";


interface ICategoryForm {
  category_name: string
}

const CategoryPage = () => {

  const categoryValidation = yup.object().shape({
    category_name: yup.string().required("Field is required")
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICategoryForm>({
    resolver: yupResolver(categoryValidation),
  });


  const onRegister = useCallback(async (values: ICategoryForm) => {
    try {
      const { data } = await axios.post(`${AppConfig.API_URL}/addcategory`,
        {
            categoryName: values.category_name
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
            <label htmlFor="categoryname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
            <input type="categoryname"
              id="categoryname"
              {...register("category_name")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            {
              errors.category_name &&
              <span className="text-red-600">{errors.category_name.message}</span>
            }
          </div>
       
          
          <Button
            buttonType={'submit'}
            buttonColor={{
              primary: true,
            }}>
            Search
          </Button>

          
        </div>
      </form>

    </div>
  )
}

export default CategoryPage