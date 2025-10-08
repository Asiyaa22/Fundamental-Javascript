import React from 'react'
import { useRef } from 'react'

const Forms = () => {
    // const data = document.getElementById('name');
    // console.log(data);
    // this piece of code will thorugh null in console cause in react we dont reccommend using DOM
    // Instead we use useRef and useState hooks to handle forms in react
    // exaple of useRef
    const nameRef = useRef();

   function hanldeSubmit(e){
    e.preventDefault()
    console.log(nameRef);
    console.log("Form submitted", nameRef.current.value)
   }
  return (
    <div>
        <form onSubmit={hanldeSubmit}>
            <label htmlFor="">Name: 
            <input id="name" type="text" ref={nameRef}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms