import React, { useState, useRef } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const nameRef = useRef();
    // const data = document.getElementById('name');
    // console.log(data);
    // this piece of code will thorugh null in console cause in react we dont reccommend using DOM
    // Instead we use useRef and useState hooks to handle forms in react
    // const nameRef = useRef()

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(nameRef);
    //     console.log("Name entered", nameRef.current.value)
    // }
   function handleChange(){
    setName(nameRef.current.value)
   }

   function handleSubmit(e){
    e.preventDefault();
    console.log(`${name} has submitted the form`)
   }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="">Name: 
            <input id='name' type="text" onChange={handleChange} ref={nameRef}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form