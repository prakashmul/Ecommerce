import { useCallback } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Button from "../reusable/button/button";

import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

interface IRegisterForm {
  first_name: string,
  last_name: string,
  phone_number: number,
  password: string,
  email: string
}

const RegisterPage = () => {

  const registerValidation = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Please enter a valid email address").required("Email address is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&#])[A-Za-z\d@$!%?&#]+$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
      ),
    phone_number: yup.number().required("Phone number is required")
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(registerValidation),
  });

  const onRegister = useCallback((values: IRegisterForm) => {
    console.log(values);
  }, [])

  return (
    <div>
      <form className="max-w-sm mx-auto border rounded-lg" onSubmit={handleSubmit(onRegister)}>
        <div className="m-5">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text"
              id="first_name"
              {...register("first_name")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John" />
            {
              errors.first_name &&
              <span className="text-red-600">{errors.first_name.message}</span>
            }
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text"
              id="last_name"
              {...register("last_name")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Doe" />
            {
              errors.last_name &&
              <span className="text-red-600">{errors.last_name.message}</span>
            }
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="number"
              id="phone_number"
              {...register("phone_number")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+977 1234567890" />
            {
              errors.phone_number &&
              <span className="text-red-600">{errors.phone_number.message}</span>
            }
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email"
              id="email"
              {...register("email")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
            {
              errors.email &&
              <span className="text-red-600">{errors.email.message}</span>
            }
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password"
              id="password"
              {...register("password")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            {
              errors.password &&
              <span className="text-red-600">{errors.password.message}</span>
            }
          </div>
          {/* <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div> */}
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>
          <Button
            buttonType={'submit'}
            buttonColor={{
              primary: true,
            }}>
            Register
          </Button>

          <div className="text-sm font-medium text-gray-900 mt-4">
            Already have an account?
            <Link to="/register">
              <button className="text-blue-600 hover:underline dark:text-blue-500">Sign in</button>
            </Link>
          </div>
        </div>
      </form>

    </div>
  )
}

export default RegisterPage