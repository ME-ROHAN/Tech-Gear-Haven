import React from 'react'
import "./Contact.css"
import { useForm } from "react-hook-form"
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='Contact-form'>
        {/* <div className='form'> */}
      <form  onSubmit={handleSubmit(onSubmit)} action="" >
        <h1>SEND US A MESSAGE</h1>
        <input  {...register("name",{ required: true } )} type="text" placeholder='Name' />
        <input  {...register("Email", { required: true })} type="Email" placeholder='E-mail'/>
        <input  {...register("Number", { required: true, minLength:{value: 10, message : "Please enter Number correctly."}, maxLength:{value: 10, message : "Please enter Number correctly."} })} type="number" placeholder='Phone'/>
        {errors.Number && <span style={{color:"red"}}>{errors.Number.message} </span>}
        <input  {...register("message", { required: true, maxLength:{value:100, message: "Max length reached"  }  })} className='form-message' type="text" placeholder='Your Message' />
        {errors.message && <div style={{color:"red"}}> {errors.message.message}</div>}
        <button disabled={isSubmitting} className='Send-but'> Send <img src="src/assets/send.svg" alt="" /> </button>
      </form>
        {/* </div> */}
    </div>
  )
}

export default Contact
