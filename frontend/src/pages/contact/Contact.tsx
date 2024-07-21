import *  as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../../component/reusable/button/button";

interface IContactForm {
  email: string,
  subject: string,
  message: string
}

const Contact = () => {
  const contactValidation = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Email address is required"),
    subject: yup.string().required("subject is required"),
    message: yup.string().required("Message is required"),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactValidation),
  });

  const onRegister = useCallback((values: IContactForm) => {
    console.log(values);
  }, [])

  return (
    <div>
      <form className="max-w-sm mx-auto border rounded-lg" onSubmit={handleSubmit(onRegister)}>
        <div className='m-5'>
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
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input type="text" 
            {...register("subject")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
            {
              errors.subject &&
              <span className="text-red-600">{errors.subject.message}</span>
            }
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-900">Your Message</label>
            <textarea rows={7} 
            {...register("message")}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"/>
            {
              errors.message &&
              <span className="text-red-600">{errors.message.message}</span>
            }
          </div>
          <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
          <input className="block w-full text-sm mb-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" />
        </div>
        <Button
            buttonType={'submit'}
            buttonColor={{
              primary: true,
            }}>
            Send Message
          </Button>

          <div className="text-sm font-medium text-gray-500 mt-4">
            <p>info@company.com</p>
            <p>0-123-456-789</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact