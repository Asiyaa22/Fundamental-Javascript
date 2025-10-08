import React from 'react'
import { useState } from 'react'


const SignupForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        password: "",
        phoneno: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const validateForm = (formData) => {
        let errors = {};
        if (!formData.firstName) {
            errors.firstName = "First Name is required";
        }

        if(!formData.email){
            errors.email = "Email is required";
        }
        else if (!formData.email.includes("@")){
            errors.email = "Email is invalid";
        }

        if(formData.password.length < 6){
            errors.password = "Password must be at least 6 characters long"
        }
        if(!/^\d{10}$/.test(formData.phoneno)){
            errors.phoneno = "Phone number must be 10 digits long"
        }
        return errors;
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted", formData)

        const validateErrors = validateForm(formData);
        console.log("I am error Object",validateErrors);
        setErrors(validateErrors);
       
        if(Object.keys(validateErrors).length === 0){
            console.log("Form is valid & submitted successfully");
        }else{
            console.log("Form has errors. Please correct them before submitting."); 
        }
    }


  return (
    <div>SignupForm
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:
                    <input type="text" name='firstName' onChange={handleChange}/>
                </label>
                {errors.firstName && (<p>{errors.firstName}</p>)}

            </div>
            <div>
                <label htmlFor="">email:
                    <input type="text" name='email' onChange={handleChange}/>
                    {errors.email && (<p>{errors.email}</p>)}
                </label>
            </div>
            <div>
                <label htmlFor="">Password:
                    <input type="text" name='password' onChange={handleChange}/>
                    {errors.password && (<p>{errors.password}</p>)}
                </label>
            </div>
             <div>
                <label htmlFor="">Phone Number:
                    <input type="text" name='phoneno' onChange={handleChange}/>
                    {errors.phoneno && (<p>{errors.phoneno}</p>)}
                </label>
            </div>
            <input type="submit" />
        </form>
    </div>
  )
}

export default SignupForm