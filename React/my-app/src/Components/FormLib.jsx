import React from 'react'
import { useForm } from "react-hook-form"

const FormLib = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();


  function onSubmit(){
    // e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
      <h2>Form created suing Library</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name
           <input type="text" name="name"  {...register('name')} />
          </label>
        </div>
          <div>
          <label htmlFor="">Password
        <input type="text" name="password" {...register("password", {required: true, maxLength: 8, minLength: 6})}/>
        {errors.password && <span>this is required</span>}
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>

    </div>
  )
}

export default FormLib